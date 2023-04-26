import { CourseStatus, Semester } from "@/api/courses/types";

export interface IGropRequest {
  name: string;
}

export interface IGropResponse extends IGropRequest {
  id: string;
}

export interface ICourseInGroupRequest {
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  remainingSlotsCount: number;
  status: CourseStatus;
  semester: Semester;
}

export interface ICourseInGroupResponse extends ICourseInGroupRequest {
  id: string;
}
