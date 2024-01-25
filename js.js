
$(function(){
	$("#input_add_tache").focus();//on met le focus sur le input

	$("body").on("click","#bt_add_tache", function(){
		var new_tache = $("#input_add_tache").val();//on met la tache du input dans la variable
		
		if (new_tache!="") {//si le input n'est pas vide

			//on creer la nouvelle ligne : la nouvelle tache
			$("#tab").append("<tr class='nouvelle_ligne'><td><input type='checkbox' class='checkbox'></td><td class='td_tache'><span class='tache'>"+new_tache+"</span></td><td><button class='bt_modif modif'>Modif</button>	<button class='bt_del del'>Del</button></td></tr>");
			
			//animation pour l'ajout
			$(".nouvelle_ligne").animate({
				opacity:1,
			},"slow",'linear');

			$("#input_add_tache").val("");//on vide le contenu du input add tache
			$("#alert").html("");//on vide le contenu du alert
		}else{//sinon
			$("#alert").html("Entrez une tâche...");
		}
		$("#input_add_tache").focus();//on met le focus sur le input
	});


	$("body").on("click",".checkbox", function(){

		if($(this).is(":checked")){//si le checkbox n'est pas checker
			$(this).parent().next().children(".tache").css("text-decoration", "line-through");//on barre d'un trait la tache terminée
			$(this).parent().next().children(".tache").css("text-decoration-color", "red");//on met le trait en rouge
		}else{//sinon
			$(this).parent().next().children(".tache").css("text-decoration", "none");//on enleve le trait
		}

	});


	$("body").on("click",".bt_del", function(){
		
		//animation pour la suppression
		$(this).parent().parent().animate({
			opacity:0.1,
		},"slow",'linear', function(){

			$(this).children().parent().remove();//on supprime la tache
		});

	});



	$("body").on("click",".bt_modif", function(){
		
		var contenu = $(this).parent().prev().children(".tache").html();//on recupere le contenu du td pour le stocker dans la variable contenu

		if (!$(this).parent().prev().children(".tache").children("input").attr("class")) {//on verifi que le input de modification n'a pas encore été appeler

			$(this).html("Validé");//changer le text du bt
			$(this).css("background-color","lightgreen");//changer le text du bt
			$(this).css("border-color","lightgreen");//changer le text du bt

			$(this).parent().prev().children(".tache").html("<input type='text' value='"+contenu+"' class='input_modif'>");//on crée alors le input de modification 
		}else{//sinon sil a deja été créer
			if ($(this).parent().prev().children(".tache").children("input").val()!="") {//on verifi alors sil n'est pas vide
				$(this).html("Modif");//changer le text du bt
				$(this).css("background-color","darkorange");//changer le text du bt
				$(this).css("border-color","darkorange");//changer le text du bt
				$(this).parent().prev().children(".tache").html($(this).parent().prev().children(".tache").children("input").val());//on ajoute la nouvelle tache modifier
				
			}
		}

	});


	$("#signature").animate({
		opacity:1,

	},"slow","linear");


});