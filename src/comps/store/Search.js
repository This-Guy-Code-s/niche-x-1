import React, {useState} from 'react';
import {connect} from 'react-redux'


class Search extends React.Component {
    constructor(props){
      super(props)
        this.state={
        }

    }


    render(){

  return (
<form onsubmit="event.preventDefault();" role="search" className="search-form">
  <label for="search">Search for stuff</label>
  <input id="search" type="search" placeholder="Search..." className={`search-input theme-comp-${this.props.theme}`} autofocus required/>
  <button type="submit">Go</button>    
</form>
  );
    }
}



const mapStateToProps = state =>{
  return {
    theme:state.theme
  }
}


export default connect(
    mapStateToProps,
    {}
  )(Search)