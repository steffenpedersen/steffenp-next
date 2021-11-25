import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { LinkGradient } from "../styles/components";
import ThemeToggle from "./ThemeToggle";

// * This component is made with inspiration from
// * https://www.draykefriesen.com/blog/animated-hamburger-menu-with-react-spring

const MobileNavContainer = styled(animated.nav)`
  position: fixed;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 2rem 2rem 6rem 2rem;
  z-index: 10;

  background: ${({ theme }) => theme.body};
`;

const ContentWrapper = styled.div`
  margin-top: 3rem;
`;

const List = styled(animated.ul)`
  margin-top: 50px;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 2.25rem;
  margin: 2rem 0;
  text-align: center;
  line-height: 1;
`;

const IconWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const MobileNav = ({ open }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [open]);

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)",
    },
    enter: {
      opacity: 1,
      transformMain: "translateY(0px)",
      transformFoot: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)",
    },
  });

  const router = useRouter();

  return transition(({ opacity, transformMain, transformFoot }, visible) => {
    return visible ? (
      <MobileNavContainer style={{ opacity }}>
        <ContentWrapper>
          <List style={{ transform: transformMain }}>
            <ListItem>
              {router.pathname == "/" ? (
                <a href="/">Steffen Pedersen</a>
              ) : (
                <LinkGradient href="/">Steffen Pedersen</LinkGradient>
              )}
            </ListItem>

            <ListItem>
              {router.pathname.startsWith("/posts") ? (
                <a href="/posts">Writing</a>
              ) : (
                <LinkGradient href="/posts">Writing</LinkGradient>
              )}
            </ListItem>

            <ListItem>
              {router.pathname.startsWith("/notes") ? (
                <a href="/notes">Notes</a>
              ) : (
                <LinkGradient href="/notes">Notes</LinkGradient>
              )}
            </ListItem>

            <ListItem>
              {router.pathname.startsWith("/about") ? (
                <a href="/about">About</a>
              ) : (
                <LinkGradient href="/about">About</LinkGradient>
              )}
            </ListItem>
          </List>
          <IconWrapper style={{ transform: transformFoot }}>
            <ThemeToggle />
          </IconWrapper>
        </ContentWrapper>
      </MobileNavContainer>
    ) : null;
  });
};

export default MobileNav;
