import { RootState } from "./index";
import { IPerson } from "./../models/person";
import { categoriesData } from "./../data/categoriesData";
import { ICategory } from "./../models/category";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ISelectedNominee = {
  category: string;
  nominee: IPerson;
};

type IState = {
  categories: ICategory[];
  selectedNominees: ISelectedNominee[];
  votes: ISelectedNominee[];
};

const usersInitialState: IState = {
  categories: categoriesData,
  selectedNominees: [],
  votes: JSON.parse(localStorage.getItem("votes") || "[]"),
};

const voteSlice = createSlice({
  name: "votes",
  initialState: usersInitialState,
  reducers: {
    selectNominee: (state, action: PayloadAction<ISelectedNominee>) => {
      const selectedNominee = action.payload;
      state.selectedNominees = [
        selectedNominee,
        ...state.selectedNominees.filter(
          (c) => c.category !== selectedNominee.category
        ),
      ];
    },
    submitVotes: (state) => {
      if (state.votes.length) {
        alert(
          `You have already voted for: ${state.categories
            .map(
              (c) =>
                state.votes.filter((d) => d.category === c.name)[0].nominee.name
            )
            .flat()
            .join(", ")}`
        );
        return;
      }

      if (state.selectedNominees.length !== state.categories.length) {
        alert("You have to pick one nominee for each category");
        return;
      }

      localStorage.setItem("votes", JSON.stringify(state.selectedNominees));
      state.votes = [...state.selectedNominees];
      alert("Thank you for your votes!");
    },
  },
});

export default voteSlice.reducer;

export const { selectNominee, submitVotes } = voteSlice.actions;

export const selectedNominees = (state: RootState) =>
  state.votes.selectedNominees;
export const categories = (state: RootState) => state.votes.categories;
