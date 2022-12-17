import {createContext} from 'react';

const AuthContext = createContext({
  userId: '',
  setUserId: newUserID => {},
});

export default AuthContext;
