import Bass from '../Bass.jsx';

import ty from '../../parts/Typographyd.jsx';
import clsx from 'clsx';

import { Box, makeStyles } from '@material-ui/core';
import black from './assets/black.bmp';
import random from './assets/random.bmp';
import randomgreyscale from './assets/randomgreyscale.bmp';

const useStyles = makeStyles(() => (
    {
        center: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap'
        },

        illustrationsLarge: {
            height: '512px',
        },

        illustrationsComparison: {
            height: '300px',
            margin: '5px'
        }
    }
));

const Speculation = () => {
    const c = useStyles();
    return <Bass>

        <ty.Title smaller serif>
            Random Image
        </ty.Title>

        <ty.ArticleSection gutter>
            Description
        </ty.ArticleSection>

        <ty.ArticleText gutter slightlySmaller>

            Random Image (randim) is a python3 based command line tool that allows the user to generate RNG based images with a few options for configuration.

            <br/>

            <b>Project Link:</b> <a href="https://github.com/JDong3/randim" target="_blank">https://github.com/JDong3/randim</a>

        </ty.ArticleText>

        <ty.ArticleSection gutter>
            Examples
        </ty.ArticleSection>

        <ty.ArticleText gutter slightlySmaller>
            A black image with 400x800 pixels resolution (native resolution), using the seed 'asdf', output to 'black.bmp'.
            <br/>
            <code>python randim.py --type black --width 400 --height 800 --seed asdf --output black.bmp</code>
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={black}></img></Box>
        </Box>

        <ty.ArticleText gutter>
            A 'random' image, where each pixel has an RGB value chosen pseudo randomly, with a 654x456 pixel native resolution, using the seed 'asdf', output to 'random.bmp'.
            <br/>
            <code>python randim.py --type random --width 654 --height 456 --seed asdf --output random.bmp</code>
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={random}></img></Box>
        </Box>

        <ty.ArticleText gutter>
            A 'random greyscale' image, like random, but the image can only contain grey pixels, with native resolution 1920x1080, using the seed 'asdf', and output to 'randomgreyscale.bmp'.
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={randomgreyscale}></img></Box>
        </Box>

    </Bass>;

};

export default Speculation;
