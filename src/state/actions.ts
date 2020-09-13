export interface Action {
  type: string;
  payload: Payload;
}

export interface Payload {
  levelIndex?: number;
}

/**
 * Action Creators
 */
export function completeLevel(levelIndex: number): Action {
  return { type: "COMPLETE_LEVEL", payload: { levelIndex } };
}

export function resetProgress(): Action {
  return { type: "RESET_PROGRESS", payload: {} };
}
