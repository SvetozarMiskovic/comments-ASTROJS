import { useEffect, useState } from 'react';
import type {
  Comment,
  CommentArchive,
  CommentDelete,
  CommentEdit,
} from '../types/comments-types';
import {
  editComment as editCommentFunction,
  archiveComment,
  deleteComment,
  getComments,
} from '../utils/comments-utils';

export default function EditSingleComment({ paramId }: { paramId: string }) {
  const [editAuthor, setEditAuthor] = useState('');
  const [editComment, setEditComment] = useState('');
  const [editArchived, setEditArchived] = useState(false);
  const [id, setId] = useState(0);

  const handleArchive = async ({ id, operation, archived }: CommentArchive) => {
    const res = await archiveComment({
      id: id,
      operation: operation,
      archived: archived,
    });

    const { success, message } = await res.json();

    if (success) {
      alert(message);
    }
  };

  const getCommentsHandle = async () => {
    const comments = await getComments();
    const comment = comments.find((com: Comment) => com.id === Number(paramId));

    if (!comment) {
      return window.location.replace('/comments');
    } else {
      setEditAuthor(comment?.author);
      setEditComment(comment?.comment);
      setEditAuthor(comment?.author);
      setEditArchived(comment?.archived);
      setId(comment?.id);

      return true;
    }
  };

  const handleEdit = async ({
    id,
    author,
    comment,
    operation,
  }: CommentEdit) => {
    const res = await editCommentFunction({
      id: id,
      author: author,
      comment: comment,
      operation: operation,
    });

    const { success, message } = await res.json();
    if (success) {
      alert(message);
    }
  };

  const handleDelete = async ({ id, operation }: CommentDelete) => {
    const res = await deleteComment({ id: id, operation: operation });

    const { success, message } = await res.json();

    if (success) {
      alert(message);
    }
  };
  useEffect(() => {
    getCommentsHandle();
  }, []);

  if (editAuthor)
    return (
      <form
        onSubmit={() =>
          handleEdit({
            author: editAuthor,
            id: Number(id),
            comment: editComment,
            operation: 'edit',
          })
        }
        className="bg-emerald-800 rounded  max-w-md mx-auto"
      >
        <div className="flex flex-col mx-auto justify-start gap-4">
          <label className="flex flex-col px-2 py-2 gap-2 font-bold text-xl text-white cursor-pointer">
            Author
            <input
              onChange={(e) => setEditAuthor(e.target.value)}
              required
              value={editAuthor}
              className="p-2 outline-none max-w-md rounded text-emerald-800"
              type="text"
              name="author"
            />
          </label>
          <label className="flex flex-col px-2 py-2 gap-2 font-bold text-white cursor-pointer text-xl">
            Your comment
            <textarea
              required
              onChange={(e) => setEditComment(e.target.value)}
              value={editComment}
              className="p-2 leading-6 outline-none max-w-md rounded text-emerald-800 min-h-32 h-auto"
              name="comment"
            />
          </label>
          <label className="flex flex-col px-2 py-2 gap-2 font-bold text-white cursor-pointer text-xl">
            Comment archived status
            <input
              disabled
              className="p-2 outline-none max-w-md rounded border border-emerald-900 text-emerald-800"
              type="text"
              value={editArchived ? 'Archived' : 'Not archived'}
            />
          </label>

          <div className="w-full max-w-md px-2 py-2 relative flex gap-3 justify-center max-md:flex-col ">
            <button
              type="submit"
              className="min-w-28 bg-green-600 p-2 rounded font-bold text-white hover:bg-green-400 cursor-pointer transition:ease-in duration-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() =>
                handleArchive({
                  archived: !editArchived,
                  id: Number(id),
                  operation: 'archive',
                })
              }
              className="min-w-28 bg-blue-500 p-2 rounded font-bold text-white hover:bg-blue-700 cursor-pointer transition:ease-in duration-500"
            >
              {editArchived ? 'Restore' : 'Archive'}
            </button>
            <button
              onClick={() =>
                handleDelete({ id: Number(id), operation: 'delete' })
              }
              type="button"
              className="min-w-28 bg-red-800 p-2 rounded font-bold text-white hover:bg-red-600 cursor-pointer transition:ease-in duration-500"
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    );
}
