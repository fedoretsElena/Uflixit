import MediaDetail from "./MediaDetail";

jest.mock("../../data/services/mediaService");

describe("MediaDetail component", () => {
    let mockProps: { match: any, location: any };

    beforeEach(() => {
        mockProps = {
            match: {
                params: {
                    id: "1"
                }
            },
            location: {
                pathname: "https://uflixit/tv-shows/"
            }
        };
    });

    it("should render correctly and take data", (done) => {
        const component = shallow(<MediaDetail match={mockProps.match}
                                               location={mockProps.location}
        />);

        expect(component).toMatchSnapshot();

        setTimeout(()=> {
            component.update();

            expect(component.instance().state.media).toBeDefined();
            done();
        });
    });
});