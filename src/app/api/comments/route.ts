import { NextResponse } from "next/server";

const comments = [
  {
    name: "Elena S.",
    role: "Marketing Director of Coinio",
    text: "Incredible work from Taha! He understood our vision from the get-go and translated it into a stunning brand identity and website design. His professionalism and prompt communication made the entire process seamless.",
  },
  {
    name: "Henry W.",
    role: "Team member of Sole Crafters",
    text: "Opting for our exclusive website design was a game-changer. His unique designs elevated our brand, captivating our audience with sophistication.",
  },
  {
    name: "Layla A.",
    role: "Founder of The Nectar",
    text: "Kudos to Taha for his exceptional label design work! He captured the essence of our brand effortlessly, delivering labels that are both visually appealing and informative.",
  },
  {
    name: "Adam B.",
    role: "Co-founder, Morphosys",
    text: "Selecting a design partner for our branding and website needs was pivotal. He delivered stunning designs that resonate with our customers.",
  },
  {
    name: "Yılmaz F.",
    role: "Founder, Oven Delights",
    text: "Thanks to Taha, our bakery's new branding and logo are simply irresistible! His creativity and precision brought our vision to life.",
  },
];

export async function GET() {
  return NextResponse.json(comments, { status: 200 });
}
