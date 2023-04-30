export interface ICourseInfo {
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  studentsEnrolledCount: number;
  studentsInQueueCount: number;
  status: CourseStatus;
  semester: Semester;
}

export interface ICourseDescription {
  requirements: string;
  annotations: string;
}

export interface ICourseResponse extends ICourseInfo, ICourseDescription {
  id: string;
  students: IStudent[];
  teachers: ITeacher[];
  notifications: INotification[];
}

export interface IStudent {
  id: string;
  name: string;
  email: string;
  status: StudentStatus;
  midtermResult: MarkType;
  finalResult: MarkType;
}

export interface ITeacher {
  name: string;
  email: string;
  isMain: boolean;
}

export interface INotification {
  text: string;
  isImportant: boolean;
}

export interface IStatusRequest {
  status: CourseStatus;
}

export interface ITeacherRequest {
  userId: string;
}

export interface INotificationRequest {
  text: string;
  isImportant: boolean;
}

export interface IStudentStatusRequest {
  status: StudentStatus;
}

export interface IStudentMarkRequest {
  markType: CertificationType;
  mark: MarkType;
}

export type CourseStatus =
  | "Created"
  | "OpenForAssigning"
  | "Started"
  | "Finished";
export type Semester = "Autumn" | "Spring";
export type StudentStatus = "InQueue" | "Accepted" | "Declined";
export type MarkType = "NotDefined" | "Passed" | "Failed";
export type CertificationType = "Midterm" | "Final";
