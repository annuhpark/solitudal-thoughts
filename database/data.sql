insert into "quizzes" ("quizName")
values ('mental health quiz')
returning *;

insert into "users" ("email", "password")
values ('admin@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$b3OBGnXlp7VYNEucbPu6QA$sXCR3vHGSFWCPReZMJA+yLazk9vmRpKZZgJ532dC5kE')
returning *;

insert into "groups" ("nameOfGroup", "description", "userId")
values ('Book Suggestions', 'Any book recommendations for improving your mental health? Feel free to leave your comments below.', 1),
       ('Pilates in OC', 'Hi everyone, this group is strictly for suggestion on best pilates studios in the Orange County area. Or if anyone is down to get together and take classes together! Thanks for dropping by.', 1),
       ('Tea Lovers', 'Anyone have any tea recommendations? I feel like they have helped me relax, especially during work. Let me know!', 1)
returning *;
