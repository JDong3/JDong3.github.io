/**
 * this is the landing page, there will be fun stuff, and articles
 */

import Bass from '../Bass.js';
import {
	makeStyles,
	Box,
	Paper,
} from '@material-ui/core';
import {
	Text,
	Title,
} from '../../colorful-text';
import clsx from 'clsx';
import {
	useState,
	useEffect,
} from 'react';

const useStyles = makeStyles(() => (
	{
		commonText: {
			marginTop: '20px',
			marginBottom: '20px',
			userSelect: 'none',
		},

		deselected: {
			opacity: '40%',
			'&:hover': {
				cursor: 'pointer',
				textDecoration: 'underline',
			},
		},

		selected: {
			'&:hover': {
				cursor: 'pointer',
			},
		},
	}
));

const Article = () => {
	const tabs = {
		funStuff: 'funStuff',
		articles: 'articles',
	};
	const c = useStyles();
	const [tab, setTab] = useState(tabs.funStuff);
	const isFunStuff = tab === tabs.funStuff;

	const handleTabToggle = e => {
		console.log(e);
		console.log('key', e.key);
		if (e.key === 'q') {
			if (tab === tabs.funStuff) {
				setTab(tabs.articles);
			} else {
				setTab(tabs.funStuff);
			}
		}
	};

	const handleFunStuffClick = () => {
		setTab(tabs.funStuff);
	};

	const handleArticleClick = () => {
		setTab(tabs.articles);
	};

	useEffect(() => {
		document.addEventListener('keyup', handleTabToggle);
	}, []);

	return (
		<Bass>
			<Title serif>Placeholder</Title>
			<Paper elevation={1}>
				<Box component="div" display="flex" flexDirection="row" justifyContent="space-evenly">
					<Box component="span">
						<Text onClick={handleFunStuffClick} variant="h4" className={clsx(isFunStuff && c.selected, !isFunStuff && c.deselected, c.commonText)} serif>
							Fun Stuff
						</Text>
					</Box>

					<Box component="span">
						<Text onClick={handleArticleClick} variant="h4" serif className={clsx(!isFunStuff && c.selected, isFunStuff && c.deselected, c.commonText)}>
							Articles
						</Text>
					</Box>
				</Box>
			</Paper>
		</Bass>
	);
};

export default Article;
