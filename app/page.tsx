import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      {/* <div className="w-full max-w-4xl flex overflow-hidden"> */}
      <div className="hidden md:block md:w-3/5 relative">
        <div className="max-w-md mx-auto">
          <p className="text-2xl font-medium text-zinc-900 relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            tempore vel exercitationem consequuntur illo? Maxime quasi
            voluptates praesentium quos facilis?
          </p>
        </div>
        <div className="absolute rounded-full w-1/3 h-10 bg-teal-500/50 blur-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
        <div className="absolute rounded-full w-1/3 h-10 bg-emerald-500/50 blur-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-45"></div>
      </div>
      <div className="w-full md:w-2/5 p-6 flex shadow-lg border-l h-screen justify-center items-center border-zinc-300 bg-zinc-100">
        <div className="w-full max-w-md mx-auto">
          <div className="p-0 mb-4">
            <p className="text-2xl font-bold">Sign in</p>
            <p className="text-sm text-zinc-500">
              Enter your email to sign in to your account
            </p>
          </div>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  required
                  className="transition-all duration-300 focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-emerald-400 focus-visible:ring-emerald-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="transition-all duration-300 focus-visible:ring-offset-0 focus-visible:ring-1 ring-offset-emerald-400 focus-visible:ring-emerald-400"
                />
              </div>
              <Button className="w-full bg-emerald-400 border border-emerald-500 hover:bg-emerald-300 text-emerald-900">
                Sign In
              </Button>
            </div>
          </form>
          <div className="mt-4 text-left text-sm">
            <Link
              href="#"
              className="text-primary hover:underline hover:text-emerald-500"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="mt-2 text-left text-sm">
            <Link
              href="#"
              className="text-primary hover:underline hover:text-emerald-500"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full hover:bg-emerald-50 hover:border hover:border-emerald-500"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
