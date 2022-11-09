import React from 'react'
import { useQueryUsers } from '../hooks/useQueryUsers'

export const FetchUsers: React.FC = () => {
  const { data } = useQueryUsers()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">User List</p>
      {data?.map((user: any) => (
        <p className="my-3 text-sm" key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  )
}
