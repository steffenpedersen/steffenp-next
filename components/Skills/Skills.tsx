import styled from "styled-components";
import { Pill } from "../../styles/components";
import Skill from "./Skill";

const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const Text = styled.span`
  font-size: 12px;
  padding-left: 6px;
  font-weight: 700;
  font-family: 18px;
`;

export type SkillType = {
  text?: string;
  url: string;
}[];

interface Props {
  array: SkillType;
}

function Skills(props: Props) {
  return (
    <span>
      {props.array.map((skill, i) => {
        return (
          <Item key={i}>
            <Pill>
              <Skill url={skill.url} text={skill.text} />
              <Text>{skill.text}</Text>
            </Pill>
          </Item>
        );
      })}
    </span>
  );
}

export default Skills;
