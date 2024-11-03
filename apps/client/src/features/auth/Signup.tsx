import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
  Input,
} from '@repo/ui'

export default function SignupForm() {
  return (
    <Card className="mx-auto max-w-sm  mt-12">
      <CardHeader>
        <CardTitle className="text-2xl">Signup</CardTitle>
        <CardDescription>
          Enter your email below to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?
          <Link to="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
