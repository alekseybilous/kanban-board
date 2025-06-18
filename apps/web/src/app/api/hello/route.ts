export async function GET(request: Request) {
  return Response.json({ text: 'hello world!!!!' }, { status: 200 });
}
