import React from 'react';

const Header = ({ content, updateTab }) => (
  <ul>
    {
      Object.keys(content).map(function (key) {
        return <li key={key} onClick={ updateTab.bind(null, key) }>
          {key}
        </li>;
      })
    }
  </ul>
);

export default Header;
