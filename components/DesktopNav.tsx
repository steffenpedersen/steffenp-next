import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Device, LinkGradient } from "../styles/components";

const MenuList = styled.ul`
  display: flex;
  gap: 1rem;

  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const Item = styled.li`
  flex: 1;

  @media ${Device.md} {
    flex: content;
  }
`;

function DesktopNav() {
  const router = useRouter();

  return (
    <nav>
      <MenuList>
        <Item>
          {router.pathname == "/" ? (
            <a href="/">Steffen Pedersen</a>
          ) : (
            <LinkGradient href="/">Steffen Pedersen</LinkGradient>
          )}
        </Item>

        <Item>
          {router.pathname.startsWith("/posts") ? (
            <a href="/posts">Writing</a>
          ) : (
            <LinkGradient href="/posts">Writing</LinkGradient>
          )}
        </Item>

        <Item>
          {router.pathname.startsWith("/notes") ? (
            <a href="/notes">Notes</a>
          ) : (
            <LinkGradient href="/notes">Notes</LinkGradient>
          )}
        </Item>

        <Item>
          {router.pathname.startsWith("/about") ? (
            <a href="/about">About</a>
          ) : (
            <LinkGradient href="/about">About</LinkGradient>
          )}
        </Item>
      </MenuList>
    </nav>
  );
}

export default DesktopNav;
