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
            Pixel Key Icons
        </ty.Title>

        <ty.ArticleSection gutter>Description</ty.ArticleSection>

        <ty.ArticleText slightlySmaller gutter>
            Pixel art keyboard key icons, available in 16px (small), 32px (medium), and 64px (large) sizes. Currently has the 26 characters in English, and the enter key.
            <br/>
            <b>Project Link: </b>
            <a href="https://github.com/jdong3/pixel-key-icons" target="_blank" rel="noreferrer">https://github.com/jdong3/pixel-key-icons</a>

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

        </ty.ArticleText>

        <ty.ArticleSection gutter>Purpose</ty.ArticleSection>

        <ty.ArticleText slightlySmaller gutter>
            The purpose of the pixel-key-icons project was to create a set of icons of keyboard keys, to be used in other designs, and projects, and other good purposes that seem fit.
        </ty.ArticleText>

        <ty.ArticleSection gutter>Constraints and Principles</ty.ArticleSection>

        <ty.ArticleText slightlySmaller>
            Given that the icons are pixel art, there are natrually quite a few constraints to our design. The following image of the A key icon, serves as a base-case that has all the default values for our icon designs in general.
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={illustration1}></img></Box>
        </Box>

        <ty.ArticleText gutter slightlySmaller>
            The design starts with a blank canvas of 16x16 pixels, with a border drawn around the canvas giving the icon the shape of a keyboard key, and then a reasonably sized, and centered character, filling up a good portion of the icon. So in the end, due to the limitations, and math, a character of 6x8 pixels, with margins going clockwise from the top of 2px, 4px, 3px, 4px, and borders going clockwise from the top of 1px, 1px, 2px, 1px, ends up being the default starting point of our icon designs. And later on as the design was worked out, it will turn out that the borders of all the icons, and the height and vertical centering of the all characters would remain constant. But the width of the characters, and so its horizontal centering, would differ, with the character's width going from 5 pixels to 7 pixels, and the margins on either side of the characters going from 4 pixels to 5 pixels.
        </ty.ArticleText>

        <ty.ArticleSection gutter>
            The Character Icons
        </ty.ArticleSection>

        <ty.ArticleText gutter slightlySmaller>
            These are all of the character icons, in their 64px size, from A to Z.

            <br/>
            <br/>

            <KeyIconString content="abcdefghijklmnopqrstuvwxyz" size="64px"/>

        </ty.ArticleText>

        <ty.ArticleSection gutter>
            The EF Dilemma
        </ty.ArticleSection>

        <ty.ArticleText slightlySmaller>
            In the start, the design of the characters, A, B, C, and D went without incident, and the first challenge arose in the characters E, and F. Which is that the center horizontal line of the E, and F cannot be placed exactly centrally, equal distance from the top and bottom of the character. But instead, it must be placed either closer to the top or closer to the bottom, by 1px, because the height of the character is 8px, which is an even number, and this is just a limitation of pixel art.
        </ty.ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <img src={illustration2} className={clsx(c.illustrationsComparison)}/>
            <img src={illustration3} className={clsx(c.illustrationsComparison)}/>
        </Box>

        <ty.ArticleText slightlySmaller gutter>
            And so it is, as with all things with limits, there must be a compromise in order to complete the work. So it was like this. if we wanted to place the central horizontal line of the E exactly in the center, It would be possible, we would have to double the resolution of our icon set to 32x32 pixels, upscale everythings exactly by 2 times, and then move the central line of the E down by 1 pixel. But in my opinion, this was not part of the plan, this was a drastic measure, and also not in the spirit of the challenge, which was to have a base resolution of 16x16 pixels.

            <br/><br/>

            So this is what we do, we accept that the central line of the E cannot truly be central, and we remind ourselves, who said that the central line must be central, so long as the E is perceived as an E, isn't it good enough? So the solution to the problem is simple, we just have to draw two Es, one with the central line closer to the top, and one with the central line closer to the bottom, and then, using our judgement, simply decide which is better. And so seen above, there is the E with the central horizontal line closer to the top, and the E with the central horizontal line closer to the bottom. And according to my judgement, the E with the central line closer to the top looks more natrual, so that was selected for the final design.

            <br/>
            <br/>

            And so, the same method of judgement was used for all characters which had some sort of central horizontal line, those characters were A, B, E, F, G, H, R, S. Of those, B, E, F, H, R, S, prefer a central horizontal line closer to the top. And A, and G prefer a central horizontal line closer to the bottom.

            <br/>
            <br/>

            <KeyIconString content="befhrs" size='64px'/>
            <br/><br/>
            <KeyIconString content="ag" size='64px'/>

            <br/>
            <br/>

        </ty.ArticleText>

        <ty.ArticleSection gutter>Multiple Issues With I</ty.ArticleSection>

        <ty.ArticleText gutter slightlySmaller>

            ie we need true symmetry in the character, but that will break symmetry of the character in the icon, we accept breaking symmetry of the character in the icon as the lesser evil<br/><br/>

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

        <ty.ArticleSection gutter>Notable Characters</ty.ArticleSection>

        <ty.ArticleText slightlySmaller gutter>
            Shoutout to the characters G, K, N, V, X, their design stands above the other characters.

            <br/><br/>

            <KeyIconString content="gknvx" size="64px"/>

            <br/><br/>

             I'm not that satisfied with M, Q, R, they were quite tricky, and I don't think that they are at full potential.

            <br/><br/>
            <KeyIconString content="mqr" size="64px"/>
        </ty.ArticleText>
    </Bass>;
};

export default Article;