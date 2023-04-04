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

type CourseStatus = "Created" | "OpenForAssigning" | "Started" | "Finished";
type Semester = "Autumn" | "Spring";
