/**
 * this is the landing page, there will be fun stuff, and articles
 */
import {
  inDays,
} from './InvestmentEnums.js';
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
import {
  connect,
} from 'react-redux';
import Gallery from './Gallery.js';
import ColorPicker from './ColorPicker.js';
import InterestCalculator from './InterestCalculator.js';
import WidgetList from './WidgetList.js';
import WidgetSelector from './WidgetSelector.js';
import ArticleIndex from './ArticleIndex.js';


const Article = (props) => {

  const {
    focusedWidget,
  } = props;
  const [tab, setTab] = useState(0);
  const [focus, setFocus] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [contributionAmount, setContributionAmount] = useState(100);
  const [contributionFrequency, setContributionFrequency] = useState(1);
  const [profitPerAn, setProfitPerAn] = useState(10.0);
  const [years, setYears] = useState(1);

  // focus is an integer that keeps track of which widget is in focus
  const maxWidgets = 4;
  const handleKeys = e => {
    return;

    // gallery is in focus
    if (focus === 1) {
      if (e.key === 'e') {
        setGalleryIndex(Math.min(galleryIndex + 1, 9));
      } else if (e.key === 'q') {
        setGalleryIndex(Math.max(galleryIndex - 1, 0));
      }
    }

    // color picker is in focus
    

    if (focus === 3) {
      if (e.key === 'q') {
        setContributionAmount(Math.max(contributionAmount - 100, 0));
      } else if (e.key === 'e') {
        setContributionAmount(contributionAmount + 100);
      } else if (e.key === 'a') {
        setProfitPerAn(Math.max(profitPerAn - 0.1, 0));
      } else if (e.key === 'd') {
        setProfitPerAn(profitPerAn + 0.1);
      } else if (e.key === 'z') {
        setYears(Math.max(years - 1, 1));
      } else if (e.key === 'c') {
        setYears(years + 1);
      } else if (e.key === 'r') {
        setContributionFrequency(Math.max(contributionFrequency - 1, 1));
      } else if (e.key === 'y') {
        setContributionFrequency(contributionFrequency + 1);
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
      <ty.Title serif noGutter>Placeholder</ty.Title>
      <WidgetList/>
      <WidgetSelector/>

      {focusedWidget === 0 && <ArticleIndex/>}
      {focusedWidget === 1 && <ColorPicker/>}


      {
        // tab === 0 &&
        // <Box component="div">
        //   <Gallery focused={focus === 1} galleryIndex={galleryIndex}/>
        //   <ColorPicker r={r} g={g} b={b} focused={focus === 2}/>
        //   <InterestCalculator contributionAmount={contributionAmount} contributionFrequency={contributionFrequency} profitPerAn={profitPerAn} years={years} focused={focus === 3}/>
        // </Box>
      }
    </Bass>
  );
};

const mapStateToProps = (state) => (
  {
    focusedWidget: state.focusedWidget,
  }
);

export default connect(mapStateToProps)(Article);
