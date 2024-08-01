import Image from "next/image";
import "./globals.css";

import HomePage from "../components/Avatar.jsx";
import Card from "../components/Cards.jsx";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card />
    </div>
  );
}
