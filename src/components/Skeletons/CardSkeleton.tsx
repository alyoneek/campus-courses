import ContentLoader from "react-content-loader";

const CardSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="78"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="6" rx="8" ry="8" width="100%" height="90%" />
    </ContentLoader>
  );
};

export default CardSkeleton;
