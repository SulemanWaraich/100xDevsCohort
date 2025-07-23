"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Menu, Plus, Bell, MoreHorizontal } from "lucide-react"
import axios from "axios"

export default function BlogEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isDraft, setIsDraft] = useState(true)

  const handlePublish = () => {
    setIsDraft(false)
    // Handle publish logic here
    axios.post('http://127.0.0.1:8787/api/v1/book/blog', {
      title,
      content
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0MGY0NWVlLTc4YTEtNDA1ZC1hNmE2LTA0M2Q2ZjdhMWNkOSJ9.cn4QUSx1xDTZy7Y0Z3-7ifEq02iKCG4ekv2CWuYmeDc'
      }
    })
    .then((res) => {
      console.log(res.data, res)
    })
    console.log("Publishing post:", { title, content })
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-gray-800 flex flex-col items-center py-4">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white mb-8">
          <Menu className="h-5 w-5" />
        </Button>

        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">K</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white">
        {/* Top Header */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-gray-600 text-sm ml-2">Draft in Kirags</span>
            </div>
            <Badge variant="secondary" className="text-xs text-gray-500 bg-gray-100">
              Saved
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={handlePublish}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm"
            >
              Publish
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback className="bg-gray-600 text-white text-sm">H</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Editor Content */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="flex items-start space-x-4">
            {/* Plus Button */}
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 text-gray-300 hover:text-gray-600 border border-gray-200 rounded-full w-10 h-10 p-0"
            >
              <Plus className="h-5 w-5" />
            </Button>

            {/* Content Area */}
            <div className="flex-1">
              {/* Title Input */}
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full text-4xl font-light text-gray-800 placeholder-gray-300 border-none outline-none bg-transparent mb-4 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              />

              {/* Content Textarea */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tell your story..."
                className="w-full text-xl text-gray-700 placeholder-gray-300 border-none outline-none bg-transparent resize-none leading-relaxed"
                style={{
                  fontFamily: "Georgia, serif",
                  minHeight: "400px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
