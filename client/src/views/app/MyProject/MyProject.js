import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import StateButton from '../../../components/StateButton';
import IntlMessages from '../../../helpers/IntlMessages';

const MyProject = ({ match }) => {
  return (
    <> 
    
     <a
      className=" mt-3 mb-5 btn btn-outline-primary btn-sm ml-2"
      target="_top"
      href="#"
      onClick={e=>{setShowUploadComponent(!showUploadComponent)}}
    >
      <span className=" glyph-icon"></span>
      <IntlMessages id=" Create New " />
    </a>
    <div>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <CardBody>
            <CardHeader className="text-center  ">
              <CardTitle><span className="iconsminds-folder-edit  glyph-icon "></span>   Ongoing Projects</CardTitle>
              <hr/>
            </CardHeader>
              <div className="">
                {
                  [3,2].map((el , i)=>(
                    <div>
                      <h3>My Project {i+1 } </h3>
                      <p> <b>Last Modified : </b> <i> 02-01-2020  </i> </p>
                      <div className=" mb-4">
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 1" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 2" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 3" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 4" />
                        </buton>
                      </div>
                      <hr/>
                    </div>
                  ))
                }
              </div>
            </CardBody>
          </Card>
        </div>
        
        <div className="col-md-6">
          <Card>
            <CardBody>
            <CardHeader className="text-center  ">
              <CardTitle><span className="simple-icon-badge  glyph-icon "></span>   Past Projects</CardTitle>
              <hr/>
            </CardHeader>
              <div className="">
                {
                  [3,2].map((el , i)=>(
                    <div>
                      <h3>My Project {i+1 } </h3>
                      <p> <b>Last Modified : </b> <i> 02-01-2020  </i> </p>
                      <div className=" mb-4">
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 1" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 2" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 3" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 4" />
                        </buton>
                      </div>
                      <hr/>
                    </div>
                  ))
                }
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-6">
          <Card>
            <CardBody>
            <CardHeader className="text-center  ">
              <CardTitle><span className="simple-icon-share-alt  glyph-icon "></span>   Draft Projects</CardTitle>
              <hr/>
            </CardHeader>
              <div className="">
                {
                  [3,2].map((el , i)=>(
                    <div>
                      <h3>My Project {i+1 } </h3>
                      <p> <b>Last Modified : </b> <i> 02-01-2020  </i> </p>
                      <div className=" mb-4">
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 1" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 2" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 3" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 4" />
                        </buton>
                      </div>
                      <hr/>
                    </div>
                  ))
                }
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-6 ">
          <Card>
            <CardBody>
            <CardHeader className="text-center  ">
              <CardTitle><span className="iconsminds-box-with-folders   glyph-icon "></span>   Latest Activities </CardTitle>
              <hr/>
            </CardHeader>
              <div className="">
                {
                  [3].map((el , i)=>(
                    <div>
                      <h3>My Project {i+1 } </h3>
                      <p> <b>Last Modified : </b> <i> 02-01-2020  </i> </p>
                      <div className=" mb-4">
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 1" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 2" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 3" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-primary btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="tag 4" />
                        </buton>
                      </div>
                      <hr/>
                    </div>
                  ))
                }
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyProject