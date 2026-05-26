import { db } from "@/db/index";
import { recipes } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getRecipes() {
    const recipesData = await db.select().from(recipes).where(eq(recipes.status, "approved")).orderBy(desc(recipes.voteCount));;
    return recipesData;
}
