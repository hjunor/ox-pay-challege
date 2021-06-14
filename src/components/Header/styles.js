import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const WraperMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1230px;
  height: 60px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 980px) {
    width: 80%;
  }
  @media screen and (max-width: 1380px) {
    width: 80%;
  }
`;
export const TextLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
  }
  a {
    margin-left: -5px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.text};
    font-size: 3vh;
    font-weight: bold;
    margin-bottom: 0px;
  }
`;
