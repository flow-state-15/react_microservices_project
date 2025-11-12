import type { ADD_HISTORY, CLEAR_HISTORY, CURR_RESULT } from "./redux/calc/calc_reducer";

type HistoryObject = {
  historyString: string;
  calculatedValue: Result;
};

export type CalcStore = {
  history: HistoryObject[];
  currentResult: Result;
};

export type Action = ResultAction | HistoryAction | ClearHistoryAction

export type ResultAction = {
  type: typeof CURR_RESULT,
  payload: Result
}

export type HistoryAction = {
  type: typeof ADD_HISTORY,
  payload: HistoryObject
}

export type ClearHistoryAction = {
  type: typeof CLEAR_HISTORY
}

export type Operators = '+' | '-' | '*' | '/';
export type Result = number | string

