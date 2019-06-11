import React, {
  createContext,
  Context,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from 'react';

export type QueryParam = string | number | boolean | (string | number)[];

export interface State {
  url: string;
  queryParams: {
    [param: string]: QueryParam;
  };
}

export enum ActionType {
  SET_URL,
  ADD_QUERY_PARAM,
  RESET,
  RESET_QUERY,
}

export type Action =
  | {
      type: ActionType.SET_URL;
      payload: { url: string };
    }
  | {
      type: ActionType.ADD_QUERY_PARAM;
      payload: {
        [param: string]: QueryParam;
      };
    }
  | {
      type: ActionType.RESET;
    }
  | {
      type: ActionType.RESET_QUERY;
    };

const initialState: State = {
  url: '',
  queryParams: {},
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_URL:
      return {
        ...state,
        url: action.payload.url,
      };

    case ActionType.ADD_QUERY_PARAM:
      return {
        ...state,
        queryParams: {
          ...state.queryParams,
          ...action.payload,
        },
      };

    case ActionType.RESET:
      return initialState;

    case ActionType.RESET_QUERY:
      return {
        ...state,
        queryParams: {},
      };

    default:
      return state;
  }
};

const UrlStateContext: Context<State> = createContext(initialState);

const UrlDispatchContext: Context<Dispatch<Action>> = createContext(
  (null as unknown) as any,
);

function UrlProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UrlDispatchContext.Provider value={dispatch}>
      <UrlStateContext.Provider value={state}>
        {children}
      </UrlStateContext.Provider>
    </UrlDispatchContext.Provider>
  );
}

function useUrl(): [State, Dispatch<Action>] {
  const state = useContext(UrlStateContext);
  const dispatch = useContext(UrlDispatchContext);
  return [state, dispatch];
}

export { UrlProvider, useUrl };
