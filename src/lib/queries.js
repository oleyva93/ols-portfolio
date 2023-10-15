import { jsonObjectFrom, jsonArrayFrom } from "kysely/helpers/postgres";
import { db } from "./kysely";

export async function getUserInfo() {
  return db
    .selectFrom("users")
    .select((eb) => [
      "id",
      jsonObjectFrom(
        eb
          .selectFrom("presentation")
          .whereRef("presentation.id", "=", "users.presentation_id")
          .selectAll()
      ).as("presentation"),
      jsonArrayFrom(
        eb
          .selectFrom("user_interest")
          .innerJoin("interest", "user_interest.interest_id", "interest.id")
          .whereRef("user_interest.user_id", "=", "users.id")
          .select(["interest.id", "interest.name"])
      ).as("interests"),
    ])
    .selectAll()
    .execute();
}
