import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../Images/Logo/logo.png'
import '../CSS/AppBar.css'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <div className="wrap" >
          <div className="app-bar" style={{ justifyContent: "space-between", padding: "20px" }} >
            <div>
              <div className="wrap" style={{width:"auto"}} >
                <img src={logo} className="logo" />
                <div className="app-bar-heading" >
                  Ariya
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </ElevationScroll>
    </React.Fragment>
  );
}
