import WidgetBase from './WidgetBase.js';
import {
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import {
  To,
} from '../../colorful-text';
import {
  connect
} from 'react-redux';
import external from './assets/external.png';
import {
  W,
  A,
  S,
  D,
  Enter,
} from './Keys.js';
import produce from 'immer';

import {
  useState,
  useEffect,
} from 'react';

const useStyles = makeStyles(() => (
  {
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
      marginLeft: '17px',
    },

    thirty: {
      width: '50%',
    },

    articlesContainer: {
      // paddingBottom: '23px',
    },

    smallGutter: {
      paddingBottom: '15px',
    },

    gutter: {
      paddingBottom: '23px',
    },
  }
));

const ArticleIndex = props => {
  const c = useStyles();
  const {
    articleNames,
    articleLinks,
    practicalArticleNames,
    practicalArticleLinks,
    combinedArticleLinks,
    forbidden,
  } = props;

  const [article, setArticle] = useState(0);
  const totalArticles = articleNames.length + practicalArticleNames.length;

  const handleKeys = (e) => {

    let res = article;

    if (e.key === 'w') {
      res = Math.max(0, article - 2);
    } else if (e.key === 'a') {
      res = Math.max(0, article - 1);
    } else if (e.key === 's') {
      res = Math.min(totalArticles - 1, article + 2);
    } else if (e.key === 'd') {
      res = Math.min(totalArticles - 1, article + 1);
    }
    if (e.key === 'Enter') {
      window.open(`#${combinedArticleLinks[article]}`, '_blank');
    }

    if (forbidden.indexOf(res) === -1) {
      setArticle(res);
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
      <Box component="div" className={clsx(c.h4)} display="flex">
        <Typography variant="h5" style={{marginRight: '13px'}} className={clsx(c.serif)}>
          Practical Articles
        </Typography>
        <Typography variant="body2" style={{opacity: '0.7'}}>
          <W rightGutter/><A rightGutter/><S rightGutter/><D/> navigation, <Enter/> Select
        </Typography>
      </Box>
      <Box component="div" display="flex" flexDirection="row" flexWrap="wrap" className={c.articlesContainer}>
        {
          practicalArticleNames.filter(articleName => articleName !== '').map((articleName, i) => (
            <ArticleEntry key={i} selected={i == article} href={practicalArticleLinks[i]}>
              {articleName}
            </ArticleEntry>
          ))
        }
      </Box>
      <div className={c.smallGutter}/>
      <Box component="div" className={clsx(c.h4)}>
        <Typography variant="h5" className={clsx(c.serif)}>
          Impractical Articles (Philosophy)
        </Typography>
      </Box>
      <Box component="div" display="flex" flexDirection="row" flexWrap="wrap" className={c.articlesContainer}>
        {
          articleNames.filter(articleName => articleName !== '').map((articleName, i) => (
            <ArticleEntry selected={i + practicalArticleNames.length === article} key={i} href={articleLinks[i]}>
              {articleName}
            </ArticleEntry>
          ))
        }
      </Box>
      <div className={c.gutter}/>
    </WidgetBase>
  );
};

const ArticleEntry = props => {
  const c = useStyles();
  const {
    children,
    href,
    selected,
  } = props;

  return (
    <Box component="div" className={c.thirty}>
      <Typography variant="body2" className={clsx(c.body)}>
        {!selected && <To href={href}>
          {children}
          <External/>
        </To>}

        {selected && <To href={href}>
          <b>{children}</b>
          <External/>
        </To>}
      </Typography>
    </Box>
  );
};

const External = props => {
  const c = useStyles();

  return (
    <img src={external} className={c.external}/>
  );
};

const mapStateToProps = (state) => {

  let forbidden = [];
  if (state.practicalArticleNames.length % 2 == 1) {
    forbidden.push(state.practicalArticleNames.length );
  }
  if (state.articleNames.length % 2 == 1) {
    forbidden.push(state.articleNames.length + state.practicalArticleNames.length + forbidden.length);
  }



  let newState = produce(state, draft => {
    if (state.practicalArticleNames.length % 2 == 1) {
      draft.practicalArticleNames.push('');
      draft.practicalArticleLinks.push('');
    }
    if (state.articleNames.length % 2 == 1) {
      draft.articleNames.push('');
      draft.articleLinks.push('');
    }

  });

  let combinedArticleLinks = [];
  newState.practicalArticleLinks.forEach(link => combinedArticleLinks.push(link));
  newState.articleLinks.forEach(link => combinedArticleLinks.push(link));

  return (
    {
      articleNames: newState.articleNames,
      articleLinks: newState.articleLinks,
      practicalArticleNames: newState.practicalArticleNames,
      practicalArticleLinks: newState.practicalArticleLinks,
      combinedArticleLinks: combinedArticleLinks,
      forbidden: forbidden,
    }
  );
};

export default connect(mapStateToProps)(ArticleIndex);
