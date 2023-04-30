import { ICourseInfo } from "../courses/types";

export interface IGropRequest {
  name: string;
}

export interface IGropResponse extends IGropRequest {
  id: string;
}

export interface ICourseInGroupResponse
  extends Omit<ICourseInfo, "studentsEnrolledCount" | "studentsInQueueCount"> {
  id: string;
  remainingSlotsCount: number;
}
