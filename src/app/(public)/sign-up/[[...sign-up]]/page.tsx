"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import config from "@/constants/config";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="container">
      <div className="grid gap-4">
        <div className="mx-auto w-full max-w-sm rounded-md p-6">
          <div className="mb-6 flex flex-col items-start text-left">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <Image src="/assets/images/icon.svg" width={32} height={32} className="max-h-16" alt="Logo" />
            </Link>
            <h1 className="text-2xl font-bold">Sign Up for {config.SITE_NAME}</h1>
          </div>

          <div className="grid gap-4">
            <Input type="email" placeholder="Enter your email" required />

            <Input type="password" placeholder="Enter your password" required />

            <div className="grid gap-4 mt-4">
              <Button variant="action" className="w-full font-bold">
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                <FaGoogle />
                Sign up with Google
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
            <p>Already have an account?</p>
            <Link href="/sign-in" className="font-medium text-primary hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
