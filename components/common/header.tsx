import { BookOpenCheckIcon, BookSearch, ChefHatIcon, CookingPotIcon, HouseHeartIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export const Header = () => {
    return (
        <nav className="sticky top-0 z-50 border-b">
            <div className="container mx-auto flex items-center justify-between py-2 px-2 backdrop-blur-sm">
                <Link href="/" className="flex items-center gap-1 font-heading font-bold">
                    <BookOpenCheckIcon className="size-6"/>
                    <span className="text-lg">Recipes</span>
                </Link>
                <div className="flex items-center gap-2 justify-between">
                    <Link href="/" className="flex items-center hover:bg-accent hover:scale-105 transition-all p-2 rounded-lg">
                        <HouseHeartIcon className="size-4" />
                        <span>Home</span>
                    </Link>
                    <Link href="/explore" className="flex items-center hover:bg-accent hover:scale-105 transition-all p-2 rounded-lg">
                        <ChefHatIcon className="size-4" />
                        <span>Explore</span>
                    </Link>
                </div>
                <div>
                    <Button className="p-2" size="xs">Sign in</Button>
                    <Button className="p-2 bg-secondary" size="xs">Sign up</Button>
                </div>
            </div>
        </nav>
    )
}
