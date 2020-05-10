Présentation de l'équipe
------------------------

Saskia Libotte, Sébastien Hacquin, Tim Van Den Eeckhaut

Description du projet
-------------------------

Besoin du client

Nous désirons créer un site web simulant un jeu d'arcade Snake avec 
la possibilité de garder une trace des resultats.

=Fonctionnalités principales=

* une page demandant à l'utilisateur d'entrer son pseudo, son age et 
  choisir son pays(pays union européenne). 

* une page contenant un canvas et un bouton qui permet de lancer 
  le jeu 

* une page qui affiche un tableu des scores des cinq meilleurs 
  scores. 

=Fonctionnalités secondaires=

* possibilité de revenir à la premier page pour jouer à nouveau 
---------------------------------------------------------------------

Implémentation détaillée 
-------------------------

=Implémentation: approche technique=

1. backend : une base de données contenant trois tables

	* une table joueurs reprenant le pseudo, l'age et le pays du joueur
	* une table pays reprenant une liste des pays de l'union europèenne et le code pays 
	* une table score reprenant le pseudo du joueur et son score

2. backend: un serveur web capable de proposer les pages HTML, js ,css ainsi que les webservices
 
3. backend: les webservices 

	un webservice qui recoit les données du joueurs et les envoit au serveur
		* retour: RAW
		* nom: sendform
		* paramètres: :pseudoVar, :ageVar; :paysVar

	un webservice qui recoit le socres et le pseudo du joueurs et les envoit au serveur
		* retour: RAW
		* nom: sendscore
		* paramètres: :scoreVar, :pseudoVar
	
	un webservice qui envoie la lister des pays 
		retour: tableau Json du pseudo, de l'age, du socre et du code du pays 
		exemple:  
			[
    				{
        				"pseudo": "sddsd",
        				"age": 65,
        				"score": 2,
       					 "code": "CYP"
    				}
			]

	
	un webservice qui envoie la lister des pays 
		retour: tableau Json des noms des pays
		exemple:  
			[
    				{
       					"nomPays": "Allemagne"
    				},
    				{
        				"nomPays": "Autriche"
    				},
   				{
        				"nomPays": "Belgique"
    				},
    				{
        				"nomPays": "Bulgarie"
    				},
    				{
        				"nomPays": "Chypre"
    				},
    				{
        				"nomPays": "Croatie"
    				},
   				{
        				"nomPays": "Danemark"
    				},
    				{
        				"nomPays": "Espagne"
    				},
    				{
        				"nomPays": "Estonie"
    				},
    				{
        				"nomPays": "Finlande"
   				},
    				{
        				"nomPays": "France"
    				},
    				{
        				"nomPays": "Grèce"
    				},
    				{
        				"nomPays": "Hongrie"
    				},
    				{
        				"nomPays": "Irlande"
    				},
    				{
        				"nomPays": "Italie"
    				},
    				{
        				"nomPays": "Lettonie"
   				},
    				{
        				"nomPays": "Lituanie"
    				},
    				{
        				"nomPays": "Luxembourg"
    				},
   				{
        				"nomPays": "Malte"
    				},
    				{
        				"nomPays": "Pays-Bas"
    				},
    				{
        				"nomPays": "Pologne"
    				},
    				{
        				"nomPays": "Portugal"
    				},
    				{
        				"nomPays": "Republique Tchèque"
    				},
    				{
        				"nomPays": "Roumanie"
    				},
    				{
        				"nomPays": "Royaume Uni"
    				},
    				{
        				"nomPays": "Slovaquie"
    				},
    				{
        				"nomPays": "Slovènie"
    				},
    				{
        				"nomPays": "Suède"
    				}
			]


	
4. Frontend: 
 - une page web(HTML, css, js) avec un formulaire qui fait appel à des webservices, et qui permet au 
	joueur de s'enregistrer. 
- une page web(HTML, css, js) de jeu qui fait appel à un webservice qui vont enregistrer le score du joueur
- une page web(HTML, css, js) de fin de jeu qui fait appel à un webservice qui va nous afficher un tableau 
	avec les cinq meilleurs scores
