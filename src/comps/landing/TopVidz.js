import React from 'react'
import {connect} from 'react-redux'
import Video from '../player/'

class TopVidz extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }



componentDidMount(){
}


  render(){

    //row2use is a prop value that is expected to be passed manual and be a number

 return (
<div className='container'>
<header className="topv-header">
  {this.props.row2use<1?<h1>Top Videos</h1>:""}
</header>




{
  this.props.row2use<1?
  (
<div className="band">
  <div className={`item-1 item-all `}>
    <a href={this.props.top_vidz[0].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[0].url} height={window.innerWidth<700?"240px":"350px"}/>
      <article>
        <h1>{this.props.top_vidz[0].desc}</h1>
        <span>{this.props.top_vidz[0].star}</span>
      </article>
    </a>
  </div>
  <div className={`item-2 item-all `}>
     <a href={this.props.top_vidz[1].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[1].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[1].desc}</h1>
        <span>{this.props.top_vidz[1].star}</span>
      </article>
    </a>
  </div>
  <div className={`item-3 item-all `}>
   <a href={this.props.top_vidz[2].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[2].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[2].desc}</h1>
        <span>{this.props.top_vidz[2].star}</span>
      </article>
    </a>
  </div>
    <div className={`item-1 item-all `}>
    <a href={this.props.top_vidz[3].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[3].url} height={window.innerWidth<700?"240px":"350px"}/>
      <article>
        <h1>{this.props.top_vidz[3].desc}</h1>
        <span>{this.props.top_vidz[3].star}</span>
      </article>
    </a>
  </div>

  <div className={`item-3 item-all `}>
   <a href={this.props.top_vidz[2].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[2].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[2].desc}</h1>
        <span>{this.props.top_vidz[2].star}</span>
      </article>
    </a>
  </div>
  <div className={`item-3 item-all `}>
   <a href={this.props.top_vidz[2].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[2].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[2].desc}</h1>
        <span>{this.props.top_vidz[2].star}</span>
      </article>
    </a>
  </div>
  </div>


    )


  :

  (

<div className="band">
  <div className={`item-4 item-all `}>
    <a href={this.props.top_vidz[3].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[3].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[3].desc}</h1>
        <span>{this.props.top_vidz[3].star}</span>
      </article>
    </a>
  </div>
  <div className={`item-5 item-all `}>
    <a href={this.props.top_vidz[4].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[4].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[4].desc}</h1>
        <span>{this.props.top_vidz[4].star}</span>
      </article>
    </a>
  </div>
  <div className={`item-6 item-all `}>
    <a href={this.props.top_vidz[5].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[5].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[5].desc}</h1>
        <span>{this.props.top_vidz[5].star}</span>
      </article>
    </a>
  </div>
  <div className={`item-7 item-all `}>
    <a href={this.props.top_vidz[6].url} className={`card theme-comp2-${this.props.theme}`}>
      <div className="thumb" ></div>
      <Video url={this.props.top_vidz[6].url} height="240px"/>
      <article>
        <h1>{this.props.top_vidz[6].desc}</h1>
        <span>{this.props.top_vidz[6].star}</span>
      </article>
    </a>
  </div>
  </div>
    )
}




</div>



)
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

  )(TopVidz);
