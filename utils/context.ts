import React from 'react';
import { createContext, useState } from 'react';

interface User {
  uid: string;
  name: string;
  age: string;
  designation: string;
  category?: string;
  email: string;
  phone: string;
  state: string;
  country: string;
  pinCode: string;
  gender?: string;
}

interface UserContextProps {
  user: User;
  setUser: (c: object) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: {},
  setUser: () => {},
});
