import styled from "styled-components";
import { Device, GradientBackground } from "./components";

export const Article = styled.article`
  white-space: pre-wrap;
  font-size: 18px;
  margin-bottom: 2em;

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    color: ${({ theme }) => theme.accent.one};
    margin-top: 2em;
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.3em;
    font-weight: 700;
    color: ${({ theme }) => theme.accent.two};
    margin-top: 2em;
    margin-bottom: 1em;
  }

  a {
    ${GradientBackground}
  }

  img {
    margin: 50px auto;
  }

  p, blockquote {
    font-size: 18px;
    line-height: 29px;
    font-weight: 400;
  }

  blockquote {
    display: block;
    margin-top: 2em;
    margin-bottom: 2em;
    padding-left: 40px;
    margin-right: 40px;

    border-left: 5px solid ${({ theme }) => theme.opacity.normal};
  }

  @media ${Device.md} {
    p, blockquote {
      font-size: 20px;
      line-height: 32px;
    }
  }
`;
export const Headline = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
`;

export const LinkGradientBackground = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;

  ${GradientBackground}
`;

export const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;
