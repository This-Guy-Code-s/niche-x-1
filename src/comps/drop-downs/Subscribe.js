import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const NewsLetter = (props) => {
  return (
  <div className="subscribe">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Subscribe Here Below...</h2>
                <p className="text-center">WE DO NOT SPAM...You will recieve an update news letter about 1-2 times a week at the most.</p>
            </div>
            <form className="form-inline" method="post">
                    <FormGroup tag="fieldset">
        <FormGroup check>
          <Label className="sub-labes" check>
            <Input type="radio" name="radio1" />
            Light
          </Label>
          <br/>
          <Label className="sub-labes" check>
            <Input type="radio" name="radio1" />{' '}
            Full Subscription
          </Label>
        </FormGroup>
        <FormGroup >
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email Here..."/></div>
      </FormGroup>
        <FormGroup >
                <div className="form-group"><button className="btn btn-primary" type="submit">Subscribe </button></div>
      </FormGroup>
      </FormGroup>
            </form>
        </div>
    </div>
     
  );
}

export default NewsLetter;
