import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';


test('Should correctly render login page', () => {
    const wrapper =  shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();

});

test('should call start Login on button click', () => {
    const startLogin = jest.fn();
    const wrapper =  shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
  });