import { useContext } from "react";
import { UserContext } from "../../data/userContext";
import Card from "../../components/Card";

import {
  ArrowNext,
  ArrowBack,
  Container,
  ArrowPages,
  StylesText,
} from "./styled";
function Movies() {
  const { movies, setPage, setMaxPage, maxPage, page, pageTotal } =
    useContext(UserContext);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    setPage(page - 1);
  }

  function handleSelect({ target }) {
    setMaxPage(target.value);
    setPage(1);
  }

  return (
    <Container>
      <ArrowPages>
        <div>
          <StylesText htmlFor="amount">Quantidade: </StylesText>
          <select
            onChange={handleSelect}
            id="amount"
            name="amount"
            value={maxPage}
          >
            <option selected disabled></option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div>
          <StylesText>Pagina</StylesText>
          {page === 1 ? (
            <ArrowBack color="#fff" />
          ) : (
            <ArrowBack onClick={handlePreviousPage}></ArrowBack>
          )}
          <span>{page}</span>
          {page === pageTotal ? (
            <ArrowNext />
          ) : (
            <ArrowNext onClick={handleNextPage}></ArrowNext>
          )}

          <span>{pageTotal}</span>
        </div>
      </ArrowPages>
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </Container>
  );
}

export default Movies;
