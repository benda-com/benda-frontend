import Image from "next/image";
import mobileAppImage from "../images/mobile-app2.png";

export const HeroBanner = () => {
  return (
    <section className="px-20 md:flex">
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
          src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/hero-banner-image.png"
          alt="A pregnant woman and her baby"
        />
      </div>
    </section>
  );
};

export const WatchItem = () => {
  return (
    <section className="flex flex-col-reverse justify-around  md:flex-row">
      <div className="space-y-5  pt-10 md:w-1/2">
        <h3 className="text-center font-bold md:text-left">
          Smart Pregnancy Monitor Watch
        </h3>
        <p className="">
          The Smart Pregnancy Monitor Watch is a cutting-edge device designed to
          help expectant mothers monitor essential health parameters like blood
          pressure, temperature, and oxygen saturation with ease and accuracy.
          With real-time tracking and seamless integration with our mobile app,
          this smartwatch ensures that you and your healthcare provider are
          always informed.
        </p>
        <ul className="list-disc pl-4">
          <li>
            Continuous monitoring of blood pressure, temperature, and oxygen
            saturation
          </li>
          <li>Real-time data synchronization with the mobile app</li>
          <li>Comfortable and easy to wear during daily activities</li>
          <li>Alerts for abnormal vital signs</li>
          <li>Water-resistant design for everyday use</li>
        </ul>
      </div>
      <div className="flex w-auto justify-center  md:flex-none md:justify-normal">
        <Image
          width={250}
          height={250}
          src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/watch-img.png"
          alt="A pregnant woman and her baby"
        />
      </div>
    </section>
  );
};

export const AppItem = () => {
  return (
    <section className="flex flex-col justify-around  md:flex-row">
      <div className="flex w-auto justify-center  md:flex-none md:justify-normal">
        <Image
          width={250}
          height={250}
          src={mobileAppImage}
          alt="A pregnant woman and her baby"
        />
      </div>
      <div className="space-y-5 pt-10 md:w-1/2">
        <h3 className="text-center font-bold md:text-left">
          Pregnancy Companion Mobile App
        </h3>
        <p>
          Our Pregnancy Companion App is the perfect partner to the Smart
          Pregnancy Monitor Watch. This powerful app allows pregnant women to
          stay connected to their healthcare providers, share vital health
          parameters, and receive real-time feedback. With AI-powered
          recommendations and alerts, the app ensures a healthier, safer
          pregnancy journey.
        </p>
        <ul className="list-disc pl-4">
          <li>
            Seamless communication with healthcare providers via chat or video
          </li>
          <li>Share vital health data with doctors in real-time</li>
          <li>Alerts when health parameters exceed normal levels</li>
          <li>AI-generated tips and recommendations for a healthy pregnancy</li>
          <li>Appointment scheduling with doctors</li>
          <li>Data history and insights for better pregnancy management</li>
          <li>
            Customizable notifications for medication reminders and health
            check-ups
          </li>
        </ul>
      </div>
    </section>
  );
};
