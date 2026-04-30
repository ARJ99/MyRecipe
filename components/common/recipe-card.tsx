import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Clock10Icon } from "lucide-react";


interface RecipeInterface {
    id: string;
    title: string;
    description: string;
    prepTime: number;
    imagelink: string;
    recipe: string;
}


export const RecipeCard = ({ recipes }: { recipes: RecipeInterface }) => {
    return (
        <Link href="/">
            <Card className="flex flex-col overflow-hidden hover:scale-102 transition-all min-h-[280px] max-w-md py-0 my-0 bg-card">
                <CardHeader className="py-4 px-4 border-b ">
                    <CardTitle className="text-center">{recipes.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex justify-center">
                        <div className="relative w-full h-[150px]">
                            <Image src={recipes.imagelink} alt="recipe" fill className="rounded-lg object-cover" />
                        </div>
                    </div>
                    <CardDescription>
                        {recipes.description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="flex bg-card items-center gap-2 h-12">
                    <p>Preparation Time : </p>
                    <Clock10Icon />
                    <p>{recipes.prepTime} mins</p>
                </CardFooter>
            </Card>
        </Link>
    )
}
