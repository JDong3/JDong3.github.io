import Bass from '../Bass.jsx';
import {
    To,
    ty
} from '../../parts/index.ts';

import KeyIcon from '../../parts/KeyIcon.tsx';
import KeyIconString from '../../parts/KeyIconString.tsx';

const Article = () => {
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

        <ty.Title smaller serif>In Detail</ty.Title>

        <ty.ArticleSection gutter>Starting Contraints and Goals</ty.ArticleSection>

        <ty.ArticleText slightlySmaller>The purpose of pixel-key-icons is to create a set of icons of keyboard keys, so that they could be used to show users keyboard controlls/shortcuts of web apps.</ty.ArticleText>
    </Bass>;
};

export default Article;