insert into "quizzes" ("quizName")
values ('mental health quiz')
returning *;

insert into "users" ("email", "password")
values ('bobby@bobby.com', 'bananas')
returning *;

insert into "groups" ("nameOfGroup", "description", "userId")
values ('Book Suggestions', 'Any book recommendations for improving your health', 1),
       ('Pilates in OC', 'People down to take pilate classes together?', 1)
returning *;
