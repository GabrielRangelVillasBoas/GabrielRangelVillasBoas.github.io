
function buscaChar(){
  
  $.ajax({
    dataType: "json",
    url: 'https://api.tibiadata.com/v2/characters/' + $( '#charName').val() +'.json',
    success: function(response) {
		if(response.characters.error != null){
			$("#charStatus").text('Esse personagem não existe!');
		
		}else{
			
		 $("#charStatus").text(response.characters.data.status);
		 sessionStorage.setItem('lastChar', response.characters.data.name);
		}
	 
    }
});
  
}
function buscaCep(){
  
  $.ajax({
    dataType: "json",
    url: 'https://viacep.com.br/ws/' + $( '#cepInput').val() +'/json',
    success: function(response) {
		if(response.logradouro == null){
			$("#nomeRua").text('Rua não encontrada!');
		
		}else{
			
		 $("#nomeRua").text(response.logradouro);
		// sessionStorage.setItem('lastChar', response.characters.data.name);
		}
	 
    }
});
  
}


/* function buscaPrimeiraNoticia(){
  
  $.ajax({
    dataType: "json",
    url: "https://www.vagalume.com.br/news/index.js",
    success: function(response) {
		console.log(response);
		


$("#body").append("<div class='card' style='width: 18rem;'>")
 
		 
			
			
			
		  
		

/*		$(selector).append( t , {
			 head: response.news[1].headline,
			 descricao: response.news[1].kicker,
			 imagem: "https://www.vagalume.com.br/" + response.news[1].pic_src,
			 vejamais: response.news[1].url,
		});
				
		
		
	/*	
		$('div.card').html('<b>Test</b>');
		
		
		$("#tituloNoticia").text(response.news[1].headline);
		$("#descricaoNoticia").text(response.news[1].kicker);
		document.getElementById("imagemNoticia").src= "https://www.vagalume.com.br/" + response.news[1].pic_src;
		document.getElementById("vejaMais").href = response.news[1].url;
*/
		//$("#vejaMais").text(response.news[0].kicker);

		//$("#imagemNoticia").src = response.news[0].pic_src;

    // }
// });
  
// }

 $(document).ready(function(){
	carregar_json('Estado')
	function carregar_json(id,cidade_id){
		var html = ""
		$.getJSON('https://gist.githubusercontent.com/letanure/3012978/raw/2e43be5f86eef95b915c1c804ccc86dc9790a50a/estados-cidades.json',function(data){
			html += '<option>Selecionar' + id +'</option>'
			if(id == 'Estado' && cidade_id == null){
				for(var i = 0; i < data.estados.length; i++){
					html += '<option value='+ data.estados[i].sigla +'>'+ data.estados[i].nome +'</option>'

				}
				
			}else{
				for(var i = 0; i< data.estados.length; i++){
					if(data.estados[i].sigla == cidade_id){
						for(var j = 0; j < data.estados[i].cidades.length; j++){
							html += '<option value=' + data.estados[i].sigla +'>'+data.estados[i].cidades[j]+ '</option>'
						}
					}
				}
			}
			$('#'+id).html(html)
		})
		
	}
$(document).on('change','#Estado', function(){
	var cidade_id = $(this).val()
	
	if(cidade_id != null){
		carregar_json('Cidade', cidade_id)
	}
})
})
