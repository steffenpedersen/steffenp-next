import styled, { css } from "styled-components";

const size = {
  sm: '320px',
  md: '768px',
  lg: '1200px',
}

export const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`
}

export const GradientBackground = css`
  background: linear-gradient(to right, #f06966, #fad6a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const LinkGradient = styled.a`
    ${GradientBackground}
`
