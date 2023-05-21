import CourseCard from "@/components/CourseCard";
import List from "@/components/List";
import { useAppSelector } from "@/store";
import { getTeachingCourses } from "@modules/account/store/accountSelectors";

const TeachingCoursesList = () => {
  const courses = useAppSelector(getTeachingCourses);

  return (
    <List
      data={courses}
      renderItem={(course) => (
        <CourseCard key={course.id} courseInfo={course} />
      )}
    ></List>
  );
};

export default TeachingCoursesList;
