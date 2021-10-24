import React from 'react';
import { createContext } from 'react';

interface Post {
  id: string;
  name: string;
  data: string;
  type: string;
  likes: number;
  likedBy: Array<string>;
}

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
  credibility?: number;
  type?: number;
  savedPosts?: Array<Post>;
}

interface UserContextProps {
  user: User;
  setUser: (c: object) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: {},
  setUser: () => {},
});
