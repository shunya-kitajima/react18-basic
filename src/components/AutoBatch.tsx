import React, { useState } from 'react'
import axios from 'axios'
import { flushSync } from 'react-dom'
import { Layout } from './Layout'

export const AutoBatch: React.FC = () => {
  const [count, setCount] = useState(0)
  const [fetchCount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])

  console.log('Rendered AutoBatch')

  return (
    <Layout>
      <p className="my-3 text-xl font-bold text-blue-500">AutoBatch</p>
      <p className="my-5">{fetchCount}</p>
    </Layout>
  )
}
