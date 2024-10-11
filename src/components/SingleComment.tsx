import type {
  Comment,
  CommentArchive,
  CommentDelete,
} from '../types/comments-types';
import { archiveComment, deleteComment } from '../utils/comments-utils';
export const prerender = false;

export default function SingleComment(comment: Comment) {
  const handleDelete = async ({ id, operation }: CommentDelete) => {
    const res = await deleteComment({ id, operation });

    const { message } = await res.json();

    alert(message);
  };

  const handleArchive = async ({ id, archived, operation }: CommentArchive) => {
    const res = await archiveComment({
      id,
      archived,
      operation,
    });
    const { message } = await res.json();

    alert(message);
  };

  if (!comment?.archived)
    return (
      <div className="bg-emerald-700 rounded-md p-2 text-white flex flex-col">
        <div className="border-b-2 flex items-start justify-between max-lg:flex-col max-lg:gap-3">
          <div className="w-full max-w-full">
            <h2 className="font-bold italic underline opacity-85 text-black text-md">
              Author
            </h2>
            <p>{comment.author}</p>
          </div>
          {/* // Buttons // */}
          <div className="flex gap-2 justify-center items-center h-full max-lg:mb-3 max-lg:items-center">
            <div
              onClick={() =>
                handleDelete({
                  id: comment.id,
                  operation: 'delete',
                })
              }
              className="min-w-28 cursor-pointer p-1 text-center rounded bg-red-800 max-lg:min-w-20 hover:bg-red-600 transition:ease-in duration-300"
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
              className={`min-w-28 p-1 rounded cursor-pointer text-center max-lg:min-w-20 ${comment.archived ? 'bg-slate-700' : 'bg-gray-400'} hover:bg-slate-500 transition:ease-in duration-300`}
            >
              {comment.archived ? 'Restore' : 'Archive'}
            </div>

            <a
              className="min-w-28 p-1 rounded cursor-pointer text-center max-lg:min-w-20 bg-yellow-600 hover:bg-yellow-500 transition:ease-in duration-300 "
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
