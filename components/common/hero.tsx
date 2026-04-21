import { BookSearch, ChefHatIcon, FileHeartIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"


export const Hero = () => {
    return (
        <section className="container mx-auto m-4 ">
            <div className="flex flex-col justify-center items-center gap-2 border-b bg-accent/80  min-h-[250px] rounded-2xl p-4">
                <h1 className="font-heading text-3xl font-bold text-center">Discover, Cook, and Share Your Next Favorite Meal. </h1>
                <p className="text-center text-base">Join a community of food lovers. Discover thousands of recipes, save your favorites, and share your culinary creations with the world.</p>

                <div className="flex justify-center gap-2 my-4">
                    <Button asChild size="sm" className="hover:scale-102 transition-all">
                        <Link href="/submit">
                            <FileHeartIcon className="size-4" />
                            Share your recipe
                        </Link>
                    </Button>
                    <Button asChild size="sm" className="bg-secondary hover:bg-secondary/80 hover:scale-102 transition-all">
                        <Link href="/explore">
                            <ChefHatIcon className="size-4" />
                            Explore the culinary
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
