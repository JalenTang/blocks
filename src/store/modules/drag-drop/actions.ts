import { CHANGE_DRAG_COMPONENT, DragDropActionTypes } from './types';

export function changeDragType({ type, subType }: { type: string, subType: string }): DragDropActionTypes {
    return {
        type: CHANGE_DRAG_COMPONENT,
        payload: { type, subType },
    };
}
