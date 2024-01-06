import { useRouter } from "next/router";
import styled from "styled-components";
import { Device, LinkGradient } from "../../styles/components";

const MenuList = styled.ul`
  display: flex;
  gap: 1rem;

  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const Item = styled.li`
  flex: 1;

  @media ${Device.md} {
    flex: auto;
  }
`;

const NonActiveLink = styled.a`
  color: ${({ theme }) => theme.menu};
`;

const ActiveLink = styled(LinkGradient)`
  font-weight: 400;
`;

function DesktopNav() {
  const router = useRouter();

  return (
    <nav>
      <MenuList>
        <Item>
          {router.pathname == "/" ? (
            <NonActiveLink href="/">Steffen Pedersen</NonActiveLink>
          ) : (
            <ActiveLink href="/">Steffen Pedersen</ActiveLink>
          )}
        </Item>

        <Item>
          {router.pathname.startsWith("/writings") ? (
            <NonActiveLink href="/writings">Writings</NonActiveLink>
          ) : (
            <ActiveLink href="/writings">Writings</ActiveLink>
          )}
        </Item>

        <Item>
          {router.pathname.startsWith("/posts") ? (
            <NonActiveLink href="/posts">Posts</NonActiveLink>
          ) : (
            <ActiveLink href="/posts">Posts</ActiveLink>
          )}
        </Item>

        <Item>
          {router.pathname.startsWith("/experience") ? (
            <NonActiveLink href="/experience">Experience</NonActiveLink>
          ) : (
            <ActiveLink href="/experience">Experience</ActiveLink>
          )}
        </Item>
      </MenuList>
    </nav>
  );
}

export default DesktopNav;
