import React, { SyntheticEvent } from "react";

import { useAppDispatch } from "../../hooks";
import { IPerson } from "../../models/person";
import { selectNominee } from "../../stores/vote";

import styles from "./Nominee.module.css";

type IProps = {
  nominee: IPerson;
  category: string;
  isSelected: boolean;
};

function Nominee({
  nominee,
  category,
  isSelected,
}: IProps): React.ReactElement {
  const { name, img } = nominee;

  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <h4 className={styles.header}>{name}</h4>
      <img className={styles.img} src={img} alt={name} />
      <button
        className={`${styles.button} ${isSelected && styles.activeButton}`}
        type="button"
        onClick={() => dispatch(selectNominee({ category, nominee }))}
      >
        Vote
      </button>
    </div>
  );
}

export default Nominee;
