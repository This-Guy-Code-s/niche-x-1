import React from 'react'


class Player extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }



componentDidMount(){
  console.log('videos ##############33',this.props)
}


  render(){

  return (
    <div className="container vidx-h">
     <embed src={this.props.url && this.props.url}
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