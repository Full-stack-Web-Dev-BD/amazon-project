import React, { useState } from 'react';
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
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import { adminRoot } from '../../constants/defaultValues';

const Register = ({ history }) => {
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');
  const [name] = useState('Sarah Kortney');

  const onUserRegister = () => {
    if (email !== '' && password !== '') {
      history.push(adminRoot);
    }
    // call registerUserAction()
  };

  return (
    <div>
      {/* <AppBarOuter/> */}
      <Row className="h-100 mt-5">
        <Colxx xxs="12" md="6" className="mx-auto my-auto">
          <Card className="auth-card">
            <CardBody>
              <div>
                <div className="text-center">
                  <CardTitle className="mb-4">
                    <IntlMessages id="user.register" />
                  </CardTitle>
                </div>
                <Form>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.fullname" />
                    </Label>
                    <Input type="name" defaultValue={name} />
                  </FormGroup>

                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Input type="email" defaultValue={email} />
                  </FormGroup>

                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages
                        id="user.password"
                        defaultValue={password}
                      />
                    </Label>
                    <Input type="password" />
                  </FormGroup>

                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="primary"
                      className="btn-shadow"
                      size="lg"
                      onClick={() => onUserRegister()}
                    >
                      <IntlMessages id="user.register-button" />
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </div>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
