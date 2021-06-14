import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../data/userContext";

import {
  Container,
  StylesImg,
  StylesTitle,
  StylesYear,
  StylesDescription,
  StylesText,
  StylesGeners,
} from "./styles";

function Movie() {
  const { movie } = useContext(UserContext);
  const [img, setImg] = useState(
    "https://bootstrap-cheatsheet.themeselection.com/assets/images/bs-images/img-3x4.png"
  );

  useEffect(() => {
    async function pickImage() {
      try {
        const result = await axios.get(movie.posterUrl);
        if (result) {
          setImg(movie.posterUrl);
        }
      } catch (error) {
        setImg(
          "https://bootstrap-cheatsheet.themeselection.com/assets/images/bs-images/img-3x4.png"
        );
      }
    }

    pickImage();
  }, [movie]);

  return (
    <Container>
      {movie ? (
        <>
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
            <h1>
              <StylesText>Diretor:</StylesText>
              {movie.director}
            </h1>
            <h1>
              <StylesText>Atores:</StylesText>
              {movie.actors}
            </h1>
            <span>
              <StylesText>Generos:</StylesText>
              {movie.genres.map((item) => (
                <StylesGeners>{item}</StylesGeners>
              ))}
            </span>
          </div>
        </>
      ) : (
        <br />
      )}
    </Container>
  );
}

export default Movie;
