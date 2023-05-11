import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { submitVotes } from "../../stores/vote";
import Category from "../Category";

import styles from "./Main.module.css";

function Main(): React.ReactElement {
  const categories = useAppSelector((state) => state.votes.categories);
  const dispatch = useAppDispatch();

  return (
    <main data-testid="categories-container" className={styles.main}>
      {categories.map((category) => (
        <Category key={`category-${category.name}`} category={category} />
      ))}
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(submitVotes())}
      >
        Submit Your Votes
      </button>
    </main>
  );
}

export default Main;
