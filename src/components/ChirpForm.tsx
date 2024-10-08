import React, { useState } from 'react'
import { Image, Smile, Calendar, MapPin } from 'lucide-react'

interface ChirpFormProps {
  onSubmit: (content: string) => void
}

const ChirpForm: React.FC<ChirpFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 border-b border-gray-800 pb-4">
      <div className="flex">
        <img
          src="https://api.dicebear.com/6.x/initials/svg?seed=currentuser"
          alt="Your avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-grow">
          <textarea
            className="w-full bg-transparent text-xl resize-none outline-none"
            rows={3}
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2 text-blue-400">
              <button type="button" className="p-2 rounded-full hover:bg-blue-900 transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-blue-900 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-blue-900 transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-blue-900 transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-colors"
              disabled={!content.trim()}
            >
              Chirp
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ChirpForm