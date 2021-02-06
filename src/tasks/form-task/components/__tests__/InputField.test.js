import React from 'react';
import { shallow } from 'enzyme';

import InputField from '../InputField'

describe('InputField component', () => {
    test('should match to snapshot', () => {
        const component = shallow(<InputField />);
        expect(component.html()).toMatchSnapshot();
    })
    test('should display asterisk when field is required', () => {
        const component = shallow(<InputField required />);
        expect(component.find('.form__asterisk').length).toEqual(1);
    })


})
