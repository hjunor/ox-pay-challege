import { useContext } from "react";
import { UserContext } from "../../data/userContext";
import {
  Container,
  StylesYear,
  StylesTitle,
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
      <StylesTitle>{props.title} </StylesTitle>
      <StylesYear>{props.year}</StylesYear>
      <StylesGenres>
        {props.genres.map((item) => (
          <StylesSpan>{item}</StylesSpan>
        ))}
      </StylesGenres>
    </Container>
  );
};

export default Card;
