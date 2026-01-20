import Hero from "../sections/Hero";
import BentoServices from "../sections/BentoServices";
import ProcessFlow from "../sections/ProcessFlow";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Core Capabilities Section */}
      <BentoServices />
      
      {/* Process Flow & Partners Section */}
      <ProcessFlow />
    </main>
  );
}