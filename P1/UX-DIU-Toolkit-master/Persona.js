/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Isaac Jiménez Marín",
				Photo: "isaac.png",
				Quote: "La vida son dos días",
				Age: 26,
				Occupation: "Coach de surf",
				Family: "Con pareja desde hace 3 meses",
				Location: "Cádiz (San Fernando)",
				Character: "Apasionado de la música, extrovertido, creativo, amante de los deportes acuáticos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Ir a Hawai a ganar el campeonato mundial de surf", "Prácticar también otro tipo de deportes tanto con la tabla de snowboard o como tenis"],
				Frustrations: ["Le gustaría tocar la batería pero es bastante arrítmico", "Se lesionó y no pudo competir durante años, lo que bajó mucho su motivación"],
				Bio: "Nació en Cádiz y desde los 6 años ya surfeaba las olas cuando le enseñó su tio. Estudió la FP del TFAD para convertirse en un buen instructor de surf. Su afición por la música comenzó a los 9 años cuando escuchó en la radio la canción de Zapatillas de El Canto de el Loco y desde entonces comenzó a explorar otros artistas como Melendi.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 0 }
					
				], 
                Contextos: "Quiere visitar otros lugares de Andalucía y Granada era una buena opción para probar el tapeo y subir a la Sierra a prácticar Snowboard",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Alba Benítez Roldán",
				Photo: "alba.png",
				Quote: "Lo primero es la salud",
				Age: 24,
				Occupation: "Estudiante de Medicina",
				Family: "Sus padres y su hermana.",
				Location: "Albacete(Fuente-Álamo)",
				Character: "Le encantan los animales, la música y salir con sus amigos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Tocar en una banda de jazz.", "Vivir en Estados Unidos.", "Trabajar como cirujana."],
				Frustrations: ["Aún le quedan varias asignaturas de la carrera.", "Le gusta viajar mucho pero ahora mismo no se encuentra en buena situación económica."],
				Bio: "Nació en Albacete en un entorno rural. Desde pequeña le interesó el tema de ayudar a las personas y tenía claro su deseo de estudiar medicina. A la edad de 10 años comenzó a adentrarse en el mundo de la música aprendiendo nociones básicas de solfeo. A día de sabe tocar el saxofón y le encantaría ser integrante de una banda de Jazz, aunque esto no es fácil de compajinar con los estudios.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "En sus ratos libres quiere seguir dedicando tiempo al jazz y le han hablado de un hostal en Granada, este cuenta con eventos de música y muchos de ellos relacionados con jazz. Por esto ha decidido hospedarse un fin de semana y visitar Granada ya que aún no ha estado." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
