import React from 'react';

export const CHANGE_DRAW_VISIBLE = 'CHANGE_DRAW_VISIBLE';
export const CHANGE_MENU_KEY = 'CHANGE_MENU_KEY';

type StateType = {
    cardVisible: boolean;
    selectedKeys: string[];
};
type ActionType = {
    type: string;
};
export type ReducerType = React.Reducer<StateType, ActionType>;

export const reducer: ReducerType = (state, action) => {
    switch (action.type) {
        case CHANGE_DRAW_VISIBLE:
            return { ...state, cardVisible: !state.cardVisible };
        case CHANGE_MENU_KEY:
            return { ...state, selectedKeys: [state.selectedKeys] };
        default:
            return state;
    }
};

export type ContextType = React.Context<{
    state: StateType;
    dispatch?: React.Dispatch<ActionType>;
}>;

export const initialState: StateType = {
    cardVisible: false,
    selectedKeys: ['images'],
};

export const changeDrawVisibleAction: () => ActionType = () => ({ type: CHANGE_DRAW_VISIBLE });

export const StoreContext: ContextType = React.createContext({ state: initialState });
