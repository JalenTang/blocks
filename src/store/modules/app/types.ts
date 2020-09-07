export const CHANGE_BAR_MENU_KEY = 'CHANGE_BAR_MENU_KEY';
export const CHANGE_CARD_VISIBLE = 'CHANGE_CARD_VISIBLE';

export interface GlobalState {
    cardVisible: boolean;
    selectedKeys: string[];
};

interface ChangeBarMenuAction {
    type: typeof CHANGE_BAR_MENU_KEY,
    payload: {
        key: string
    }
}

interface ChangeCardVisibleAction {
    type: typeof CHANGE_CARD_VISIBLE,
    payload: {
        cardVisible: boolean
    }
}

export type GlobalActionTypes = ChangeBarMenuAction | ChangeCardVisibleAction;
