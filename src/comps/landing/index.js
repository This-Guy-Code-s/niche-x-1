import React from 'react'
import '../../util/styles/css/hero.css';
import '../../util/styles/css/footer.css';
import '../../util/styles/css/landing.css';
import '../../util/styles/sass/app-ad.scss';
import '../../util/styles/sass/top-vidz.scss';
import {connect} from 'react-redux'
import Hero from './Hero'
import AppAd from './App-Ad'
import TopVidz from './TopVidz'
import DropDown from '../drop-downs/'

class LandingPage extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }



componentDidMount(){
}


  render(){

  return (
   <main className="Main">
  <Hero/>
  
   <div className="fixed-bg bg-2 ad" id="nav-val">

   <DropDown/>

  </div>


  <div className="fixed-bg bg-2 ad" id="home">
    <h1><a onClick={(event)=>{return window.setUtmSource(event, this)}} href={this.props.top3_banner[0].url} border="0" target="_blank" rel="noreferrer"><img alt="Pornhub Header" border="0" src={this.props.top3_banner[0].img}/></a></h1>
  </div>
  <div className="fixed-bg bg-2-1">
  <AppAd/>
  </div>
   <div className="fixed-bg bg-3-1">
  <TopVidz row2use={0}/>
  </div>
  <div className="fixed-bg bg-3">
    <h1><a onClick={(event)=>{return window.setUtmSource(event, this)}} href={this.props.top3_banner[1].url} border="0" target="_blank" rel="noreferrer"><img alt="Femdom Porn Videos" border="0" src={this.props.top3_banner[1].img}/></a></h1>
  </div>
  <div className="fixed-bg bg-3-1">
  <TopVidz row2use={1}/>
  </div>
   <div className="fixed-bg bg-3">
    <h1><a onClick={(event)=>{return window.setUtmSource(event, this)}} href={this.props.top3_banner[2].url} border="0" target="_blank" rel="noreferrer"><img alt="YouPorn Header" border="0" src={this.props.top3_banner[2].img}/></a></h1>
  </div>

  
</main>
  );
}
  }




  const mapStateToProps = state =>{
    return {
      ...state
    }
  }

export default connect(


  mapStateToProps,
  {}

  )(LandingPage);
