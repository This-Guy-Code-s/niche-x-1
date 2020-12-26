import React from 'react';
import {connect} from 'react-redux'
import {search_res} from '../../redux/actions'



class Radios extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363)
        }
        this.change_filter=this.change_filter.bind(this)
    }

change_filter(e){
    console.log(e.target.value)
    return this.props.search_res(
      this.props.store_merch,
      e.target.value,
      this.props.title.toLowerCase().includes("catagory")?"type":"price",
      )

}
    render(){

  return (
    <div className="pr">
<h4>{this.props.title}</h4>

<form  className="radio-form">
{
  this.props.choices.map((chc,i)=>{

        return (<input key={i} id={`${chc}`} type="radio" name="radios" value={`${chc}`}  className="radio-input" onClick={this.change_filter}/>)

  })
}

  <span></span>
  {
    this.props.choices.map((chc,i)=>{

          return (<label key={i} htmlFor={`${chc}`}  className="radio-label">{`${chc}`}</label>)

    })
  }
 
</form>
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
    {search_res}
  )(Radios)