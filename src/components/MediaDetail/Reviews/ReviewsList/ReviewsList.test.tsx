import ReviewsList from "./ReviewsList";

describe("ReviewsList component", () => {
    it("should renders correctly", () => {
        const component = shallow(<ReviewsList reviews={[]} />);

        expect(component).toMatchSnapshot();
    });
});
