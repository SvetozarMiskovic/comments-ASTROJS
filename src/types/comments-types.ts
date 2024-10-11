export interface Comment {
  id: number;
  author: string;
  comment: string;
  archived: boolean;
}

export interface CommentPayload {
  author?: string;
  comment?: string;
  operation?: string;
  id?: number;
  archived?: boolean;
}

export interface CommentArchive {
  id: number;
  archived: boolean;
  operation: string;
}

export interface CommentDelete {
  id: number;
  operation: string;
}

export interface CommentEdit {
  id: number;
  author: string;
  comment: string;
  operation: string;
}
