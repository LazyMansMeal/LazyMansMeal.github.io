import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import { Navbar, Dropdown } from './molecules';
import { ProfileIcon } from './atoms';

const Appbar = (props) => {
  return (
    <Navbar>
    <Navbar.Logo>
      <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span className="text-xl font-semibold tracking-tight">Lazy Mans Meal</span>
    </Navbar.Logo>
    <Navbar.List>
      <Navbar.Item href="/">
        Home
      </Navbar.Item>
      <Navbar.Item className="lg:float-right">
        <Dropdown>
          <Dropdown.Button>
            <ProfileIcon />
          </Dropdown.Button>
          <Dropdown.Menu className="left-0 lg:right-0 lg:left-auto">
            <Dropdown.MenuItem onClick={() => props.logout()}>
              Sign out
            </Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Item>
    </Navbar.List>
    </Navbar>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Appbar);