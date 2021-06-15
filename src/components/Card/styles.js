import { MoviesAndTv } from "@styled-icons/fluentui-system-filled";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Icon = styled(MoviesAndTv)`
  color: ${(props) => props.theme.colors.icon};
  size: 180;
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
  padding: 8px;
  background: transparent;
  @media screen and (max-width: 600px) {
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }
`;

export const Container = styled(Link)`
  width: 70%;
  height: 90px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding-top: 0;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 8rem;
    flex-direction: column;
    padding: 30px;
  }
  /* @media screen and (max-width: 980px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1380px) {
    width: 50px;
    height: 50px;
  } */
  :hover {
    box-shadow: 0px 0px 0px 1px #c1c9c9 inset;
  }
`;

export const StylesSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 15px;
  color: ${(props) => props.theme.colors.secundary_text};
`;

export const StylesGenres = styled.div`
  display: flex;
  margin-right: 40px;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  height: 80%;
  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;

    span {
      width: auto;
      padding: 5px;
    }
  }
`;
export const StylesTitle = styled.span`
  text-align: left;
  width: 400px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1rem;
    text-align: center;
  }
`;
export const StylesYear = styled.p`
  color: ${(props) => props.theme.colors.text};

  width: 100px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
  @media screen and (max-width: 600px) {
    text-align: center;
    padding-bottom: 10px;
  }
`;
