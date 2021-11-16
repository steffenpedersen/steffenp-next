import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { GradientBackground } from "../styles/components";
import moment from "moment";

const JobContainer = styled.div`
  display: inline-flex;
  gap: 20px;

  background-color: ${({ theme }) => theme.opacity.normal};
  padding: 35px;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const DescriptionContainer = styled.div`
  flex: 3;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  line-height: 1;
`;

const Company = styled.p`
  font-size: 0.9rem;

  margin: 0;
`;
const Duration = styled.h4`
  ${GradientBackground}
  font-size: 0.9rem;
  margin: 0;
`;
const Description = styled.p`
  opacity: 0.6;

  font-size: 0.9rem;
  margin: 10px 0 0;
`;

const now: Date = new Date();
const locale: string = "da-DK";
const options: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
};

function Job({
  image,
  title,
  company,
  description,
  firstDate,
  secondDate,
}: {
  image: string;
  title: string;
  company: string;
  description: string;
  firstDate: string;
  secondDate?: string;
}) {
  // * Get dates
  const fromDate: Date = new Date(firstDate);
  const toDate: Date = secondDate ? new Date(secondDate) : now;

  // * Moment.js
  const fromMoment = moment(fromDate);
  const toMoment = moment(toDate);
  const diff = moment.duration(toMoment.diff(fromMoment, "milliseconds", true));

  return (
    <JobContainer>
      <ImageContainer>
        <Image
          priority
          src={`/images/companies/${image}`}
          height={50}
          width={50}
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Company>{company}</Company>
        <Duration>
          {fromDate.toLocaleDateString(locale, options)} -{" "}
          {secondDate ? toDate.toLocaleDateString(locale, options) : "Present"}{" "}
          <br />
          {`${diff.years() > 0 ? diff.years() : ""} yr ${
            diff.months() > 0 ? diff.months() : ""
          } mos`}
        </Duration>
        <Description>{description}</Description>
      </DescriptionContainer>
    </JobContainer>
  );
}

export default Job;
