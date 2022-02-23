import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { GradientBackground } from "../styles/components";

const Click = styled.div`
  color: ${({ theme }) => theme.text};
  transition: color 350ms ease 0s;
  display: flex;
  justify-content: center;
`;

const JobContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 20px;

  background-color: ${({ theme }) => theme.opacity.normal};
  padding: 35px;
  border-radius: 10px;
  transition: background 350ms ease 0s;

  &:hover {
    background: ${({ theme }) => theme.opacity.hover};

    ${Click} {
      color: ${({ theme }) => theme.gradient.red};
    }
  }

  @media print {
    page-break-inside: avoid;
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
  margin: 10px 0 0;
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
}: {
  image: string;
  title: string;
  company: string;
  description: string;
  firstDate: string;
  secondDate?: string;
  durationYears?: number;
  durationMonths?: number;
}) {
  const [opened, setOpened] = useState(false);
  const myRef = useRef(null);
  const height = myRef?.current?.clientHeight;

  const wrapper = useSpring({
    position: "relative",
    overflow: "hidden",
    height: opened ? `${height}px` : `40px`,
    config: { tension: 100, friction: 15 },
  }) as any;

  const chevron = useSpring({
    margin: "20px",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
    config: { tension: 300, friction: 10 },
  }) as any;

  return (
    <JobContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Company>{company}</Company>
        <Duration>
          {firstDate} - {secondDate ? secondDate : "Present"}
          {" ‧ "}
          {durationYears && `${durationYears} ${getYears(durationYears)}`}{" "}
          {durationMonths && `${durationMonths} ${getMonths(durationMonths)}`}
        </Duration>
        <Description>
            {description}
        </Description>
      </DescriptionContainer>
    </JobContainer>
  );
}

export default Job;
