import { db, sql } from "@/lib/kysely";

export async function seed() {
  ////////////////////////////////////////////////////////////////////////
  await db.schema
    .createTable("presentation")
    .ifNotExists()
    .addColumn("id", "uuid", (cb) =>
      cb.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("bio", "varchar(255)", (cb) => cb.notNull())
    .addColumn("city", "varchar(255)", (cb) => cb.notNull())
    .addColumn("state", "varchar(255)", (cb) => cb.notNull())
    .addColumn("country", "varchar(255)", (cb) => cb.notNull())
    .addColumn("capabilities", "varchar(255)", (cb) => cb.notNull())
    .addColumn("profession", "varchar(255)", (cb) => cb.notNull())
    .addColumn("looking_for", "varchar(255)", (cb) => cb.notNull())
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute();
  console.log(`Created "interest" table`);

  ////////////////////////////////////////////////////////////////////////
  await db.schema
    .createTable("users")
    .ifNotExists()
    .addColumn("id", "uuid", (cb) =>
      cb.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("name", "varchar(255)", (cb) => cb.notNull())
    .addColumn("last_name", "varchar(255)", (cb) => cb.notNull())
    .addColumn("email", "varchar(255)", (cb) => cb.notNull().unique())
    .addColumn("password", "varchar(255)", (cb) => cb.notNull())
    .addColumn("image", "varchar(255)")
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .addColumn("presentation_id", "uuid", (col) =>
      col.references("presentation.id").onDelete("cascade").notNull()
    )
    .execute();
  console.log(`Created "users" table`);

  ////////////////////////////////////////////////////////////////////////
  await db.schema
    .createTable("interest")
    .ifNotExists()
    .addColumn("id", "uuid", (cb) =>
      cb.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("name", "varchar(255)", (cb) => cb.notNull())
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute();
  console.log(`Created "interest" table`);

  ////////////////////////////////////////////////////////////////////////
  await db.schema
    .createTable("user_interest")
    .ifNotExists()
    .addColumn("id", "uuid", (cb) =>
      cb.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("user_id", "uuid", (col) =>
      col.references("users.id").onDelete("cascade").notNull()
    )
    .addColumn("interest_id", "uuid", (col) =>
      col.references("interest.id").onDelete("cascade").notNull()
    )
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute();
  console.log(`Created "interest" table`);

  //   ////////////////////////////////////////////////////////////////////////
  const presentation = await db
    .insertInto("presentation")
    .values([
      {
        bio: "I'm a product architect who combines artistry with functionality to create captivating experiences.",
        city: "Mérida",
        state: "Yucatán",
        country: "México",
        capabilities: "Precision, balance & discipline",
        profession: "Graduate in Architecture and Design",
        looking_for: "Looking for full-time job opportunities",
      },
    ])
    .returning(["id"])
    .executeTakeFirstOrThrow();
  console.log("Seeded database with 3 interests");

  ////////////////////////////////////////////////////////////////////////
  const user = await db
    .insertInto("users")
    .values([
      {
        name: "Oscar",
        last_name: "Leyva Sanchez",
        email: "oleyva930424@gmail.com",
        password: "123456",
        image:
          "https://i.pinimg.com/564x/50/cc/71/50cc719dc279aaeea54ff4ddb34bf595.jpg",
        presentation_id: presentation?.id,
      },
    ])
    .returning(["id"])
    .executeTakeFirstOrThrow();
  console.log("Seeded database with 1 user");

  ////////////////////////////////////////////////////////////////////////
  const interest = await db
    .insertInto("interest")
    .values([
      {
        name: "Software Engineering",
      },
      {
        name: "Design",
      },
      {
        name: "IA",
      },
      {
        name: "AWS Amplify",
      },
    ])
    .returning(["id"])
    .execute();
  console.log("Seeded database with 1 user and interest");

  ////////////////////////////////////////////////////////////////////////
  await db
    .insertInto("user_interest")
    .values(interest.map((i) => ({ user_id: user?.id, interest_id: i.id })))
    .execute();
  console.log("Seeded database with 1 user and interest");

  return {
    message: "Seeded database with 1 user and 3 interests",
  };
}

export async function deleteAll() {
  await db.schema.dropTable("user_interest").execute();
  console.log(`Dropped "interest" table`);

  await db.schema.dropTable("users").execute();
  console.log(`Dropped "users" table`);

  await db.schema.dropTable("presentation").execute();
  console.log(`Dropped "presentation" table`);

  await db.schema.dropTable("interest").execute();
  console.log(`Dropped "interest" table`);

  return {
    message: "Dropped database",
  };
}
