import {
  makeStyles,
} from '@material-ui/core';
import {
  Link,
} from 'react-router-dom';

const useStyles = makeStyles(() => (
  {
    standard: {
      color: 'inherit',
      textDecoration: 'underline',
    },
  }
));

const To = props => {
/**
 * :param props.href:
 * :param link: bool, use Link element
 */

  const {href, children, link, scroll} = props;
  const classes = useStyles();
  let scrollToTop;

  if (scroll) {
    scrollToTop = () => window.scrollTo(0, 0);
  }

  if (link) {
    return (
      <Link to={href} className={classes.standard} onClick={scrollToTop} {...props}>{children}</Link>
    );
  }

  return (
    <Link to={href} target='_blank' className={classes.standard} rel="noreferrer noopener" {...props}>{children}</Link>
  );
};

export default To;
