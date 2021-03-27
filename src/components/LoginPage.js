import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
  <div className="c-login-page">
    <div className="c-login-page__content">
      <h1 className="c-login-page__title">Expensify App</h1>
      <p className="c-login-page__tagline">It's time to get your expenses under control.</p>
      <div className="u-mt-32">
        <button className="c-button" onClick={startLogin}>Log In</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);