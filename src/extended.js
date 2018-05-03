import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import createReactClass from 'create-react-class';
import classNames from 'classnames';

import bootstrap from './bootstrap';
import registry from 'Lib/registry';

/**
 * Load Netlify CMS automatically if `window.CMS_MANUAL_INIT` is set.
 */
if (!window.CMS_MANUAL_INIT) {
  bootstrap();
} else {
  console.log('`window.CMS_MANUAL_INIT` flag set, skipping automatic initialization.');
}

/**
 * Add extension hooks to global scope.
 */
if (typeof window !== 'undefined') {
  window.CMS = registry;
  window.initCMS = bootstrap;
  window.createClass = window.createClass || createReactClass;
  window.h = window.h || React.createElement;
  Object.assign(window.CMS, {
    React,
    ReactDOM,
    PropTypes,
    Immutable,
    ImmutablePropTypes,
    classNames,
    createReactClass
  });
}

export { registry as default, bootstrap as init };
