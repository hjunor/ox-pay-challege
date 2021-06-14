import { useContext } from "react";
import { UserContext } from "../../data/userContext";
import Card from "../../components/Card";

import { ArrowNext, ArrowBack, Container, ArrowPages } from "./styled";
function Movies() {
  const { movies, setPage, setMaxPage, maxPage, page, total } =
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
          <span for="movies">Quantidade: </span>
          <select
            onChange={handleSelect}
            id="movies"
            name="quantidade"
            value={maxPage}
          >
            <option selected disabled></option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div>
          <span>pagina</span>
          {page === 1 ? (
            <ArrowBack color="#fff" />
          ) : (
            <ArrowBack onClick={handlePreviousPage}></ArrowBack>
          )}
          <span>{page}</span>
          {page === total ? (
            <ArrowNext />
          ) : (
            <ArrowNext onClick={handleNextPage}></ArrowNext>
          )}

          <span>{total}</span>
        </div>
      </ArrowPages>
      {movies.map((film) => (
        <Card {...film} />
      ))}
    </Container>
  );
}

export default Movies;
