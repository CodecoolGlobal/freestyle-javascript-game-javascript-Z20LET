DROP TABLE IF EXISTS public.scores;
CREATE TABLE scores (
    id serial NOT NULL,
    users_id integer,
    score integer,
    time timestamp without time zone DEFAULT now()
);

DROP TABLE IF EXISTS public.users;
CREATE TABLE users (
    id serial NOT NULL,
    name text UNIQUE
);

ALTER TABLE ONLY users
    ADD CONSTRAINT pk_users_id PRIMARY KEY (id);
ALTER TABLE ONLY scores
    ADD CONSTRAINT pk_scores_id PRIMARY KEY (id);
ALTER TABLE ONLY scores
    ADD CONSTRAINT fk_users_id FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE;