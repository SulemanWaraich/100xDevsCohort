  "use client"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import axios from "axios"

export default function SigninPage() {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = () => {
        axios.post('http://127.0.0.1:8787/api/v1/user/signin', {
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
            <CardTitle className="text-2xl font-bold text-center">Login to your account</CardTitle>
            <CardDescription className="text-center">Enter your details below to Login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault()}}>
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
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>

              <Button type="submit" className="w-full" onClick={submit}>
                Login
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to={'/signup'}>
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
  )
}