import {produce} from 'immer';

const initialState = {
    focusedWidget: 0,
    totalWidgets: 4,
    // totalWidgets: 4,

    articleData: [
        {
            category: 'Practical Articles',
            names: [
                'Introduction',
                // 'yolov4-live-stream',
            ],
            links: [
                '/introduction',
                // '/yolov4-live-stream',
            ]
        },

        {
            category: 'Impractical Articles (Philosophy)',
            names: [
                'The Evolutionary Origins of Truth',
                'The Virus of Progress',
                'Speculation on God no.2',
                'The True Motivation of Business',
                'Scientific Theories as Truth',
            ],
            links: [
                '/the-evolutionary-origins-of-truth',
                '/the-virus-of-progress',
                '/speculation-on-god-no2',
                '/the-true-motivation-of-business',
                '/scientific-theories-as-truth',
            ]
        },

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
