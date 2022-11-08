import React from 'react'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { Layout } from './components/Layout'

const App: React.FC = () => {
  return (
    <Layout>
      <p className="my-5 text-xl font-bold">React18 basic lesson</p>
      <CheckBadgeIcon className="h-12 w-12 text-blue-500" />
    </Layout>
  )
}

export default App
