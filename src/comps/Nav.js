import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggle_light,toggle_drp_dwn} from '../redux/actions'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import Modal from './drop-downs/'
import ToolTip from './tool-tip/'


class Navigation extends React.Component{
  constructor(props){
    super(props)
    this.state={
dropdownOpen:false,
dropdownOpen1:false,
dropdownOpen2:false,
dropdownOpen3:false
    }
    this.toggle=this.toggle.bind(this)
    this.nav_choice=this.nav_choice.bind(this)
  }

toggle(which){this.setState({[which]:!this.state[which]})}

nav_choice(x){
  this.props.toggle_drp_dwn(true,x)
  setTimeout(()=>{let goto_drp_dwn = document.querySelector("#nav-val");return goto_drp_dwn.scrollIntoView()},500)
}




  render(){

  return (
        <div 
         className={`theme-${this.props.theme} naviola`}>
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
            <NavLink to="/" className={`link-x theme-${this.props.theme}`} title='Adjust language' onClick={()=>{return this.nav_choice(0)}}><i className="fas fa-globe inner-links"><small>Language</small></i></NavLink>
            <DropdownItem  className={`link-x theme-${this.props.theme}`} title='Change britghness' onClick={()=>{console.log('clicked!!');return this.props.toggle_light()}}><i className={`fa${this.props.theme==="dark"?"r":"s"} fa-lightbulb theme-${this.props.theme}-bulb`}><small>Light</small></i></DropdownItem>
            <NavLink to="/" className={`link-x theme-${this.props.theme}`} title='Need help or guidence?...' onClick={()=>{return this.nav_choice(1)}}><i className="fas fa-question inner-links"><small>Help</small></i></NavLink>
            <NavLink to="/" className={`link-x theme-${this.props.theme}`} title='Report a bug or problem' onClick={()=>{return this.nav_choice(2)}}><i className="fas fa-flag inner-links"><small>Report</small></i></NavLink>
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
            <DropdownItem className={`link-x theme-${this.props.theme}`}title='Buy all your adult needs here'><i className="fas fa-store-alt inner-links"><small><NavLink to="/store" className="inner-links">Store</NavLink></small></i></DropdownItem>
            <DropdownItem className={`link-x theme-${this.props.theme}`} title='See Our Blog'><i className="fas fa-comments inner-links"><small><NavLink to="/blog" className="inner-links">Blog</NavLink></small></i></DropdownItem>
            <NavLink to="/"  className={`link-x theme-${this.props.theme}`} title='Stay Updated' onClick={()=>{return this.nav_choice(3)}}><i className="fas fa-paper-plane"><small>Subscribe</small></i></NavLink>


 <Dropdown isOpen={this.state.dropdownOpen3} toggle={()=>{return this.toggle('dropdownOpen3')}} >
      <DropdownToggle caret className={`theme-${this.props.theme}`} style={{background:this.props.theme==="dark"?"#000":"#fff",backgroundColor:this.props.theme==="dark"?"#000":"#fff",}}>
       <i className="fas fa-brain"  title='Whats Coming Next?...' ><small>Coming Soon...</small></i>
        </DropdownToggle>
      <DropdownMenu className={`theme-${this.props.theme}`}>
       
                    <DropdownItem disabled header className="notify"><small>Social Media Mobile App</small></DropdownItem>
              {/*COMING SOON HERE*/}
          {
            this.props.coming_soon.map((cmsn,i)=>{

        

                return (



                    <DropdownItem key={i} header className="notify" ><ToolTip title={cmsn.title} msg={cmsn.msg} date={cmsn.date}/></DropdownItem>


                  )



            })
          }

            {/*COMING SOON HERE*/}

      </DropdownMenu>
    </Dropdown>



          </DropdownMenu>
        </Dropdown>
      
        <Dropdown nav isOpen={this.state.dropdownOpen2} toggle={()=>{return this.toggle('dropdownOpen2')}} 
        className={`theme-${this.props.theme}`}
        >
          <DropdownToggle nav caret className={`theme-${this.props.theme}`} style={{background:this.props.theme==="dark"?"#000":"#fff",backgroundColor:this.props.theme==="dark"?"#000":"#fff",}}>
            <i className={`fas fa-bell outter-links theme-${this.props.theme}`}></i>
          </DropdownToggle>
          <DropdownMenu 
          className={`theme-${this.props.theme} `}
          >
            <DropdownItem header className={`theme-${this.props.theme}`}><small><code>{!this.props.notifications?"Nothing Yet...":`${this.props.notifications.length} Notifications`}</code></small></DropdownItem>
            {/*NOTIFICATIONS HERE*/}
          {
            this.props.notifications.map((notify,i)=>{

            

                return (



                    <DropdownItem key={i} header className="notify" ><ToolTip title={notify.title} msg={notify.msg} date={notify.date}/></DropdownItem>


                  )



            })
          }

            {/*NOTIFICATIONS HERE*/}

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
  {toggle_light,toggle_drp_dwn}

  )(Navigation);
