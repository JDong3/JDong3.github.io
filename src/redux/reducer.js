import produce from 'immer';

const initialState = {
  focusedWidget: 0,
  totalWidgets: 4,

  articleNames: [
    'The Evolutionary Origins of Truth',
    'The Virus of Progress',
    'Speculation on God no.2',
    'The True Motivations of Business',
    'Scientific Theories as Truth',
  ],
  articleLinks: [
    '/the-evolutionary-origins-of-truth',
    '/the-virus-of-progress',
    '/speculation-on-god-no2',
    '/the-true-motivations-of-business',
    '/scientific-theories-as-truth',
  ],

  practicalArticleNames: [
    'Introductions'
  ],
  practicalArticleLinks: [
    '/introductions'
  ],
};

const reducer = (state=initialState, action) => {
  let res;

  switch (action.type) {
  case 'widget/goLeft':
    res = produce(state, draft => {
      if (draft.focusedWidget == 0) {
        draft.focusedWidget = draft.totalWidgets - 1;
      } else {
        draft.focusedWidget = draft.focusedWidget - 1;
      }
    });

    break;

  case 'widget/goRight':
    res = produce(state, draft => {
      if (draft.focusedWidget == draft.totalWidgets - 1) {
        draft.focusedWidget = 0;
      } else {
        draft.focusedWidget = draft.focusedWidget + 1;
      }
    });

    break;

  default:
    res = state;
  }

  return res;
};

export default reducer;
