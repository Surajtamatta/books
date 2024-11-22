
import Hero from "../views/hero";
import Layout from "../components/Layout";
import Books from "../views/books";
import BestSeller from "../views/bestseller";
import Subscribe from "../views/contact";
import About from "@/views/about";



export default function Home() {
  return (
  <Layout>
    <Hero/>
    <About/>
    <Books/>
    <BestSeller/>
    <Subscribe/>
  </Layout>
  );
}
