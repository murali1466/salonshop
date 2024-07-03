
import { CssBaseline } from "@mui/material";
import SimpleSlider from "src/content/Carousel/page";
import HeroContent from "src/content/HeroContent/page";
import WhyChooseUs from "src/content/WhyChooseUs/page";

export default function Home() {
  return (
    <>
    <CssBaseline />
    <HeroContent />
    <WhyChooseUs />
    <SimpleSlider />
    </>
  );
}
