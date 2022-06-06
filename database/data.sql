insert into "users" ("email", "password")
values ('bobby@bobby.com', 'bananas'),
       ('hama@bobby.com', 'chanel')
returning *;
