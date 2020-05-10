---------------------------------------
-- Procédures De base
---------------------------------------

CREATE FUNCTION "DBA"."getPath"() returns long varchar deterministic 
BEGIN  
declare dbPath long varchar;   
declare dbName long varchar;   
set dbPath = (select db_property ('file'));          
set dbName = (select db_property('name')) + '.db';   
set dbPath = left(dbPath, length(dbPath)-length(dbName));    
return dbPath; 
END

---------------------------------------------------

CREATE PROCEDURE "DBA"."http_getPage"(in url char(255))
result(html long varchar)
BEGIN
	call sa_set_http_header('Content-Type', 'text/html');
    select xp_read_file(dba.getPath() || url || '.html');
END

----------------------------------------------------

CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255))
result(css long varchar)
BEGIN 
	call sa_set_http_header('Content-Type', 'text/css');
    select xp_read_file(dba.getPath() || 'css\' || url);
END
                        
-----------------------------------------------------
                        
CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255))
result(img binary)
BEGIN 
	call sa_set_http_header('Content-Type', 'image/jpg');
    select xp_read_file(dba.getPath() || 'img\' || url);
END
                        
------------------------------------------------------

CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
result(js long varchar)
BEGIN 
	call sa_set_http_header('Content-Type', 'text/javascript');
    select xp_read_file(dba.getPath() || 'js\' || url);
END
 -------------------------------------------------------------------
                        
                        ----------Webservices-------------
                        
create service "page" type 'raw' authorization off user "DBA" url on methods 'get' as call dba.http_getPage(:url);
                        
                        ----------------------------------
                        
 create service "css" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getCSS(:url);
                        
                        ------------------------------------
                        
                        
create service "img" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getIMG(:url);       

                        ---------------------------------
                        
create service "js" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getJS(:url);
                        
                        -------------------------------------
