insert into "quizzes" ("quizName")
values ('mental health quiz')
returning *;

insert into "users" ("email", "password")
values ('bobby@bobby.com', 'bananas')
returning *;

insert into "groups" ("nameOfGroup", "description", "userId")
values ('Book Suggestions', 'Any book recommendations for improving your mental health? Feel free to leave your comments below.', 1),
       ('Pilates in OC', 'Hiiiii everyone, this group is strictly for suggestion on best pilates studios in the Orange County area. Or if anyone is down to get together and take classes together! Thanks for dropping by.', 1),
       ('Tea Lovers', 'Anyone have any tea recommendations? I feel like they have helped me relax, especially during work. Lmk!', 1)
returning *;
