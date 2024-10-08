import React from 'react'
import { Search } from 'lucide-react'

const RightSidebar: React.FC = () => {
  return (
    <div className="w-80 p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Chirper"
          className="w-full bg-gray-900 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>
      <div className="bg-gray-900 rounded-xl p-4 mb-4">
        <h2 className="font-bold text-xl mb-4">What's happening</h2>
        {/* Add trending topics here */}
      </div>
      <div className="bg-gray-900 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Who to follow</h2>
        {/* Add suggested users here */}
      </div>
    </div>
  )
}

export default RightSidebar