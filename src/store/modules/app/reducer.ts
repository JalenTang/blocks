import { CHANGE_BAR_MENU_KEY, CHANGE_CARD_VISIBLE, GlobalActionTypes, GlobalState } from './types';

const initialState: GlobalState = {
    cardVisible: false,
    selectedKeys: []
}

export const appReducer = (state = initialState, action: GlobalActionTypes): GlobalState => {
    switch (action.type) {
        case CHANGE_BAR_MENU_KEY:
            return { ...state, selectedKeys: [action.payload.key] };
        case CHANGE_CARD_VISIBLE:
            return { ...state, cardVisible: action.payload.cardVisible };
        default:
            return state;
    }
}
