import React, { useState, useEffect, ChangeEvent, useTransition } from 'react'
import axios from 'axios'
import { NavBar } from './NavBar'

export const Concurrent: React.FC = () => {
  const [photos, setPhotos] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [input, setInput] = useState('')
  const [isPending, startTransition] = useTransition()

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
    setInput(e.target.value)
    startTransition(() => setSearchKey(e.target.value))
  }

  return (
    <div className="flex flex-col items-center font-mono text-gray-600">
      <NavBar />
      <p
        className={`my-3 text-xl font-bold ${
          isPending ? 'text-pink-500' : 'text-blue-500'
        }`}
      >
        startTransition (concurrent feature)
      </p>
      <input
        type="text"
        className="mb-5 rounded border border-gray-300 px-3 py-1 text-xs"
        value={input}
        onChange={updateHandler}
      />
      {filteredPhoto.map((photo: any) => (
        <p className="mb-2 text-xs" key={photo.id}>
          {photo.title}
        </p>
      ))}
    </div>
  )
}
