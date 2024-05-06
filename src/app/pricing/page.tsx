import Nav from "../components/nav";
import { PricingCard, PricingCardBlack } from "../components/cards";
import { Footer } from "../components/footer";
const PricingPage = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className=" py-10 text-5xl font-black">
          We&apos;ve got a plan that&apos;s perfect for you
        </h1>
        <section className="flex space-x-10">
          <PricingCard />
          <PricingCardBlack />
          <PricingCard />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default PricingPage;
