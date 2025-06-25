import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, ClockPlus, Settings, Save } from "lucide-react"
import { CarouselDemo } from "@/components/feed"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import HourGlass from "./assets/hourglass.png"

export function App() {
  const [_time, setTime] = useState(5)
  const [open, setOpen] = useState(false)
  const [_isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [defaultTime, setDefaultTime] = useState(5)
  const [screenTime, setScreenTime] = useState("5")
  const [precision, setPrecision] = useState<"minutes" | "seconds">("minutes")

  const timeRef = useRef<number>(5)

  const updateTime = (value: number) => {
    timeRef.current = value
    setTime(value)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      timeRef.current -= 1
      if (timeRef.current <= 0) {
        setOpen(true)
        updateTime(0)
        return
      }
      setTime(timeRef.current)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleAddTime = (minutes: number) => {
    const added = minutes * 60
    updateTime(timeRef.current + added)
    if (open) {
      setOpen(false)
    }
  }

  const handleSaveSettings = (precision: "minutes" | "seconds", value: string) => {
    const parsedValue = parseInt(value, 10)
    if (isNaN(parsedValue)) return
    const seconds = precision === "minutes" ? parsedValue * 60 : parsedValue
    updateTime(seconds)
    setDefaultTime(seconds)
    setIsSettingsOpen(false)
  }

  const handleIgnoreLimit = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const secondsRemaining = Math.floor((endOfDay.getTime() - now.getTime()) / 1000);

    const totalTime = secondsRemaining + defaultTime;
    updateTime(totalTime);
    setOpen(false);
  };

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
          <Button size="sm" className="gap-2" variant="default">
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
              src={HourGlass}
              alt="hourglass"
              className="mx-auto mb-4 w-16 h-16 my-8 opacity-60"
              draggable="false"
            />
            <DialogDescription className="text-center">
              You've reached the time limit on WCAG Timer Feed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-center" style={{ justifyContent: "center" }}>
            <Button variant="outline" onClick={handleIgnoreLimit}>
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
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="fixed bottom-4 right-4 z-50 w-12 h-12"
            onClick={() => setIsSettingsOpen(true)}
          >
            <Settings className="size-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription className="text-center">
              Adjust your screen time limit and other settings here.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-2">
              <label className="text-sm w-28">Time Value:</label>
              <Input
                type="number"
                min={1}
                value={screenTime}
                onChange={(e) => setScreenTime(e.target.value)}
                placeholder="Enter time"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm w-28">Unit:</label>
              <Select value={precision} onValueChange={(val) => setPrecision(val as "minutes" | "seconds")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minutes">Minutes</SelectItem>
                  <SelectItem value="seconds">Seconds</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <DialogClose>
              <Button type="submit" onClick={() => handleSaveSettings(precision, screenTime)}>
                <Save className="size-4" />
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App