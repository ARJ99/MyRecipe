import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Clock10Icon } from "lucide-react";
import { InferSelectModel } from "drizzle-orm";
import { recipes } from "@/db/schema";

type Recipe = InferSelectModel<typeof recipes>;


// interface RecipeInterface {
//     id: number;
//     slug:string;
//     title: string;
//     description: string;
//     marinateTime: number;
//     cookTime: number;
//     totalTime: number;
//     servings: number;
//     ingredients: string[],
//     imageLink: string;
//     directions: {}
// }

export const RecipeCard = ({ recipes }: { recipes: Recipe }) => {
    return (
        <Link href="/">
            <Card className="flex flex-col overflow-hidden hover:scale-102 transition-all h-[380px] max-w-md py-0 my-0 bg-card">
                <CardHeader className="py-4 px-4 border-b ">
                    <CardTitle className="text-center">{recipes.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex justify-center">
                        <div className="relative w-full h-[150px]">
                            <Image
                                src={recipes.imageLink}
                                alt="recipe"
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 448px"
                                className="rounded-lg object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                    <CardDescription className="overflow-y-hidden h-[80px]">
                        {recipes.description}

                    </CardDescription>
                </CardContent>

                <CardFooter className="flex bg-card items-center gap-2 h-12">
                    <p>Preparation Time : </p>
                    <Clock10Icon />
                    <p>{recipes.totalTime} mins</p>
                </CardFooter>
            </Card>
        </Link>
    )
}
