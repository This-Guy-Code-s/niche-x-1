import React from 'react'
import './util/styles/css/App.css';
import './util/styles/sass/nav.scss';
import {connect} from 'react-redux'
import Landing from './comps/landing/'
import Store from './comps/store/'
import Blog from './comps/blog/'
import Nav from './comps/Nav'
import Footer from './comps/footer/'
import {Switch,Route} from 'react-router-dom'


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
      {
      <Switch>
        
      <Route exact path="/store" render={()=>{
            return (<Store/>)
        }}/>        
      

        <Route exact path="/blog" render={()=>{
            return (<Blog/>)
        }}/>        
              

        <Route render={()=>{
            return (<Landing/>)
        }}/>        
      
      </Switch>
      }
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
