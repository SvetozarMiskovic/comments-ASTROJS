import type {
  Comment,
  CommentArchive,
  CommentDelete,
} from '../types/comments-types';
import { archiveComment, deleteComment } from '../utils/comments-utils';

export default function SingleComment(comment: Comment) {
  const handleDelete = async ({ id, operation }: CommentDelete) => {
    const res = await deleteComment({ id, operation });

    const { success, message } = await res.json();

    alert(message);
  };

  const handleArchive = async ({ id, archived, operation }: CommentArchive) => {
    const res = await archiveComment({
      id,
      archived,
      operation,
    });
    const { success, message } = await res.json();

    alert(message);
  };

  if (!comment?.archived)
    return (
      <div className="bg-emerald-700 rounded-md p-2 text-white flex flex-col">
        <div className="border-b-2 flex items-start justify-between">
          <div>
            <h2 className="font-bold italic underline opacity-85 text-black text-md">
              Author
            </h2>
            <p>{comment.author}</p>
          </div>
          <div className="flex gap-2">
            <div
              onClick={() =>
                handleDelete({
                  id: comment.id,
                  operation: 'delete',
                })
              }
              className="min-w-28 cursor-pointer p-1 text-center rounded bg-red-800 hover:bg-red-600 transition:ease-in duration-300"
            >
              Delete
            </div>
            <div
              onClick={() =>
                handleArchive({
                  id: comment.id,
                  archived: !comment.archived,
                  operation: 'archive',
                })
              }
              className={`min-w-28 p-1 rounded cursor-pointer text-center ${comment.archived ? 'bg-slate-700' : 'bg-gray-400'} hover:bg-slate-500 transition:ease-in duration-300`}
            >
              {comment.archived ? 'Restore' : 'Archive'}
            </div>
            {/* </div>
        <div className={``}> */}
            <a
              className="min-w-28 p-1 rounded cursor-pointer text-center bg-yellow-600 hover:bg-yellow-500 transition:ease-in duration-300 "
              href={`/comments/${comment.id}`}
            >
              Edit
            </a>
          </div>
        </div>
        <div className="my-4">
          <h1>{comment.comment}</h1>
        </div>
      </div>
    );
}
