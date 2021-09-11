import {
  Paper,
} from '@material-ui/core';
import WidgetBase from './WidgetBase.js';

const ArticleSelector = props => {

  const {focused} = props;

  return (
    <WidgetBase focused={focused}>
      article selector here
    </WidgetBase>
  );
};

export default ArticleSelector;
