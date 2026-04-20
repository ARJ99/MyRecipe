import { BookOpenCheckIcon, BookSearch } from "lucide-react"
import Link from "next/link"

export const Header = () => {
    return (
        <nav className="sticky top-0 z-50 border-b">
            <div className="container mx-auto flex items-center justify-between py-2 px-2 backdrop-blur-sm">
                <Link href="/" className="flex items-center gap-1 font-heading font-bold">
                    <BookOpenCheckIcon/>
                    <span>Recipes</span>
                </Link>
                <div className="flex items-center gap-4 justify-between">
                    <Link href="/" className="flex items-center">
                        <span>Home</span>
                    </Link>
                    <Link href="/articles">
                        <span>Articles</span>
                    </Link>
                    <Link href="/about">
                        <span>About</span>
                    </Link>
                    <Link href="/contact">
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
