import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { auth } from "~/utils/auth.server";

export const loader = async () => redirect("/");

export const action = async ({ request }: ActionFunctionArgs) =>
  auth.authenticate("auth0", request);
