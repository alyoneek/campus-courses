import ContentLoader from "react-content-loader";

const ProfileSkeleton = () => {
  return (
    <ContentLoader
      rtl
      speed={2}
      width="100%"
      height="249"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="84%" y="0" rx="4" ry="8" width="16%" height="40" />
      <rect x="0" y="0" rx="8" ry="8" width="83%" height="40" />
      <rect x="84%" y="64" rx="4" ry="4" width="16%" height="40" />
      <rect x="0" y="64" rx="8" ry="8" width="83%" height="40" />
      <rect x="84%" y="128" rx="4" ry="4" width="16%" height="40" />
      <rect x="0" y="128" rx="8" ry="8" width="83%" height="40" />
      <rect x="0" y="192" rx="8" ry="8" width="104" height="40" />
    </ContentLoader>
  );
};

export default ProfileSkeleton;
