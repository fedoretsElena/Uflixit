import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Rating, { getBgValue } from "./Rating";

describe("Rating component", () => {
    let component: any;

    beforeEach(() => {
        component = render(<Rating value={7} />);
    });

    afterEach(cleanup);

    it("should render", () => {
        const { asFragment } = component; // as HTML that was rendered

        expect(asFragment()).toMatchSnapshot();
    });

    it("should insert number inside span", () => {
        const { getByTestId } = component; // as HTML that was rendered

        expect(getByTestId("badge-container")).toHaveTextContent("7");
    });

    it("should have warning class name if 6 < value < 8", () => {
        const { getByTestId } = component; // as HTML that was rendered

        expect(getByTestId("badge-container")).toHaveClass("badge-warning");
    });
});

describe("getBgValue function", () => {
    it("should return success class if value > 8", () => {
        expect(getBgValue(9)).toEqual("success");
    });

    it("should return success class if 6 < value < 8", () => {
        expect(getBgValue(7)).toEqual("warning");
    });

    it("should return success class if value < 6", () => {
        expect(getBgValue(3.5)).toEqual("secondary");
    });
});
