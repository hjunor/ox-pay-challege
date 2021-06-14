import styled from "styled-components";
import { ArrowIosBack, ArrowIosForward } from "@styled-icons/evaicons-solid";

export const ArrowNext = styled(ArrowIosForward)`
  color: ${(props) => props.theme.colors.icon};
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
export const ArrowBack = styled(ArrowIosBack)`
  color: ${(props) => props.theme.colors.icon};
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  select {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    width: 90px;
    padding: 4px;
    box-shadow: 0px 0px 0px 1px #c1c9c9 inset;

    font-size: 20px;
    border-radius: 4px;
    outline: none;
  }
`;

export const ArrowPages = styled.div`
  width: 70%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;
