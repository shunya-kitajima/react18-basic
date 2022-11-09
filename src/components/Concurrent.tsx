import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavBar } from './NavBar'

export const Concurrent: React.FC = () => {
  const [photos, setPhotos] = useState('')
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setPhotos(res.data)
    }
    fetchData()
  }, [])

  return <div>Concurrent</div>
}
