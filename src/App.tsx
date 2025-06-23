import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import { CarouselDemo } from "@/components/feed"

export function App() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center gap-2 border-b bg-background px-4">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">WCAG Timing</h1>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">Feed</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold">Aluno</span>
          <Button size="sm" className="gap-2" variant={"default"}>
            <LogOut className="size-4" />
            Sair
          </Button>
        </div>
      </header>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <CarouselDemo />
      </div>
    </>
  )
}

export default App