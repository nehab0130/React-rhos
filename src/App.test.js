import React from 'react';
import {shallow} from 'enzyme'
import App from './App';

const setUp = () => {
  const wrapper =shallow (<App/>)
  return wrapper
}

const findByAttr = (wrapper,val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('Check if footer is present',()=>{
  const wrapper = setUp()
  // const appComponent = wrapper.find("[data-test='footer']")
  const appComponent = findByAttr(wrapper,'footer')
  expect(appComponent.length).toBe(1)
})

test('Check if header is present',()=>{
  const wrapper = setUp()
  const appComponent = findByAttr(wrapper,'header')
  expect(appComponent.length).toBe(1)
})

test('Check if grid is present',()=>{
  const wrapper = setUp()
  const appComponent = findByAttr(wrapper,'grid')
  expect(appComponent.length).toBe(1)
})