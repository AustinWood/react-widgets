import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
  }

  render() {
    return(
      <div>
        <p>rendered from Tabs component!</p>
      </div>
    );
  }
}

export default Tabs;
