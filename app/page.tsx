import { Hero } from "@/components/common/hero";
import { FavoriteRecipes } from "@/components/landing-page/favorite-recipes";
import { RecentRecipes } from "@/components/landing-page/recent-recipes";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FavoriteRecipes/>
      <RecentRecipes/>
    </div>
  );
}
