import type {
  CommentArchive,
  CommentDBQuery,
  CommentDelete,
  CommentEdit,
  CommentPayload,
} from '../types/comments-types';

const newComment = async ({ author, comment, operation }: CommentPayload) => {
  const response = await fetch(
    'https://comments-astrojs.vercel.app/api/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify({
        author,
        comment,
        operation,
      }),
    }
  );

  return response;
};
const editComment = async ({ id, author, comment, operation }: CommentEdit) => {
  const response = await fetch(
    'https://comments-astrojs.vercel.app/api/comments',
    {
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
    }
  );

  return response;
};

const deleteComment = async ({ id, operation }: CommentDelete) => {
  const response = await fetch(
    'https://comments-astrojs.vercel.app/api/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify({
        id,
        operation,
      }),
    }
  );
  return response;
};

const archiveComment = async ({ id, archived, operation }: CommentArchive) => {
  const response = await fetch(
    'https://comments-astrojs.vercel.app/api/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify({
        id,
        archived,
        operation,
      }),
    }
  );
  return response;
};

export { newComment, editComment, deleteComment, archiveComment };
