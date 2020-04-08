import React from 'react';
import {shallow, mount} from 'enzyme'
import BasicHeder from './header'

test("Check if menu button exists", ()=>{
    const wrapper=mount(<BasicHeder />)
    expect(wrapper.find('[aria-label="Open menu"]').exists()).toBe(true)
})

test("Check is sideNav exists", ()=>{
    const wrapper=mount(<BasicHeder />)
    expect(wrapper.find('[data-test="sideNav"]').length).toBe(1)
})

// test("open sideNav on click of menu button",()=>{
//     const wrapper = mount(<BasicHeder />)
//     const menuButton= wrapper.find('[data-test="menuButton"]')
//     const sideNav = wrapper.find('[data-test="sideNav"]')
//     expect(sideNav.prop("expanded")).toBe(false)

//     menuButton.at(1).simulate('click')

//     expect(sideNav.prop("expanded")).toBe(true)
// })