import React from 'react'
import './util/styles/css/App.css';
import './util/styles/sass/nav.scss';
import {connect} from 'react-redux'
import Landing from './comps/landing/'
import Nav from './comps/Nav'
import Footer from './comps/footer/'

class App extends React.Component{
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
    <div className={`App theme-${this.props.theme}`}>
      <Nav/>
      <Landing/>
      <Footer/>
    </div>
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

  )(App);
