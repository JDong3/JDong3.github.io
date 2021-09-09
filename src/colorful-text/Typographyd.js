/**
 * reuseable derivatives of the Typography class from material-ui
 */
import {
	makeStyles,
	Typography,
} from '@material-ui/core';
import clsx from 'clsx';

/**
 * the title of an article
 */
const useStyles = makeStyles(() => (
	{
		titleDivider: {
			marginTop: '1px',
			marginBottom: '27px',
		},

		serif: {
			fontFamily: 'serif',
		},

		sansSerif: {
			fontFamily: 'sans-serif',
		},
	}
));
const Title = props => {
	const {smaller, children, serif} = props;
	const variant = smaller ? 'h2' : 'h1';
	const c = useStyles();

	const theme = clsx(serif && c.serif, !serif && c.sansSerif);
	return (
		<span>
			<Typography variant={variant} className={theme}>
				{children}<hr className={c.titleDivider}/>
			</Typography>
		</span>
	);
};

export {
	Title,
};
