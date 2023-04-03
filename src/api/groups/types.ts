export interface IGropRequest {
  name: string;
}

export interface IGropResponse extends IGropRequest {
  id: string;
}

export interface ICourseInGroupResponse {
  id: string;
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  remainingSlotsCount: number;
  status: CourseStatus;
  semester: Semester;
}

type CourseStatus = "Created" | "OpenForAssigning" | "Started" | "Finished ";
type Semester = "Autumn" | "Spring ";
