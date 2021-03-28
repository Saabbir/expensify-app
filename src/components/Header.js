import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header className="c-header">
    <div className="l-wrap">
      <div className="c-header__content">
        <Link className="c-header__title-link" to="/dashboard">
          <h2 className="c-header__title">Expensify</h2>
        </Link>
        <button className="c-button c-button--sm c-button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);