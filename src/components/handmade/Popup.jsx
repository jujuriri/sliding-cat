import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Notice from './Notice';

const Overlay = (Inner) => {
  return (
    class extends Component {
      onOutsideClick (e) {
        console.log('點到', e.target, e.currentTarget);
      }
      render() { 
        return (
          <div className="overlay" onClick={this.onOutsideClick}>
            <Inner {...this.props} />
          </div>
        );
      }
    }
  )
}

const Popup = Overlay(Notice);

export default Popup;
