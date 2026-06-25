
import { Button } from "@/components/ui/button";
import { getRecipeBySlug } from "@/lib/recipes/recipes-select";
import { ArrowLeftSquareIcon, CookingPot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const AboutRecipe = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;

    const recipe = await getRecipeBySlug(slug);

    if (!recipe) {
        notFound();
    }

    const { title, description, marinateTime, cookTime, totalTime, servings, ingredients, imageLink, directions } = recipe;

    return (
        <section className="py-4">
            <div className="container mx-auto px-4 space-y-4">

                <Link href="/" className="inline-flex items-center rounded-xl gap-2 text-sm font-bold p-2 ">
                    <Button  >
                        <ArrowLeftSquareIcon />
                        Back to menu
                    </Button>
                </Link>

                <div className="py-4 flex flex-col gap-4 justify-center">
                    <div className="flex flex-row gap-2 items-center">
                        <CookingPot />
                        <h1 className="text-3xl unde">{title}</h1>
                    </div>

                    <Image
                        src={imageLink}
                        alt={title}
                        width={460}
                        height={460}
                        loading="eager"
                        style={{ height: 'auto' }}
                        sizes="(max-width: 768px) 100vw, 460px"
                        className="rounded-lg"
                    />

                    <div className="mt-2 text-sm ">
                        <p>{description}</p>
                        <div className="mt-2 px-2 p-2 pr-4 inline-flex gap-4 bg-secondary/10 rounded-2xl">
                            <p>Marinate Time : {marinateTime} min</p>
                            <p>Cook Time : {cookTime} min</p>
                            <p>Total Time : {totalTime} min</p>
                            <p>Servings : {servings}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base font-bold py-2">Ingredients</h2>
                        <ul className="bg-secondary/10 p-2 rounded-2xl inline-flex flex-col">
                            {ingredients && ingredients.map((ingredient, index) => (
                                <li key={index} className="text-sm py-1">
                                    {ingredient}
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div>
                        <h2 className="text-base font-bold py-2">Recipe</h2>
                        <ol className="list-decimal list-inside">
                            {directions && directions.map((step, index) => (
                                <li key={index} className="text-sm py-1">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <hr />
                </div>

            </div>
        </section>
    )
}

export default AboutRecipe;