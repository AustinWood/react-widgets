import React from 'react';

const Header = ({ content }) => (
  <ul>
    {
      Object.keys(content).map(function (key) {
        return <li key={key}>{key}</li>;
      })
    }
  </ul>
);

export default Header;
