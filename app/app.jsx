import React from 'react';
import Router from 'react-router';

const routes = require('./routes');

if(typeof document !== 'undefined' && window) {
  window.onload = function() {    
    Router.run(routes, Router.HistoryLocation, function(App, state) {  
      React.render(<App/>, document.getElementById('app'));
    });    
  }
};


