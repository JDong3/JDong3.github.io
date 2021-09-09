import {
	Container,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => (
	{
		spacingFromTop: {
			marginTop: '80px',
			marginBottom: '80px',
		},
		slightlySmaller: {
			width: '90%',
			marginLeft: '5%',
		},
		minHeight: {
			minHeight: '70vh',
		},
	}
));

const Bass = props => {
	const classes = useStyles();
	return (
		<Container maxWidth="md" className={`${classes.spacingFromTop} ${classes.minHeight}`}>
			<Container className={classes.slightlySmaller}>
				{props.children}
			</Container>
		</Container>
	);
};

export default Bass;
