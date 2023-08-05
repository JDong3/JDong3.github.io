import Bass from '../Bass.jsx';
import {
    ty
} from '../../parts/index.ts';

import KeyIcon from '../../parts/KeyIcon.tsx';

const Article = () => {
    return <Bass>

        <ty.Title smaller serif>
            Pixel Key Icons
        </ty.Title>

        <ty.ArticleSection gutter>Description</ty.ArticleSection>

        <ty.ArticleText slightlySmaller>
            test 123 <KeyIcon symbol='a' size='16px'/>
        </ty.ArticleText>
    </Bass>;
};

export default Article;