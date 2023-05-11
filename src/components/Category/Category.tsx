import React from "react";
import { useAppSelector } from "../../hooks";

import { ICategory } from "../../models/category";
import Nominee from "../Nominee";

import styles from "./Category.module.css";

type IProps = {
  category: ICategory;
};

function Category({ category }: IProps): React.ReactElement {
  const { name, nominees } = category;
  const selectedNominees = useAppSelector(
    (state) => state.votes.selectedNominees
  );

  const selectedNominee =
    selectedNominees.filter((c) => c.category === category.name)[0] || null;

  return (
    <section key={`category-${name}`} className={styles.section}>
      <h2 className={styles.header}>Category: {name}</h2>
      <div className={styles.container}>
        {nominees.map((nominee) => (
          <Nominee
            key={`category-${name}-${nominee.name}`}
            category={name}
            nominee={nominee}
            isSelected={selectedNominee?.nominee.name === nominee.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Category;
