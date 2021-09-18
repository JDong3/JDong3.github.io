import produce from 'immer';

const initialState = {
  focusedWidget: 0,
  totalWidgets: 4,
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

  case 'weidget/goRight':
    res = produce(state, draft => {
      if (draft.focusedWidget == draft.totalWidget - 1) {
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
