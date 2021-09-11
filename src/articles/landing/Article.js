/**
 * this is the landing page, there will be fun stuff, and articles
 */

import Bass from '../Bass.js';
import {
  Box,
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
import ColorPicker from './ColorPicker.js';

const Article = () => {
  const [tab, setTab] = useState(0);
  const [focus, setFocus] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // focus is an integer that keeps track of which widget is in focus
  const maxWidgets = 3;
  const handleKeys = e => {
    // j and k to move up and down, overrides everything
    if (e.key === 'j') {
      if (tab === 1) {
        setFocus(Math.min(focus + 1, 1));
      } else {
        setFocus(Math.min(focus + 1, maxWidgets - 1));
      }

    } else if (e.key === 'k') {
      setFocus(Math.max(focus - 1, 0));
    }

    // active when tab selector is in focus
    if (focus === 0) {
      if (e.key === 'q') {
        console.log(tab);
        if (tab === 0) {
          handleArticleClick();
        } else {
          handleFunStuffClick();
        }
      }
    }

    // gallery is in focus
    if (focus === 1) {
      if (e.key === 'e') {
        setGalleryIndex(Math.min(galleryIndex + 1, 9));
      } else if (e.key === 'q') {
        setGalleryIndex(Math.max(galleryIndex - 1, 0));
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
    document.addEventListener('keypress', handleKeys, true);
    return () => {
      document.removeEventListener('keypress', handleKeys, true);
    };
  });

  return (
    <Bass>
      <ty.Title serif>Placeholder</ty.Title>
      <TabSelector focused={focus === 0} tab={tab} clickHandlers={[handleFunStuffClick, handleArticleClick]}/>
      <br/>
      {
        tab === 0 &&
        <Box component="div">
          <Gallery focused={focus === 1} galleryIndex={galleryIndex}/>
          <ColorPicker focused={focus === 2}/>
        </Box>
      }

      {
        tab === 1 &&
        <ArticleSelector focused={focus === 1}/>
      }
    </Bass>
  );
};

export default Article;
