import {
  Paper,
} from '@material-ui/core';

const ArticleSelector = props => {

  const {focus} = props;

  return (
    <Paper elevation={focus ? 5 : 1}>
      article selector here
    </Paper>
  );
};

export default ArticleSelector;
