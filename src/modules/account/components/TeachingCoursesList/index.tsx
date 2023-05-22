import CourseCard from "@/components/CourseCard";
import List from "@/components/List";
import CardSkeleton from "@/components/Skeletons/CardSkeleton";
import { useAppSelector } from "@/store";
import { getTeachingCourses } from "@modules/account/store/accountSelectors";

const TeachingCoursesList = () => {
  const courses = useAppSelector(getTeachingCourses);
  const loading = useAppSelector(
    (state) => state.loading.getData.getTeachingCourses
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

export default TeachingCoursesList;
