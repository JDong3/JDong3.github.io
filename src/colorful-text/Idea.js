import {
    makeStyles,
    Typography,
    Dialog,
} from '@material-ui/core'
import {useState} from 'react'
import {Link} from 'react-router-dom'

let useStyles = makeStyles(theme => (
    {
        ideaStuff: {
            color: '#e88e8e',
            textDecoration: 'underline'
        },
    }
))

let Idea = (props) => {
/**
 * :param props.text: the text for the idea
 * :param props.to: link to where
 *
 */

let classes = useStyles()
    let {to} = props

    return (
        <Link to={to}><Typography
            variant={props.variant || 'body'}
            className={classes.ideaStuff}>

            {props.children}

        </Typography></Link>
    )
    // {hovered && hoveredStuff()}
}

export default Idea
