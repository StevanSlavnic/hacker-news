import React from 'react';

import Header from './Header/Header';
import classes from './Layout.module.scss';

function Layout(props) {
	return (
		<div className={classes.LayoutRoot}>
			<Header/>
			<div className={classes.MainWrap}>
				<main className={classes.Main}>{props.children}</main>
			</div>
		</div>
	);
}

export default Layout;
