import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: "Бабушка" };
  }

  updateTab(contentKey) {
    this.setState({ selectedTab: contentKey });
  }

  render() {
    return(
      <div>
        <Header content={this.props.tabContent}
          updateTab={this.updateTab.bind(this)} />
        <article>{this.props.tabContent[this.state.selectedTab]}</article>
      </div>
    );
  }
}

export default Tabs;
