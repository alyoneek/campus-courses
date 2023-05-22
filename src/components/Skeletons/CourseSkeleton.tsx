import ContentLoader from "react-content-loader";

const CourseSkeleton = () => {
  return (
    <ContentLoader height="716" width="100%">
      <rect x="0" y="0" rx="0" ry="0" width="45%" height="44" />

      <rect x="0" y="76" rx="0" ry="0" width="25%" height="25" />

      <rect x="0" y="113" rx="8" ry="8" width="100%" height="400" />

      <rect x="0" y="553" rx="8" ry="8" width="32%" height="58" />
      <rect x="34%" y="553" rx="8" ry="8" width="32%" height="58" />
      <rect x="68%" y="553" rx="8" ry="8" width="32%" height="58" />

      <rect x="0" y="651" rx="8" ry="8" width="49%" height="58" />
      <rect x="51%" y="651" rx="8" ry="8" width="49%" height="58" />
    </ContentLoader>
  );
};

export default CourseSkeleton;
