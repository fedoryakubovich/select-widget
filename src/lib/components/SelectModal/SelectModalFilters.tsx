import { ChangeEvent, useCallback } from "react";

import { FILTERS } from "../../constants";
import { ActionTypes } from "../../contexts/actions";
import { useAppContext } from "../../contexts/useAppContext";
import { Select } from "../Select/Select";
import { Typography } from "../Typography/Typography";

import classes from "./SelectModal.module.css";

export const SelectModalFilters = () => {
  const { dispatch, searchValue, filter } = useAppContext();

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dispatch({ type: ActionTypes.SET_SEARCH_VALUE, payload: value });
    },
    [dispatch],
  );

  const handleFilterChange = useCallback(
    (value: ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = value.target.value;
      dispatch({ type: ActionTypes.SET_FILTER, payload: selectedValue });
    },
    [dispatch],
  );

  return (
    <section className={classes.filtersWrapper}>
      <section className={classes.searchWrapper}>
        <Typography>Search</Typography>
        <input
          type="text"
          className={classes.searchInput}
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </section>

      <section className={classes.searchWrapper}>
        <Typography>Filter</Typography>
        <Select
          options={FILTERS}
          onChange={handleFilterChange}
          value={filter}
          className={classes.searchInput}
        />
      </section>
    </section>
  );
};
