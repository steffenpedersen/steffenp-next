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

  @media print {
    background: transparent;
    -webkit-background-clip: border-box;
    -webkit-text-fill-color: currentcolor;
    color: ${({ theme }) => theme.text};
  }
`

export const FilterBrightness = css`
  filter: ${({ theme }) => theme.brightness};
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

export const Box = styled.div`
  background: ${({ theme }) => theme.opacity.normal};
  padding: 35px;
  border-radius: 10px;
  transition: background 350ms ease 0s;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.opacity.hover};
  }
`;

export const Pill = styled.span`
  background-color: ${({ theme }) => theme.opacity.normal};
  padding: 5px 10px;
  margin: 0 3px;
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  min-height: 24px;
`;
