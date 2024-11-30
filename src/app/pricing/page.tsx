import Nav from "../components/nav";
import { PricingCard } from "../components/cards";
import { Footer } from "../components/footer";
const PricingPage = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="py-10 text-center text-5xl font-black">
          We&apos;ve got a plan that&apos;s perfect for you
        </h1>
        <section className="flex w-full flex-col items-center space-y-10  md:flex-row md:justify-center md:space-x-10  md:space-y-0">
          <PricingCard planType="basic" />
          <PricingCard planType="premium" />
          <PricingCard planType="standard" />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default PricingPage;
