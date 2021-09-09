/**
 * this is the landing page, there will be fun stuff, and articles
 */

import Bass from '../Bass.js';
import {
} from '@material-ui/core';
import {
  ty
} from '../../colorful-text';
import {
  useState,
  useEffect,
} from 'react';
import TabSelector from './TabSelector.js';
import Gallery from './Gallery.js';
import ArticleSelector from './ArticleSelector.js';

const Article = () => {
  const [tab, setTab] = useState(0);
  const [focus, setFocus] = useState(0);

  const handleKeys = e => {
    if (e.key === 'q') {
      console.log(tab);
      if (tab === 0) {
        handleArticleClick();
      } else {
        handleFunStuffClick();
      }
    }
  };

  const handleFunStuffClick = () => {
    setTab(0);
  };

  const handleArticleClick = () => {
    setTab(1);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeys, true);
    return () => {
      document.removeEventListener('keyup', handleKeys, true);
    };
  });

  return (
    <Bass>
      <ty.Title serif>Placeholder</ty.Title>
      <TabSelector focus={focus === 0} tab={tab} clickHandlers={[handleFunStuffClick, handleArticleClick]}/>
      <br/>
      {
        tab === 0 &&
        <Gallery/>
      }

      {
        tab === 1 &&
        <ArticleSelector/>
      }
    </Bass>
  );
};

export default Article;
