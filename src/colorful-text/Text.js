import {Typography, makeStyles} from '@material-ui/core'
import clsx from 'clsx'

let useStyles = makeStyles(theme => (
    {
        text: {
            color: '#f3ef94',
        },

        largerText: {
            fontSize: '17px',
        },

        serif: {
            fontFamily: 'serif',
        },

        sansSerif: {
            fontFamily: 'sans-serif',
        }
    }
))

let Text = (props) => {
/**
 * :param props.variant: variant parameter for typography
 * :param props.id:
*/
    let {variant, id, serif} = props
    let classes = useStyles()

    let theme = classes.text
    if (!variant || variant == 'body') {
        theme = clsx(theme, classes.largerText)
    }

    if (serif) {
        theme = clsx(theme, classes.serif)
    } else {
        theme = clsx(theme, classes.sansSerif)
    }

    return (
        <Typography className={theme} align="justify" display="block" variant={props.variant || 'body'} id={props.id || undefined}>{props.children}</Typography>
    )
}

export default Text
