import Nav from "../components/nav";
import {
  AboutCard,
  InverseAboutCard,
  TeamMemberCard,
} from "../components/cards";
import { Footer } from "../components/footer";
import teamMemberImage from "@/app/images/team-benda.jpg";
import heartImage from "@/app/images/IMGL9660.jpg";
import peopleImage from "@/app/images/IMGL9735.jpg";
import emmaPicture from "@/app/images/emma_picture.png";
import renePicture from "@/app/images/rene_picture.png";
import simonPicture from "@/app/images/simon_picture.png";
import stevePicture from "@/app/images/steve-picture.png";
import djimeliPicture from "@/app/images/djimeli-picture.png";
import ibrahimPicture from "@/app/images/ibrahim-picture.png";

const About = () => {
  return (
    <>
      <Nav></Nav>
      <main className="my-10 flex flex-col items-center space-y-10">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <AboutCard
          heading="Our Vision"
          description={
            "Empowering every mother with the future of healthcare. At Benda, we envision a world where advanced technology and compassionate care unite, ensuring safer pregnancies through real-time monitoring and AI-driven insights."
          }
          img={teamMemberImage}
        />
        <InverseAboutCard
          heading="Our Mission"
          description={
            "To revolutionize maternal healthcare by harnessing the power of IoT and AI. We are dedicated to delivering real-time health data to doctors, empowering them to prevent complications and safeguard the well-being of both mother and child."
          }
          img={peopleImage}
        />
        <AboutCard
          heading="Our Values"
          description={
            "Innovation, Empathy, and Safety. We believe in pushing the boundaries of technology to create life-saving solutions, building trust through compassionate care, and ensuring the highest standards of safety for every mother and baby."
          }
          img={heartImage}
        />

        <h1 className="text-4xl font-semibold">Meet The Team</h1>
        <TeamMemberCard
          name={"Emmanuel Sandjio"}
          role={"FullStack Developer At Benda"}
          description={
            "Emmanuel always had a fascination for technology, and becoming a developer was an opportunity not only to use new technologies to their full potential, but also to help people by developing innovative solutions. He is responsible of implementing the business logic in our backend. He likes playing video games and watching vlogs on YouTube."
          }
          img={emmaPicture}
          linkedinName={"Emmanuel_Sandjio"}
          githubName={"Sandjio"}
          linkedinAccountLink={
            "https://www.linkedin.com/in/sandjio-wagne-emmanuel-52ba77188/"
          }
          githubAccountLink={"https://github.com/Sandjio"}
        />
        <TeamMemberCard
          name={"SI MVOMO Rene Placide"}
          role={"Electronic Designer At Benda"}
          description={
            "Rene contributed to the manufacturing of the Benda watch from the designed of electronic circuits to the implementation of the end product. He is passionated by technology and innovative solutions. Also, he likes to solve complex problems which requires critical thinking and often play volleyball on his free time."
          }
          img={renePicture}
          linkedinName={"placide-si-mvomo"}
          githubName={"placide"}
          linkedinAccountLink={
            "https://cm.linkedin.com/in/ren%C3%A9-placide-si-mvomo-725a4820b"
          }
          githubAccountLink={"https://github.com/Sandjio"}
        />
        <TeamMemberCard
          name={"NGWANG Simon Ervin"}
          role={"Project Manager At Benda"}
          description={
            "Simon was responsible of drafting the business plan and business model, he thinks the most interesting part of his job is the fact it requires both science and intuition in managing the team, stakeholders and resources to achieve objectives. He likes watching football matches and he is a huge fan of Liverpool FC."
          }
          img={simonPicture}
          linkedinName={"simon-ervin-ngwang"}
          githubName={"Simon"}
          linkedinAccountLink={
            "https://www.linkedin.com/in/simon-ervin-ngwang-11b5aa219"
          }
          githubAccountLink={"https://github.com/Sandjio"}
        />
        <TeamMemberCard
          name={"MAMENDJA Serge Steve"}
          role={"Data Scientist At Benda"}
          description={
            "Steve implemented a neural network which was used to determined the blood pressure from signals coming from the Benda smartwatch. He has always been passionate by logic, maths and IT that's why he decided to explore the universe of AI and machine learning. During his off time he likes to play piano and competing for hackathons."
          }
          img={stevePicture}
          linkedinName={"steve-mamendja"}
          githubName={"SteveMassDev"}
          linkedinAccountLink={
            "https://www.linkedin.com/in/steve-mamendja-2a3688204/"
          }
          githubAccountLink={"https://github.com/SteveMassDev"}
        />
        <TeamMemberCard
          name={"DJIMELI KAFO Christian"}
          role={"Data Scientist At Benda"}
          description={
            "Apart from his contributions on the development of our machine learning models, Christian had a key role in the development of our mobile app due to his expertise in mobile development. His hobbies are listening to music and and reading books."
          }
          img={djimeliPicture}
          linkedinName={"christian-djimeli-kafo"}
          githubName={"djimeli"}
          linkedinAccountLink={
            "https://www.linkedin.com/in/christian-djimeli-kafo-17b26319b"
          }
          githubAccountLink={"https://github.com/H-DJACK"}
        />
        <TeamMemberCard
          name={"NJOYA Ibrahim Halil"}
          role={"Android Developer At Benda"}
          description={
            "With his background in mechatronics, Ibrahim was able to designed the electronic circuit of the Benda Watch and printing a 3D prototype. He has a great passion for Computer science and that's what motivated him programming. During his days off, he plays basket ball and video games."
          }
          img={ibrahimPicture}
          linkedinName={"ibrahim-halil-njoya"}
          githubName={"ibrahim"}
          linkedinAccountLink={
            "https://www.linkedin.com/in/ibrahim-halil-njoya-a5b237115"
          }
          githubAccountLink={"https://github.com/H94kD"}
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
