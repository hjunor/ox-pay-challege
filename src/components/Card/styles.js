import { MoviesAndTv } from "@styled-icons/fluentui-system-filled";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Icon = styled(MoviesAndTv)`
  color: ${(props) => props.theme.colors.icon};

  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
  padding: 8px;
  background: transparent;
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

  :hover {
    box-shadow: 0px 0px 0px 1px #c1c9c9 inset;
  }
`;
export const StylesImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
`;
export const StylesSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 10px;

  padding: 17px;
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
`;
export const StylesName = styled.span`
  text-align: left;
  width: 400px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
`;
export const StylesDesc = styled.p`
  color: ${(props) => props.theme.colors.text};

  width: 100px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
`;

export const StylesButton = styled.button`
  color: #e0e0e0;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 8px;
  border: 2px solid #bb86fc;
  background-color: #202020;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
  cursor: pointer;

  :hover {
    background-color: #bb86fc;
    color: #e0e0e0;
  }
`;
