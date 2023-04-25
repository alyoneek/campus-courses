import ExtendedInfo from "@/components/Course/ExtendedInfo";
import GeneralInfo from "@/components/Course/GeneralInfo";
import PeopleInfo from "@/components/Course/PeopleInfo";
import DataContent from "@/layouts/content/DataContent";

const Course = () => {
  return (
    <DataContent title="Программные методы с python3">
      <GeneralInfo />
      <ExtendedInfo />
      <PeopleInfo />
    </DataContent>
  );
};

export default Course;
