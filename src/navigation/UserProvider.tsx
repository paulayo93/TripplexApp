import {
  createContext,
  useReducer,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { getAsyncStorage, setAsyncStorage } from '@utils/asyncStorageManager';

export interface UserContextValue {
  isActiveUser: string;
  dispatch: any;
  updateUser: () => void;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export const initialData = {
  isActive: 'false',
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_STATUS':
      state.isActive = action.payload;
      console.log(state, action.payload);
      return state;
    default:
      return state;
  }
};

export const UserProvider = (props: any) => {
  const [state, dispatch] = useReducer(userReducer, initialData);

  const updateUser = useCallback(() => {
    console.log('I am here now.........');
    if (state.isActive === 'false') {
      dispatch({ type: 'UPDATE_USER_STATUS', payload: 'true' });
    }
  }, [state.isActive]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userContext: UserContextValue = useMemo(
    () => ({
      updateUser,
      dispatch,
      isActiveUser: state.isActive,
    }),
    [updateUser, state.isAcitve],
  );

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContext');
  }
  return context;
};
