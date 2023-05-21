import CourseCard from "@/components/CourseCard";
import List from "@/components/List";
import { useAppSelector } from "@/store";
import { getStudingCourses } from "@modules/account/store/accountSelectors";

const StudingCoursesList = () => {
  const courses = useAppSelector(getStudingCourses);

  return (
    <List
      data={courses}
      renderItem={(course) => (
        <CourseCard key={course.id} courseInfo={course} />
      )}
    ></List>
  );
};

export default StudingCoursesList;
