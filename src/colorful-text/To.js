import Text from './Text.js'
import {
    makeStyles,
} from '@material-ui/core'
import {
    Link,
} from 'react-router-dom'
import {useEffect} from 'react'


let useStyles = makeStyles(theme => (
    {
        standard: {
            color: 'inherit',
            textDecoration: 'underline',
        }
    }
))


let To = (props) => {
/**
 * :param props.href:
 * :param link: bool, use Link element
 */

    let {href, children, link, scroll} = props
    let classes = useStyles()
    let scrollToTop = undefined

    if (scroll) {
        scrollToTop = () => window.scrollTo(0, 0)
    }



    if (link) {
        return (
            <Link to={href} className={classes.standard} onClick={scrollToTop}>{children}</Link>
        )
    }

    return (
        <a href={href} className={classes.standard}>{children}</a>
    )
}

export default To
