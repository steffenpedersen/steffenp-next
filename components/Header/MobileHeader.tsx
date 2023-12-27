import { useState } from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";

// * This component is made with inspiration from
// * https://www.draykefriesen.com/blog/animated-hamburger-menu-with-react-spring

const HeaderContainer = styled.div`
  position: relative;
  z-index: 20;
`;

const animationConfig = {
  mass: 1,
  frictionLight: 20,
  frictionHeavy: 30,
  tension: 575,
  delay: 175,
};

const Header = () => {
  const [open, toggle] = useState(false);
  const [styles, api] = useSpring(() => ({
    transformTop: "translate(-6px, 10px) rotate(0deg)",
    transformMiddle: "translate(-6px, 0px) rotate(0deg)",
    transformBottom: "translate(-6px, -10px) rotate(0deg)",
    widthTop: "24px",
    widthBottom: "20px",
    config: {
      mass: animationConfig.mass,
      friction: animationConfig.frictionHeavy,
      tension: animationConfig.tension,
    },
  }));

  return (
    <>
      <HeaderContainer>
        <HamburgerMenu
          open={open}
          toggle={toggle}
          styles={styles}
          api={api}
          animationConfig={animationConfig}
        />
      </HeaderContainer>
      <MobileNav open={open} />
    </>
  );
};

export default Header;
