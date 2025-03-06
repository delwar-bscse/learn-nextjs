import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  return new Response(JSON.stringify(comment), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const {text} = body;

  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments[index].text = text;
  return Response.json(comments[index]);
};

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((c) => c.id === parseInt(id));
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json({
    "message": "Comment deleted successfully",
    ...deletedComment
  });
};