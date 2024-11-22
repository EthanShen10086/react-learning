import { recipes } from './data.js';
// import React from 'react';
import { Fragment } from 'react';
export default function RecipeList() {
	// <React.Fragment key={parentIndex}>
	// 	<h2>{item.name}</h2>
	// 	<ul>{ingredentItemList}Ï</ul>
	// </React.Fragment>
	const ingredentList = recipes.map((item, parentIndex) => {
		const ingredentItemList = item.ingredients.map((subItem, index) => {
			return <li key={index}>{subItem}</li>;
		});
		return (
			<Fragment key={parentIndex}>
				<h2>{item.name}</h2>
				<ul>{ingredentItemList}</ul>
			</Fragment>
		);
	});
	return (
		<div>
			<h1>菜谱</h1>
			{ingredentList}
			{/* 封装成组件然后数据由父组件注入 */}
			{/* <Recipe {...recipe} key={recipe.id} /> */}
		</div>
	);
}
