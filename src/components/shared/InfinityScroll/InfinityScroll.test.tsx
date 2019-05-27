import InfinityScroll from "./InfinityScroll";

describe("InfinityScroll component", () => {
    it("should renders correctly", () => {
        const component = shallow(
            <InfinityScroll
                listenUntil={false}
                endPageHappend={() => jest.fn()}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
