import ErrorMsg from "./ErrorMsg";

describe("ErrorMsg component", () => {
   const msg = 'Waning msg';

    it("should render correctly", () => {
       const component = shallow(<ErrorMsg msg={msg} />);

       expect(component).toMatchSnapshot();
    });

    it("should show particular text from props", () => {
       const component = mount(<ErrorMsg msg={msg}/>);

       const text = component.find('.alert')
           .text();

       expect(text).toEqual(msg);
    });
});