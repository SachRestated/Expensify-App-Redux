import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expenses Manager App</h1>
      <p>Your Ultimate Expenses-Manager</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
      <p>For Chrome, ensure 3rd party cookies are enabled to login via google</p>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
