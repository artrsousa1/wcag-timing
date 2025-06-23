import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
]

export function CarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [liked, setLiked] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }

  const currentPost = posts[currentIndex]
  return (
   <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 p-4 border-b">
              <Avatar className="rounded size-10">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">Usuário</p>
                <p className="text-xs text-muted-foreground">
                  Random User • 4h ago
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={currentPost.image}
                alt="Post content"
                className="w-full h-64 object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                onClick={prevSlide}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                onClick={nextSlide}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>

            <div className="p-4">
              <p className="text-sm mb-3">June Dump</p>
            </div>

            <div className="flex items-center justify-between p-4 border-t">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLiked(!liked)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-red-500"
                >
                  <Heart className="size-4" />
                  <span className="text-xs">{liked ? "190" : "189"}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-muted-foreground hover:text-blue-500"
                >
                  <MessageCircle className="size-4" />
                  <span className="text-xs">27</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                <Share className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center gap-2 mt-4">
          {posts.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
