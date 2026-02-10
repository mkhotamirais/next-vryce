import HomeAbout from "@/components/home/HomeAbout";
import HomeContactUs from "@/components/home/HomeContactUs";
import HomeHero from "@/components/home/HomeHero";
import HomeOurService from "@/components/home/HomeServices";
import HomeWhyVrice from "@/components/home/HomeWhyVrice";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeOurService />
      <HomeWhyVrice />
      <HomeContactUs />
    </>
  );
}
