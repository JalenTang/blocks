import {
    CHANGE_BAR_MENU_KEY,
    CHANGE_CARD_VISIBLE,
    GlobalActionTypes
} from './types';

export function changeMenu({ key }: { key: string }): GlobalActionTypes {
    return {
        type: CHANGE_BAR_MENU_KEY,
        payload: { key },
    };
}

export function changeCardVisible({ cardVisible }: { cardVisible: boolean }): GlobalActionTypes {
    return {
        type: CHANGE_CARD_VISIBLE,
        payload: { cardVisible },
    };
}
