/**
 * each card must have a constant height
 * must be narrower than the max width
 * must have an image on the right side
 * title, and a paragraph describing the stuff
 */

import {
    makeStyles,
} from '@material-ui/core'

import Text from './Text.js'
import Img from './Img.js'
let HEIGHT = 200

let useStyles = makeStyles(theme => (
    {
        cardOuter: {
            height: `${HEIGHT}px`,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '30px',
            marginBottom: '30px',

        },

        cardInner: {
            width: '97%',
            borderRadius: '6px',
            background: '#80808070'
        },

        image: {
            padding: '5px',
            opacity: '0.8'
        },

        title: {
            marginLeft: '10px',
            marginTop: '-5px',
            marginBottom: '5px',
        },

        description: {
            marginLeft: '12px',
        }
    }
))

let TechCard = (props) => {

/**
 * :param props.title: String, some title
 * :param src: src for img tag
 */

    let {title, src, children} = props
    let classes = useStyles()

    return (
        <div className={classes.cardOuter}>
            <div className={classes.cardInner}>
                <div className={classes.image}>
                    <Img type="right" src={src} width={`${HEIGHT-10}px`} rounded/>
                </div>

                <div className={classes.title}>
                    <Text variant="h5"><b>{title}</b></Text>
                </div>


                <div className={classes.description}>
                    <Text>{children}</Text>
                </div>
            </div>
        </div>
    )
}

export default TechCard
