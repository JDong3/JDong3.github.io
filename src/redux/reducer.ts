import {produce} from 'immer';
import { Action } from 'redux';

export interface ArticleDatum {
    category: string,
    names: Array<string>,
    links: Array<string>
}

export interface State {
    focusedWidget: number,
    totalWidgets: number,
    articleData: Array<ArticleDatum>
}

const initialState = {
    focusedWidget: 0,
    totalWidgets: 4,

    articleData: [
        {
            category: 'Projects',
            names: [
                'Introduction',
                'Pixel Key Icons',
                'Random Image',
                // 'yolov4-live-stream',
            ],
            links: [
                '/introduction',
                '/pixel-key-icons',
                '/random-image'
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

const reducer = (state: State = initialState, action: Action) => {
    let res = initialState;

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
