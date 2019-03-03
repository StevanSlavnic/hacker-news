import React from 'react';

import classes from './ItemsList.module.scss';

function ItemsList(props) {
	return (
		<div {...props} className={[ classes.ItemList, props.className ].join(' ')}>
			{props.children}
		</div>
	);
}

export default ItemsList;
