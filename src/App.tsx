import React, { useState } from 'react'
import { MessageSquare, Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react'
import ChirpForm from './components/ChirpForm'
import ChirpList from './components/ChirpList'
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import { Chirp } from './types'

function App() {
  const [chirps, setChirps] = useState<Chirp[]>([
    { id: 1, username: 'johndoe', content: 'Hello, Chirper!', likes: 5, timestamp: new Date().toISOString() },
    { id: 2, username: 'janedoe', content: 'This is awesome!', likes: 3, timestamp: new Date().toISOString() },
  ])

  const addChirp = (content: string) => {
    const newChirp: Chirp = {
      id: chirps.length + 1,
      username: 'currentuser',
      content,
      likes: 0,
      timestamp: new Date().toISOString(),
    }
    setChirps([newChirp, ...chirps])
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-grow border-x border-gray-800 max-w-2xl">
        <header className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-sm z-10 p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">Home</h1>
        </header>
        <div className="p-4">
          <ChirpForm onSubmit={addChirp} />
          <ChirpList chirps={chirps} />
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}

export default App