import React from 'react';
import {connect} from 'react-redux'
import {search_res} from '../../redux/actions'

class Search extends React.Component {
    constructor(props){
      super(props)
        this.state={
        }
        this.look_up=this.look_up.bind(this)

    }

look_up(e){
  e.preventDefault()
    console.log(e.target.value)
    return this.props.search_res(
      this.props.store_merch,
      this.props.store_list,
      this.state.choice,
      "title",
      )

}


    render(){

  return (
<form onSubmit={this.look_up}  className={`search-form theme-comp-${this.props.theme}`}>
  <label htmlFor="search">Search for stuff</label>
  <input id="search" list="merchy" name='search' placeholder="Search..." className={`search-input theme-comp-${this.props.theme}`} onChange={(e)=>{this.setState({choice:e.target.value})}} />
  <button className={`theme-search-btn-${this.props.theme}`} type="submit">Find</button>    
<datalist id="merchy">
{
  this.props.store_merch.map((obj,i)=>{
      return (<option key={i} value={obj.title}/>)
  })
}
</datalist>
</form>
  );
    }
}



const mapStateToProps = state =>{
  return {
    theme:state.theme,
    store_merch:state.store_merch,
    store_list:state.store_list
  } 
}


export default connect(
    mapStateToProps,
    {search_res}
  )(Search)