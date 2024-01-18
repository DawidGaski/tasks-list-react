import { Segment, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Segment>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    {body}
  </Segment>
);

export default Section;
