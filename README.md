# Req-API

Dupla:Victória Helen e Nicoly Santana

O link do Site de onde retiramos a Api: https://console.hgbrasil.com/documentation/geoip

Escolhemos essa Api porque ela é a que mais se aproxima da primeira tela que criamos que é voltada para pessoas com Alzheimer,esperamos que com essa funcionalidade da API adquirida possamos ajudar familiares a saber onde seus entes queridos estão através do serviço de geolocalização.

Desde já quero deixar fixado aqui que para podermos utilizar essa API gratuitamente tivemos que criar uma chave no site,por isso na URL vai aparecer um parâmetro chamado 'key',lá irá conter a chave que foi gerada automaticamente após registro no site para a utilização da API.


O primeiro parâmetro de busca 'user_ip' ou como é mostrado na url 'adress=remote' consiste em utilizar o IP com base no cliente por isso a palavra remote, para trazer a resposta que seria a localização do mesmo de forma detalhada,mas também tem outra opção que seria você mesmo colocar o IP desejado logo após o sinal de igual.

O segundo parâmetro de busca é 'precision' como é mostrado na url 'precision=false' um boolean que serve para dizermos a precisão da localização,o padrão vem false que diga-se de passagem já nos fornece informação suficiente,mas caso queira uma reposta de alta precisão você deve trocar o false por true(mas nesse caso para requisições de alta precisão precisa-se de uma assinatura no site),portanto caso não possa pagar,deve-se manter o padrão false.

Os dados referentes à consulta chegam são impressos e mostrados no parâmetro results, você também pode conferir a autenticação de sua chave no parâmetro de retorno valid_key e verificar no by se a consulta foi feita pelo modo de address_precision (consulta de alta precisão) ou address_standard (consulta normal).

Os dados mostrados são:

address - endereço de IP consultado,
type - ipv4 ou ipv6,
city - cidade,
region - região/estado,
country_name - nome do país,
continent - continente do IP no idioma selecionado,
continent_code - código do continente,
region_code - código da região/estado,
isp - provedor de internet (necessita do plano Professional ou acima, somente requisição precision),
country - objeto com os dados do país,
name - nome do país,
code - código do país,
capital - capital do país,
flag - objeto com a bandeira do país,
name - nome da moeda,
buy - valor para compra,
calling_code - DDI do país,
latitude - latitude da cidade,
longitude - longitude da cidade,
woeid - código da cidade para consulta no HG Weather.
