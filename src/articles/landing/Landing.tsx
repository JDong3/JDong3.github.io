/**
 * this is the landing page, there will be fun stuff, and articles
 */
import {
    inDays,
} from './InvestmentEnums.js';
import Bass from '../Bass.jsx';
import {
    useState,
    useEffect,
} from 'react';
import {
    connect,
} from 'react-redux';
import Gallery from './Gallery.jsx';
import ColorPicker from './ColorPicker.jsx';
import InterestCalculator from './InterestCalculator.jsx';
import WidgetList from './WidgetList.jsx';
import WidgetSelector from './WidgetSelector.tsx';
import ArticleIndex from './ArticleIndex.tsx';
import WidgetBase from './WidgetBase.jsx';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {
    Title,
    ArticleSection,
    ArticleText,
} from '../../parts/Typographyd.tsx';

import Introduction from '../introductions/Introduction.tsx';
import PixelKeyIcons from '../pixel-key-icons/PixelKeyIcons.tsx';
import Randim from '../randim/Randim.tsx';
import TheEvolutionaryOriginsOfTruth from '../the-evolutionary-origins-of-truth/TheEvolutionaryOriginsOfTruth.tsx';
import TheVirusOfProgress from '../the-virus-of-progress/TheVirusOfProgress.tsx';
import GodNo2 from '../speculation-on-paul-vanderklays-god-number-2/GodNo2.tsx';
import TheTrueMotivationOfBusiness from '../the-true-motivation-of-business/TheTrueMotivationOfBusiness.tsx';
import ScientificTheoriesAsTruth from '../scientific-theories-as-truth/ScientificTheoriesAsTruth.tsx';
import { ArticleDatum, State } from '../../redux/reducer.ts';

interface LandingProps {
    focusedWidget: number,
    articleData: Array<ArticleDatum>
}

/**
 * this is the landing page, it consists of a card to navigate between
 * articles, and a component that display them
 * @param {*} props
 * @returns
 */
const Landing = ({focusedWidget, articleData}: LandingProps) => {

    const [tab, setTab] = useState(0);
    const [focus, setFocus] = useState(0);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [contributionAmount, setContributionAmount] = useState(100);
    const [contributionFrequency, setContributionFrequency] = useState(1);
    const [profitPerAn, setProfitPerAn] = useState(10.0);
    const [years, setYears] = useState(1);

    console.log(articleData);

    // focus is an integer that keeps track of which widget is in focus
    return (
        <div>
            <Bass>
                <Title serif noGutter>Main Page</Title>
                <WidgetList/>
                <WidgetSelector/>

                {focusedWidget === 0 && <ArticleIndex/>}
                {focusedWidget !== 0 &&
          <WidgetBase>
              <ArticleSection>
                Development Halted
              </ArticleSection>
          </WidgetBase>
                }

            </Bass>
            {
                focusedWidget === 0 &&
        <Router>
            <Switch>

                <Route exact path="/">
                    <Introduction/>
                </Route>
                <Route path={articleData[0].links[0]}>
                    <Introduction/>
                </Route>
                <Route path={articleData[0].links[1]}>
                    <PixelKeyIcons/>
                </Route>
                <Route path={articleData[0].links[2]}>
                    <Randim/>
                </Route>
                {/* <Route path={articleData[0].links[1]}>
              <Articles.YoloV4LiveStream/>
            </Route> */}

                <Route path={articleData[1].links[0]}>
                    <TheEvolutionaryOriginsOfTruth/>
                </Route>
                <Route path={articleData[1].links[1]}>
                    <TheVirusOfProgress/>
                </Route>
                <Route path={articleData[1].links[2]}>
                    <GodNo2/>
                </Route>
                <Route path={articleData[1].links[3]}>
                    <TheTrueMotivationOfBusiness/>
                </Route>
                <Route path={articleData[1].links[4]}>
                    <ScientificTheoriesAsTruth/>
                </Route>
                {/* <Route path={articleData[1].links[5]}>
              <Articles.MostTreesAreBlue/>
            </Route> */}
            </Switch>
        </Router>
            }
        </div>
    );
};

const mapStateToProps = (state: State) => (
    {
        focusedWidget: state.focusedWidget,
        articleData: state.articleData,
    }
);

export default connect(mapStateToProps)(Landing);
