import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { BentoGridDemo } from "./components/BentoGridDemo";
import NavBar from "./components/NavBar";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { TabsDemo } from "./components/TabsDemo";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SpotlightPreview />
      <TabsDemo />
      <BentoGridDemo />
      <BackgroundBeamsDemo />
    </div>
  );
}
