import React from 'react'
import { Chirp } from '../types'
import { Heart, MessageCircle, Repeat, Share } from 'lucide-react'

interface ChirpListProps {
  chirps: Chirp[]
}

const ChirpList: React.FC<ChirpListProps> = ({ chirps }) => {
  return (
    <div>
      {chirps.map((chirp) => (
        <div key={chirp.id} className="border-b border-gray-800 p-4 hover:bg-gray-900 transition-colors">
          <div className="flex">
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${chirp.username}`}
              alt={`${chirp.username}'s avatar`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <div className="flex items-center mb-1">
                <span className="font-bold mr-2">{chirp.username}</span>
                <span className="text-gray-500">@{chirp.username.toLowerCase()}</span>
                <span className="text-gray-500 mx-1">·</span>
                <span className="text-gray-500">{new Date(chirp.timestamp).toLocaleString()}</span>
              </div>
              <p className="mb-2">{chirp.content}</p>
              <div className="flex justify-between text-gray-500 max-w-md">
                <button className="flex items-center hover:text-blue-400">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>0</span>
                </button>
                <button className="flex items-center hover:text-green-400">
                  <Repeat className="w-5 h-5 mr-2" />
                  <span>0</span>
                </button>
                <button className="flex items-center hover:text-red-400">
                  <Heart className="w-5 h-5 mr-2" />
                  <span>{chirp.likes}</span>
                </button>
                <button className="flex items-center hover:text-blue-400">
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChirpList