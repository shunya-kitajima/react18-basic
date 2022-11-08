import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar: React.FC = () => {
  return (
    <nav className="w-screen bg-gray-800 font-mono">
      <div className="flex h-12 items-center pl-4">
        <div className="flex space-x-1 text-sm">
          <Link
            to="/"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/autobatch"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            Auto-Batch
          </Link>
          <Link
            to="/suspense"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            Suspense
          </Link>
          <Link
            to="/nested_suspense"
            className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
          >
            Nested-Suspense
          </Link>
        </div>
      </div>
    </nav>
  )
}
