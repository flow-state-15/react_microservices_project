import type {
  CalcStore,
  Result,
  Action,
  HistoryObject,
  HistoryAction,
  ResultAction,
  ClearHistoryAction,
} from "../../types";

export const ADD_HISTORY = "calc/ADD_HISTORY" as const;
export const CLEAR_HISTORY = "calc/CLEAR_HISTORY" as const;
export const HISTORY_STRING = "calc/HISTORY_STRING" as const;
export const CURR_RESULT = "calc/CURR_RESULT" as const;

export function add_history_action(payload: HistoryObject): HistoryAction {
  return {
    type: ADD_HISTORY,
    payload,
  };
}

export function clear_history_action(): ClearHistoryAction {
  return {
    type: CLEAR_HISTORY,
  };
}

export function curr_result_action(result: Result): ResultAction {
  return {
    type: CURR_RESULT,
    payload: result,
  };
}

const initialState: CalcStore = {
  history: [
    {
      historyString: "",
      calculatedValue: 0,
    },
  ],
  currentResult: 0,
};

export default function calc_reducer(
  state = initialState,
  action: Action,
): CalcStore {
  switch (action.type) {
    case ADD_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    case CLEAR_HISTORY:
      return { ...state, history: [] };
    case CURR_RESULT:
      return { ...state, currentResult: action.payload };
  }
}
