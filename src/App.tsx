import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, ClockPlus } from "lucide-react"
import { CarouselDemo } from "@/components/feed"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import HourGlass from "./assets/hourglass.png"

export function App() {
  const [_time, setTime] = useState(5);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setOpen(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddTime = (minutes: number) => {
    setTime((prevTime) => prevTime + minutes * 60);
    if (open) {
      setOpen(false);
    }
  }


  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center gap-2 border-b bg-background px-4">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">WCAG Timing</h1>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">Feed</span>
        </div>
        <div className="ml-auto flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>GU</AvatarFallback>
            </Avatar>
          <span className="text-sm font-semibold">Guest</span>
          </div>
          <Button size="sm" className="gap-2" variant={"default"}>
            <LogOut className="size-4" />
            Logout
          </Button>
        </div>
      </header>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Time Limit</DialogTitle>
            <img
              src={HourGlass} alt="hourglass"
              className="mx-auto mb-4 w-16 h-16 my-8 opacity-60"
              draggable="false"
            />
            <DialogDescription className="text-center">
              You've reached the time limit on WCAG Timer Feed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Ignore limit for today
            </Button>
            <Button type="submit" onClick={() => handleAddTime(15)}>
              <ClockPlus className="size-4" />
              Add 15 minutes
            </Button>
        </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <CarouselDemo />
      </div>
    </>
  )
}

export default App