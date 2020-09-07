import { CHANGE_DRAG_COMPONENT, DragDropState, DragDropActionTypes } from './types';

const initialState: DragDropState = {
    type: '',
    options: {}
};

export const dragDropReducer = (state = initialState, action: DragDropActionTypes): DragDropState => {
    switch (action.type) {
        case CHANGE_DRAG_COMPONENT:
            return {
                ...state,
                type: action.payload.type
            }
        default:
            return state;
    }
}
