export const prerender = false;
import { supabase } from '../../lib/supabase';
import type { CommentPayload } from '../../types/comments-types';
const dbQuery = async ({
  author,
  comment,
  operation,
  id,
  archived = false,
}: CommentPayload) => {
  if (operation) {
    switch (operation) {
      case 'create': {
        const { error } = await supabase
          .from('Comments')
          .insert({ author, comment });

        return { error, message: 'Succsesfully created the comment!' };
      }
      case 'delete': {
        console.log('AJ ID', id);
        const { error } = await supabase.from('Comments').delete().eq('id', id);

        return { error, message: 'Succesfully deleted the comment!' };
      }
      case 'archive': {
        const { error } = await supabase
          .from('Comments')
          .update({ archived })
          .eq('id', id);

        if (!archived) {
          return { error, message: 'Succesfully restored the comment!' };
        }
        return { error, message: 'Succesfully archived the comment!' };
      }
      case 'edit': {
        const { error } = await supabase
          .from('Comments')
          .update({ archived, author, comment })
          .eq('id', id);

        return { error, message: 'Succesfully updated the comment!' };
      }
    }
  }
};
export async function GET() {
  const comments = await supabase.from('Comments').select('*');

  return new Response(JSON.stringify({ data: comments.data }), {
    status: 200,
  });
}

// export const POST = async ({ request }: { request: Request }) => {
//   const {
//     id = ''!,
//     archived = false!,
//     author = '',
//     comment = '',
//     operation,
//   } = await request.json();

//   const res = await dbQuery({ author, comment, operation, id, archived });

//   const { error, message } = res!;

//   if (error) {
//     return new Response(
//       JSON.stringify({
//         message: error.message,
//         code: error.code,
//         details: error.details,
//       }),
//       {
//         status: 500,
//       }
//     );
//   }

//   return new Response(JSON.stringify({ success: true, message: message }));
// };
