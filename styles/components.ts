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
  background: linear-gradient(to right, ${({ theme }) => theme.gradient.one}, ${({ theme }) => theme.gradient.two});
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
      background: none;
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${({ theme }) => theme.text};

      box-shadow: 0px 2px 0px ${({ theme }) => theme.text};
    }
`

export const DateGradient = styled.div`
  ${GradientBackground}
`;

export const Box = styled.div`
  position: relative;
  background: ${({ theme }) => theme.opacity.normal};
  padding: 35px;
  border-radius: 10px;
  transition: background 350ms ease 0s;
  height: 100%;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.opacity.hover};
  }
`;

export const Pill = styled.span`
  background-color: ${({ theme }) => theme.opacity.normal};
  padding: 5px 10px;
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  min-height: 24px;
`;

export const CursiveText = css`
  font-family: "Gloria Hallelujah", cursive, sans-serif;
  color: ${({ theme }) => theme.accent.one};
  opacity: 0.8;
  transform: rotate(-25deg);
  pointer-events: none;
`;
