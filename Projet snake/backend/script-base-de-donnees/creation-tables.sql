--------------------------------------------
-- create tables 
--------------------------------------------

CREATE TABLE pays( 

    nomPays char(20) NOT NULL, 
    code char(20) NOT NULL, 
    CONSTRAINT pk_pays PRIMARY KEY (nomPays)

) 

CREATE TABLE joueurs( 

    joueurId integer NOT NULL DEFAULT AUTOINCREMENT, 
    pseudo char(20) NOT NULL, 
    age integer NOT NULL, 
    nomPays char(20) NOT NULL, 
    CONSTRAINT pk_joueurs PRIMARY KEY (pseudo), 
    CONSTRAINT  fk_joueurs_pays FOREIGN KEY (nomPays) REFERENCE pays(nomPays) 

) 

CREATE TABLE scores(

    scoreId integer NOT NULL DEFAULT AUTOINCREMENT, 
    pseudo char(20) NOT NULL,
    score integer ,
    CONSTRAINT pk_scores PRIMARY KEY (scoreId), 
    constraint fk_scores_joueurs FOREIGN KEY (pseudo) REFERENCE joueurs(pseudo) 

)