export const CHANGE_DRAG_COMPONENT = 'CHANGE_DRAG_COMPONENT';

interface ChangeDragComponentAction {
    type: typeof CHANGE_DRAG_COMPONENT,
    payload: {
        type: string
    }
}

export type DragDropActionTypes = ChangeDragComponentAction;

export type DragDropOptions = {};

export interface DragDropState {
    type: string;
    options?: DragDropOptions;
}
