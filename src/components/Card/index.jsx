import { useContext } from "react";
import { Redirect } from "react-router";
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

  function handleMovie() {
    setMovie(props);
    return <Redirect to="/movie" />;
  }
  return (
    <Container className="animeLeft" to="/movie" onClick={handleMovie}>
      <Icon />
      <StylesTitle>{props.title} </StylesTitle>
      <StylesYear>{props.year}</StylesYear>
      <StylesGenres>
        {props.genres.map((genre, index) => (
          <StylesSpan key={index}>{genre}</StylesSpan>
        ))}
      </StylesGenres>
    </Container>
  );
};

export default Card;
