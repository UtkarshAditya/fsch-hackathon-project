"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Shield, User, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (role: string) => (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/dashboard/${role.toLowerCase()}`)
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
          <h1 className="text-2xl font-semibold tracking-tight text-gray-800">Welcome back</h1>
          <p className="text-sm text-gray-500">Enter your credentials to access your account</p>
        </div>

        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="patient" className="flex items-center gap-2 text-primary hover:text-blue-600 transition-all duration-200">
              <User className="h-4 w-4" />
              Patient
            </TabsTrigger>
            <TabsTrigger value="doctor" className="flex items-center gap-2 text-primary hover:text-blue-600 transition-all duration-200">
              <Stethoscope className="h-4 w-4" />
              Doctor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="patient">
            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Patient Login</CardTitle>
                <CardDescription className="text-gray-600">Access your health dashboard and AI diagnosis</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin("patient")}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-email" className="text-gray-700">Email</Label>
                    <Input id="patient-email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patient-password" className="text-gray-700">Password</Label>
                    <Input id="patient-password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  <div className="text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline text-blue-500 hover:text-blue-600 transition-all">
                      Create account
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="doctor">
            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Doctor Login</CardTitle>
                <CardDescription className="text-gray-600">Access your patient diagnosis packages</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin("doctor")}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor-email" className="text-gray-700">Email</Label>
                    <Input id="doctor-email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor-password" className="text-gray-700">Password</Label>
                    <Input id="doctor-password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
