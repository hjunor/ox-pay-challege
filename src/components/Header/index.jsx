import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container, WraperMenu, TextLogo } from "./styles";
import { shade } from "polished";
import { UserContext } from "../../data/userContext";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(UserContext);

  return (
    <Container>
      <WraperMenu>
        <TextLogo>
          <Link to="/">Movies</Link>
        </TextLogo>
        <Tooltip title={title === "dark" ? "Light" : "Dark"}>
          <div>
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={30}
              width={50}
              offHandleColor="#333"
              onHandleColor="#fff"
              handleDiameter={30}
              offColor={shade(0.19, colors.primary)}
              onColor={"#c4c4c4"}
            />
          </div>
        </Tooltip>
      </WraperMenu>
    </Container>
  );
};

export default Header;
