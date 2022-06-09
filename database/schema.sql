set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";
-- Below is the db designer exported code --

CREATE TABLE "users" (
    "userId" serial NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "entries" (
    "entryId" serial NOT NULL,
    "createdAt" timestamptz default now() NOT NULL,
    "message" TEXT NOT NULL,
    "userId" integer NOT NULL,
    "groupId" integer NOT NULL,
    CONSTRAINT "entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "comments" (
    "commentId" serial NOT NULL,
    "entryId" integer NOT NULL,
    "userId" integer NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" timestamptz default now() NOT NULL,
    CONSTRAINT "comments_pk" PRIMARY KEY ("commentId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "groups" (
    "groupId" serial NOT NULL,
    "nameOfGroup" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" integer NOT NULL,
    CONSTRAINT "groups_pk" PRIMARY KEY ("groupId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "userResults" (
    "userResultId" serial not null,
    "userId" integer NOT NULL,
    "result" integer NOT NULL,
    "quizId" integer NOT NULL,
    CONSTRAINT "userResults_pk" PRIMARY KEY ("userResultId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "quizzes" (
    "quizId" serial NOT NULL,
    "quizName" TEXT NOT NULL,
    CONSTRAINT "quizzes_pk" PRIMARY KEY ("quizId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "quizQuestions" (
    "quizQuestionId" serial NOT NULL,
    "question" TEXT NOT NULL,
    "quizId" integer NOT NULL,
    CONSTRAINT "quizQuestions_pk" PRIMARY KEY ("quizQuestionId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "quizAnswers" (
    "quizAnswerId" serial NOT NULL,
    "answer" TEXT NOT NULL,
    "points" integer NOT NULL,
    CONSTRAINT "quizAnswers_pk" PRIMARY KEY ("quizAnswerId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "userAnswers" (
    "userAnswerId" serial NOT NULL,
    "quizAnswerId" integer NOT NULL,
    "quizQuestionId" integer NOT NULL,
    "quizId" integer NOT NULL,
    "points" integer NOT NULL,
    CONSTRAINT "userAnswers_pk" PRIMARY KEY ("userAnswerId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "entries" ADD CONSTRAINT "entries_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "entries" ADD CONSTRAINT "entries_fk1" FOREIGN KEY ("groupId") REFERENCES "groups"("groupId");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("entryId") REFERENCES "entries"("entryId");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "quizQuestions" ADD CONSTRAINT "quizQuestions_fk0" FOREIGN KEY ("quizId") REFERENCES "quizzes"("quizId");
ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_fk0" FOREIGN KEY ("quizAnswerId") REFERENCES "quizAnswers"("quizAnswerId");
ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_fk1" FOREIGN KEY ("quizQuestionId") REFERENCES "quizQuestions"("quizQuestionId");
ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_fk2" FOREIGN KEY ("quizId") REFERENCES "quizzes"("quizId");
ALTER TABLE "userResults" ADD CONSTRAINT "userResults_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "userResults" ADD CONSTRAINT "userResults_fk1" FOREIGN KEY ("quizId") REFERENCES "quizzes"("quizId");
ALTER TABLE "groups" ADD CONSTRAINT "groups_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
