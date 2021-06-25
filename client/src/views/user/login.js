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
import AppBarOuter from './AppBar';
import axios from 'axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState({});

  const onUserRegister = (e) => {
    e.preventDefault();
    return history.push('/app/product-manager');

    axios
      .post('/api/user/login', { email: email, password: password })
      .then((res) => {
        alert('response ok');
      })
      .catch((err) => {
        if (err.response) {
          setFormError(err.response.data);
        }
      });
  };

  return (
    <div>
      <AppBarOuter />
      <Row className="h-100">
        <Colxx xxs="12" md="6" className="mt-5 mx-auto my-auto">
          <Card className="auth-card mt-5 ">
            <CardBody>
              <div>
                <div className="text-center">
                  <CardTitle className="mb-4">
                    <IntlMessages id="Login in to your Account" />
                  </CardTitle>
                </div>
                <form
                  onSubmit={(e) => {
                    onUserRegister(e);
                  }}
                >
                  {formError.massage ? (
                    <p className="text-danger"> {formError.message} </p>
                  ) : (
                    ''
                  )}
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                    />
                  </FormGroup>

                  {formError.email ? (
                    <p className="text-danger"> {formError.email} </p>
                  ) : (
                    ''
                  )}

                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Password" />
                    </Label>
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      required
                    />
                  </FormGroup>
                  {formError.password ? (
                    <p className="text-danger"> {formError.password} </p>
                  ) : (
                    ''
                  )}
                  <div className="d-flex justify-content-end align-items-center">
                    <a href="/app/asset-manager">
                      <Button
                        color="primary"
                        className="btn-shadow d-block"
                        size="lg"
                      >
                        <IntlMessages id="Login" />
                      </Button>
                    </a>
                  </div>
                  <a href="/user/login">Sign up</a>
                </form>
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
})(Login);
