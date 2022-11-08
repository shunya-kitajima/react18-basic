import React, { ReactNode } from 'react'
import { NavBar } from './NavBar'

type Props = {
  children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-mono text-gray-600">
      <NavBar />
      <div className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
