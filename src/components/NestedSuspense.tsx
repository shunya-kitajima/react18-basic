import React, { Suspense } from 'react'
import { Layout } from './Layout'
import { Spinner } from './Spinner'
import { FetchUsers } from './FetchUsers'
import { FetchTasks } from './FetchTasks'

export const NestedSuspense: React.FC = () => {
  return (
    <Layout>
      <div>NestedSuspense</div>
    </Layout>
  )
}
