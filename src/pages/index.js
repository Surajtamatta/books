
import Hero from "@/views/hero";
import Layout from "@/components/Layout";
import Discover from "@/views/discover";
import BestSeller from "@/views/bestseller";
import Subscribe from "@/views/subscribe";



export default function Home() {
  return (
  <Layout>
    <Hero/>
    <Discover/>
    <BestSeller/>
    <Subscribe/>
  </Layout>
  );
}
