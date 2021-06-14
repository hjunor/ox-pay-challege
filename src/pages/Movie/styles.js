import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: 2rem auto;
  border-radius: 8px;

  background: ${(props) => props.theme.colors.secundary};

  display: flex;

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
  border-radius: 8px;
`;

export const StylesTitle = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
`;
export const StylesYear = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secundary_text};
`;
export const StylesGeners = styled.span`
  font-size: 1rem;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors.secundary_text};
`;
export const StylesDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`;
export const StylesText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;
