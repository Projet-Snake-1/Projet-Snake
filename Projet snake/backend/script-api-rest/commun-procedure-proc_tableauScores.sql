create procedure "DBA"."proc_tableauScores"()

    begin 
        select joueurs.pseudo,joueurs.age, scores.score, pays.code
        from scores
        join joueurs on scores.pseudo = joueurs.pseudo
        join pays on joueurs.nomPays = pays.nomPays
        order by score desc
    end
