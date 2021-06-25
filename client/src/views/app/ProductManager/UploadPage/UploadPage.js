import { Badge } from '@material-ui/core';
import React from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CardBody,
  CardImg,
  CardText,
} from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
const UploadPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-side">
            <CardTitle className="mb-4 ">
              <IntlMessages id="Upload Media " />
            </CardTitle>
            <Card style={{ background: '#5D20CC' }}>
              <CardBody>
                <form
                  onSubmit={(e) => {
                    onUserRegister(e);
                  }}
                >
                  <div className="form-group">
                    <lebel style={{ color: 'white', fontWeight: 'bold' }}>
                      Name
                    </lebel>
                    <input className="form-control" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <lebel style={{ color: 'white', fontWeight: 'bold' }}>
                      Description
                    </lebel>
                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Description"
                    />
                  </div>
                  <div className="form-group">
                    <lebel style={{ color: 'white', fontWeight: 'bold' }}>
                      Tag
                    </lebel>
                    <input
                      className="form-control"
                      placeholder="Tag (Type and Enter to Add ) "
                    />
                  </div>
                  <div>
                    <div className="tag">
                      <div className=" mb-4">
                        <buton
                          color="primary"
                          className="btn btn-outline-info btn-xs mb-3 mr-1"
                        >
                          <IntlMessages id="Covid" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-info btn-xs mb-3 mr-1"
                        >
                          <IntlMessages id="Corona" />
                        </buton>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <lebel style={{ color: 'white', fontWeight: 'bold' }}>
                      Usages Right
                    </lebel>
                    <select className="form-control">
                      <option>Available</option>
                      <option>Unavailable</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <lebel style={{ color: 'white', fontWeight: 'bold' }}>
                      Compaign
                    </lebel>
                    <select className="form-control">
                      <option>Spring</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <lebel style={{ color: 'white', fontWeight: 'bold' }}>
                      Format
                    </lebel>
                    <select className="form-control">
                      <option>PSD</option>
                      <option>JPG</option>
                      <option>MP4</option>
                      <option>MP3</option>
                      <option>Other</option>
                    </select>
                  </div>
                </form>
              </CardBody>
            </Card>
            <div className="text-center">
              <a
                className=" mt-3 mb-5 btn btn-outline-primary btn-lg ml-2"
                target="_top"
                href="#"
              >
                <span className=" glyph-icon"></span>
                <IntlMessages id=" Save And Upload " />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h3>Preview</h3>
          <hr/>
          <div className="row">
            <div className="col-md-4">
              <a href="/app/asset-manager/single-asset">
                <Card className="mb-4">
                  <div className="position-relative">
                    <CardImg
                      top
                      src="/assets/img/cards/imgicon.png"
                      alt="Card image cap"
                    />
                  </div>
                  <CardBody>
                    <h3>Title (N/A) </h3>
                    <div
                      style={{ borderTop: '1px solid gray', padding: '10px' }}
                    ></div>
                    <Badge
                      style={{ right: '10px' }}
                      color="primary"
                      pill
                      className="position-absolute badge-bottom-left"
                    >
                      N/A
                    </Badge>
                    <CardText className="text-muted text-small mb-0 font-weight-light">
                      Used Right{' '}
                    </CardText>
                    <CardText className="text-muted text-small mb-0 font-weight-light">
                      N/A
                    </CardText>
                  </CardBody>
                </Card>
              </a>
            </div>
          </div>
          <h3>Related Assets</h3>
          <hr />
          <div className="row">
            {[4, 42, 24, 43].map((el) => (
              <div className="col-md-4">
                <a href="/app/asset-manager/single-asset">
                  <Card className="mb-4">
                    <div className="position-relative">
                      <CardImg
                        top
                        src="/assets/img/cards/thumb-3.jpg"
                        alt="Card image cap"
                      />
                    </div>
                    <CardBody>
                      <h3>This is Test Title </h3>
                      <div
                        style={{ borderTop: '1px solid gray', padding: '10px' }}
                      ></div>
                      <Badge
                        style={{ right: '10px' }}
                        color="primary"
                        pill
                        className="position-absolute badge-bottom-left"
                      >
                        PNG
                      </Badge>
                      <CardText className="text-muted text-small mb-0 font-weight-light">
                        Used Right{' '}
                      </CardText>
                      <CardText className="text-muted text-small mb-0 font-weight-light">
                        Available
                      </CardText>
                    </CardBody>
                  </Card>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
