import { createAction, props } from '@ngrx/store';
import { Stage } from '../interfaces/stage';

export interface StagesPayload {
  stages: Stage[];
}

export interface UpdateStagesPayload {
  value: Value;
  stageId: string;
  questionId: string;
}

interface Value {
  code: string;
  itemActive: boolean;
}

export const loadStages = createAction(
  '[Stage] load stages',
  props<StagesPayload>()
);

export const updateStages = createAction(
  '[Stage] update stages',
  props<UpdateStagesPayload>()
);

export const stagesUpdated = createAction(
  '[Stage] stages updated',
  props<StagesPayload>()
);

export const saveStages = createAction(
  '[Stage] save stages'
);

export const stagesSaved = createAction(
  '[Stage] stages saved'
);
