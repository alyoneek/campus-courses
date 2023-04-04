import ProfileForm from "@/components/forms/ProfileForm";
import DataContent from "@/layouts/content/DataContent";
import { useAppDispatch, useAppSelector } from "@/store";
import { getProfile } from "@/store/features/account/accountActions";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useAppDispatch();
  const profileInfo = useAppSelector((state) => state.account.userProfile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <DataContent title="Профиль">
      <ProfileForm profileInfo={profileInfo} />
    </DataContent>
  );
};

export default Profile;
