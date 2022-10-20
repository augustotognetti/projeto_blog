//Cria uma variável para manipular um arquivo XMl
xmlhttp = new XMLHttpRequest();
//Lê um determinado arquivo XML no diretório do projeto
xmlhttp.open("GET", "xml/conteudo.xml", false);
//Envia o arquivo aberto para leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmldoc = xmlhttp.responseXML;
//Cria um vetor a partir da quantidade de postagens
x = xmldoc.getElementsByTagName("postagem");