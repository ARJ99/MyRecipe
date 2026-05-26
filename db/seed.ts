import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { recipes } from "./schema";
import { allRecipes } from "./data";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
    console.log("🌱 Seeding database...");

    // Clear existing data
    await db.delete(recipes);
    console.log("✅ Cleared existing data");

    // Insert recipes from data.ts
    for (const recipe of allRecipes) {
        await db.insert(recipes).values({

            slug: recipe.slug,
            title: recipe.title,
            description: recipe.description,
            marinateTime: recipe.marinateTime,
            cookTime: recipe.cookTime,
            totalTime: recipe.totalTime,
            servings: recipe.servings,
            ingredients: recipe.ingredients,
            imageLink: recipe.imageLink,
            directions: recipe.directions,
            voteCount: recipe.voteCount || 0,
            createdAt: recipe.createdAt,
            approvedAt: recipe.approvedAt,
            status: recipe.status,
            submittedBy: recipe.submittedBy,
        });

        console.log(
            `✅ Added product: ${recipe.title}`
        );
    }

    // Verify inserted products
    const insertedRecipes = await db.select().from(recipes);
    console.log(`\n🎉 Successfully seeded:  ${insertedRecipes.length} recipes!`);

    console.log("\n📦 Recipes in database:");
    insertedRecipes.forEach((recipe) => {
        console.log(
            `  - ${recipe.title} - (${recipe.slug}) -`
        );
    });
}

main()
    .catch((error) => {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    })
    .finally(() => {
        console.log("\n✨ Seeding complete!");
        process.exit(0);
    });