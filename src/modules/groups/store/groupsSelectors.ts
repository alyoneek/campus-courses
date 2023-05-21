import { RootState } from "@/store";

export const getGroups = (state: RootState) => state.groups.allGroups;
