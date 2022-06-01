set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";
CREATE TABLE "public.Users" (
	"userId" serial NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Entries" (
	"entryId" serial NOT NULL,
	"createdAt" DATETIME NOT NULL,
	"message" TEXT NOT NULL,
	"userId" integer NOT NULL,
	"groupId" integer NOT NULL,
	CONSTRAINT "Entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Comments" (
	"commentId" serial NOT NULL,
	"entryId" integer NOT NULL,
	"userId" integer NOT NULL,
	"message" TEXT NOT NULL,
	"createdAt" DATETIME NOT NULL,
	CONSTRAINT "Comments_pk" PRIMARY KEY ("commentId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Groups" (
	"groupId" serial NOT NULL,
	"nameOfGroup" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "Groups_pk" PRIMARY KEY ("groupId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.userResults" (
	"userId" integer NOT NULL,
	"result" integer NOT NULL,
	"quizId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Quizzes" (
	"quizId" serial NOT NULL,
	"quizName" TEXT NOT NULL,
	CONSTRAINT "Quizzes_pk" PRIMARY KEY ("quizId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.quizQuestions" (
	"quizQuestionId" serial NOT NULL,
	"question" TEXT NOT NULL,
	"quizId" integer NOT NULL,
	CONSTRAINT "quizQuestions_pk" PRIMARY KEY ("quizQuestionId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.quizAnswers" (
	"quizAnswerId" serial NOT NULL,
	"answer" TEXT NOT NULL,
	"points" integer NOT NULL,
	CONSTRAINT "quizAnswers_pk" PRIMARY KEY ("quizAnswerId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.userAnswers" (
	"userAnswerId" serial NOT NULL,
	"quizAnswerId" integer NOT NULL,
	"quizQuestionId" integer NOT NULL,
	"quizId" integer NOT NULL,
	"points" integer NOT NULL,
	CONSTRAINT "userAnswers_pk" PRIMARY KEY ("userAnswerId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.userResults" (
	"userId" integer NOT NULL,
	"quizId" integer NOT NULL,
	"result" integer NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Entries" ADD CONSTRAINT "Entries_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");
ALTER TABLE "Entries" ADD CONSTRAINT "Entries_fk1" FOREIGN KEY ("groupId") REFERENCES "Groups"("groupId");

ALTER TABLE "Comments" ADD CONSTRAINT "Comments_fk0" FOREIGN KEY ("entryId") REFERENCES "Entries"("entryId");
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_fk1" FOREIGN KEY ("userId") REFERENCES "Users"("userId");


ALTER TABLE "userResults" ADD CONSTRAINT "userResults_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");


ALTER TABLE "quizQuestions" ADD CONSTRAINT "quizQuestions_fk0" FOREIGN KEY ("quizId") REFERENCES "Quizzes"("quizId");


ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_fk0" FOREIGN KEY ("quizAnswerId") REFERENCES "quizAnswers"("quizAnswerId");
ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_fk1" FOREIGN KEY ("quizQuestionId") REFERENCES "quizQuestions"("quizQuestionId");
ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_fk2" FOREIGN KEY ("quizId") REFERENCES "Quizzes"("quizId");

ALTER TABLE "userResults" ADD CONSTRAINT "userResults_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");
ALTER TABLE "userResults" ADD CONSTRAINT "userResults_fk1" FOREIGN KEY ("quizId") REFERENCES "Quizzes"("quizId");
