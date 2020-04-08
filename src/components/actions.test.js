import React from 'react';
import {shallow, mount} from 'enzyme'
import Actions from './actions'

test("To contain a button to select all the rows",()=>{
    const wrapper = mount(<Actions/>)
    expect(wrapper.find("[data-test='selectAll']"))
})

test("To contain a button to deselect all the rows", () => {
    const wrapper = mount(<Actions/>)
    expect(wrapper.find("[data-test='deselectAll']"))
})

// test("selected row count should be accurate",()=>{
//     const wrapper = shallow(<Actions />)
//     wrapper.setState({selectedCount:0})
//     const selectAll = wrapper.find('[data-test="selectAll"]')
//     expect(wrapper.state('selectedCount')).toBe(0)

//     selectAll.simulate('click')

//     expect(wrapper.state('selectedCount')).toBe(77)
// })