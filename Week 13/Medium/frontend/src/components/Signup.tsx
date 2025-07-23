"use client"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
// import SignupType from "@suleman10/common-app"
import axios from 'axios';

export default function SignupPage() {
  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = () => {
        axios.post('http://127.0.0.1:8787/api/v1/user/signup', {
          fullname,
          username,
          email,
          password
        })
        .then((res) => {
          const token = res.data.token;
          localStorage.setItem('token', token);
          console.log(res);
          console.log(res.data);
        })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-2 sm:px-4 lg:px-6 space-x-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">Enter your details below to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault()}}>
              <div className="space-y-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input 
                id="fullname" 
                name="fullname" 
                type="text" 
                placeholder="John Doe" 
                required 
                className="w-full" 
                value={fullname} 
                onChange={(e)=> { setFullname(e.target.value)}}/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                id="username" 
                name="username" 
                type="text" 
                placeholder="johndoe" 
                required 
                className="w-full" 
                value={username} 
                onChange={(e)=> { setUsername(e.target.value)}}/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full"
                  value={email} 
                  onChange={(e)=> { setEmail(e.target.value)}}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******"
                  required
                  className="w-full"
                  value={password} 
                  onChange={(e)=> { setPassword(e.target.value)}}
                />
              </div>

              <Button type="submit" className="w-full" onClick={submit}>
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to={'/signin'}>
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl h-125 text-center items-center flex justify-center flex-col space-y-2">
        <h1 className="font-bold text-xl sm:text-2xl">The customer service i received was exceptional. the support team went above and beyond to address my concerns.</h1>
        <h3 className="font-semibold">Jules Winnfield</h3>
        <p className= "text-gray-200">CEO, Acme Inc</p>
      </div>
    </div>
  )
}
