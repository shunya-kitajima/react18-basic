import React from 'react'
import { useQueryTasks } from '../hooks/useQueryTasks'

export const FetchTasks: React.FC = () => {
  const { data } = useQueryTasks()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Task List</p>
      {data?.map((task: any) => (
        <p className="my-3 text-sm" key={task.id}>
          {task.title}
        </p>
      ))}
    </div>
  )
}
