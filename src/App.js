import React from 'react';
import './App.scss';
import BasicHeader from './components/header'
import Grid from './components/grid'
import Footer from './components/footer'

function App() {
  return (
    <div className="bx--grid bx--grid--custom bx--grid-condensed" data-test="trial" >
      <div className="bx--row" style={{ marginRight: "0px" }}>
        <div className="bx--col-md-4 bx--col-2">
          <BasicHeader data-test="header"/>
        </div>
        <div className="bx--col-md-8 bx--col-10">
          <div style={{ marginTop:"100px", marginLeft:"20px"}}>
            <Grid data-test="grid"/>
          </div>
        </div>
      </div>
      <div className="bx--row footer-style" style={{ width: "100%", marginBottom:"20px"}}>
      <div className="bx--col-md-8">
      <Footer data-test="footer"></Footer>
      </div>
      </div>
    </div>
  );
}

export default App;
