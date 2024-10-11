import { useState, type FormEventHandler } from 'react';
import { newComment } from '../utils/comments-utils';

export default function createComment() {
  const [author, setAuthor] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const onSubmitHandler: FormEventHandler = async (e) => {
    e.preventDefault();

    const res = await newComment({
      author: author,
      comment: comment,
      operation: 'create',
    });
    const data = await res.json();

    if (!data?.success) {
      alert(`Error: ${data?.message}, Code: ${data?.code}`);
    } else {
      alert(data?.message);
      setAuthor('');
      setComment('');
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="border bg-emerald-800 rounded  max-w-md mx-auto"
    >
      <div className="flex flex-col max-w-7xl w-full justify-start  gap-4">
        <label className="flex flex-col px-2 py-2 gap-2 font-bold text-white cursor-pointer">
          Author
          <input
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="p-1 outline-none max-w-md rounded border text-emerald-900"
            type="text"
            name="author"
          />
        </label>
        <label className="flex flex-col px-2 py-2 gap-2 font-bold text-white cursor-pointer">
          Your comment
          <textarea
            required
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="p-2 leading-6 outline-none max-w-md rounded border text-emerald-900"
            name="comment"
          />
        </label>
        <div className="w-full max-w-md px-2 py-2 relative">
          <button
            type="submit"
            className="w-full bg-white text-emerald-900 p-2 rounded font-bold  hover:bg-emerald-600 hover:text-white cursor-pointer transition:ease-in duration-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
