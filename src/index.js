import React from 'react';
import ReactDOM from 'react-dom';
// Note: 
// React.PropTypes is deprecated as of React v15.5.
//
// Please use the prop-types library instead.
//       npm install --save prop-types
import PropTypes from 'prop-types'; 

import App from './components/App';



ReactDOM.render(    
    <App />,
    document.getElementById('root')
);