create procedure "DBA"."proc_envoyerScore"(in scoreVar integer, in pseudoVar varchar(20))

    begin 
        insert into 
        scores (score, pseudo)
        values
        (scoreVar, pseudoVar)
    end