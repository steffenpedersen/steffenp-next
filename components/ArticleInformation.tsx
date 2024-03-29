import styled from "styled-components";
import Date from "../components/Date";
import { DateGradient, CursiveText, Pill } from "../styles/components";

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

const Notes = styled.span`
  ${CursiveText}
`;

interface Props {
  date: any;
  multi_select: any;
  distance: Distance;
  notes?: boolean;
}

function ArticleInformation(props: Props) {
  return (
    <Header distance={props.distance}>
      <DateGradient className="text-sm">
        {props.date ? (
          <Date dateString={props.date} />
        ) : (
          <span>Not Released</span>
        )}
      </DateGradient>

      {props.multi_select.map((tag) => (
        <Pill className="text-xs" key={tag.id}>
          {tag.name}
        </Pill>
      ))}

      {props.notes && <Notes className="text-sm">Notes</Notes>}
    </Header>
  );
}

export default ArticleInformation;
