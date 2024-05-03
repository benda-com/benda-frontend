import Nav from "../components/nav";
import {
  AboutCard,
  InverseAboutCard,
  TeamMemberCard,
} from "../components/cards";
import { Footer } from "../components/footer";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi veniam eos quidem unde pariatur dolor quas animi beatae corporis quod saepe quis, cumque ex est eveniet natus vitae facilis. Ratione laborum consequatur beatae aspernatur modi facere magni dignissimos, provident culpa ipsam quos a sequi id ab suscipit ullam veritatis magnam quaerat cupiditate illo labore! Voluptates eum alias rem natus.";
const About = () => {
  return (
    <>
      <Nav></Nav>
      <main className="my-10 flex flex-col items-center space-y-10">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <AboutCard heading="Our Vision" description={description} />
        <InverseAboutCard heading="Our Vision" description={description} />
        <AboutCard heading="Our Vision" description={description} />

        <h1 className="text-4xl font-semibold">Meet The Team</h1>
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
      </main>
      <Footer />
    </>
  );
};

export default About;
