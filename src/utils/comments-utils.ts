import type {
  CommentArchive,
  CommentDelete,
  CommentEdit,
  CommentPayload,
} from '../types/comments-types';

const ENV = import.meta.env.PUBLIC_NODE_ENV;
const DEVHOST = import.meta.env.PUBLIC_COMMENTS_HOST_DEV;
const PRODHOST = import.meta.env.PUBLIC_COMMENTS_HOST_PROD;
const BASE_URL = `${ENV === 'development' ? DEVHOST : PRODHOST}`;

const newComment = async ({ author, comment, operation }: CommentPayload) => {
  const response = await fetch(BASE_URL + '/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify({
      author,
      comment,
      operation,
    }),
  });

  return response;
};
const editComment = async ({ id, author, comment, operation }: CommentEdit) => {
  const response = await fetch(BASE_URL + '/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify({
      id,
      author,
      comment,
      operation,
    }),
  });

  return response;
};

const deleteComment = async ({ id, operation }: CommentDelete) => {
  const response = await fetch(BASE_URL + '/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify({
      id,
      operation,
    }),
  });
  return response;
};

const archiveComment = async ({ id, archived, operation }: CommentArchive) => {
  const response = await fetch(BASE_URL + '/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify({
      id,
      archived,
      operation,
    }),
  });
  return response;
};

const getComments = async () => {
  const res = await fetch(BASE_URL + '/api/comments', {
    method: 'GET',
  });
  const { data } = await res.json();

  return data;
};

export { newComment, editComment, deleteComment, archiveComment, getComments };
