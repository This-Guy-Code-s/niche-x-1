import React from 'react'
import {connect} from 'react-redux'
 
    import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

import {Link} from 'react-router-dom'


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
          <DropdownToggle nav caretclassName={`theme-${this.props.theme}`}>
            <i className={`fas fa-sliders-h theme-${this.props.theme}`}></i>
          </DropdownToggle>
           <DropdownMenu 
           className={`theme-${this.props.theme}`}
           >
            <DropdownItem header className={`theme-${this.props.theme}`} ><small><code>{!this.props.token?"You're Not Logged In":"Logged in"}</code></small></DropdownItem>
            <DropdownItem className={`theme-${this.props.theme}`} ><i className="fas fa-globe inner-links"><small>Language</small></i></DropdownItem>
            <DropdownItem  className={`theme-${this.props.theme}`} title='Change Theme'><i className="fas fa-layer-group"><small>Theme</small></i></DropdownItem>
            <DropdownItem  className={`theme-${this.props.theme}`} title='Need help or guidence?...'><i className="fas fa-question inner-links"><small>Help</small></i></DropdownItem>
            <DropdownItem className={`theme-${this.props.theme}`} title='Report a bug or problem'><i className="fas fa-flag inner-links"><small>Report</small></i></DropdownItem>
          <DropdownItem className={`theme-${this.props.theme}`} disabled={this.props.token?false:true} title='Adjust The Settings To Fit Your Needs.'><i className="fas fa-cog inner-links"><small>Settings</small></i></DropdownItem>
          </DropdownMenu>
        </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpen1} toggle={()=>{return this.toggle('dropdownOpen1')}} 
          className={`theme-${this.props.theme}`}
          >
          <DropdownToggle nav caretclassName={`theme-${this.props.theme}`}>
            <i className={`fas fa-user-circle theme-${this.props.theme}`}></i>
          </DropdownToggle>
          <DropdownMenu 
          className={`theme-${this.props.theme}`}
          >
            <DropdownItem header className={`theme-${this.props.theme}`}><small><code>{!this.props.token?"You're Not Logged In":"Logged in"}</code></small></DropdownItem>
            <DropdownItem className={`theme-${this.props.theme}`}title='Buy all your adult needs here'><i className="fas fa-store-alt inner-links"><small>Store</small></i></DropdownItem>
            <DropdownItem className={`theme-${this.props.theme}`}disabled={this.props.token?false:true} title='Post Content For Your Recognition'><i className="fas fa-comments inner-links"><small>Post</small></i></DropdownItem>
            <DropdownItem className={`theme-${this.props.theme}`}title='Login'><i className="fas fa-user-alt inner-links"><small>Login</small></i></DropdownItem>
            <DropdownItem className={`theme-${this.props.theme}`}disabled={this.props.token?false:true} title='Verify Account'><i className="fas fa-user-shield inner-links"><small>Verify Acc.</small></i></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#"><i className="fas fa-image outter-links"></i></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><i className="fas fa-video outter-links"></i></NavLink>
        </NavItem>
        <Dropdown nav isOpen={this.state.dropdownOpen2} toggle={()=>{return this.toggle('dropdownOpen2')}} 
        className={`theme-${this.props.theme}`}
        >
          <DropdownToggle nav className={`theme-${this.props.theme}`}>
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
  {}

  )(Navigation);
