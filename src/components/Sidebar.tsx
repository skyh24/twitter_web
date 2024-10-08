import React from 'react'
import { MessageSquare, Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react'

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: MoreHorizontal, label: 'More' },
  ]

  return (
    <div className="w-64 p-4">
      <div className="flex items-center mb-6">
        <MessageSquare className="w-8 h-8 text-blue-400" />
      </div>
      <nav>
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center p-3 mb-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <item.icon className="w-6 h-6 mr-4" />
            <span className="text-lg">{item.label}</span>
          </a>
        ))}
      </nav>
      <button className="w-full bg-blue-500 text-white rounded-full py-3 mt-4 font-bold hover:bg-blue-600 transition-colors">
        Chirp
      </button>
    </div>
  )
}

export default Sidebar