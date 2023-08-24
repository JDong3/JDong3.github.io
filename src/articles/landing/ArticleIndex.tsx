import WidgetBase from './WidgetBase.jsx';
import {
    Box,
    makeStyles,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import To from '../../parts/To.js';
import {
    useHistory,
} from 'react-router-dom';
import {
    connect
} from 'react-redux';
// import external from './assets/external.png';
// import produce from 'immer';

import {
    useState,
    useEffect,
    ReactNode,
} from 'react';
import KeyIconString from '../../parts/KeyIconString.js';
import KeyIcon from '../../parts/KeyIcon.js';
import { ArticleDatum, State } from '../../redux/reducer.js';

const useStyles = makeStyles(() => (
    {
        practicalArticlesLineStyle: {
            display: 'flex',
            flexDirection: 'row',
        },
        external: {
            height: '1em',
            display: 'inline',
        },

        serif: {
            fontFamily: 'serif',
        },

        h4: {
            marginLeft: '7px',
            paddingTop: '9px',
            marginBottom: '13px',
        },

        body: {
            marginLeft: '25px',
        },

        thirty: {
            width: '50%',
        },

        smallGutter: {
            paddingBottom: '15px',
        },

        gutter: {
            paddingBottom: '23px',
        },

        articlesContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap:'wrap',
        }
    }
));

interface ArticleIndexProps {
    articleData: Array<ArticleDatum>
}

/**
 * ArticleIndex is the component that "indexes" all the articles, it provides a
 * card that displays the articles, and allows for navigation between the
 * articles
 */
const ArticleIndex = ({articleData}: ArticleIndexProps) => {
    const c = useStyles();

    const [group, setGroup] = useState(0);
    const [article, setArticle] = useState(0);
    // const [loaded, setLoaded] = useState(0); // which article is loaded
    const history = useHistory();

    const handleClick = (whichGroup: number, whichArticle: number) => (
        () => {
            setGroup(whichGroup);
            setArticle(whichArticle);
        }
    );

    const handleKeys = (e : KeyboardEvent) => {

        // first check if we have to switch groups
        let changeGroups = false;
        switch (e.key) {
        case 'w':
            changeGroups = (article < 2) && (group > 0);
            break;
        case 'a':
            changeGroups = (article < 1) && (group > 0);
            break;
        case 's':
            changeGroups = (
                (article >= articleData[group].names.length - 2) &&
        (group < articleData.length - 1)
            );
            break;
        case 'd':
            changeGroups = (
                (article >= articleData[group].names.length - 1) &&
        (group < articleData.length - 1)
            );
            break;
        }

        // if we have to change groups
        if (changeGroups) {

            switch (e.key) {
            case 'w':
            case 'a':
                setGroup(group - 1);
                setArticle(articleData[group - 1].names.length - 1);
                break;

            case 's':
            case 'd':
                setGroup(group + 1);
                setArticle(0);
                break;
            }

        } else {

            if (e.key === 'w') {
                setArticle(Math.max(0, article - 2));
            } else if (e.key === 'a') {
                setArticle(Math.max(0, article - 1));
            } else if (e.key === 's') {
                setArticle(Math.min(articleData[group].names.length - 1, article + 2));
            } else if (e.key === 'd') {
                setArticle(Math.min(articleData[group].names.length - 1, article + 1));
            }

        }

        if (e.key === 'Enter') {
            history.push(`${articleData[group].links[article]}`);
        }

    };

    useEffect(() => {
        document.addEventListener('keypress', handleKeys, true);
        return () => {
            document.removeEventListener('keypress', handleKeys, true);
        };
    });

    return (
        <WidgetBase>
            <Box id="hi" component="div" className={clsx(c.h4, c.practicalArticlesLineStyle)}>
                <Typography variant="h5" style={{marginRight: '13px'}} className={clsx(c.serif)}>
          Projects
                </Typography>
                <Typography variant="body2" style={{opacity: '0.7'}}>
                    <KeyIconString content='wasd' size='16px'/> navigation, <KeyIcon symbol='enter' size='16px'/> Select
                </Typography>
            </Box>
            <Box component="div" className={c.articlesContainer}>
                {
                    articleData[0].names.map((articleName, i) => (
                        <ArticleEntry key={i} onClick={handleClick(0, i)} selected={i == article && group === 0} href={articleData[0].links[i]} id={articleName}>
                            {articleName}
                        </ArticleEntry>
                    ))
                }
            </Box>
            <div className={c.smallGutter}/>
            <Box component="div" className={clsx(c.h4)}>
                <Typography variant="h5" className={clsx(c.serif)}>
          Philosophy
                </Typography>
            </Box>
            <Box component="div" className={c.articlesContainer}>
                {
                    articleData[1].names.map((articleName, i) => (
                        <ArticleEntry onClick={handleClick(1, i)} selected={i === article && group === 1} key={i} href={articleData[1].links[i]} id={articleName}>
                            {articleName}
                        </ArticleEntry>
                    ))
                }
            </Box>
            <div className={c.gutter}/>

        </WidgetBase>
    );
};

interface ArticleEntryProps {
    children: ReactNode,
    href: string,
    selected?: boolean,
    onClick: () => void,
    id: string,
}

const ArticleEntry = ({children, href, selected, onClick, id}: ArticleEntryProps) => {
    const c = useStyles();

    return (
        <Box component="div" className={c.thirty}>
            <Typography variant="body2" className={clsx(c.body)}>
                <li onClick={onClick} id={id}>
                    {!selected && <To href={href}>
                        {children}
                    </To>}

                    {selected && <To href={href}>
                        <b>{children}</b>
                    </To>}

                </li>

            </Typography>
        </Box>
    );
};

// const External = props => {
//     const c = useStyles();

//     return (
//         <img src={external} className={c.external}/>
//     );
// };

const mapStateToProps = (state: State) => (
    {
        articleData: state.articleData
    }
);

export default connect(mapStateToProps)(ArticleIndex);
