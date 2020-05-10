create service "callsocre" type 'json' authorization off user "DBA" url on methods 'get'
as call pro_tableauScores();