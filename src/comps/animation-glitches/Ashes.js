import React from 'react'
import {connect} from 'react-redux'
import '../../util/styles/sass/ashes.scss'






class Ashes extends React.Component{
	constructor(props){
		super(props)
			this.state={

			}
	}




	render(){
		return (



	
	<div className="container">
{
	new Array(100).fill(24).map((nun_fr,i)=>{
		return (

<div key={i} className="circle-container">
<div className="circle"></div>
</div>

			)
	})
}
</div>


)
	}
}




const mapStateToProps = state =>{
	return {
		...state,
	}
}



export default connect(
		mapStateToProps,
		{}
	)(Ashes)