    
create procedure "DBA"."proc_listePays"()

    begin
        select nomPays
        from pays 
        order by nomPays 
    end
