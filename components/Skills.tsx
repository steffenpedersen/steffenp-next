import React from "react";
import styled from "styled-components";

const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin: 5px;
`;

const SkillContainer = styled.span`
  background-color: ${({ theme }) => theme.opacity.normal};
  padding: 5px 10px;
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  min-height: 24px;

  img {
    height: 24px;
  }
`;

const Text = styled.span`
  font-size: 12px;
  padding-left: 6px;
  font-weight: 700;
  font-family: 18px;
`;

interface Props {
  array: {
    url?: string;
    text: string;
  }[];
}

function Skill(props: Props) {
  return (
    <span>
      {props.array.map((skill, i) => {
        return (
          <Item key={i}>
            <SkillContainer>
              {skill.url ? (
                <img
                  src={`https://cdn.svgporn.com/logos/${skill.url}.svg`}
                  height="24"
                  alt={skill.text}
                />
              ) : (
                <span style={{ height: 24 }}></span>
              )}
              <Text>{skill.text}</Text>
            </SkillContainer>
          </Item>
        );
      })}
    </span>
  );
}

export default Skill;
