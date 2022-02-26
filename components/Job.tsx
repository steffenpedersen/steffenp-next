import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Frontend } from "../app/json/skills";
import { GradientBackground } from "../styles/components";
import Skills, { SkillType } from "./Skills";

const JobContainer = styled.div`
  display: flex;
  gap: 20px;

  background-color: ${({ theme }) => theme.opacity.normal};
  padding: 35px;
  border-radius: 10px;
  transition: background 350ms ease 0s;

  @media print {
    break-inside: avoid;

    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const DescriptionContainer = styled.div`
  flex: 4;
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
  margin: 10px 0;
`;

const getYears = (years: number) => (years > 1 ? "yrs" : "yr");
const getMonths = (months: number) => (months > 1 ? "mos" : "mo");

function Job({
  image,
  title,
  company,
  description,
  firstDate,
  secondDate,
  durationYears,
  durationMonths,
  skills,
}: {
  image: string;
  title: string;
  company: string;
  description?: string;
  firstDate: string;
  secondDate?: string;
  durationYears?: number;
  durationMonths?: number;
  skills?: SkillType;
}) {
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
          {firstDate} - {secondDate ? secondDate : "Present"}
          {secondDate && " ‧ "}
          {durationYears && `${durationYears} ${getYears(durationYears)}`}{" "}
          {durationMonths && `${durationMonths} ${getMonths(durationMonths)}`}
        </Duration>
        {description && <Description>{description}</Description>}
        {skills && <Skills array={skills} />}
      </DescriptionContainer>
    </JobContainer>
  );
}

export default Job;
