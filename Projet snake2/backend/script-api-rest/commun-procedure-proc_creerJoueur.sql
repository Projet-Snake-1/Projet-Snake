create procedure "DBA"."proc_creerJoueur"(in pseudoVar varchar(20) , in ageVar integer , in paysVar char(20))

    begin 
        insert into 
        joueurs(pseudo, age, nomPays)
        values
        (pseudoVar, ageVar, paysVar)
    end