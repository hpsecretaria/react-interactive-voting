import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { ICategory } from "../../models/category";
import store from "../../stores";
import Category from "./Category";

afterEach(cleanup);

describe("Category Component", () => {
  it("should render the details of the category", () => {
    const category: ICategory = {
      name: "Gentlemen",
      nominees: [],
    };

    render(
      <Provider store={store}>
        <Category category={category} />
      </Provider>
    );

    expect(screen.getByText("Category: Gentlemen")).toBeTruthy();
  });
});
