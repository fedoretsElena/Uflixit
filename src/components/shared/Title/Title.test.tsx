import renderer from "react-test-renderer";

import Title from "./Title";

describe('Title component', () => {

    it('successful render component', () => {

       const component = renderer.create(<Title title={''} length={0} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('check is correct title in props', () => {
        const defaultTitle = 'There is will be new title';

        const component = mount(<Title title={defaultTitle} length={0} />);

        expect((component).prop('title')).toEqual(defaultTitle);
    });

    it('render title correctly', () => {
        const defaultTitle = 'There is will be new title';

        const component = mount(<Title title={defaultTitle} length={0} />);
        expect(component.find('h4')).toHaveLength(1);
    });
});