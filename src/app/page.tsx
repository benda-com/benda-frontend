import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/app/components/nav";
import "./globals.css";
import { Footer } from "./components/footer";
import { TestimonialCard } from "./components/cards";
import { Faq } from "./components/faq";
import { HeroBanner, WatchItem, AppItem } from "./components/hero";
import doctor_michael_img from "@/app/images/doctor-michael.jpg";
import new_born_mother_img from "@/app/images/new-born-mother.jpg";
import pregnant_woman_img from "@/app/images/pregnant-woman-1.jpg";

export const metadata: Metadata = {
  title: "Home",
  description: "Benda website",
};

export default function Home() {
  return (
    <main className="flex flex-col space-y-20">
      <Nav />
      <HeroBanner />
      <h1 className="place-self-center py-5 text-4xl font-semibold">
        Discover our products
      </h1>
      <WatchItem />
      <AppItem />
      <section className="flex flex-col py-10">
        <h1 className="place-self-center py-5 text-4xl font-semibold">
          Testimonies
        </h1>
        <div className="flex flex-col justify-evenly space-y-20  md:flex-row md:space-y-0">
          <TestimonialCard
            description={`"Benda has been an absolute game-changer for me during my pregnancy. As a first-time mom, I often felt anxious about whether everything was okay, but with Benda, I can monitor my health in real time. The smartwatch tracks important parameters like my blood pressure and oxygen levels, and if anything seems off, I receive instant alerts. What I love most is that I can share this information directly with my doctor, who can provide immediate advice through the app. It’s like having a personal health assistant with me 24/7"`}
            name={"Sandra M., 28 weeks pregnant"}
            image={pregnant_woman_img}
          />
          <TestimonialCard
            description={`"During my pregnancy, I used Benda, and it gave me so much peace of mind. The AI recommendations helped me stay on top of my health, and I felt reassured knowing that any abnormal readings were flagged immediately. There was even a time when my blood pressure spiked, and the app alerted me to contact my doctor right away, which probably saved me from complications. Now that my baby is here, I’m grateful for how smooth my pregnancy journey was thanks to Benda’s support."`}
            name={" Emily T., mother of a newborn"}
            image={new_born_mother_img}
          />
          <TestimonialCard
            description={`"Benda has transformed how I monitor and care for my pregnant patients. The real-time data I receive through the app allows me to catch potential issues early, often before the patient even feels symptoms. The ability to see detailed health parameters remotely makes it easier to provide timely advice without requiring frequent in-person visits. The app has also improved patient engagement—my patients feel more in control of their health, and it allows me to maintain a closer connection with them throughout their pregnancy."`}
            name={" Dr. Michael K., OB-GYN"}
            image={doctor_michael_img}
          />
        </div>
      </section>
      <section className="flex flex-col space-y-10  md:items-center">
        <h1 className="place-self-center py-5 text-2xl font-semibold md:text-4xl">
          Frequently Ask Questions(FAQ)
        </h1>
        <Faq
          question={"How does Benda help monitor my pregnancy?"}
          answer={
            "Benda uses a combination of IoT devices, such as a smartwatch, to track key health parameters like your blood pressure, heart rate, oxygen levels, and temperature. These metrics are automatically monitored in real-time, and the app alerts you and your healthcare provider if anything abnormal is detected. Benda also provides AI-powered recommendations to help you maintain a healthy pregnancy."
          }
        />
        <Faq
          question={
            " Can I communicate directly with my healthcare provider through the app?"
          }
          answer={
            "Yes! Benda allows you to connect with your healthcare provider directly through the app. You can share your monitored health data, ask questions, schedule appointments, and receive personalized advice from your doctor. This feature ensures that you’re always in touch with your healthcare team throughout your pregnancy."
          }
        />
        <Faq
          question={"Is Benda safe and easy to use?"}
          answer={
            "Absolutely. Benda is designed with safety and ease-of-use in mind. The IoT devices are non-invasive and require minimal setup. The app is user-friendly, providing clear instructions and real-time data to keep you informed about your health. Your data is securely stored and shared only with your healthcare provider, ensuring your privacy."
          }
        />
        <Faq
          question={"What happens if my health data shows an abnormal reading?"}
          answer={
            "If any of the monitored parameters fall outside the healthy range, Benda will immediately alert you and your healthcare provider. You’ll receive recommendations on the next steps to take, such as contacting your doctor or visiting a hospital. This real-time monitoring helps detect potential complications early, ensuring timely intervention."
          }
        />
      </section>
      <section className="flex flex-col">
        <h1 className="place-self-center py-5 text-4xl font-semibold">
          Powered By
        </h1>
        <div className="flex flex-col justify-evenly  md:flex-row">
          <Link href="#">
            <Image
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/ey.png"
              alt="EY"
              width={200}
              height={200}
            />
          </Link>
          <Link href="#">
            <Image
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/orange.png"
              alt="EY"
              width={500}
              height={500}
            />
          </Link>
          <Link href="#">
            <Image
              className=" pt-11"
              src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/aws.png"
              alt="EY"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
