import { useEffect } from "react";

import DataContent from "@/layouts/content/DataContent";
import { ProfileForm, accountActions } from "@/modules/account";
import { useAppDispatch } from "@/store";

const Profile = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(accountActions.getProfile());
  }, [dispatch]);

  return (
    <DataContent title="Профиль">
      <ProfileForm />
    </DataContent>
  );
};

export default Profile;
