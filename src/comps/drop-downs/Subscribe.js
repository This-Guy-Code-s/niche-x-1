import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewsLetter = (props) => {
  return (
  <div className="newsletter-subscribe">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Subscribe Here Below...</h2>
                <p className="text-center">WE DO NOT SPAM...You will recieve an update news letter about 1-2 times a week at the most.</p>
            </div>
            <form className="form-inline" method="post">
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Enter Your Email Here..."/></div>
                <div className="form-group"><button className="btn btn-primary" type="submit">Subscribe </button></div>
            </form>
        </div>
    </div>
     
  );
}

export default NewsLetter;
