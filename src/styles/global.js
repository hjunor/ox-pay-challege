import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-size: 16px;
}
  a{
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }
  body{
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text}; 
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    height: 100vh;
  }

  .animeLeft {
    opacity: 0;
    transform: translatex(-50px);
    animation: animeLeft 0.9s forwards;
}


@keyframes animeLeft {
    to {
        opacity: 1;
        transform: initial;
    }
}


  .br{
    border: 1px solid red;
  }
`;
