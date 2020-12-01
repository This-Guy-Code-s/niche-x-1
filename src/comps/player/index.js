import React from 'react'
import Video from 'react-player'


class Player extends React.Component{
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
    <div className="container vidx-h">
     <embed src={this.props.url}
     controls={true}
     volume={1}
     className="vidx"
     height={this.props.height}
     />
    </div>
  );
}
  }

export default Player