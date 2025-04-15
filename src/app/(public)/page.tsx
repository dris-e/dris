import { Badge } from "@/components/dris/badge";
import { Button } from "@/components/dris/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/dris/card";
import { Input } from "@/components/dris/input";
import { Label } from "@/components/dris/label";
import { Textarea } from "@/components/dris/textarea";
import config from "@/constants/config";
import { ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon, PlayIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const variants = ["daisy", "aqua", "lilac", "cherry", "silver", "lime", "frosted", "minimal"] as const;

export default function Home() {
  return (
    <div className="flex flex-col pt-16 pb-28 gap-2 leading-loose">
      <h1 className="font-mono text-xl">STRAIGHT FROM Y2K.</h1>
      <p className="text-sm">{config.SITE_DESCRIPTION}</p>
      <p className="text-sm">Inspired by the Fruitger Aero aesthetic, early iPhone UI, & Jordan Singer.</p>

      <h2 className="font-mono mt-4">INSTALLATION</h2>
      <p className="text-sm">The installation steps for these components are the same as shadcn/ui.</p>
      <p className="text-sm">
        Follow the steps in the link above, select the components you need, copy the code into your project, and
        customize as desired.
      </p>

      <h2 className="font-mono mt-4">BUTTON</h2>

      <div className="flex gap-3 space-y-1 flex-wrap">
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            <span>{variant}</span>
          </Button>
        ))}
      </div>

      <div className="flex gap-4 mt-2">
        <Button variant="silver">
          <DoubleArrowLeftIcon />
        </Button>
        <Button size="icon" rounded="sm" variant="silver">
          <PlayIcon />
        </Button>
        <Button variant="silver">
          <DoubleArrowRightIcon />
        </Button>
      </div>

      <div className="flex gap-4 mt-2">
        <Button rounded="sm" variant="lilac" className="w-md font-semibold justify-between">
          Join the waitlist
          <ArrowRightIcon />
        </Button>
      </div>

      <h2 className="font-mono mt-4">BADGE</h2>

      <div className="flex gap-3 space-y-1 flex-wrap">
        {variants.map((variant) => (
          <Badge key={variant} variant={variant}>
            <span>{variant}</span>
          </Badge>
        ))}
      </div>
      <div className="flex gap-4 mt-1">
        <Link href="/">
          <Badge variant="lime" size="lg">
            Launching Soon!
          </Badge>
        </Link>
      </div>

      <h2 className="font-mono mt-4">CARD</h2>

      <div className="flex gap-3 space-y-1 flex-wrap">
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <CardDescription>Manage your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Dris Elamri</p>
            <p className="text-xs text-muted-foreground">elamri@dris.llc</p>
          </CardContent>
          <CardFooter>
            <Button variant="daisy" size="sm" rounded="md" className="font-semibold">
              See More
            </Button>
          </CardFooter>
        </Card>

        <Card variant="lime" size="sm">
          <CardHeader>
            <CardTitle>Create Deployment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">10.0.0.1</p>
            <p className="font-semibold">Northeast 1</p>
            <p className="text-xs text-muted-foreground">Your account will be charged $14.99 monthly.</p>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="minimal" size="sm" rounded="md" className="font-semibold">
              Cancel
            </Button>
            <Button variant="lime" size="sm" rounded="md" className="font-semibold">
              Create
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2 className="font-mono mt-4">INPUT</h2>

      <div className="flex gap-3 space-y-1 flex-wrap">
        <Input placeholder="Search for anything.." className="w-md" />
      </div>

      <div className="flex gap-2 mt-2">
        <Input variant="frosted" placeholder="Enter your email.." type="email" className="w-fit" />
        <Button variant="aqua" rounded="md">
          Join
          <ArrowRightIcon />
        </Button>
      </div>

      <h2 className="font-mono mt-4">TEXTAREA</h2>

      <div className="flex gap-3 space-y-1 flex-wrap">
        <Textarea placeholder="What inspires you? (optional)" className="w-md" />
      </div>

      <div className="flex flex-col gap-2 w-fit mt-2">
        <Label htmlFor="message">Your Message*</Label>
        <Textarea id="message" variant="minimal" placeholder="Write a message.." className="w-sm" />
        <Button variant="cherry" rounded="md">
          Add Comment
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}
