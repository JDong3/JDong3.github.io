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
  } = props;

  const [group, setGroup] = useState(0);
  const [article, setArticle] = useState(0);

  const handleKeys = (e) => {
    if (e.key === 'w') {
      console.log(e.key);
    } else if (e.key === 'a') {
      console.log(e.key);
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
          practicalArticleNames.map((articleName, i) => (
            <ArticleEntry key={i} href={practicalArticleLinks[i]}>
              <b>{articleName}</b>
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
          articleNames.map((articleName, i) => (
            <ArticleEntry key={i} href={articleLinks[i]}>
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
  } = props;

  return (
    <Box component="div" className={c.thirty}>
      <Typography variant="body2" className={clsx(c.body)}>
        <To href={href}>
          {children}
          <External/>
        </To>
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

const mapStateToProps = (state) => (
  {
    articleNames: state.articleNames,
    articleLinks: state.articleLinks,
    practicalArticleNames: state.practicalArticleNames,
    practicalArticleLinks: state.practicalArticleLinks,
  }
);

export default connect(mapStateToProps)(ArticleIndex);
