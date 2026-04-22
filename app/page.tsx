import { Hero } from "@/components/common/hero";
import { FavoriteRecipes } from "@/components/landing-page/favorite-recipes";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FavoriteRecipes/>
    </div>
  );
}
