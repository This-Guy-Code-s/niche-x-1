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


class LandingPage extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }



componentDidMount(){
  console.log(this.props)
}


  render(){

  return (
   <main className="">
  <Hero/>
  
  <div className="fixed-bg bg-2">
    <h1><a onClick={(event)=>{return window.setUtmSource(event, this)}} href="https://www.pornhub.com/view_video.php?viewkey=ph5bad8d657eb59&utm_source=domain&utm_medium=banner-paid&utm_campaign=hubtraffic_thusguycodez" border="0" target="_blank"><img alt="Pornhub Header" border="0" src="https://www.hubtraffic.com/_affiliate/banners/1543860106.png"/></a></h1>
  </div>
  <div className="fixed-bg bg-2-1">
  <AppAd/>
  </div>
 
  <div className="fixed-bg bg-3-1">
  <TopVidz/>
  </div>
   <div className="fixed-bg bg-3">
    <h1><a onClick={(event)=>{return window.setUtmSource(event, this)}} href="https://www.youporn.com?utm_source=domain&utm_medium=banner-paid&utm_campaign=hubtraffic_thusguycodez" border="0" target="_blank"><img alt="YouPorn Header" border="0" src="https://www.hubtraffic.com/_affiliate/banners/1543860373.png"/></a></h1>
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
