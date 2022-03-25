/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Isaac",
                Photo: "isaac.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con algunos colegas para practicar el snowboard",
                touch1: "Ordenador",
                feel1: "4",
                con1: "Buscar un buen lugar para descansar sin gastar demasiado pero con unos servicios aceptables ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Le explica a sus colegas  el plan y les pide que vayan buscando algo que esté bien",
                touch2: "Movil",
                feel2: "2",
                con2: "Muchos son cuchitriles y no dan el espacio que es necesario para almacenar el material (tablas de snow, chaquetones, ropa,...)",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Él sigue buscando un poco más y encuentra un buen lugar cerca del LemonRock",
                touch3: "Móvil",
                feel3: "3",
                con3: "No le parece perecto pero tiene un ambiente que no está mal",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Sus colegas consiguen encontrar otros alojamientos que incluso están al lado de las pistas",
                touch4: "Ordenador",
                feel4: "2",
                con4: "Revisá las opciones observando el precio y las facilidades para aparcar y guardar el equipaje",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra dos alojamientos cerca de las pistas que son buena opción",
                touch5: "Móvil",
                feel5: "3",
                con5: "Llama a sus amigos, pero al darse cuenta de que hay unos precios desorbitados por la época turística deciden quedarse en Granada",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Al final se quedan en el LemonRock y así pueden compatibilizar mejor subir a la sierra y visitar los sitios de Granada",
                touch6: "Móvil",
                feel6: "4",
                con6: "No les gusta mucho por el tema de tener que viajar casi todos los días, pero de todas formas iban a hacerlo igual si querían ver la ciudad y al final sale a mejor precio",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Alba Benítez",
                Photo: "alba.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer la reserva del hostal del que le han hablado y consulta posibles fechas",
                touch1: "agenda",
                feel1: "4",
                con1: "Los eventos pueden no cuadrar para cuando ella pueda ir",
                ima1: "cartoon-looking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Realizar la reserva para dentro de dos fines de semana",
                touch2: "Página web",
                feel2: "3",
                con2: "Tiene poco tiempo para realizar la reserva",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Consigue realizar la reserva con éxito",
                touch3: "Página web",
                feel3: "5",
                con3: "Además le coincide la reserva con un evento de Jazz",
                ima3: "cartoon-happy.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Revisa la ubicación y las maneras de llegar",
                touch4: "Página web",
                feel4: "2",
                con4: "No cuenta con mucha información sobre alternativas y costes",
                ima4: "cartoon-ko.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Busca por otro lado alternativas para el viaje hasta allí ",
                touch5: "Internet",
                feel5: "3",
                con5: "Pierde mucho tiempo encontrando información al respecto aunque al final encuentra una buena opción",
                ima5: "cartoon-PChard.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar y le coincide con buenos eventos pero ha perdido mucho tiempo",
                touch6: "Internet",
                feel6: "4",
                con6: "Tendrá que buscar más información del lugar para ver que sitios de Granada puede visitar",
                ima6: "cartoon-going.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



