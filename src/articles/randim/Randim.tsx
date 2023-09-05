import Bass from '../Bass.jsx';

import {
    Title,
    ArticleSection,
    ArticleText,
} from '../../parts/Typographyd.js';
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
            height: '300px',
        },

        illustrationsComparison: {
            height: '300px',
            margin: '5px'
        }
    }
));

const Randim = () => {
    const c = useStyles();
    return <Bass>

        <Title smaller serif>
            Random Image
        </Title>

        <ArticleSection>
            Description
        </ArticleSection>

        <ArticleText>

            Random Image (randim) is a python3 based command line tool that allows the user to generate RNG based images with a few options for configuration.

            <br/>

            <b>Project Link:</b> <a href="https://github.com/JDong3/randim" target="_blank">https://github.com/JDong3/randim</a>

        </ArticleText>

        <ArticleSection>
            Examples
        </ArticleSection>

        <ArticleText>
            A black image with 400x800 pixels resolution (native resolution), using the seed 'asdf', output to 'black.bmp'.
            <br/>
            <code>python randim.py --type black --width 400 --height 800 --seed asdf --output black.bmp</code>
        </ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={black as string}></img></Box>
        </Box>

        <ArticleText>
            A 'random' image, where each pixel has an RGB value chosen pseudo randomly, with a 654x456 pixel native resolution, using the seed 'asdf', output to 'random.bmp'.
            <br/>
            <code>python randim.py --type random --width 654 --height 456 --seed asdf --output random.bmp</code>
        </ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={random as string}></img></Box>
        </Box>

        <ArticleText>
            A 'random greyscale' image, like random, but the image can only contain grey pixels, with native resolution 1920x1080, using the seed 'asdf', and output to 'randomgreyscale.bmp'.
            <br/>
            <code>python randim.py --type randomgreyscale --width 1920 --height 1080 --seed asdf --output randomgreyscale.bmp</code>
        </ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={randomgreyscale as string}></img></Box>
        </Box>

    </Bass>;

};

export default Randim;