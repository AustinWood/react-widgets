import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './frontend/tabs.jsx';

const content = {
	"Бабушка": "Женщина, имеющая внуков. В разговорной речи часто просто пожилая женщина.",
	"Гопник": "Жаргонное слово русского языка, обозначающее представителей городской прослойки низкого социального статуса, малообразованной, агрессивно настроенной молодёжи",
	"Матрёшка": "Русская деревянная расписная кукла появилась в России в 90-х годах XIX века, в период бурного экономического и культурного развития страны."
};

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Tabs tabContent = {content} />, root);
});
