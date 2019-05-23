import WantedMovies from "./WantedMovies";

jest.mock("../../data/services/mediaService");
jest.mock("../shared/MediaList");

describe("WantedMovies component", () => {
    it("render correctly WantedMovies component", () => {
        const TextInputComponent = shallow(<WantedMovies />);

        expect(TextInputComponent).toMatchSnapshot();
    });

    it("check is preloader working", () => {
        const component = mount(<WantedMovies />);
        const loader = component.find(".whirlpool");

        expect(loader).toHaveLength(1);
    });

    it("should fetch data from mock service and mount them", done => {
        const component = shallow(<WantedMovies />);

        setTimeout(() => {
            component.update();

            expect(component.instance().state.movies.length).toEqual(2);
            expect(component.instance().state.movies[1].title).toEqual(
                "The walking Dead"
            );
            done();
        });
    });
});
