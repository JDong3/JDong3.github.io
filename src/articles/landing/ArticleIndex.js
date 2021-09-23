import WidgetBase from './WidgetBase.js';
import {
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import {
  To,
} from '../../parts';
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
    articleData
  } = props;

  const [group, setGroup] = useState(0);
  const [article, setArticle] = useState(0);
  const [loaded, setLoaded] = useState(0); // which article is loaded

  const handleKeys = (e) => {

    let res;

    // first check if we have to switch groups
    let changeGroups = false;
    switch (e.key) {
    case 'w':
      changeGroups = (article - 2 < 0) && !(group - 1 < 0);
      break;
    case 'a':
      changeGroups = (article - 1 < 0) && !(group - 1 < 0);
      break;
    case 's':
      changeGroups = (
        (article + 2 > articleData[group].names.length - 1) &&
        !(group + 1 > articleData.length - 1)
      );
      break;
    case 'd':
      changeGroups = (
        (article + 1 > articleData[group].names.length - 1) &&
        !(group + 1 > articleData.legnth - 1)
      );
      break;
    }

    // if we have to change groups
    if (changeGroups) {

      switch (e.key) {
      case 'w':
      case 'a':
        setGroup(group - 1);
        setArticle(articleData[group].names.length - 1);
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
      window.open(`#${combinedArticleLinks[article]}`, '_blank');
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
          articleData[0].names.map((articleName, i) => (
            <ArticleEntry key={i} selected={i == article && group === 0} href={articleData[0].links[i]}>
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
          articleData[1].names.map((articleName, i) => (
            <ArticleEntry selected={i === article && group === 1} key={i} href={articleData[1].links[i]}>
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

const mapStateToProps = (state) => (
  {
    articleData: state.articleData
  }
);

export default connect(mapStateToProps)(ArticleIndex);
