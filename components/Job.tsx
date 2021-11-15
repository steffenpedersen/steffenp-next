import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { GradientBackground } from "../styles/components";

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
const Date = styled.h4`
  ${GradientBackground}
  font-size: 0.9rem;
  margin: 0;
`;
const Description = styled.p`
  opacity: 0.6;

  font-size: 0.9rem;
  margin: 10px 0 0;
`;

function Job({ image, title, company, date, description }) {
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
        <Date>{date}</Date>
        <Description>{description}</Description>
      </DescriptionContainer>
    </JobContainer>
  );
}

export default Job;
