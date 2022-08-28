var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();
let convidados ;
var tempos = [];

var nrImagem = 16;
var imagens = [];
var horario = [];
var tempo = 1; // mudar imagem de 1 em 1 segundo

var img1 = window.document.getElementById('guest1');
var img2 = window.document.getElementById('guest2');
var img3 = window.document.getElementById('guest3');
var img4 = window.document.getElementById('guest4');
var img5 = window.document.getElementById('guest5');
var img6 = window.document.getElementById('guest6');
var img7 = window.document.getElementById('guest7');
var img8 = window.document.getElementById('guest8');
var img9 = window.document.getElementById('guest9');
var img10 = window.document.getElementById('guest10');
var img11 = window.document.getElementById('guest11');
var img12 = window.document.getElementById('guest12');
var img13 = window.document.getElementById('guest13');
var img14 = window.document.getElementById('guest14');
var img15 = window.document.getElementById('guest15');
var img16 = window.document.getElementById('guest16');
var img17 = window.document.getElementById('guest17');
var img18 = window.document.getElementById('guest18');
var img19 = window.document.getElementById('guest19');
var img20 = window.document.getElementById('guest20');
var img21 = window.document.getElementById('guest21');
var img22 = window.document.getElementById('guest22');
var img23 = window.document.getElementById('guest23');
var img24 = window.document.getElementById('guest24');

var msg = window.document.getElementById('horario1');







//url = "https://api-br.saas-solinftec.com/totem3988/totem/2022-08-23";
url = "https://APIConvidados.alexandresouto2.repl.co/convidados";
setInterval(function teste(){

    fetch(url).then(function(response){
        response.json().then(function(data){
            var aux = data.length;
            for (var i = 1; i < aux; i++) 
            {
                imagens[i] = "./db/" + data[i].codigo + ".png";
                console.log(data[i].codigo);
                horario[i] = data[i].horario;
            }
            var max = imagens.length;
            var min = 1;
            var roda = [];

            for (var i = 1; i < aux ; i++)
            {
                roda[i] = randomNumberInterval(max,min);
            }

            img1.src = imagens[roda[1]];
            img2.src = imagens[roda[2]];
            img3.src = imagens[roda[3]];
            img4.src = imagens[roda[4]];
            img5.src = imagens[roda[5]];
            img6.src = imagens[roda[6]];
            img7.src = imagens[roda[7]];
            img8.src = imagens[roda[8]];
            img9.src = imagens[roda[9]];
            img10.src = imagens[roda[10]];
            img11.src = imagens[roda[11]];
            img12.src = imagens[roda[12]];
            img13.src = imagens[roda[13]];
            img14.src = imagens[roda[14]];
            img15.src = imagens[roda[15]];
            img16.src = imagens[roda[16]];
            img17.src = imagens[roda[17]];
            img18.src = imagens[roda[18]];
            img19.src = imagens[roda[19]];
            img20.src = imagens[roda[20]];
            img21.src = imagens[roda[21]];
            img22.src = imagens[roda[22]];
            img23.src = imagens[roda[23]];
            img24.src = imagens[roda[24]];

            horario1.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[1]]} `;
            horario2.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[2]]} `;
            horario3.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[3]]} `;
            horario4.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[4]]} `;
            horario5.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[5]]}  `;
            horario6.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[6]]} `;
            horario7.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[7]]}  `;
            horario8.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[8]]}  `;
            horario9.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[9]]} `;
            horario10.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[10]]}  `;
            horario11.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[11]]}  `;
            horario12.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[12]]}  `;
            horario13.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[13]]} `;
            horario14.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[14]]} `;
            horario15.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[15]]} `;
            horario16.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[16]]} `;
            horario17.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[17]]}  `;
            horario18.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[18]]} `;
            horario19.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[19]]}  `;
            horario20.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[20]]}  `;
            horario21.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[21]]} `;
            horario22.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[22]]} `;
            horario23.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[23]]}  `;
            horario24.innerHTML = `Entrada: 23/08/2022 ás ${horario[roda[24]]}  `;
 

        })
    });

}, 1000);


function randomNumberInterval(a, b) 
{
    var numero = Math.floor(Math.random() * (b - a + 1)) + a;
    return numero
}

/*



            img2.src = imagens[roda[2]];
            img3.src = imagens[roda[3]];
            img4.src = imagens[roda[4]];
            img5.src = imagens[roda[5]];
            img6.src = imagens[roda[6]];
            img7.src = imagens[roda[7]];
            img8.src = imagens[roda[8]];
            img9.src = imagens[roda[9]];
            img10.src = imagens[roda[10]];
            img11.src = imagens[roda[11]];
            img12.src = imagens[roda[12]];
            img13.src = imagens[roda[13]];
            img14.src = imagens[roda[14]];
            img15.src = imagens[roda[15]];
            img16.src = imagens[roda[16]];
            img17.src = imagens[roda[17]];
            img18.src = imagens[roda[18]];
            img19.src = imagens[roda[19]];
            img20.src = imagens[roda[20]];
            img21.src = imagens[roda[21]];
            img22.src = imagens[roda[22]];
            img23.src = imagens[roda[23]];
            img24.src = imagens[roda[24]];

horario1.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[1]} `;
horario2.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[2]} `;
horario3.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[3]} `;
horario4.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[4]} `;
horario5.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[5]}  `;
horario6.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[6]} `;
horario7.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[7]}  `;
horario8.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[8]}  `;
horario9.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[9]} `;
horario10.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[10]}  `;
horario11.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[11]}  `;
horario12.innerHTML = `Entrada no Evento: 23/08/2022 ás ${horario[12]}  `;

*/
