import React from 'react';
import {connect} from 'react-redux'
import SmallSC from './SmallSC'
import BigSC from './BigSC'
import { Collapse,Spinner } from 'reactstrap';
import {blog_res} from '../../redux/actions'

class Post extends React.Component {
    constructor(props){
      super(props)
        this.state={
          window_size:window.innerWidth<700?true:false,
          isOpen:true,

        }
        this.toggle=this.toggle.bind(this)
        this.switch_type=this.switch_type.bind(this)

    }


 switch_type(type){
        return this.setState({type:this.props[type]})
}




toggle(props){
  this.setState({
   isOpen:!this.state.isOpen
})

  

}


componentDidMount(){


return this.props.blog_res(
      this.props.blog_str8,
      this.props.blog_sissy,
      this.props.blog_lesbian,
      '*',
      'not *',
      this.props.blog_posts,
      this.props.blog_list,


  )
// blog_str8,blog_sissy,blog_lesbian,type,filter,reset,list,cat=false
}

    render(){

  return (

    <div className="container-fluid ">
    <div className="container merch">
     <div className="merch-btn-h"> <button className="btn merch-btn" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.state.isOpen?"Close":"Open"}</button></div>
      <Collapse isOpen={this.state.isOpen}>
   {
  this.props.blog_list && this.props.blog_list.length>0?this.props.blog_list.map((post,i)=>{
     return this.state.window_size?
      (<SmallSC 
title={post.title}
img={post.img}
desc={post.desc}
link={post.link}
linkx={post.linkx}
date={post.date}
type={post.type}
likes={post.likes}
comments={post.comments}
key={i}
/>)
      :
      (<BigSC 
title={post.title}
img={post.img}
desc={post.desc}
link={post.link}
linkx={post.linkx}
date={post.date}
type={post.type}
likes={post.likes}
comments={post.comments}
key={i}
/>)

  })
  :<Spinner style={{ width: '3rem', height: '3rem' }} />

}
      </Collapse>
    </div>
    </div>
  
  )}
}



const mapStateToProps = state =>{
  return {
    ...state,
  }
}


export default connect(
    mapStateToProps,
    {blog_res}
  )(Post)
