import {
    Box,
    Button,
    Card,
    Container,
    Paper,
    Typography,
    makeStyles
} from '@material-ui/core'


const useStyles = makeStyles(theme => (
    {
        spacingFromTop: {
            marginTop: '80px',
            marginBottom: '80px'
        },

        portrait: {
            float: 'right',
            height: '230px',
            width: '230px',
            borderRadius: '6%',
            opacity: '0.7',
            marginLeft: '12px',
            zIndex: '-1'
        },
    }
))

let Bass = (props) => {
    let classes = useStyles()
    return (
        <Container maxWidth="md" className={classes.spacingFromTop}>
            <Paper style={{background:'transparent', color:'white'}} elevation={0}>
                {props.children}
            </Paper>
        </Container>
    )
}

export default Bass
