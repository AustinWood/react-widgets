import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
    this.content = {
      "Бабушка": "Женщина, имеющая внуков. В разговорной речи часто просто пожилая женщина.",
      "Гопник": "Жаргонное слово русского языка, обозначающее представителей городской прослойки низкого социального статуса, малообразованной, агрессивно настроенной молодёжи",
      "Матрёшка": "Русская деревянная расписная кукла появилась в России в 90-х годах XIX века, в период бурного экономического и культурного развития страны."
    };
  }

  render() {
    return(
      <ul>
        {
          Object.keys(this.content).map(function (key) {
            return <li key={key}>{key}</li>;
          })
        }
      </ul>
    );
  }
}

export default Tabs;
