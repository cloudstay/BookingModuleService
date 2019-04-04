import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../components/App.jsx';



describe('Renders', function() {

    test('Renders', function() {

        const wrapper = shallow(<App />);
        
        expect(wrapper.exists()).toBe(true);
    })
})