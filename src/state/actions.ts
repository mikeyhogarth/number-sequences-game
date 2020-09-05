export interface Action {
  type: string;
  payload: Payload;
}

export interface Payload {
  levelNumber: number;
}

/**
 * Action Creators
 */
export function completeLevel(levelNumber: number): Action {
  return { type: "COMPLETE_LEVEL", payload: { levelNumber } };
}
