import {
    makeStyles
} from '@material-ui/core'

import clsx from 'clsx'

/**
 * custom image object
 */

let useStyles = makeStyles(theme => (
    {
        fullImg: {
            width: '95%',
            border: '2px',
            borderColor: 'grey',
            borderStyle: 'solid',
        },

        fullTop: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: '30px',
        },

        fullBottom: {
            width: '95%',
        },

        fullBottomOuter: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: '30px'
        },

        right: {
            float: 'right',
            marginLeft: '18px',
            marginBottom: '18px',
            background: 'white',
        },

        rounded: {
            borderRadius: '6px'
        }
    }
))

let Img = (props) => {
    /**
     * :param props.src: Image, how src works for image tags in jsx
     * :param props.caption: String, caption text for the image
     * :param type: full
     */

    let {src, caption, type, width, rounded} = props
    let classes = useStyles()
    let full = () => (
        <div>
            <div className={classes.fullTop}>
                <img src={src} className={classes.fullImg}></img>
            </div>
            <div className={classes.fullBottomOuter}>
                <div className={classes.fullBottom}><i>{caption}</i></div>
            </div>
        </div>

    )

    width = width || '35%'
    let right = () => {
        let className = classes.right
        if (rounded) {
            className = clsx(classes.right, classes.rounded)
        }
        return (<img src={src} className={className} style={{width: `${width}`}}/>)
    }

    return (
        <div>
            {(props.type == 'full') && full()}
            {(props.type == 'right') && right()}
        </div>

    )
}

export default Img
