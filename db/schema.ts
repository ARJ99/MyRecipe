import {
    pgTable,
    serial,
    text,
    varchar,
    integer,
    timestamp,
    json,
    uniqueIndex,
    index,
} from "drizzle-orm/pg-core";

// ============= Recipes =============
export const recipes = pgTable(
    "recipes",
    {
        id: serial("id").primaryKey(),

        // Core product info
        slug: varchar("slug", { length: 140 }).notNull(),
        title: varchar("title", { length: 120 }).notNull(),
        description: text("description"),
        marinateTime: integer("marinateTime"),
        cookTime: integer("cookTime"),
        totalTime: integer("totalTime"),
        servings: integer("servings"),
        ingredients: json("ingredients").$type<string[]>(),
        imageLink: text("image_link"),
        directions:json("directions").$type<string[]>(),
        

        // Metadata
        createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
        approvedAt: timestamp("approved_at", { withTimezone: true }),
        status: varchar("status", { length: 20 }).default("pending"), // pending | approved | rejected
        submittedBy: varchar("submitted_by", { length: 120 }).default("anonymous"),
        userId: varchar("user_id", { length: 255 }), // Clerk user ID

        // Organization reference (for backend queries only)
        organizationId: varchar("organization_id", { length: 255 }), // Clerk org ID
    },
    (table) => ({
        slugIdx: uniqueIndex("recipes_slug_idx").on(table.slug),
        statusIdx: index("recipes_status_idx").on(table.status),
        organizationIdx: index("recipes_organization_idx").on(
            table.organizationId
        ),
    })
);