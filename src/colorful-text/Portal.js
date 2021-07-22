import {
    makeStyles
} from '@material-ui/core'


let useStyles = makeStyles(theme => (
    {
        greenLink: {
            color: '#40bb40',
            cursor: 'pointer'
        }
    }
))

let Portal = (props) => {
    /**
     * a link that is green, that is also internal, that MUST tigger a full page
     * reload. Put a Typography around this
     * :param props.to: str, this to will be given to an anchor tag to use a href
     * :param props.text: str, the text of the portal shown to the user
     */

    let classes = useStyles()
    let handleClick = () => {
        console.log(`portal entered to: ${props.to}`)
        window.location.href = props.to
    }

    return (
        <span className={classes.greenLink} onClick={handleClick}>
            {props.text}
        </span>
    )
}

export default Portal
