import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { Layout } from './Layout'
import { Spinner } from './Spinner'
import { FetchUsers } from './FetchUsers'
import { FetchTasks } from './FetchTasks'
import { FetchComments } from './FetchComments'

export const SuspenseDemo: React.FC = () => {
  return <div>SuspenseDemo</div>
}
