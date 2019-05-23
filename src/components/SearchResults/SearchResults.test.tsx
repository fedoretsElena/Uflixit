import SearchResults from "./SearchResults";

jest.mock("../../data/services/mediaService");

describe("MediaDetail component", () => {
    let mockProps: { location: any; history: any };
    let component: any;

    beforeEach(() => {
        mockProps = {
            location: {
                search: "Games"
            },
            history: {
                listen: () => "Games"
            }
        };

        component = shallow(
            <SearchResults
                history={mockProps.history}
                location={mockProps.location}
            />
        );
    });

    it("should render correctly and take data", done => {
        setTimeout(() => {
            component.update();

            expect(component.instance().state.media).toHaveLength(1);
            done();
        });
    });

    it("cancelSearchRequest should initialized after calling search func", () => {
        component.instance().search();

        setTimeout(() => {
            expect(component.instance().cancelSearchRequest).toBeDefined();
        });
    });
});
