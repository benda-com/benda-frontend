import Image from "next/image";
import heroBannerImg from "@/app/images/hero-banner-image.png";
import watchImg from "@/app/images/watch-img.png";

export const HeroBanner = () => {
  return (
    <section className="border px-20 md:flex">
      <div className="space-y-10 md:place-self-center">
        <h1 className="text-6xl font-bold">Make your pregnancy successful</h1>
        <p className="md:w-1/2 ">
          Bènda is a diagnostic assistance system based on physiological data
          collected by sensors and artificial intelligence, with the aim of
          monitoring and preventing possible cases of preeclampsia.
        </p>
        <button className="rounded-3xl border bg-blue-primary px-10 py-2 text-white hover:bg-blue-500">
          Get started
        </button>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          src={heroBannerImg}
          alt="A pregnant woman and her baby"
        />
      </div>
    </section>
  );
};

export const WatchItem = () => {
  return (
    <section className="flex justify-around border">
      <div className="w-1/2 space-y-5">
        <h3 className="font-bold">
          Curabitur lobortis at metus ac egestas. Cras suscipit neque diam
        </h3>
        <p>
          Maecenas sodales fermentum pellentesque neque enim, efficitur a rutrum
          sit amet, efficitur eget odio.
        </p>
        <ul className="list-disc pl-4">
          <li>Donec viverra, dolor vel blandit sodales</li>
          <li>Donec viverra, dolor vel blandit sodales</li>
          <li>Donec viverra, dolor vel blandit sodales</li>
          <li>Donec viverra, dolor vel blandit sodales</li>
        </ul>
      </div>
      <div>
        <Image
          width={250}
          height={250}
          src={watchImg}
          alt="A pregnant woman and her baby"
        />
      </div>
    </section>
  );
};

export const AppItem = () => {
  return (
    <section className="flex justify-around border">
      <div>
        <Image
          width={250}
          height={250}
          src={watchImg}
          alt="A pregnant woman and her baby"
        />
      </div>
      <div className="w-1/2 space-y-5">
        <h3 className="font-bold">
          Curabitur lobortis at metus ac egestas. Cras suscipit neque diam
        </h3>
        <p>
          Maecenas sodales fermentum pellentesque neque enim, efficitur a rutrum
          sit amet, efficitur eget odio.
        </p>
        <ul className="list-disc pl-4">
          <li>Donec viverra, dolor vel blandit sodales</li>
          <li>Donec viverra, dolor vel blandit sodales</li>
          <li>Donec viverra, dolor vel blandit sodales</li>
          <li>Donec viverra, dolor vel blandit sodales</li>
        </ul>
      </div>
    </section>
  );
};
