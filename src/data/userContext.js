import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light } from "../styles/theme/light";
import { dark } from "../styles/theme/dark";
import { separete_page } from "../helpers/separete_page";
import { apiGetNoCache } from "../helpers/api";

export const UserContext = createContext();

const { Provider } = UserContext;

export const UserStorage = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);
  const [pageTotal, setPageTotal] = useState(10);

  const [theme, setTheme] = useState(() => {
    const storeTheme = localStorage.getItem("theme");
    if (storeTheme === "dark") {
      return dark;
    } else {
      return light;
    }
  });

  useEffect(() => {
    async function handlerData() {
      const { data } = await apiGetNoCache();

      const { movies } = data;

      const { movieList, pages } = separete_page(movies, maxPage, page);

      setPageTotal(pages);

      setMovies(movieList);
    }

    handlerData();
  }, [page, maxPage]);

  useEffect(() => {
    localStorage.setItem("theme", theme.title);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <Provider
      value={{
        page,
        movies,
        maxPage,
        pageTotal,
        setMaxPage,
        setPage,
        toggleTheme,
        movie,
        setMovie,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
