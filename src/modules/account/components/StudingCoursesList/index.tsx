import CourseCard from "@/components/CourseCard";
import List from "@/components/List";
import CardSkeleton from "@/components/Skeletons/CardSkeleton";
import { useAppSelector } from "@/store";
import { getStudingCourses } from "@modules/account/store/accountSelectors";

const StudingCoursesList = () => {
  const courses = useAppSelector(getStudingCourses);
  const loading = useAppSelector(
    (state) => state.loading.getData.getStudingCourses
  );

  return !loading ? (
    <List
      data={courses}
      renderItem={(course) => (
        <CourseCard key={course.id} courseInfo={course} />
      )}
    ></List>
  ) : (
    <>
      {Array.from(Array(8).keys()).map((i) => (
        <CardSkeleton key={i} />
      ))}
    </>
  );
};

export default StudingCoursesList;
