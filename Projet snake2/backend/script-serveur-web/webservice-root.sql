-----------------------
-- webservice root
-----------------------

create service "root" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getPage(:url);