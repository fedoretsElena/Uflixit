import MediaNav, { checkCurrPage, generateArr } from "./MediaNav";

describe("MediaNax component", () => {

    it("should render correctly", () => {
        const component = shallow(
            <MediaNav curr={1} length={2} uploadPage={(arg) => arg}/>
        );

        expect(component).toMatchSnapshot();
    });

    it("should format template correctly", () => {
        const component = mount(
            <MediaNav curr={1} length={2} uploadPage={(arg) => arg}/>
        );

        const prevBtn = component.find("button").first().text();

        expect(prevBtn).toEqual("1");
    });

    describe("clicks on nav btns", () => {
        let component;
        let spy;

        beforeEach(() => {
            spy = sinon.spy();
            component = mount(
                <MediaNav curr={2} length={4} uploadPage={spy} />
            );
        });

        it("uploadPage should be called after click on next button", () => {
            // const spy = jest.spyOn(args, "uploadPage"); <= it's working too

            component
                .find("button")
                .last()
                .simulate("click");

            expect(spy.calledWith(3)).toBe(true);
        });

        it("uploadPage should be called after click on prev button", () => {

            component
                .find("button")
                .first()
                .simulate("click");

            expect(spy.calledWith(1)).toBe(true);
        });

        it("should call checkCurrPage after click on navigation items", () => {

            component
                .find("button")
                .at(1)
                .simulate("click");

            expect(spy.calledOnce).toBe(true);
        });
    });
});

describe("generateArr function", () => {

    it("should return navigation arr", () => {
        expect(generateArr(5, 3))
            .toEqual(expect.arrayContaining([2, 3, 4]));
    });

    it("should return length = 3", () => {
        expect(generateArr(5, 3)).toHaveLength(3);
    });
});

describe("checkCurrPage function", () => {
    let mockArg: { curr: number, next: number, callback: () => void };
    let spyOnCallback: any;

    beforeEach(() => {
        mockArg = {
            curr: 1,
            next: 2,
            callback: () => {
            }
        };

        spyOnCallback = jest.spyOn(mockArg, "callback");
    });

    afterEach(() => {
        spyOnCallback = null;
    });

    it("should run callback if current page isn't equal next", () => {
        checkCurrPage(mockArg.curr, mockArg.next, () => mockArg.callback());
        expect(spyOnCallback).toHaveBeenCalled();
    });

    it("shouldn't run callback if current page equal next", () => {
        mockArg.curr = 2;

        checkCurrPage(mockArg.curr, mockArg.next, () => mockArg.callback());

        expect(spyOnCallback).not.toHaveBeenCalled();
    });
});