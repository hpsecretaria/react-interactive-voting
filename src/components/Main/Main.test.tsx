import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../stores";
import Main from "./Main";

afterEach(cleanup);

describe("Category Component", () => {
  it("should render the main category container", async () => {
    await render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(screen.getByTestId("categories-container")).toBeTruthy();
  });
});
