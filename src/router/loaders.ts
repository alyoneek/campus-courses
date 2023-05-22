import { Params } from "react-router-dom";

import { accountActions } from "@/modules/account";
import { courseActions } from "@/modules/course";
import { groupsActions } from "@/modules/groups";
import { store } from "@/store";

export const groupLoader = async ({ params }: { params: Params<string> }) => {
  await store.dispatch(groupsActions.getCourses(params.idGroup as string));

  if (!!store.getState().errors.error) {
    throw new Response("Not Found", { status: 404 });
  }

  return null;
};

export const courseLoader = async ({ params }: { params: Params<string> }) => {
  await store.dispatch(
    courseActions.getCourseDetails(params.idCourse as string)
  );

  console.log(store.getState().errors.error);

  if (!!store.getState().errors.error) {
    throw new Response("Not Found", { status: 404 });
  }

  store.dispatch(accountActions.getTeachingCourses());
  store.dispatch(accountActions.getStudingCourses());

  return null;
};
