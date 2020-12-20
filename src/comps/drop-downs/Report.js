import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Report = (props) => {
  return (

<div class="container-fluid report-password">
            <div class="row">
                <div class="col-md-12 col-md-offset-4">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="text-center">
                                <h2 class="text-center">Report Form</h2>
                                <p>You can make a report about anything unusual you seen here.</p>
                                <form id="register-form" role="form" autocomplete="off" class="form" method="post">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <select class="form-control" id="sel1">
                                                <option selected="true" disabled="disabled">What Kind Of Report?</option>
                                                <option>Website Design</option>
                                                <option>The Way The Website Acts</option>
                                                <option>Videos</option>
                                                <option>Pictures</option>
                                                <option>Blog/Comments Post</option>
                                                <option>Store Page</option>
                                                <option>Other...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <textarea id="forgetAnswer" name="forgetAnswer" placeholder="Explain Here...." class="form-control"  type="text"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input name="btnForget" class="btn btn-lg btn-primary btn-block btnForget" value="Send" type="submit"/>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
  );
}

export default Report;
