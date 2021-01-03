import React from 'react';
import {connect} from 'react-redux'
import '../../util/styles/css/quote.css';
import '../../util/styles/css/radio.css';
import '../../util/styles/css/shop-card-sm.css';
import '../../util/styles/css/shop-card-bg.css';
import '../../util/styles/css/blog-comments.css';
import '../../util/styles/sass/search.scss';
import '../../util/styles/sass/merch.scss';
import Support from '../support/'
import R4dios from './Radios'
import Search from './Search'
import Post from './Post'

class Blog extends React.Component {
    constructor(props){
      super(props)
        this.state={
          banner:this.props.top3_banner[Math.floor(Math.random() * 3)],
          

        }
      
    }

   
    render(){

  return (
    <div className={`theme-${this.props.theme}`}>
   
      <Support msg="Welcome, Here's our latest blog post, you can search post as well. Feel free to give a like and/or comment your thoughts." avitar={this.props.chickPic} quotesImage={this.props.quotesImage} quotesNImage={this.props.quotesNImage} />
      <div className="pr-2 mb-8 store-edit-bubblez">
      <R4dios
       title="Type"
       choices={["All", "Straight", "Sissy", "Lesbian"]}

       />
      <R4dios
       title="Catagory"
       choices={["All", "News", "Pictures", "Videos"]}

       />
      </div>
      <div className="pr-2 mb-4">
      <Search/>
      </div>
      
      <Post/>
<div className="fixed-bg bg-2 ad srch-ad-footer">
    <h1><a onClick={(event)=>{return window.setUtmSource(event, this)}} href={this.state.banner.url} border="0"><img border="0" src={this.state.banner.img} alt="Pornhub Header"/></a></h1>
  </div>
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
  )(Blog)