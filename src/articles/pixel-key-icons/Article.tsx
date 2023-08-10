import Bass from '../Bass.jsx';
import {
    To,
    ty
} from '../../parts/index.ts';

import KeyIcon from '../../parts/KeyIcon.tsx';
import KeyIconString from '../../parts/KeyIconString.tsx';
import illustration1 from './assets/illustrations-for-pixel-key-icons-large1.png';
import illustration2 from './assets/illustrations-for-pixel-key-icons-large2.png';
import illustration3 from './assets/illustrations-for-pixel-key-icons-large3.png';
import illustration4 from './assets/illustrations-for-pixel-key-icons-large4.png';
import illustration5 from './assets/illustrations-for-pixel-key-icons-large5.png';

import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

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
            <Box><img className={clsx(c.illustrationsLarge)} src={illustration1}></img></Box>
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

        <ty.ArticleSection gutter>
            The EF Dilemma
        </ty.ArticleSection>

        <ty.ArticleText slightlySmaller>
            In general, the design of the characters, A, B, C, D are without incident, but there is a slight problem when it comes to E, and F. Which is that the center horizontal line of E, cannot be placed exactly centrally, equal distance from the top and bottom of the character, it must be placed either closer to the top or closer to the bottom, because the height of the character is 8px, which is an even number.
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <img src={illustration2} className={clsx(c.illustrationsComparison)}/>
            <img src={illustration3} className={clsx(c.illustrationsComparison)}/>
        </Box>

        <ty.ArticleText slightlySmaller gutter>
            However, as it is, with all things with limits, there must be a compromise, if we wanted to place the central horizontal line of the E right in the center, we would have to double the resolution of our character set to 32x32 pixels, but that was not part of the plan. But the solution is simple, do both, and decide which one is better, so seen above, there is the E with the central horizontal line closer to the top, and the E with the central horizontal line closer to the bottom. And according to my eyes, the E with the central line closer to the top looks more natrual, so that was selected for the final design.

            <br/>
            <br/>

            And so this became a commonly used princlple, all of the characters with some sort of central horizonal line are A, B, E, F, G, H, R, S.

            <br/>
            <br/>

            <KeyIconString content="abefghrs" size='64px'/>

            <br/>
            <br/>

            Of those, B, E, F, H, R, S, prefer a central horizontal line closer to the top. And A, and G prefer a central horizontal line closer to the bottom.
        </ty.ArticleText>

        <ty.ArticleSection gutter>Multiple Problems With I</ty.ArticleSection>

        <ty.ArticleText gutter slightlySmaller>

            If you look at the design or almost all I characters, you will see two horizontal lines at the top and bottom of the character, and a pillar, straight down the center connecting the top and bottom. There is almost no getting away from this reality. Now there is always a problem with symmetry and even pixel resolutions in pixel-art, but there is a possible solution which may work sometimes, which is to double the thickness in the center.
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>

            <img src={illustration4} className={clsx(c.illustrationsComparison)}/>
            <img src={illustration5} className={clsx(c.illustrationsComparison)}/>
        </Box>

        <ty.ArticleText gutter slightlySmaller>

            Now here we come to a crossroads, because if I must say so, for the character I in isolation, it seems that to double the thickness of the central pillar seems to be the better choice, as it simply looks good, and it maintains the overall central symmetry, however in the full context, if we decide to go with this solution, it does have some knock-on effects. So say that I has a double thickness central pillar, then should other characters with a central pillar also have it be double thickness. This would affect J, T, Y, but then with the double thick central pillars, those characters begin to stand out, and the overall character set starts to look half regular, and half bold. And what about M and W, do those characters need a double thick central pillar, and if central pillars are double thick, then do side pillars like on E, F, L also need to be double thick? So in my judgement, it seemed that the double thickness solution so solving the symmetry issue of I was not good.

            <br/>
            <br/>

            The issue with the symmetry of I first arose because the width of all characters up to this point was even, however, if it were allowed that characters could have odd widths, then it would also solve the issue. However, if a character had an odd width, then it would not be possible to center the character in the middle of the icon. So it was decided, mostly arbitrarily, that for characters that needed central vertial symmetry, that they would have an odd width, and the character would be offset 1 pixel to the right, instead of the left, just to maintain consistency accross all icons.
        </ty.ArticleText>
    </Bass>;
};

export default Article;