import PatientList from "@/app/components/patients/patient-list";
import PatientTabs from "@/app/components/patients/patient-tabs";

const Page = () => {
  return (
    <section className="h-screen grow">
      <h1 className="px-10 py-10 text-3xl font-bold">All Patients</h1>
      <PatientTabs />
      <PatientList />
      <PatientList />
      <PatientList />
      <PatientList />
    </section>
  );
};

export default Page;
