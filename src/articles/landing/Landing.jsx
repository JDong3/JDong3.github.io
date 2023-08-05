/**
 * this is the landing page, there will be fun stuff, and articles
 */
import {
    inDays,
} from './InvestmentEnums.js';
import Bass from '../Bass.jsx';
import {
    ty
} from '../../parts/index.ts';
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
import * as Articles from '../index.ts';

/**
 * this is the landing page, it consists of a card to navigate between
 * articles, and a component that display them
 * @param {*} props
 * @returns
 */
const Landing = (props) => {

    const {
        focusedWidget,
        articleData,
    } = props;
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
                <ty.Title serif noGutter>Main Page</ty.Title>
                <WidgetList/>
                <WidgetSelector/>

                {focusedWidget === 0 && <ArticleIndex/>}
                {focusedWidget !== 0 &&
          <WidgetBase>
              <ty.ArticleSection>
                Development Halted
              </ty.ArticleSection>
          </WidgetBase>
                }

            </Bass>
            {
                focusedWidget === 0 &&
        <Router>
            <Switch>

                <Route exact path="/">
                    <Articles.Introductions/>
                </Route>
                <Route path={articleData[0].links[0]}>
                    <Articles.Introductions/>
                </Route>
                <Route path={articleData[0].links[1]}>
                    <Articles.PixelKeyIcons/>
                </Route>
                {/* <Route path={articleData[0].links[1]}>
              <Articles.YoloV4LiveStream/>
            </Route> */}

                <Route path={articleData[1].links[0]}>
                    <Articles.TheEvolutionaryOriginsOfTruth/>
                </Route>
                <Route path={articleData[1].links[1]}>
                    <Articles.TheVirusOfProgress/>
                </Route>
                <Route path={articleData[1].links[2]}>
                    <Articles.SpeculationOnPaulVanderklaysGodNumber2/>
                </Route>
                <Route path={articleData[1].links[3]}>
                    <Articles.TheTrueMotivationOfBusiness/>
                </Route>
                <Route path={articleData[1].links[4]}>
                    <Articles.ScientificTheoriesAsTruth/>
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

const mapStateToProps = (state) => (
    {
        focusedWidget: state.focusedWidget,
        articleData: state.articleData,
    }
);

export default connect(mapStateToProps)(Landing);
