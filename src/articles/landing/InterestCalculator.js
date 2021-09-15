/**
 * we want to track PORTFOLIO VALUE over time
 * PRINCIPAL over time
 * PROFIT over time
 */

import interestEnums from './interestEnums';
import WidgetBase from './WidgetBase.js';
import {
  ty,
} from '../../colorful-text';
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
  const quote = "If your brother becomes poor and cannot maintain himself with you, you shall support him as though he were a stranger and a sojourner, and he shall live with you.";
  const {
    focused,
    dollarCostAverage,
    lumpSum,

    contributionAmount,
    contributionFrequency,
    profitAmount,
    profitFrequency,
    investmentTime,
    investmentTimeUnits,

  } = props;
  const c = useStyles();


  // internally we will use days as the basic time unit
  //

  const generateData = () => {
    /**
     * datum at cash injection periods and at end, growth is pretty linear elsewhere?
     */

    let generation = 0;
    let generations = 365;

    // the starting cash is one installment of the reoccuring payment
    // first calculate interest, then add new funds
    let total = contributionAmount;
    let data = [];

    for (let i = 0; i < generations; i++) {
      // calculate the interest
      total *= 1.1;

      // add funds

      total += contributionAmount;

      data.append({x: generation, y: total});
    }

    // 365.25 datums per year


  };

  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ];

  return (
    <WidgetBase focused={focused}>
      <Box component="div" display="flex" flexDirection="row" justifyContent="center">
        <Typography className={c.quoteText} align="center">
          <q>{quote}</q> <br/>
          <Typography align="right" className={c.quoteText}></Typography>
        </Typography>
      </Box>

      <Box component="div" display="flex" flexDirection="row" justifyContent="center">
        <Typography className={clsx(c.quoteText, c.quoteAuthor)} align="right">
          - Moses Probably
        </Typography>
      </Box>

      {dollarCostAverage &&
        <div className={clsx(c.slightlySmaller, c.investingText)}>
          <ty.WidgetText align="left" display="block">
              Using <b>dollar cost average</b> strategy, <br/>
              investing <b>$100</b> weekly, <br/>
              at an average <b>10%</b> return, <br/>
              over a period of <b>20 years</b>.
          </ty.WidgetText>


          <VictoryChart
            theme={VictoryTheme.material}
          >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={data}
            />
          </VictoryChart>
        </div>

      }

    </WidgetBase>
  );
};

export default InterestCalculator;
