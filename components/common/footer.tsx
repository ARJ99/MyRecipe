import { BookOpenCheckIcon } from "lucide-react"
import Link from "next/link"


export const Footer = () => {
    return (
        <footer className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <div className="flex flex-col gap-2">
                    <Link href="/" className="flex items-center gap-1 font-heading font-bold">
                        <BookOpenCheckIcon className="size-6" />
                        <span className="text-lg">Recipes</span>
                    </Link>
                    <p className="text-sm">This platform is for those who would like to indulge themself and share their recipes.</p>
                </div>
                <div className="flex justify-center gap-4 w-2xs">
                    <div className="flex flex-col gap-2 min-w-32">
                        <p className="text-md font-bold tracking-wide">About Recipes</p>
                        <Link href="/"><p>About us</p></Link>
                        <Link href="/"><p>Work with me</p></Link>
                        <Link href="/"><p>Contact</p></Link>
                    </div>
                    <div className="flex flex-col gap-2 min-w-32">
                        <p className="text-md font-bold tracking-wide ">Explores</p>
                        <Link href="/"><p className="text-xs">Explore</p></Link>
                        <Link href="/"><p>Trending</p></Link>
                        <Link href="/"><p>submit Recipe</p></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between mt-8">
                <p>2026 Recipes. All right reserved.</p>
                <div className="flex gap-2 ">
                    <Link href="/twitter" className="pointer-events-none">Twitter</Link>
                    <Link href="/github" className="pointer-events-none">Github</Link>
                    <Link href="/linkedin" className="pointer-events-none">Linkedin</Link>
                </div>
            </div>

        </footer>
    )
}
