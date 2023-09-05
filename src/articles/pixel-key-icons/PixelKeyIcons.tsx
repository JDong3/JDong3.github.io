import Bass from '../Bass.jsx';
import {
    Title,
    ArticleSection,
    ArticleText
} from '../../parts/Typographyd.jsx';

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

const PixelKeyIcons = () => {

    const c = useStyles();

    return <Bass>

        <Title smaller>
            Pixel Key Icons
        </Title>

        <ArticleSection>Description</ArticleSection>

        <ArticleText>
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

        </ArticleText>

        <ArticleSection>Purpose</ArticleSection>

        <ArticleText>
            The purpose of the pixel-key-icons project was to create a set of keyboard key icons.
        </ArticleText>

        <ArticleSection>Constraints and Principles</ArticleSection>

        <ArticleText>
            Given that the icons are pixel art, there are natrually quite a few constraints to our design. The following image of the A key icon serves as a base-case that has all the default specifications for our icon designs in general.
        </ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <Box><img className={clsx(c.illustrationsLarge)} src={illustration1}></img></Box>
        </Box>

        <ArticleSection>
            The Character Icons
        </ArticleSection>

        <ArticleText>
            These are all of the character icons in 64px.

            <br/>
            <br/>

            <KeyIconString content="abcdefghijklmnopqrstuvwxyz" size="64px"/>

        </ArticleText>

        <ArticleSection>
            The EF Design Dilemma
        </ArticleSection>

        <ArticleText>
            The first challenge arose in the characters E, and F. Because it turns out that the center horizontal line of the E, and F cannot be placed exactly centrally, equal distance from the top and bottom of the character. But instead, it must be placed either closer to the top, or closer to the bottom by 1 pixel, just a natural limitation of pixel art.
        </ArticleText>

        <Box component="div" className={clsx(c.center)}>
            <img src={illustration2} className={clsx(c.illustrationsComparison)}/>
            <img src={illustration3} className={clsx(c.illustrationsComparison)}/>
        </Box>

        <ArticleText>

            So this is what we do, once we accept that the central line of the E cannot truly be central, we just have to draw two Es, one with the central line closer to the top, and one with the central line closer to the bottom, and then using our judgement we just pick one. And so seen above, there is the E with the central horizontal line closer to the top, and the E with the central horizontal line closer to the bottom. And according to my judgement, the E with the central line closer to the top looks more natrual, so we just go with it. And so, we did the same for all characters which had some sort of central horizontal line, those characters were A, B, E, F, G, H, R, S. Of those, B, E, F, H, R, S, prefer a central horizontal line closer to the top. And A, and G prefer a central horizontal line closer to the bottom.

            <br/>
            <br/>

            <KeyIconString content="befhrs" size='64px'/>
            <br/><br/>
            <KeyIconString content="ag" size='64px'/>

            <br/>
            <br/>

        </ArticleText>

        <ArticleSection>Multiple Design Issues With I</ArticleSection>

        <ArticleText>
            If you look at the character "I", you will see that it's horizontally symmetrical, for there are two horizontal lines at the top and bottom of the character, and a pillar going straight down the center. So unless you are willing to create a very stylized "I" that needs no symmetry, it's just there. Now normally if you wish to draw a symmetrical object in pixel art, you simply make an object of an odd width, because having a 1 pixel line of symmetry, and symmetrical pixels on either side of it, you get a width of 2x+1, being odd. However, it is also possible to have a 2 pixel wide line of symmetry giving you an even width item (2x+2), both options are shown below.
        </ArticleText>

        <Box component="div" className={clsx(c.center)}>

            <img src={illustration4} className={clsx(c.illustrationsComparison)}/>
            <img src={illustration5} className={clsx(c.illustrationsComparison)}/>
        </Box>

        <ArticleText>

            So here we come to a crossroads, because in this case, it seems like the 2 pixel wide line of symmetry is just the more elegant solution. It looks good, it keeps the rule of characters being 6 pixels wide, and it keeps the character centered in the icon overall. Meanwhile the 1 pixel wide line of symmetry solution makes the character not 6 pixels wide, and forces it to be offset 1 pixel to the left or right, breaking the symmetry of the character placement within the icon overall.

            <br/>
            <br/>

            So at first, I did try to go along with the 2 pixel line of symmetry solution, because it was just so simple and elegant. However, it soon turned out that the elegance of the I, was about to make the overall design of the icon set quite a bit more complicated. Because when setting out to design a set of icons, there needs to be a certain amount of consistency between the icons, otherwise they just don't belong in the same set. So for example, if the I had a central vertical pillar, and it was 2 pixels wide, then surely other characters with central vertical pillars should also have it be 2 pixels wide. But then, if all characters with central vertical pillars have a 2 pixel wide pillar, then characters without them would look "regular" compared to them, and the characters with the pillars look bold in contrast, so then we have a character set being half regular, and half bold. So basically there is a whole array of knock-on effects that arise from using the 2 pixel pillar. So in the end it was just the lesser of two headaches to accept breaking the symmetry of the character placement within the icon, and allowing the creation of odd width characters. This turned out to also help with characters like M, Y, and V.

        </ArticleText>

        <ArticleSection>Notable Characters</ArticleSection>

        <ArticleText>
            Shoutout to the characters G, K, N, V, and X, their design stands above the other characters.

            <br/><br/>

            <KeyIconString content="gknvx" size="64px"/>

            <br/><br/>

             I'm not that satisfied with M, Q, and R, they were quite tricky, and I don't think that they are at full potential.

            <br/><br/>
            <KeyIconString content="mqr" size="64px"/>
        </ArticleText>
    </Bass>;
};

export default PixelKeyIcons;