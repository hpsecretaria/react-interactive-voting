import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { IPerson } from "../../models/person";
import store from "../../stores";
import Nominee from "./Nominee";

afterEach(cleanup);

describe("Nominee Component", () => {
  it("should render the details of the nominee", () => {
    const nominee: IPerson = {
      name: "Juan",
      img: "",
    };

    render(
      <Provider store={store}>
        <Nominee nominee={nominee} category="Gentlemen" isSelected={false} />
      </Provider>
    );

    expect(screen.getByText("Juan")).toBeTruthy();
    expect(screen.getByAltText("Juan")).toBeTruthy();
  });
});
