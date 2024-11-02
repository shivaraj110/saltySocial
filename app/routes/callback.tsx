import type { LoaderFunctionArgs } from "@remix-run/node";

import { auth } from "~/utils/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs ) => {
  return auth.authenticate("auth0", request, {
    successRedirect: "/private",
    failureRedirect: "/",
  });
};
