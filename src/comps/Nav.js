import React from 'react'
import {connect} from 'react-redux'
import {toggle_light} from '../redux/actions'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import Modal from './modals/'


class Navigation extends React.Component{
  constructor(props){
    super(props)
    this.state={
dropdownOpen:false,
dropdownOpen1:false,
dropdownOpen2:false
    }
    this.toggle=this.toggle.bind(this)
  }

toggle(which){this.setState({[which]:!this.state[which]})}

componentDidMount(){
  console.log(this.props)
}


  render(){

  return (
        <div 
         className={`theme-${this.props.theme}`}>
      <Nav tabs 
      className={`theme-${this.props.theme}`}
      >
     
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={()=>{return this.toggle('dropdownOpen')}} 
        className={`theme-${this.props.theme}`}
        >
          <DropdownToggle nav caret className={`theme-${this.props.theme}`} style={{background:this.props.theme==="dark"?"#000":"#fff",backgroundColor:this.props.theme==="dark"?"#000":"#fff",}}>
            <i className={`fas fa-sliders-h theme-${this.props.theme}`}></i>
          </DropdownToggle>
           <DropdownMenu 
           className={`theme-${this.props.theme}`}
           >
            <Modal fas="fas fa-globe inner-links" buttonLabel="Language" title='Adjust language'/>
            <DropdownItem  className={`link-x theme-${this.props.theme}`} title='Change britghness' onClick={()=>{console.log('clicked!!');return this.props.toggle_light()}}><i className={`fa${this.props.theme==="dark"?"r":"s"} fa-lightbulb theme-${this.props.theme}-bulb`}><small>Light</small></i></DropdownItem>
            <Modal fas="fas fa-question inner-links" buttonLabel="Help" title='Need help or guidence?...'/>
            <Modal fas="fas fa-flag inner-links" buttonLabel="Report" title='Report a bug or problem'/>
            <Modal fas="fas fa-cog inner-links" buttonLabel="Settings" title='Adjust The Settings To Fit Your Needs.'/>
          </DropdownMenu>
        </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpen1} toggle={()=>{return this.toggle('dropdownOpen1')}} 
          className={`theme-${this.props.theme}`}
          >
          <DropdownToggle nav caret className={`theme-${this.props.theme}`} style={{background:this.props.theme==="dark"?"#000":"#fff",backgroundColor:this.props.theme==="dark"?"#000":"#fff",}}>
            <i className={`fas fa-user-circle theme-${this.props.theme}`}></i>
          </DropdownToggle>
          <DropdownMenu 
          className={`theme-${this.props.theme}`}
          >
            <DropdownItem className={`link-x theme-${this.props.theme}`}title='Buy all your adult needs here'><i className="fas fa-store-alt inner-links"><small>Store</small></i></DropdownItem>
            <DropdownItem className={`link-x theme-${this.props.theme}`} title='See Our Blog'><i className="fas fa-comments inner-links"><small>Blog</small></i></DropdownItem>
            <Modal fas="fas fa-paper-plane" buttonLabel="Subscribe" title='Stay Updated'/>
            <Modal fas="fas fa-brain" buttonLabel="Coming Soon..."  title='Whats Coming Next?...'/>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#"><i className="fas fa-image outter-links"></i></NavLink>
        </NavItem>
        <Dropdown nav isOpen={this.state.dropdownOpen2} toggle={()=>{return this.toggle('dropdownOpen2')}} 
        className={`theme-${this.props.theme}`}
        >
          <DropdownToggle nav caret className={`theme-${this.props.theme}`} style={{background:this.props.theme==="dark"?"#000":"#fff",backgroundColor:this.props.theme==="dark"?"#000":"#fff",}}>
            <i className={`fas fa-bell outter-links theme-${this.props.theme}`}></i>
          </DropdownToggle>
          <DropdownMenu 
          className={`theme-${this.props.theme}`}
          >
            <DropdownItem header className={`theme-${this.props.theme}`}><small><code>{!this.props.notifications?"Nothing Yet...":"Latest News!"}</code></small></DropdownItem>
            {/*<DropdownItem diabled title={notify.msg}><i className="fas fa-info-circle inner-links"><small>{notify.msg}</small></i></DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </Nav>
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
  {toggle_light}

  )(Navigation);
