import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import { NavBar } from './NavBar'

export const Concurrent: React.FC = () => {
  const [photos, setPhotos] = useState([])
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setPhotos(res.data)
    }
    fetchData()
  }, [])

  const filteredPhoto = photos.filter((photo: any) => {
    return photo.title.includes(searchKey)
  })

  const updateHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchKey(e.target.value)
  }

  return (
    <div className="flex flex-col items-center font-mono text-gray-600">
      <NavBar />
      <p className="my-3 text-xl font-bold text-blue-500">
        startTransition (concurrent feature)
      </p>
      <input
        type="text"
        className="mb-5 rounded border border-gray-300 px-3 py-1 text-xs"
        value={searchKey}
        onChange={updateHandler}
      />
    </div>
  )
}
