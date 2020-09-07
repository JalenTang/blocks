import { CHANGE_DRAG_COMPONENT, DragDropActionTypes } from './types';

export function changeDragType(type: string): DragDropActionTypes {
    return {
        type: CHANGE_DRAG_COMPONENT,
        payload: { type },
    };
}
