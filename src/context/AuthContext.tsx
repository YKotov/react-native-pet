import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useFetching} from '../hooks/useFetching';
import {auth} from '../utils/rest/services/Auth.service';

interface AuthContextType {
  state: boolean;
  isLoading: boolean;
  setAuthState: (state: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthState = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthState must be used within a CounterProvider');
  }

  return context;
};

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, setState] = useState(false);

  const [fetchList, isLoading] = useFetching(async () => {
    const {data} = await auth.getAuthState(2);

    setState(data.state);
  });

  const setAuthState = async (newState: boolean) => {
    await auth.updateAuthState(2, {state: newState});
    setState(newState);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <AuthContext.Provider value={{state, isLoading, setAuthState}}>
      {children}
    </AuthContext.Provider>
  );
};
