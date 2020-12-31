import React from 'react';
import {connect} from 'react-redux'
import {blog_res} from '../../redux/actions'



class Radios extends React.Component {
    constructor(props){
      super(props)
        this.state={
          reset:false
        }
        this.change_filter=this.change_filter.bind(this)
    }

change_filter(e){
    console.log(e.target.value)

    if(!this.props.title.toLowerCase().includes("catagory")){
      document.querySelector('.all-merch-cat').checked = true
    }


    return this.props.blog_res(
      this.props.blog_str8,
      this.props.blog_sissy,
      this.props.blog_lesbian,
      this.props.title.toLowerCase().includes("catagory")?"cat":"type",
      e.target.value,
      this.props.title.toLowerCase().includes("catagory")?this.props.blog_posts:this.props.blog_list,
      this.props.title.toLowerCase().includes("catagory")?this.props.blog_list:this.props.blog_posts,
      this.props.blog_list.length!==this.props.blog_posts.length?this.props.blog_list[0].genre:'list',
      )
}




componentDidUpdate(){
  if(this.props.reset===true){
     document.querySelectorAll('.all-merch')[0].checked = true
    return document.querySelectorAll('.all-merch')[1].checked = true
  }
}


    render(){

  return (
    <div className="pr">
<h4>{this.props.title}</h4>

<form  className="radio-form" >
{
  this.props.choices.map((chc,i)=>{

        return (<input
         key={i} 
         id={`${chc}`}
         type="radio"
          name="radios" 
          value={`${chc}`}  
          className={/all/gi.test(chc) && this.props.title.toLowerCase().includes("catagory")?`radio-input all-merch all-merch-cat`:/all/gi.test(chc)?`radio-input all-merch`:`radio-input`} 
          onClick={this.change_filter}
          />)

  })
}

  <span></span>
  {
    this.props.choices.map((chc,i)=>{

          return (<label 
            key={i}
             htmlFor={`${chc}`} 
              className="radio-label">{`${chc}`}</label>)

    })
  }
 
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
    {blog_res}
  )(Radios)