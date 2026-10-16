export type ClassStatus =
  | "DRAFT"
  | "APPROVED"
  | "PENDING_APPROVAL"
  | "IN_PROGRESS"
  | "COMPLETED";

export type ClassResponse = {
    id: string;
    name: string;
    centre_id: string;
    course_id: string;
    teacher_id: string;
    start_date: string;
    end_date: string;
    status: ClassStatus;
    version: number;
}


export type ClassListResponse = {
  items: ClassResponse[];
  next_cursor: string | null;
  has_more: boolean;
};

export type EditClassFormData = {
  name: string;
  course_id: string;
  start_date: string;
  end_date: string;
  teacher_id: string;
}

export type UpdateClassRequest = {
  name: string;
  course_id: string;
  start_date: string;
  end_date: string;
  teacher_id: string;
  version: number;
}

export type UpdateClassVariables = {
  classId: string,
  updatingData: UpdateClassRequest
}