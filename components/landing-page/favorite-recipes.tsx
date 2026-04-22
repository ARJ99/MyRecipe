import { StarIcon } from "lucide-react"
import Image from "next/image";
import { RecipeCard } from "../common/recipe-card";

const lunchRecipes = [
    {
        id: "1",
        title: "Grilled Chicken Caesar Salad",
        description: "A classic, crisp salad featuring tender grilled chicken and savory dressing.",
        prepTime: 20,
        imagelink: "/recipes/cesarsalad.jpg",
        recipe: `To prepare this lunch staple, begin by seasoning chicken breasts with salt and pepper 
        before grilling them until golden and fully cooked. While the chicken rests, chop fresh romaine lettuce 
        and toss it in a large bowl with creamy Caesar dressing, crunchy croutons, and plenty of shaved parmesan cheese. 
        Finally, slice the warm chicken into strips and lay them across the salad, finishing with a squeeze of fresh lemon 
        for a bright, zesty touch.`
    },
    {
        id: "2",
        title: "Spaghetti Aglio e Olio",
        description: "An elegant and simple Italian pasta dish made with pantry staples.",
        prepTime: 15,
        imagelink: "/recipes/spaghetti.jpg",
        recipe: `While boiling a pot of salted water for the spaghetti, thinly slice several cloves of garlic. In a large skillet, 
        gently warm a generous amount of high-quality olive oil and cook the garlic until it is just barely golden and fragrant, 
        taking care not to burn it. Toss the al dente pasta directly into the oil along with a splash of the starchy pasta water, 
        red pepper flakes, and fresh parsley. Mix vigorously until the oil emulsifies into a light sauce that clings to every strand of pasta.`
    },
    {
        id: "3",
        title: "Grilled Chicken Caesar Salad",
        description: "A classic, crisp salad featuring tender grilled chicken and savory dressing.",
        prepTime: 20,
        imagelink: "/recipes/cesarsalad.jpg",
        recipe: `To prepare this lunch staple, begin by seasoning chicken breasts with salt and pepper 
        before grilling them until golden and fully cooked. While the chicken rests, chop fresh romaine lettuce 
        and toss it in a large bowl with creamy Caesar dressing, crunchy croutons, and plenty of shaved parmesan cheese. 
        Finally, slice the warm chicken into strips and lay them across the salad, finishing with a squeeze of fresh lemon 
        for a bright, zesty touch.`
    },
    {
        id: "4",
        title: "Spaghetti Aglio e Olio",
        description: "An elegant and simple Italian pasta dish made with pantry staples.",
        prepTime: 15,
        imagelink: "/recipes/spaghetti.jpg",
        recipe: `While boiling a pot of salted water for the spaghetti, thinly slice several cloves of garlic. In a large skillet, 
        gently warm a generous amount of high-quality olive oil and cook the garlic until it is just barely golden and fragrant, 
        taking care not to burn it. Toss the al dente pasta directly into the oil along with a splash of the starchy pasta water, 
        red pepper flakes, and fresh parsley. Mix vigorously until the oil emulsifies into a light sauce that clings to every strand of pasta.`
    },
];
export const FavoriteRecipes = () => {
    return (
        <section className="bg-secondary/10 py-4 ">
            <div className="container mx-auto px-2">
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-1">
                        <StarIcon className="size-4" />
                        <h1 className="tracking-wide font-bold text-base">Favorites Recipes</h1>
                    </div>
                    <p className="text-sm">These are the most popular recipes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {lunchRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipes={recipe}/>
                    ))}
                </div>

            </div>
        </section>
    )
}
