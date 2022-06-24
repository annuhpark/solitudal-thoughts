insert into "quizzes" ("quizName")
values ('mental health quiz')
returning *;

insert into "users" ("email", "password")
values ('admin@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$b3OBGnXlp7VYNEucbPu6QA$sXCR3vHGSFWCPReZMJA+yLazk9vmRpKZZgJ532dC5kE')
returning *;

insert into "groups" ("nameOfGroup", "description", "userId")
values ('Self-Help Book Suggestions', 'I fell in love with the book 101 Essays That Will Change the Way You Think, by Brianna Wiest. I recommend this book to anyone. Feel free to join if you are a book worm that also loves this genre!', 1),
       ('Pilates in OC', 'Hi everyone, this group is strictly for suggestion on best pilates studios in the Orange County area. Or if anyone is down to get together and take classes together! Thanks for dropping by.', 1),
       ('Tea Lovers', 'There is this sleeping-aid tea I recommend from Moon Juice. It is called Dream Dust.', 1),
       ('Podcast Lovers', 'I love the Happiness Lab. Definitely check this out if you need something to listen to during your morning commute.', 1)
returning *;
