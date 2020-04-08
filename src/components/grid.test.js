import React from 'react';
import {shallow, mount} from 'enzyme'
import Grid from './grid'

const setUp = (state=null) => {
    const wrapper = shallow(<Grid/>)
    if(state){
        wrapper.setState(state)
    }
    return wrapper;
}

test("Contains ag grid",()=>{
    const wrapper = setUp({})
    expect(wrapper.find("[data-test='agGrid']").length).toBe(1)
})

test("data is displayed on grid", ()=>{
    const wrapper = setUp({ columnDefs: [
        { headerName: "Inflation Id ", field: "INFLATION_ID" , width : 225},
        { headerName: "Inflation rate", field: "INF_RT" ,width : 225},
        { headerName: "Country ISO code", field: "CTRY_ISO_CD",width : 225,filter: 'agTextColumnFilter', editable: true, cellEditor :"agLargeTextCellEditor" },
        { headerName: "Rate year", field: "RT_YEAR_NUM" ,width :225},
        { headerName: "Inflation Index ID", field: "INF_IDX_ID" ,width : 250},
       
    ],            data : [
        {"_id":{"$oid":"5e54c6187653d16228d50e74"},"INFLATION_ID":"537408","INF_RT":"0.07","CTRY_ISO_CD":"UY","RT_YEAR_NUM":"2024","LOB_ID":"CPT","INF_IDX_ID":"11190","CREATE_TS":"2019-02-01 05:34:14.254688","CREATE_ID":"Y9A651826","UPDATE_TS":"2019-02-01 05:34:14.254688","UPDATE_ID":"Y9A651826","ROW_STATUS_CD":"I","CONFIG_STATUS_CD":"ACTIVE","CONFIG_STATUS_TS":"2019-02-19 07:18:34.138","LOCKED_BY_USER_ID":"ayebegum@in.ibm.com"},
{"_id":{"$oid":"5e54c6187653d16228d50e99"},"INFLATION_ID":"537400","INF_RT":"0.0","CTRY_ISO_CD":"LU","RT_YEAR_NUM":"2013","LOB_ID":"CPT","INF_IDX_ID":"11190","CREATE_TS":"2019-02-01 05:34:14.254688","CREATE_ID":"Y9A651826","UPDATE_TS":"2019-02-01 05:34:14.254688","UPDATE_ID":"Y9A651826","ROW_STATUS_CD":"I","CONFIG_STATUS_CD":"ACTIVE","CONFIG_STATUS_TS":"2019-02-19 07:18:34.138","LOCKED_BY_USER_ID":"NULL"},]
})
expect(wrapper.find("[data-test='agGrid']").prop("rowData").length).toBe(2)
})

