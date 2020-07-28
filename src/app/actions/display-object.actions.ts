import { createAction, props } from '@ngrx/store';
import { Stage } from '../interfaces/stage';

export interface DisplayObjectPayload {
    stages: Stage[];
}

// compileDisplayObject action
export const compileDisplayObject = createAction(
    '[DisplayObject] compile display object',
    props<DisplayObjectPayload>()
);

// displayObjectCompiled action
export const displayObjectCompiled = createAction(
    '[DisplayObject] display object compiled'
);
