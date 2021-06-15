import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: 2rem auto;
  border-radius: 8px;

  background: ${(props) => props.theme.colors.secundary};

  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
    width: 80%;
  }

  @media screen and (max-width: 980px) {
    width: 90%;
  }
  @media screen and (max-width: 1380px) {
    width: 80%;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2rem;
  }
`;

export const StylesImg = styled.img`
  width: 300px;
  height: 420px;
  border-radius: 8px 0 0 8px;
  @media screen and (max-width: 600px) {
    border-radius: 8px;

    width: 100%;
    height: 420px;
  }
`;

export const StylesTitle = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
  @media screen and (max-width: 600px) {
    margin-bottom: 9px;
  }
`;
export const StylesYear = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secundary_text};
  @media screen and (max-width: 600px) {
    margin-bottom: 9px;
  }
`;
export const StylesGeners = styled.span`
  font-size: 1rem;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors.secundary_text};
  @media screen and (max-width: 600px) {
    margin-bottom: 9px;
  }
`;
export const StylesDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  @media screen and (max-width: 600px) {
    margin-bottom: 9px;
  }
`;
export const StylesActors = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  @media screen and (max-width: 600px) {
    margin-bottom: 9px;
  }
`;
export const StylesDirector = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  @media screen and (max-width: 600px) {
    margin-bottom: 9px;
  }
`;
export const StylesText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;
