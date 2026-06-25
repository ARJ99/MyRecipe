import { db } from "@/db/index";
import { recipes } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getRecipes() {
    const recipesData = await db.select().from(recipes).where(eq(recipes.status, "approved")).orderBy(desc(recipes.voteCount));;
    return recipesData;
}

export async function getRecentlyRecipes() {
    await connection();
    const recipesData = await getRecipes();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return recipesData.filter(
        (recipe) =>
            recipe.createdAt &&
            new Date(recipe.createdAt.toISOString()) >= oneWeekAgo
    );
}

export async function getRecipeBySlug(slug: string) {
    await connection();

    const recipe = await db.select().from(recipes).where(eq(recipes.slug, slug));

    return recipe[0] ?? null;

}