import React from "react";
import { render } from "react-testing-library";

import App from "./App";

it("App snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
});
