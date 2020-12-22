import React, {useState} from 'react';
import {connect} from 'react-redux'

class Radios extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363)
        }

    }


    render(){

  return (
    <div className="pr">
<h4>Price Range</h4>

<form  className="radio-form">
  <input id="one" type="radio" name="radios" value="one"  className="radio-input"/>
  <input id="two" type="radio" name="radios" value="two"  className="radio-input"/>
  <input id="three" type="radio" name="radios" value="three"  className="radio-input"/>
  <input id="four" type="radio" name="radios" value="four"  className="radio-input"/>
  <span></span>
  <label htmlFor="one"  className="radio-label">$200 and Up</label>
  <label htmlFor="two"  className="radio-label">$100 - $200</label>
  <label htmlFor="three"  className="radio-label">$50-$100</label>
  <label htmlFor="four"  className="radio-label">$50 and Under</label>
</form>
</div>
  );
    }
}



const mapStateToProps = state =>{
  return {
    ...state,
  }
}


export default connect(
    mapStateToProps,
    {}
  )(Radios)