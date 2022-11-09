import React, { useState } from 'react'
import axios from 'axios'
import { flushSync } from 'react-dom'
import { Layout } from './Layout'

export const AutoBatch: React.FC = () => {
  console.log('Rendered AutoBatch')

  return (
    <Layout>
      <p>AutoBatch</p>
    </Layout>
  )
}
