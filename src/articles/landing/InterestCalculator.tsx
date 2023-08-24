/**
 * we want to track PORTFOLIO VALUE over time
 * PRINCIPAL over time
 * PROFIT over time
 */

import {
    inDays,
} from './InvestmentEnums.js';
import WidgetBase from './WidgetBase.jsx';
import {
    VictoryChart,
    VictoryLine,
    VictoryTheme,
} from 'victory';

import clsx from 'clsx';

import {
    Box,
    makeStyles,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => (
    {
        quoteText: {
            fontFamily: 'serif',
            width: '80%',
        },

        quoteTopSectionMargin: {
            marginTop: '23px',
        },

        quoteAuthor: {
            marginRight: '25px',
        },

        slightlySmaller: {
            width: '90%',
            marginLeft: '5%',
        },

        investingText: {
            paddingTop: '27px',
            paddingBottom: '40px',
        },
    }
));
const InterestCalculator = props => {
    /**
   * config props
   * props.contributionAmount, number, amount contributed in a certain period
   * props.contributionFrequency, daily, weekly, monthly, or anually
   * props.profitAmount,
   * props.profitFrequency,
   * props.investmentTime,
   * props.investmentTimeUnits,
   *
   * flag props
   * props.dollarCostAverage, bool, display dollar cost average ui?
   * props.lumpSum, bool, display lump sum ui?
   */
    // const quote = 'If your brother becomes poor and cannot maintain himself with you, you shall support him as though he were a stranger and a sojourner, and he shall live with you.';
    // const {
    //     focused,
    //     contributionAmount,
    //     contributionFrequency,// every how many weeks
    //     profitPerAn,// per year
    //     years, // number of years

    // } = props;
    // const c = useStyles();

    // // internally we will use days as the basic time unit
    // //

    // const generateData = () => {
    // /**
    //  * datum at cash injection periods and at end, growth is pretty linear elsewhere?
    //  */

    //     let generations = Math.floor(years * inDays.year);

    //     // the starting cash is one installment of the reoccuring payment
    //     // first calculate interest, then add new funds
    //     let total = contributionAmount;
    //     let principal = contributionAmount;
    //     let profit = 0;

    //     let totalData = [];
    //     let principalData = [];
    //     let profitData = [];

    //     for (let i = 0; i < generations; i++) {
    //         // calculate the interest
    //         total *= Math.E ** (profitPerAn * 0.01 * (1 / 365.25));
    //         // add funds

    //         if ((i + 1) % contributionFrequency === 0) {
    //             total += contributionAmount;
    //             principal += contributionAmount;
    //         }

    //         let year = i / 365.25;

    //         totalData.push({x: year, y: total});
    //         principalData.push({x:year, y: principal});
    //         profitData.push({x:year, y: total - principal});
    //     }
    //     // 365.25 datums per year
    //     return {
    //         totalData,
    //         principalData,
    //         profitData,
    //     };

    // };

    // const {totalData, principalData, profitData} = generateData();

    // return (
    //     <WidgetBase focused={focused}>
    //         <Box component="div" display="flex" flexDirection="column" justifyContent="center">
    //             <Box component="div" display="flex" flexDirection="row" justifyContent="center">
    //                 <Typography className={c.quoteText} align="center">
    //                     <q>{quote}</q>
    //                 </Typography>
    //             </Box>
    //             <Typography align="right" className={c.quoteText}></Typography>
    //         </Box>

    //         <Box component="div" display="flex" flexDirection="row" justifyContent="center">
    //             <Typography className={clsx(c.quoteText, c.quoteAuthor)} align="right">
    //       - Moses Probably
    //             </Typography>
    //         </Box>
    //         <div className={clsx(c.slightlySmaller, c.investingText)}>
    //             <ty.WidgetText align="left" display="block">
    //           Investing <b>${contributionAmount}</b>,
    //           every <b>{contributionFrequency}</b> week, <br/>
    //           at a <b>{profitPerAn}%</b> return per annum,<br/>
    //           compounding, for <b>{years} years</b>.
    //             </ty.WidgetText>

    //             <VictoryChart theme={VictoryTheme.material}>
    //                 <VictoryLine
    //                     style={{
    //                         data: { stroke: 'black' },
    //                         parent: { border: '1px solid #ccc'}
    //                     }}
    //                     data={totalData}
    //                 />
    //                 <VictoryLine
    //                     style={{
    //                         data: { stroke: 'grey' },
    //                         parent: { border: '1px solid #ccc'}
    //                     }}
    //                     data={principalData}
    //                 />

    //                 <VictoryLine
    //                     style={{
    //                         data: { stroke: 'orange' },
    //                         parent: { border: '1px solid #ccc'}
    //                     }}
    //                     data={profitData}
    //                 />

    //             </VictoryChart>
    //         </div>

    //     </WidgetBase>
    // );
    return <></>;
};

export default InterestCalculator;
