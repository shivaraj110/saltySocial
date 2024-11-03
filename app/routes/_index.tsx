import { UploadButton } from "~/utils/uploadthing";

import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
type LoaderError = { message: string } | null;
export const loader = async ({ request }: LoaderFunctionArgs) => {
  await auth.isAuthenticated(request, { successRedirect: "/private" });
  const session = await getSession(request.headers.get("Cookie"));
  const error = session.get(auth.sessionErrorKey) as LoaderError;
  return json({ error });
};

import { auth, getSession } from "~/utils/auth.server";
export default function Home() {
  const { error } = useLoaderData<typeof loader>();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form method="post" action="/auth0">
        {error ? <div>{error.message}</div> : null}
        <button>Sign In with Auth0</button>
      </Form>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
