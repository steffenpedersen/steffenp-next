import styled, { css } from "styled-components";

export const Size = {
  sm: '320px',
  md: '768px',
  lg: '1200px',
}

export const MaxSize = {
  md: '769px',
}

export const Device = {
  sm: `(min-width: ${Size.sm})`,
  md: `(min-width: ${Size.md})`,
  lg: `(min-width: ${Size.lg})`
}

export const Wrapper = styled.section`
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

export const GradientBackground = css`
  background: linear-gradient(to right, ${({ theme }) => theme.gradient.red}, ${({ theme }) => theme.gradient.yellow});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const LinkGradient = styled.a`
    ${GradientBackground}
    
    &:hover {
      background: ${({ theme }) => theme.text};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      box-shadow: 0px 2px 0px ${({ theme }) => theme.text};
    }
`

export const DateGradient = styled.div`
  ${GradientBackground}
`;
