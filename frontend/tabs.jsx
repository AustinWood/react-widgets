import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
  }

  render() {
    return(
      <ul>
        <li>Бабушка</li>
        <li>Гопник</li>
        <li>Матрёшка</li>
      </ul>
    );
  }
}

export default Tabs;
