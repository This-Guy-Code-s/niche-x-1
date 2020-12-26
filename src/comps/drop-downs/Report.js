import React from 'react';

const Report = (props) => {
  return (

<div className="container-fluid report-password">
            <div className="row">
                <div className="col-md-12 col-md-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="text-center">
                                <h2 className="text-center">Report Form</h2>
                                <p>You can make a report about anything unusual you seen here.</p>
                                <form id="register-form" autocomplete="off" className="form" method="post">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <select className="form-control" id="sel1">
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
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <textarea id="forgetAnswer" name="forgetAnswer" placeholder="Explain Here...." className="form-control"  type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input name="btnForget" className="btn btn-lg btn-primary btn-block btnForget" value="Send" type="submit"/>
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
