import React from 'react';
import {  Collapse,
CardBody, Card } from 'reactstrap';
import {connect} from 'react-redux'
import {toggle_drp_dwn} from '../../redux/actions'
import '../../util/styles/css/help.css';
import Languages from './Languages'
import Help from './Help'
import Report from './Report'
import Subscribe from './Subscribe'



class RenderNavValues extends React.Component{
  constructor(props){
    super(props)
      this.state={
      }
  }




   render(){
  return (
    <div onBlur={()=>{console.log("BLUR!!")}}>
      <Collapse isOpen={this.props.nav_link_2_drp_dwn_bool} >
        <div className="drp-dwn-btn-frame"><button className="btn drp-dwn-btn" onClick={()=>{console.log("blur...");return this.props.toggle_drp_dwn(false,-1)}}>Hide...</button></div>
        <Card className={`theme-${this.props.theme}`}>
          <CardBody >
            {
          
          // {/*COMPONENT HERE*/}
          this.props.nav_link_2_drp_dwn_render===0?
          (

            <Languages/>
            )


          // {COMPONENT HERE}
          :this.props.nav_link_2_drp_dwn_render===1?
          (

            <Help/>
            )

          // {COMPONENT HERE}
          :this.props.nav_link_2_drp_dwn_render===2?
          (

            <Report/>
            )

          // {COMPONENT HERE}
          :this.props.nav_link_2_drp_dwn_render===3?
          (

            <Subscribe/>
            )



          // {END}
          :false
        }     
          </CardBody>
        </Card>
      </Collapse>
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
  {toggle_drp_dwn}
  )(RenderNavValues);
