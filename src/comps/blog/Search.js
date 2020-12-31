import React from 'react';
import {connect} from 'react-redux'
import {blog_res} from '../../redux/actions'

class Search extends React.Component {
    constructor(props){
      super(props)
        this.state={
          choice:""
        }
        this.look_up=this.look_up.bind(this)

    }

look_up(e){
  e.preventDefault()
    console.log(e.target.value)
    return this.props.blog_res(
      this.props.blog_str8,
      this.props.blog_sissy,
      this.props.blog_lesbian,
      "title",
      this.state.choice,
      this.props.blog_posts,
      this.props.blog_list
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
  this.props.blog_posts.map((obj,i)=>{
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
    blog_str8:state.blog_str8,
    blog_sissy:state.blog_sissy,
    blog_lesbian:state.blog_lesbian,
    blog_posts:state.blog_posts,
    blog_list:state.blog_list
  } 
}


export default connect(
    mapStateToProps,
    {blog_res}
  )(Search)