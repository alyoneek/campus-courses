import CourseCard from "@/components/CourseCard";
import List from "@/components/List";
import { useAppSelector } from "@/store";
import { getCourses } from "@modules/groups/store/groupsSelectors";

const CoursesInGroupList = () => {
  const courses = useAppSelector(getCourses);

  return (
    <List
      data={courses}
      renderItem={(course) => (
        <CourseCard key={course.id} courseInfo={course} />
      )}
    />
  );
};

export default CoursesInGroupList;
