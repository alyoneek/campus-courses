import { RootState } from "@/store";

export const getUsers = (state: RootState) => state.users.allUsers;
