const PatientList = () => {
  return (
    <div className="mx-10 my-5 flex w-[70rem] items-center rounded-md border py-5 hover:bg-gray-300">
      <div className="mx-10 h-10 w-10 rounded-full border bg-gray-400"></div>
      <ul className="flex flex-row space-x-10">
        <li className="text-xl">Mr. Sam james</li>
        <li className="text-xl">53</li>
        <li className="text-xl">23.01.2020</li>
        <li className="text-xl">Mr. Sam james</li>
        <li className="text-xl">Mr. Sam james</li>
        <li className="text-xl">Condition</li>
        <li className="text-xl">Follow-up</li>
      </ul>
    </div>
  );
};

export default PatientList;
