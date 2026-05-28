import { getRecentlyRecipes } from "@/lib/recipes/recipes-select";
import { FlameIcon } from "lucide-react"
import { RecipeCard } from "../common/recipe-card";
import { Empty } from "../common/empty";

export const RecentRecipes = async () => {
    const allRecentRecipes = await getRecentlyRecipes();
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-1">
                        <FlameIcon className="size-5" />
                        <h1 className="tracking-wide font-bold text-base">Recent Recipes</h1>
                    </div>
                    <p className="text-sm">These are recent recipes submitted by out great community.</p>
                </div>


                {!(allRecentRecipes.length > 0) ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                        {allRecentRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipes={recipe} />
                        ))}
                    </div>
                ) : (
                    <Empty message="No recipes submitted recenty, Check back soon and you will find new recipes."/>
                )}

            </div>

        </section>
    )
}
