import { animated } from "react-spring";
import styled from "styled-components";

// * This component is made with inspiration from
// * https://www.draykefriesen.com/blog/animated-hamburger-menu-with-react-spring

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  overflow: hidden;

  cursor: pointer;
`;

const MenuLine = styled(animated.div)`
  height: 3px;
  background-color: ${({ theme }) => theme.text};
  border-radius: 2px;

  &:nth-of-type(2) {
    width: 28px;
  }
`;

const HamburgerMenu = ({ open, toggle, api, styles, animationConfig }) => {
  const handleClick = () => {
    api.start({
      to: open
        ? [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true },
            },
            {
              transformTop: "translate(-6px, 10px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -10px) rotate(0deg)",
              widthTop: "24px",
              widthBottom: "20px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension,
              },
              delay: animationConfig.delay,
            },
          ]
        : [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true },
            },
            {
              transformTop: "translate(-6px, 18.5px) rotate(45deg)",
              transformMiddle: "translate(-6px, 0px) rotate(45deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(-45deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension,
              },
              delay: animationConfig.delay,
            },
          ],
    });
    toggle((prev) => !prev);
  };
  return (
    <Button onClick={() => handleClick()}>
      <MenuLine
        style={{ transform: styles.transformTop, width: styles.widthTop }}
      />
      <MenuLine style={{ transform: styles.transformMiddle }} />
      <MenuLine
        style={{
          transform: styles.transformBottom,
          width: styles.widthBottom,
        }}
      />
    </Button>
  );
};

export default HamburgerMenu;
