"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, Users, BookOpen, UserPlus, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  const features = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Sign Up",
      description: "Create your account in seconds",
      link: "/signup",
      color: "bg-blue-500",
      path: "/signup",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sign In",
      description: "Access your dashboard securely",
      link: "/signin",
      color: "bg-green-500",
      path: "/signin",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Read Blog",
      description: "Discover amazing stories",
      link: "/blog",
      color: "bg-purple-500",
      path: "/blog",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Write Blog",
      description: "Create and publish your stories",
      link: "/editor",
      color: "bg-orange-500",
      path: "/createpost",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <PenTool className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">BlogCraft</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to={"/signin"}>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              </Link>
              <Link to={"/signup"}>
              <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Write, Share, and Discover
            <span className="text-blue-600"> Amazing Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A simple platform for writers to create, publish, and connect with readers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/createpost"}>
            <Button size="lg" className="px-8">
                Start Writing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
              </Link>
              <Link to={"/blog"}>  
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Explore Stories
            </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-gray-600">Four simple tools to get you started</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={feature.path}>
                  <Button variant="ghost" className="w-full">
                    Try Now
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Writers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Stories</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">1M+</div>
            <div className="text-gray-600">Readers</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Writing?</h2>
          <p className="text-blue-100 mb-8">Join our community of writers today</p>
          <Button size="lg" variant="secondary" className="px-8">
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <PenTool className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold">BlogCraft</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/signup" className="hover:text-white">
                Sign Up
              </a>
              <a href="/signin" className="hover:text-white">
                Sign In
              </a>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
              <a href="/editor" className="hover:text-white">
                Editor
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 BlogCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
