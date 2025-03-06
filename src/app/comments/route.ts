import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET( request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = comments.filter((comment) => comment.text.toLowerCase().includes(query?.toLowerCase() || ""));

  return Response.json(filteredComments);
};

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text
  }
  comments.push(newComment);
  return new Response(JSON.stringify(newComment),{
    headers: {"content-type": "application/json"},
    status: 201
  });
};