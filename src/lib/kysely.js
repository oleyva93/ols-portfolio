import { createKysely } from "@vercel/postgres-kysely";

export const db = createKysely();
export { sql } from "kysely";
