import React, { ReactNode, useCallback, useContext, useState } from 'react'
import { usersDummy } from './user.dummy';

interface ProviderProps {
  children: ReactNode;
}

export type User = {
  id: string
  name: string
  email: string
  dtCreatedAt: Date
}

type UserContextProps = {
  get(page?: number): Promise<User[]>
  // edit(user: User): Promise<void>
  // delete(userId: string): Promise<void>
}

const UserContext = React.createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: ProviderProps) => {
  const get = useCallback(async (page: number = 1) => {
    const parsedPage = page < 1 ? 1 : page;
    const take = 10
    const parsedUsers = [...usersDummy].splice((parsedPage - 1) * take, take)
      .map(e => ({ ...e, dtCreatedAt: new Date(e.dtCreatedAt) } as User));

    return parsedUsers;
  }, []);


  return (
    <UserContext.Provider value={{ get }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserService = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('Need to use Provider!');
  return context;
};


