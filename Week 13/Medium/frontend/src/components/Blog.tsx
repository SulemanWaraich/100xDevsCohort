"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface Blog {
  id: number
  title: string
  content: string
  publish: boolean
  image?: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8787/api/v1/book/blog/bulk", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0MGY0NWVlLTc4YTEtNDA1ZC1hNmE2LTA0M2Q2ZjdhMWNkOSJ9.cn4QUSx1xDTZy7Y0Z3-7ifEq02iKCG4ekv2CWuYmeDc"
          }
        })
        setBlogs(res.data.posts || [])
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      }
    }

    fetchBlogs()
  }, [])

  const handleUpdate = async () => {
    if (!editingBlog) return

    try {
      await axios.put(
        `http://localhost:8787/api/v1/book/blog`,
        {
          title: editingBlog.title,
          content: editingBlog.content,
          id: editingBlog.id,
        },
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0MGY0NWVlLTc4YTEtNDA1ZC1hNmE2LTA0M2Q2ZjdhMWNkOSJ9.cn4QUSx1xDTZy7Y0Z3-7ifEq02iKCG4ekv2CWuYmeDc",
          },
        }
      )
    .then((res) => {
      console.log(res.data, res)
    })
      setBlogs((prev) =>
        prev.map((blog) => (blog.id === editingBlog.id ? editingBlog : blog))
      )
      setEditingBlog(null)
    } catch (err) {
      console.error("Update failed", err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">My Blogs</h1>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <Card key={blog.id} className="p-4 flex items-start justify-between gap-6">
            {/* Left: Blog Content */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">
                Status: {blog.publish ? "Published" : "Draft"}
              </p>
              <p className="text-base text-gray-700">{blog.content}</p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setEditingBlog(blog)}
                  >
                    Edit
                  </Button>
                </DialogTrigger>

                {editingBlog?.id === blog.id && (
                  <DialogContent>
                    <h3 className="text-lg font-semibold mb-4">Edit Blog</h3>

                    <Input
                      className="mb-2"
                      placeholder="Title"
                      value={editingBlog.title}
                      onChange={(e) =>
                        setEditingBlog({ ...editingBlog, title: e.target.value })
                      }
                    />
                    <textarea
                      className="w-full p-2 mb-2 border rounded"
                      rows={5}
                      placeholder="Content"
                      value={editingBlog.content}
                      onChange={(e) =>
                        setEditingBlog({ ...editingBlog, content: e.target.value })
                      }
                    />
                    <label className="flex items-center gap-2 text-sm mb-4">
                      <input
                        type="checkbox"
                        checked={editingBlog.publish}
                        onChange={(e) =>
                          setEditingBlog({ ...editingBlog, publish: e.target.checked })
                        }
                      />
                      Publish
                    </label>
                    <Button onClick={handleUpdate}>Update</Button>
                  </DialogContent>
                )}
              </Dialog>
            </div>

            {/* Right: Image */}
            <div className="w-32 h-32 rounded overflow-hidden border bg-muted flex items-center justify-center">
              {blog.image ? (
                <img src={blog.image} alt="Blog" className="object-cover w-full h-full" />
              ) : (
                <span className="text-xs text-muted-foreground">No image</span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
