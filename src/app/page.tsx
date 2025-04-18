import dynamic from "next/dynamic";
import Comments from "./component/comment";
import Hero from "./component/hero";
import Work from "./work/page";
import ScrollAnimation from "./component/ScrollAnimation";

const ScrollEffect = dynamic(() => import("./component/ScrollEffect"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-black">
      <ScrollAnimation animationType="fade-up">
        <Hero />
      </ScrollAnimation>
      <ScrollEffect>
        <Work />
      </ScrollEffect>
      <ScrollAnimation animationType="fade-up">
        <Comments />
      </ScrollAnimation>
    </div>
  );
}
