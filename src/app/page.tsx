import dynamic from "next/dynamic";
import Comments from "./component/comment";
import Hero from "./component/hero";
import Work from "./work/page";

const ScrollEffect = dynamic(() => import("./component/ScrollEffect"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-black">
      
      <ScrollEffect>
        <Hero />
      </ScrollEffect>
      <ScrollEffect>
        <Work />
      </ScrollEffect>
      <ScrollEffect>
        <Comments />
      </ScrollEffect>
    </div>
  );
}
