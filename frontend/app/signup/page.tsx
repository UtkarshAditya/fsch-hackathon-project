"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string>("")

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      setMessage("User account has been created successfully!")
    }, 1500)
  }

  return (
    <div className="container flex min-h-screen w-screen flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 animate-fade-in">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 text-white transition-transform hover:scale-105">
        <Shield className="h-6 w-6 text-white" />
        <span className="font-bold text-2xl">MediGuardian</span>
      </Link>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-800">Create an account</h1>
          <p className="text-sm text-gray-500">Sign up to get started with MediGuardian</p>
        </div>

        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="user" className="flex items-center gap-2 text-primary hover:text-blue-600 transition-all duration-200">
              <User className="h-4 w-4" />
              User
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user">
            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">User Signup</CardTitle>
                <CardDescription className="text-gray-600">Create a user account to get started</CardDescription>
              </CardHeader>
              <form onSubmit={handleSignup}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-name" className="text-gray-700">Full Name</Label>
                    <Input id="user-name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-email" className="text-gray-700">Email</Label>
                    <Input id="user-email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-password" className="text-gray-700">Password</Label>
                    <Input id="user-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-gender" className="text-gray-700">Gender</Label>
                    <select id="user-gender" className="w-full p-2 border rounded" required>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-age" className="text-gray-700">Age</Label>
                    <Input id="user-age" type="number" placeholder="Enter your age" required />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                  <div className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="underline text-blue-500 hover:text-blue-600 transition-all">
                      Login
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Simple success message */}
        {message && (
          <div className="mt-4 text-center text-green-500">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}


