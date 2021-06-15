import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../data/userContext";

import {
  Container,
  StylesImg,
  StylesTitle,
  StylesYear,
  StylesDescription,
  StylesText,
  StylesGeners,
  StylesActors,
  StylesDirector,
} from "./styles";

function Movie() {
  const { movie } = useContext(UserContext);

  const IMG =
    "https://bootstrap-cheatsheet.themeselection.com/assets/images/bs-images/img-3x4.png";
  const [img, setImg] = useState(IMG);

  useEffect(() => {
    async function pickImage() {
      try {
        const result = await axios.get(movie.posterUrl);
        if (result) {
          setImg(movie.posterUrl);
        }
      } catch (error) {
        setImg(IMG);
      }
    }

    pickImage();
  }, [movie]);

  if (!movie) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <StylesImg src={img} alt="poster" />
      <div>
        <StylesTitle>{movie.title}</StylesTitle>
        <StylesYear>
          <StylesText>Ano:</StylesText>
          {movie.year}
        </StylesYear>
        <StylesDescription>
          <StylesText>Trama:</StylesText>
          {movie.plot}
        </StylesDescription>
        <StylesDirector>
          <StylesText>Diretor:</StylesText>
          {movie.director}
        </StylesDirector>
        <StylesActors>
          <StylesText>Atores:</StylesText>
          {movie.actors}
        </StylesActors>
        <span>
          <StylesText>Gêneros:</StylesText>
          {movie.genres.map((item) => (
            <StylesGeners key={item}>{item}</StylesGeners>
          ))}
        </span>
      </div>
    </Container>
  );
}

export default Movie;
