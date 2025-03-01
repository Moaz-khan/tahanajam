import Comments from "./component/comment";
import Hero from "./component/hero";
import Work from "./work/page";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <Comments/>
    </div>
  );
}
