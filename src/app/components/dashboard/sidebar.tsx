import Image from "next/image";
export const Sidebar = () => {
  return (
    <section className="flex h-dvh w-[20rem] flex-col items-center space-y-20 border">
      <Image
        className="pt-5"
        src="https://benda-s3-bucket.s3.eu-north-1.amazonaws.com/media/images/logo.png"
        alt="Logo of Benda"
        width="150"
        height="150"
      />
      <ul>
        <li className="flex space-x-5 border">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </span>
          <span>Dashboard</span>
        </li>
        {/* <li>Patients</li>
        <li>Messages</li>
        <li>Income</li>
        <li>TODO</li>
        <li>Appointment</li>
        <li>Settings</li> */}
      </ul>
    </section>
  );
};
