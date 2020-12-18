import React from 'react';
import {connect} from 'react-redux'


const ComingSoon = (props) => {
  return (
<div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={props.chat}  className="img img-thumbnail cs-imgs" alt="squirt.blog"/>
                </div>
                <h6>Chat 1 on 1 or in a open chatroom. Choose an icon, choose a name, and send anyone your link to chat totally anonymously.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>March 23rd 2021</span></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={props.facetime}  className="img img-thumbnail cs-imgs" alt="squirt.blog"/>
                </div>
                <h6>Use this platform to facetime others. Difference here is; there are no screenshots, the connection is encrypted, and you dont need an account or any ties to who you are.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>May 14th 2021</span></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={props.blog} className="img img-thumbnail cs-imgs" alt="squirt.blog"/>
                </div>
                <h6>Generate your own static blog. Only info needed here is an email. Make a username, a password, verify email, and you have your own blog page. Post images,Videos, & any fun content you want totally anonymously. </h6>
                <div class="d-flex justify-content-between install mt-3"><span>June 1st 2021</span></div>
            </div>
        </div>
       
    </div>
</div>
     
  );
}



const mapStateToProps = state =>{
  return {
    ...state
  }
}

export default connect(

  mapStateToProps,
  {}

  )(ComingSoon);
