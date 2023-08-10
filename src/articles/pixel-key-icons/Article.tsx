import Bass from '../Bass.jsx';
import {
    To,
    ty
} from '../../parts/index.ts';

import KeyIcon from '../../parts/KeyIcon.tsx';
import KeyIconString from '../../parts/KeyIconString.tsx';
import illustration1 from './assets/illustrations-for-pixel-key-icons-large1.png';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
    {
        center: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
            marginBottom: '40px'
        },

        illustrations: {
            height: '512px'
        }
    }
));

const Article = () => {

    const c = useStyles();

    return <Bass>

        <ty.Title smaller serif>
            Pixel Key Icons (Description)
        </ty.Title>

        {/* <ty.ArticleSection gutter>Description</ty.ArticleSection> */}

        <ty.ArticleText slightlySmaller gutter>
            Pixel Key Icons (pixel-key-icons) is a collection of pixel art style keyboard icons, available in 16px (small), 32px (medium), and 64px (large) heights. Currently only the alpha and enter icons are available.

            <br/>
            <br/>

            <KeyIconString content='small the quick brown ' size='16px'/>

            <br/>
            <br/>
            <KeyIconString content='medium fox jumps over ' size='32px'/>

            <br/>
            <br/>
            <KeyIconString content='large the lazy dog' size='64px'/>

            <br/>
            <br/>

            <KeyIcon symbol='enter' size='16px' space/>
            <KeyIcon symbol='enter' size='32px' space/>
            <KeyIcon symbol='enter' size='64px'/>

            <br/>
            <br/>

            <b>Project Link: </b>

            <a href="https://github.com/jdong3/pixel-key-icons" target="_blank" rel="noreferrer">https://github.com/jdong3/pixel-key-icons</a>

        </ty.ArticleText>

        <ty.Title smaller serif>The Design</ty.Title>

        <ty.ArticleSection gutter>Purpose</ty.ArticleSection>

        <ty.ArticleText slightlySmaller gutter>
            The purpose of the pixel-key-icons project was to create a set of icons of keyboard keys, to be used in other designs good purposes that it is fit for.
        </ty.ArticleText>

        <ty.ArticleSection gutter>Constraints and Principles</ty.ArticleSection>

        <ty.ArticleText slightlySmaller>
            Given that the icons are in a pixel-art style, these constraints followed quite naturally. So consider the following image, showing the design of the A icon, as it serves as a base-case or a standard, by which all other icons were designed to.
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrations)} src={illustration1}></img></Box>
        </Box>

        <ty.ArticleText gutter slightlySmaller>
            The design starts with a blank canvas 16x16 pixels (shown in red). With a border drawn around the canvas giving the icon the shape of a keyboard key, and then the character sized, and centered filling up a good portion of the icon. And so we come to the arrangement of the base-case character having margins around it of 2 pixels on the top, 4 pixels on the sides, and 3 pixels on the bottom (shown in green). With the character itself being 6 pixels in width, and 8 pixels in height (shown in turquoise).

            <br/>
            <br/>

            So it will turn out that the height of the all characters designed would be constant at 8 pixels, but the width would go from 5 pixels 7 pixels, in order to keep with the style of the font, which was meant to be light, and trying to fill up the space in the icon, and trying to maintain a sense of symmetry.
        </ty.ArticleText>

        <ty.ArticleSection gutter>
            The Character Icons
        </ty.ArticleSection>

        <ty.ArticleText gutter slightlySmaller>
            These are all of the character icons, from A to Z.

            <br/>
            <br/>

            <KeyIconString content="abcdefghijklmnopqrstuvwxyz" size="64px"/>

        </ty.ArticleText>
    </Bass>;
};

export default Article;