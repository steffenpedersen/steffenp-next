import React from "react";
import { DateGradient, Pill } from "../styles/components";
import Date from "../components/Date";
import styled from "styled-components";

export enum Distance {
  SMALL,
  LARGE,
}

interface HeaderProps {
  distance: Distance;
}

const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: ${(props) =>
    props.distance == Distance.SMALL ? "5px" : "50px"};
`;

interface Props {
  date: any;
  multi_select: any;
  distance: Distance;
}

function ArticleInformation(props: Props) {
  return (
    <Header distance={props.distance}>
      <DateGradient className="text-sm">
        <Date dateString={props.date} />
      </DateGradient>

      {props.multi_select.map((tag) => (
        <Pill className="text-xs" key={tag.id}>
          {tag.name}
        </Pill>
      ))}
    </Header>
  );
}

export default ArticleInformation;
