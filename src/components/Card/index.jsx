import { useContext } from "react";
import { UserContext } from "../../data/userContext";
import {
  Container,
  StylesDesc,
  StylesName,
  Icon,
  StylesGenres,
  StylesSpan,
} from "./styles";

const Card = (props) => {
  const { setMovie } = useContext(UserContext);
  return (
    <Container
      className="animeLeft"
      to="/movie"
      onClick={(e) => {
        setMovie(props);
      }}
    >
      <Icon />
      <StylesName>{props.title} </StylesName>
      <StylesDesc>{props.year}</StylesDesc>
      <StylesGenres>
        {props.genres.map((item) => (
          <StylesSpan>{item}</StylesSpan>
        ))}
      </StylesGenres>
    </Container>
  );
};

export default Card;
