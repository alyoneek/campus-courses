import CourseCard from "@/components/CourseCard";
import List from "@/components/List";
import CardSkeleton from "@/components/Skeletons/CardSkeleton";
import { useAppSelector } from "@/store";
import { getCourses } from "@modules/groups/store/groupsSelectors";

const CoursesInGroupList = () => {
  const courses = useAppSelector(getCourses);
  const loading = useAppSelector((state) => state.loading.isDataFetching);

  return !loading ? (
    <List
      data={courses}
      renderItem={(course) => (
        <CourseCard key={course.id} courseInfo={course} />
      )}
    />
  ) : (
    Array.from(Array(8).keys()).map((i) => <CardSkeleton key={i} />)
  );
};

export default CoursesInGroupList;
