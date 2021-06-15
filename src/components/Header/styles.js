import { MoviesAndTv } from "@styled-icons/fluentui-system-filled";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
`;
export const WraperMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1230px;
  height: 60px;
`;
export const StyelsLogo = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: -5px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0px;
  }
`;

export const Icon = styled(MoviesAndTv)`
  color: ${(props) => props.theme.colors.icon};
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 4px;
  padding: 8px;
  background: transparent;
`;
