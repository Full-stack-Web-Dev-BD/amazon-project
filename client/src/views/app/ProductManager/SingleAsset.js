import React from 'react';
import { CardBody, Card, CardImg, CardText, Badge } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';

const SingleAsset = () => {
  return (
    <div>
      <div className="">
        <div className="row pt-3">
          <div className="col-md-4">
            <div className="">
              <h3>Covid 19 Poster</h3>
              <p>ID : 4u2348u2309du238420139421</p>
              <hr />
              <CardImg
                top
                style={{ borderRadius: '10px', width: '100%' }}
                src="/assets/img/cards/card.png"
                alt="Card image cap"
              />{' '}
            </div>
          </div>
          <div className="col-md-4">
            <h3>Related Post</h3>
            <p>Related post about  "Covid 19 Poster" </p>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <a href="/app/asset-manager/single-asset">
                  <Card className="mb-4">
                    <div className="position-relative">
                      <CardImg
                        top
                        src="/assets/img/cards/card.png"
                        alt="Card image cap"
                      />
                    </div>
                    <CardBody>
                      <h3>This is test title</h3>
                      <div
                        style={{ borderTop: '1px solid gray', padding: '10px' }}
                      ></div>
                      <Badge
                        style={{ right: '10px' }}
                        color="primary"
                        pill
                        className="position-absolute badge-bottom-left"
                      >
                        PSD
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
              <div className="col-md-6">
                <a href="/app/asset-manager/single-asset">
                  <Card className="mb-4">
                    <div className="position-relative">
                      <CardImg
                        top
                        src="/assets/img/cards/card.png"
                        alt="Card image cap"
                      />
                    </div>
                    <CardBody>
                      <h3>This is test title</h3>
                      <div
                        style={{ borderTop: '1px solid gray', padding: '10px' }}
                      ></div>
                      <Badge
                        style={{ right: '10px' }}
                        color="primary"
                        pill
                        className="position-absolute badge-bottom-left"
                      >
                        PSD
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
            </div>
          </div>
          <div className="col-md-4">
            <Card style={{ background: '#5D20CC', color: 'white' }}>
              <CardBody>
                <div className="">
                  <h3>Name : Mr. Emamul Hoque </h3>
                  <p>Covid 19 Poster</p>
                  <hr />
                  <div className="description">
                    <div>
                      <p>
                        <b>
                          {' '}
                          <strong>Description</strong>{' '}
                        </b>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                    <hr />
                    <div className="tag">
                      <h5>Tag</h5>
                      <div className=" mb-4">
                        <buton
                          color="primary"
                          className="btn btn-outline-info btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="Covid" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-info btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="Corona" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-info btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="Covid 19" />
                        </buton>
                        <buton
                          color="primary"
                          className="btn btn-outline-info btn-xs mb-3 mr-3"
                        >
                          <IntlMessages id="Others" />
                        </buton>
                      </div>
                    </div>
                    <hr />
                    <div className="ugase-right">
                      <h5>Ugase Right</h5>
                      <p>Available</p>
                    </div>
                    <hr />
                    <div className="compaign">
                      <h5>Compaign</h5>
                      <p>Spring</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAsset;
