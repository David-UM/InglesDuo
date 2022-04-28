const BotonParaAzar = document.getElementById("Azarboton");
const BotonParaInfo = document.getElementById("Infoboton");
const BotonParaInfo2 = document.getElementById("Infoboton2");

class CursosDuolingo{
    constructor(experiencia, coronas, secciones, idioma){
        this.experiencia = experiencia;
        this.coronas = coronas;
        this.secciones = secciones;
        this.idioma = idioma;
    }
};

class Secciones{
    constructor(numero, nivel, burbujas){
        this.numero = numero;
        this.nivel = nivel;
        this.burbujas = burbujas;
    }
};

class Burbujas{
    constructor(valor, maximoNivel, nivel, leccionesTotales, leccionesHechas, seccion){
        this.valor = valor;
        this.maximoNivel = maximoNivel;
        this.nivel = nivel;
        this.leccionesTotales = leccionesTotales;
        this.leccionesHechas = leccionesHechas;
        this.seccion = seccion;
    }
    declarar(){
        if(this.nivel === this.maximoNivel){
            return "Estoy en el maximo nivel"
        }else if(this.nivel === (this.maximoNivel - 1)){
            return `Soy Dorado porque tengo ${this.nivel} de ${this.maximoNivel} coronas`

        }else {return `Aun estoy en el nivel ${this.nivel}`}
    }


    //Esto serviviria para añadir la funcionalidad de actualizar el progreso directamente desde la pagina 
    actualizar(saltos, niveles){
        this.nivel = this.nivel + saltos;
        this.leccionesHechas = this.leccionesHechas + niveles;
        if(this.nivel === this.maximoNivel && this.leccionesHechas === this.leccionesTotales){return "Ya no puedo subir"}
        if(this.nivel === this.maximoNivel){
            this.leccionesHechas = 4
            return this.declarar()
        }
        if(this.leccionesHechas === this.leccionesTotales){
            this.nivel = this.nivel + 1
            return this.declarar()
        }
        if(niveles > (this.maximoNivel * 4 - this.nivel * 4)){
            return "Ingresaste una cantidad muy grande"
        }
        while (this.leccionesHechas > this.leccionesTotales){
            this.nivel++
            this.leccionesHechas - 4
        }
        
        return this.declarar()

    }
};




let contadordecoronas = (Aarray) => {
    let contador = 0;
    for(let i = 0; i < Aarray.length;i++){
        contador += Aarray[i]["nivel"]; 
        }
    return contador;    
}

let contadordeleccioneshechastotales = () => {
    let contador = 0;
    for(let i = 0; i < ColeccionTotalDeBurbujas.length;i++){
        if(ColeccionTotalDeBurbujas[i]["nivel"] === ColeccionTotalDeBurbujas[i]["maximoNivel"]){
            contador +=  ColeccionTotalDeBurbujas[i]["maximoNivel"] * 4
        }else{
            contador += ColeccionTotalDeBurbujas[i]["nivel"] * 4 + ColeccionTotalDeBurbujas[i]["leccionesHechas"];
        }      
    }
    return contador;    
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

let leccionAzar = () => {
    let number = Math.floor(Math.random() * (ColeccionTotalDeBurbujas.length - 1) + 1);
    let SaltarONiveles = Math.floor(Math.random() * (3 - 1) + 1);
    if(ColeccionTotalDeBurbujas[number]["nivel"] !== ColeccionTotalDeBurbujas[number]["maximoNivel"] && ColeccionTotalDeBurbujas[number]["leccionesHechas"] !== ColeccionTotalDeBurbujas[number]["leccionesTotales"]){
        if(SaltarONiveles === 2){
            //Debo añadir en el maximo las coronas faltantes
            let actualfaltante = ColeccionTotalDeBurbujas[number]["maximoNivel"] - ColeccionTotalDeBurbujas[number]["nivel"];
            let cantidad = getRandomIntInclusive(1,actualfaltante)
            return alert(`Debes realizar ${cantidad} saltos en el tema de ${ColeccionTotalDeBurbujas[number]["valor"]} que está en la sección ${ColeccionTotalDeBurbujas[number]["seccion"]}`)}
            //console.log(cantidad)TotalD
            
        if (SaltarONiveles === 1){
            let actualfaltante = (ColeccionTotalDeBurbujas[number]["maximoNivel"] * 4) -  ((ColeccionTotalDeBurbujas[number]["nivel"] * 4) + ColeccionTotalDeBurbujas[number]["leccionesHechas"])
            let cantidad = getRandomIntInclusive(1,actualfaltante)
            console.log(cantidad)
            if (cantidad < 10){return alert(`Debes avanzar ${cantidad} niveles en el tema de ${ColeccionTotalDeBurbujas[number]["valor"]} que está en la sección ${ColeccionTotalDeBurbujas[number]["seccion"]}`)
            }else if (cantidad > 20){
                cantidad = cantidad - 20
                return alert(`Debes avanzar ${cantidad} niveles en el tema de ${ColeccionTotalDeBurbujas[number]["valor"]} que está en la sección ${ColeccionTotalDeBurbujas[number]["seccion"]}`)
            }else if (cantidad > 14){
                cantidad = cantidad - 14
                return alert(`Debes avanzar ${cantidad} niveles en el tema de ${ColeccionTotalDeBurbujas[number]["valor"]} que está en la sección ${ColeccionTotalDeBurbujas[number]["seccion"]}`)
            }else if (cantidad > 9){
                cantidad = cantidad - 8 
                return alert(`Debes avanzar ${cantidad} niveles en el tema de ${ColeccionTotalDeBurbujas[number]["valor"]} que está en la sección ${ColeccionTotalDeBurbujas[number]["seccion"]}`)
            }else {return alert(`Debes avanzar 7 niveles en el tema de ${ColeccionTotalDeBurbujas[number]["valor"]} que está en la sección ${ColeccionTotalDeBurbujas[number]["seccion"]}`);}
        }
    } else {return leccionAzar()}
    
} 
BotonParaAzar.addEventListener("click",leccionAzar);


let coronasyleccionesquefaltan = () =>{
    let contadorcoronas = 0;
    let coronashechas = contadordecoronas(ColeccionTotalDeBurbujas);
    for(let i = 0; i < ColeccionTotalDeBurbujas.length;i++){
        contadorcoronas += ColeccionTotalDeBurbujas[i]["maximoNivel"]; 
        }
    let coronasfaltantes = contadorcoronas - coronashechas
    let contadorlecciones = 0;
    let leccioneshechas = contadordeleccioneshechastotales()
    for(let i = 0; i < ColeccionTotalDeBurbujas.length;i++){
        contadorlecciones += ColeccionTotalDeBurbujas[i]["maximoNivel"] * 4; 
        }
    let leccionesfaltantes = contadorlecciones - leccioneshechas  ;
    return alert(`Faltan ${coronasfaltantes} coronas por conseguir y tienes ${leccionesfaltantes} lecciones incompletas en total`);
    
};
BotonParaInfo.addEventListener("click",coronasyleccionesquefaltan);

let progresoactual = () =>{
    let coronashechas = contadordecoronas(ColeccionTotalDeBurbujas);
    let leccioneshechas = contadordeleccioneshechastotales();
    return alert(`Hasta ahora tienes ${coronashechas + 70} coronas y has completado ${leccioneshechas} lecciones en total`)
}
BotonParaInfo2.addEventListener("click",progresoactual);

// Seccion 0
const Intro = new Burbujas("Intro",6,6,4,4,0);
const Saludos = new Burbujas("Saludos",6,6,4,4,0);
const Viajes = new Burbujas("Viajes",6,6,4,4,0);
const Menu = new Burbujas("Menú",6,6,4,4,0);
const Encuentros = new Burbujas("Encuentros",6,6,4,4,0);
const Familia = new Burbujas("Familia",6,6,4,4,0);
const Empleos = new Burbujas("Empleos",6,6,4,4,0);
const Presente1 = new Burbujas("Presente 1",6,6,4,4,0);
const Tienda = new Burbujas("Tienda",6,6,4,4,0);
const MiDia = new Burbujas("Mi dia",6,6,4,4,0);
const Gustos = new Burbujas("Gustos",6,6,4,4,0);

let ColecciondeBurbujas0 = [Intro,Saludos,Viajes,Menu,Encuentros,Familia,Empleos,
    Presente1,Tienda,MiDia,Gustos]

const Seccion0 = new Secciones("0",contadordecoronas(ColecciondeBurbujas0),ColecciondeBurbujas0)

// Seccion 1
const Saludos2 = new Burbujas("Saludos 2",6,6,4,4,1);
const Estudios = new Burbujas("Estudios",6,6,4,4,1);
const Familia2 = new Burbujas("Familia 2",6,6,4,4,1);
const Preguntas = new Burbujas("Preguntas",6,6,4,4,1);
const Lugares = new Burbujas("Lugares",6,6,4,4,1);
const Emociones = new Burbujas("Emociones",6,6,4,4,1);
const Comida = new Burbujas("Comida",6,6,4,4,1);
const Viajes2 = new Burbujas("Viajes 2",6,6,4,4,1);
const Conversar = new Burbujas("Conversar",6,6,4,4,1);
const Presente2 = new Burbujas("Presente 2",6,6,4,4,1);
const Tiempo = new Burbujas("Tiempo",6,6,4,4,1);
const Familia3 = new Burbujas("Familia 3",6,6,4,4,1);
const EnCasa = new Burbujas("EnCasa",6,6,4,4,1);
const Compras = new Burbujas("Compras",6,6,4,4,1);
const Hobbies = new Burbujas("Hobbies",6,6,4,4,1);
const Personas = new Burbujas("Personas",6,6,4,4,1);
const EnLinea = new Burbujas("EnLinea",6,6,4,4,1);
const Hobbies2 = new Burbujas("Hobbies 2",6,6,4,4,1);
const Presente3 = new Burbujas("Presente 3",6,6,4,4,1);
const Platica = new Burbujas("Plática",6,6,4,4,1);
const Compras2 = new Burbujas("Compras 2",6,6,4,4,1);
const Clima = new Burbujas("Clima",6,5,4,1,1);
const Aventura = new Burbujas("Aventura",6,5,4,0,1);
const Planes = new Burbujas("Planes",6,5,4,1,1);
const Menu2 = new Burbujas("Menu 2",6,5,4,3,1);
const Gente = new Burbujas("Gente",6,5,4,0,1);
const EnCasa2 = new Burbujas("En Casa 2",6,4,4,0,1);
const Animales  = new Burbujas("Animales",6,4,4,1,1);
const Posesivos = new Burbujas("Posesivos",3,2,4,1,1);

let ColecciondeBurbujas1 = [Saludos2,Estudios,Familia2,Preguntas,Lugares,Emociones,Comida,Viajes2,
    Conversar,Presente2,Tiempo,Familia3,EnCasa,Compras,Hobbies,Personas,EnLinea,Hobbies2,Presente3,
    Platica,Compras2,Aventura,Planes,Menu2,Gente,EnCasa2,Animales,Posesivos]

const Seccion1 = new Secciones("1",contadordecoronas(ColecciondeBurbujas1),ColecciondeBurbujas1);

//Seccion 2
const Planes2 = new Burbujas("Planes 2",6,2,4,0,2);
const Perfil = new Burbujas("Perfil",6,2,4,0,2);
const Gente2 = new Burbujas("Gente 2",6,2,4,0,2);
const Direccion = new Burbujas("Dirección",6,4,4,0,2);
const Hobbies3 = new Burbujas("Hobbies 3",6,1,4,0,2);
const Escuela = new Burbujas("Escuela",6,1,4,0,2);
const Airelibre = new Burbujas("Aire libre",6,2,4,0,2);
const Gustos2 = new Burbujas("Gustos 2",6,3,4,0,2);
const Pronombres1 = new Burbujas("Pronombres 1",3,1,4,0,2);
const Perfil2 = new Burbujas("Perfil 2",6,1,4,0,2);
const Horario = new Burbujas("Horario",6,2,4,0,2);
const Horario2 = new Burbujas("Horario 2",6,2,4,0,2);
const Medico = new Burbujas("Medico",6,2,4,0,2);
const Aventura2 = new Burbujas("Aventura 2",6,1,4,0,2);
const Relatos = new Burbujas("Relatos",6,2,4,0,2);
const Relatos2 = new Burbujas("Relatos 2",6,1,4,0,2);
const Relatos3 = new Burbujas("Relatos 3",6,1,4,0,2);
const Pasado1 = new Burbujas("Pasado 1",3,1,4,1,2);
const Opiniones = new Burbujas("Opiniones",6,2,4,0,2);
const Trabajo = new Burbujas("Trabajo",6,1,4,0,2);
const Frases = new Burbujas("Frases",6,1,4,0,2);
const Memorias = new Burbujas("Memorias",6,1,4,0,2);

let ColecciondeBurbujas2 = [Planes2,Perfil,Gente2,Direccion,Hobbies3,Escuela,Airelibre,Gustos2,
    Pronombres1,Perfil2,Horario,Horario2,Medico,Aventura2,Relatos,Relatos2,Relatos3,Pasado1,
    Opiniones,Trabajo,Frases,Memorias];

const Seccion2 = new Secciones("2",contadordecoronas(ColecciondeBurbujas2),ColecciondeBurbujas2);

//Seccion 3
const Festivos = new Burbujas("Festivos",6,2,4,0,3);
const Pasado2 = new Burbujas("Pasado 2",3,1,4,0,3);
const Naturaleza = new Burbujas("Naturaleza",6,1,4,0,3);
const Salud = new Burbujas("Salud",6,4,4,0,3);
const Amor = new Burbujas("Amor",6,2,4,0,3);
const Posesion = new Burbujas("Posesion",6,1,4,0,3);
const Relatos4 = new Burbujas("Relatos 4",6,1,4,0,3);
const Quehaceres = new Burbujas("Quehaceres",6,1,4,0,3);
const Escuela2 = new Burbujas("Escuela 2",6,1,4,0,3);
const Horario3 = new Burbujas("Horario 3",6,1,4,0,3);
const Futuro = new Burbujas("Futuro",3,1,4,0,3);
const Desayuno = new Burbujas("Desayuno",6,2,4,0,3);
const Animales2 = new Burbujas("Animales 2",6,1,4,0,3);
const Hogar = new Burbujas("Hogar",6,1,4,0,3);
const Problemas = new Burbujas("Problemas",6,1,4,0,3);
const Banco = new Burbujas("Banco",6,1,4,1,3);
const Chismes = new Burbujas("Chismes",6,1,4,0,3);
const Logros = new Burbujas("Logros",6,1,4,1,3);
const Pasado3 = new Burbujas("Pasado 3",6,1,4,0,3);
const Recetas = new Burbujas("Recetas",6,1,4,0);
const Accidentes = new Burbujas("Accidentes",6,1,4,0,3);
const Consejos = new Burbujas("Consejos",6,1,4,0,3);
const Cuidado = new Burbujas("Cuidado",6,1,4,0,3);
const Compras3 = new Burbujas("Compras 3",6,1,4,0,3);
const Cuentos = new Burbujas("Cuentos",6,1,4,0,3);
const Empleos2 = new Burbujas("Empleos 2",6,1,4,0,3);
const Salud2 = new Burbujas("Salud 2",6,1,4,0,3);
const Escuela3 = new Burbujas("Escuela 3",6,1,4,0,3);
const Pasado4 = new Burbujas("Pasado 4",6,1,4,1,3);

let ColecciondeBurbujas3 = [Festivos,Pasado2,Naturaleza,Salud,Amor,Posesion,Relatos4,Quehaceres,
    Escuela2,Horario3,Futuro,Desayuno,Animales2,Hogar,Problemas,Banco,Chismes,Logros,Pasado3,
    Recetas,Accidentes,Consejos,Cuidado,Compras3,Cuentos,Empleos2,Salud2,Escuela3,Pasado4]

const Seccion3 = new Secciones("3",contadordecoronas(ColecciondeBurbujas3),ColecciondeBurbujas3);

//Seccion 4
const Incidentes = new Burbujas("Incidentes",6,1,4,0,4);
const Tecnologia = new Burbujas("Tecnologia",6,3,4,0,4);
const Menu3 = new Burbujas("Menu 3",6,1,4,0,4);
const Barbacoa = new Burbujas("Barbacoa",6,1,4,0,4);
const Ubicacion = new Burbujas("Ubicacion",6,1,4,0,4);
const Arreglos = new Burbujas("Arreglos",6,1,4,0,4);
const Verbos1 = new Burbujas("Verbos 1",3,1,4,1,4);
const Deporte = new Burbujas("Deporte",6,1,4,0,4);
const Dudas = new Burbujas("Dudas",6,2,4,0,4);
const Eventos = new Burbujas("Eventos",6,1,4,0,4);
const Arreglos2 = new Burbujas("Arreglos 2",6,1,4,0,4);
const Hogar2 = new Burbujas("Hogar 2",6,1,4,0,4);
const Invitacion = new Burbujas("Invitacion",6,1,4,1,4);
const Deporte2 = new Burbujas("Deporte 2",6,1,4,0,4);
const Gustos3 = new Burbujas("Gustos 3",6,1,4,0,4);
const Ciudades = new Burbujas("Ciudades",6,1,4,0,4);
const Pronombres2 = new Burbujas("Pronombres 2",3,1,4,0,4);
const Oficina = new Burbujas("Oficina",6,1,4,0,4);
const Cumpleanos = new Burbujas("Cumpleaños",6,1,4,0,4);
const Escuela4 = new Burbujas("Escuela 4",6,1,4,0,4);
const Misterio = new Burbujas("Misterio",6,1,4,0,4);
const Compras4 = new Burbujas("Compras 4",6,1,4,0,4);
const Animales3 = new Burbujas("Animales 3",6,1,4,0,4);
const Negocios = new Burbujas("Negocios",6,1,4,0,4);
const Verbos2 = new Burbujas("Verbos 2",3,1,4,0,4);
const Aventura3 = new Burbujas("Aventura 3",6,1,4,0,4);
4
let ColecciondeBurbujas4 = [Incidentes,Tecnologia,Menu3,Barbacoa,Ubicacion,Arreglos,Verbos1,
    Deporte,Dudas,Eventos,Arreglos2,Hogar2,Invitacion,Deporte2,Gustos3,Ciudades,Pronombres2,
    Oficina,Cumpleanos,Escuela4,Misterio,Compras4,Animales3,Negocios,Verbos2,Aventura3];

const Seccion4 = new Secciones("4",contadordecoronas(ColecciondeBurbujas4),ColecciondeBurbujas4);

//Seccion 5
const Reunion = new Burbujas("Reunion",6,1,5,0,5);
const Salud3 = new Burbujas("Salud 3",6,1,5,0,5);
const Hotel = new Burbujas("Hotel",6,1,5,0,5);
const EnCasa3 = new Burbujas("En Casa 3",6,1,5,0,5);
const Comida2 = new Burbujas("Comida 2",6,1,5,0,5);
const Pasado5 = new Burbujas("Pasado 5",3,1,4,0,5);
const Rutinas = new Burbujas("Rutinas",6,1,5,0,5);
const Afuera = new Burbujas("Afuera",6,1,5,0,5);
const Innovacion = new Burbujas("Innovacion",6,1,5,0,5);
const Educacion = new Burbujas("Educacion",6,1,5,0,5);
const Empleos3 = new Burbujas("Empleos 3",6,1,5,0,5);
const Boda = new Burbujas("Boda",6,1,5,0,5);
const Recuerdos = new Burbujas("Recuerdos",6,1,5,1,5);
const Pasado6 = new Burbujas("Pasado 6",3,1,4,0,5);
const Cuentos2 = new Burbujas("Cuentos 2",6,1,5,0,5);
const Ropa = new Burbujas("Ropa",6,1,5,0,5);
const LLegada = new Burbujas("LLegada",6,2,5,2,5);
const Noticias = new Burbujas("Noticias",6,1,5,0,5);
const Zoologico = new Burbujas("Zoologico",6,1,5,0,5);
const Romance = new Burbujas("Romance",6,1,5,0,5);
const Fiesta = new Burbujas("Fiesta",6,1,5,0,5);
const Lavisita = new Burbujas("La visita",6,1,5,0,5);
const Preguntas2 = new Burbujas("Preguntas 2",3,1,4,0,5);
const Entrevista = new Burbujas("Entrevista",6,1,5,0,5);
const Debate = new Burbujas("Debate",6,1,5,0,5);
const Lasartes = new Burbujas("Las artes",6,1,5,0,5);
const Suenos = new Burbujas("Sueños",6,1,5,0,5);

let ColecciondeBurbujas5 = [Reunion,Salud3,Hotel,EnCasa3,Comida2,Pasado5,Rutinas,Afuera,
    Innovacion,Educacion,Empleos3,Boda,Recuerdos,Pasado6,Cuentos2,Ropa,LLegada,Noticias,
    Zoologico,Romance,Fiesta,Lavisita,Preguntas2,Entrevista,Debate,Lasartes,Suenos];

const Seccion5 = new Secciones("5",contadordecoronas(ColecciondeBurbujas5),ColecciondeBurbujas5)

//Seccion 6 
const LosJuegos = new Burbujas("Los Juegos",6,1,5,0,6);
const Halloween = new Burbujas("Halloween",6,1,5,0,6);
const Casados = new Burbujas("Casados",6,1,5,0,6);
const Pasado7 = new Burbujas("Pasado 7",3,1,4,0,6);
const Caminata = new Burbujas("Caminata",6,1,5,0,6);
const Secretos = new Burbujas("Secretos",6,1,5,0,6);
const Doctor = new Burbujas("Doctor",6,1,5,1,6);
const Estudios2 = new Burbujas("Estudios 2",6,1,5,0,6);
const Mudarse = new Burbujas("Mudarse",6,1,5,0,6);
const Transito = new Burbujas("Tránsito",6,1,5,0,6);
const Enserio = new Burbujas("¿En serio?",6,1,5,0,6);
const Enlinea2 = new Burbujas("En linea 2",6,1,5,0,6);
const Verbos3 = new Burbujas("Verbos 3",3,1,4,0,6);
const Politica = new Burbujas("Politica",6,1,5,0,6);
const Miedos = new Burbujas("Miedos",6,1,5,0,6);
const Cine = new Burbujas("Cine",6,1,5,0,6);
const Torneo = new Burbujas("Torneo",6,1,5,0,6);
const Banco2 = new Burbujas("Banco 2",6,2,5,0,6);
const Contactos = new Burbujas("Contactos",6,1,5,0,6);
const Afuera2 = new Burbujas("Afuera 2",6,1,5,0,6);
const LaCena = new Burbujas("La cena",6,1,5,0,6)
const Concierto = new Burbujas("Concierto",6,1,5,0,6);
const Verbos4 = new Burbujas("Verbos 4",6,1,5,0,6);
const Crimen = new Burbujas("Crimen",6,1,5,0,6);
const DiaLibre = new Burbujas("Dia libre",6,1,5,0,6);
const DeCompras= new Burbujas("De compras",6,1,5,0,6);
const Decadas = new Burbujas("Décadas",6,1,5,0,6);
const Turismo = new Burbujas("Turismo",6,1,5,0,6);

let ColecciondeBurbujas6 = [LosJuegos,Halloween,Casados,Pasado7,Caminata,Secretos,Doctor,Estudios2,Mudarse,
    Transito,Enserio,Enlinea2,Verbos3,Politica,Miedos,Cine,Torneo,Banco2,Contactos,Afuera2,LaCena,Concierto,
    Verbos4,Crimen,DiaLibre,DeCompras,Decadas,Turismo];

const Seccion6 = new Secciones("6",contadordecoronas(ColecciondeBurbujas6),ColecciondeBurbujas6)

//Seccion 7
const Gratitud = new Burbujas("Gratitud",6,1,5,0,7);
const Mihogar = new Burbujas("Mi hogar",6,1,5,0,7);
const Intereses = new Burbujas("Intereses",6,1,5,0,7);
const Platica2 = new Burbujas("Platica 2",6,1,5,0,7);
const Algunavez = new Burbujas("Alguna vez",6,1,5,0,7);
const Quepaso = new Burbujas("¿Qué paso?",6,2,5,0,7);
const Noticias2 = new Burbujas("Noticias 2",6,1,5,0,7);
const Television = new Burbujas("Television",6,1,5,0,7);
const Decadas2 = new Burbujas("Decadas 2",6,1,5,0,7);
const Amistades = new Burbujas("Amistades",6,1,5,0,7);
const Parientes = new Burbujas("Parientes",6,1,5,0,7);
const Quejas = new Burbujas("Quejas",6,1,5,0,7);
const Quedijo = new Burbujas("¿Qué dijo?",6,1,5,0,7);
const Religion = new Burbujas("Religion",6,1,5,0,7);
const Sugerencia = new Burbujas("Sugerencia",6,1,5,0,7);
const Mudarse2 = new Burbujas("Mudarse 2",6,1,5,0,7);
const Losiento = new Burbujas("Lo Siento",6,1,5,0,7);
const Ambicion = new Burbujas("Ambicion",6,1,5,0,7);
const Automovil = new Burbujas("Automóvil",6,1,5,0,7);
const Comida3 = new Burbujas("Comida 3",6,1,5,0,7);
const Medico2 = new Burbujas("Médico 2",6,1,5,0,7);
const Escuela5 = new Burbujas("Escuela 5",6,1,5,0,7);
const Fiesta2 = new Burbujas("Fiesta 2",6,1,5,0,7);
const Periodico = new Burbujas("Periódico",6,1,5,0,7);
const Transito2 = new Burbujas("Tránsito 2",6,1,5,0,7);

let ColecciondeBurbujas7 = [Gratitud,Mihogar,Intereses,Platica2,Algunavez,Quepaso,Noticias2,Television,
    Decadas2,Amistades,Parientes,Quejas,Quedijo,Religion,Sugerencia,Mudarse2,Losiento,Ambicion,
    Automovil,Comida3,Medico2,Escuela5,Fiesta2,Periodico,Transito2];

const Seccion7 = new Secciones("7",contadordecoronas(ColecciondeBurbujas7),ColecciondeBurbujas7);

//Seccion 8
const Rancho = new Burbujas("Rancho",6,1,5,0,8); 
const Consejos2 = new Burbujas("Consejos 2",6,1,5,0,8);
const Ambicion2 = new Burbujas("Ambicion 2",6,1,5,0,8);
const Turismo2 = new Burbujas("Turismo 2",6,1,5,0,8);
const Fama = new Burbujas("Fama",6,1,5,0,8);
const Cocina = new Burbujas("Cocina",6,1,5,0,8);
const Platica3 = new Burbujas("Platica 3",6,1,5,0,8);
const Tienda2 = new Burbujas("Tienda 2",6,1,5,0,8);
const Discurso = new Burbujas("Discurso",6,1,5,0,8);
const Mihogar2 = new Burbujas("Mihogar 2",6,1,5,0,8);
const Errores = new Burbujas("Errores",6,1,5,0,8);
const Miedos2 = new Burbujas("Miedos 2",6,1,5,0,8);
const Internet = new Burbujas("Internet",6,1,5,0,8);
const Invitados = new Burbujas("Invitados",6,1,5,0,8);
const Tradicion = new Burbujas("Tradicion",6,1,5,0,8);
const LaCena2 = new Burbujas("La cena 2",6,1,5,0,8);
const Ecologia = new Burbujas("Ecologia",6,1,5,0,8);
const Buengusto = new Burbujas("Buen gusto",6,1,5,0,8);
const Belleza = new Burbujas("Belleza",6,1,5,0,8);
const Ganga = new Burbujas("Ganga",6,1,5,0,8);
const Deporte3 = new Burbujas("Deporte 3",6,1,5,0,8);
const Salud4 = new Burbujas("Salud 4",6,1,5,0,8);
const Oficina2 = new Burbujas("Oficina 2",6,1,5,0,8);
const Viajes3 = new Burbujas("Viajes 3",6,1,5,0,8);
const Crimen2 = new Burbujas("Crimen 2",6,1,5,0,8);
const Historia = new Burbujas("Historia",6,1,5,0,8);
const Deseos = new Burbujas("Deseos",6,1,5,0,8);

let ColecciondeBurbujas8 = [Rancho,Consejos2,Ambicion2,Turismo2,Fama,Cocina,Platica3,Tienda2,
    Discurso,Mihogar2,Errores,Miedos2,Internet,Invitados,Tradicion,LaCena2,Ecologia,Buengusto,
    Belleza,Ganga,Deporte3,Salud4,Oficina2,Viajes3,Crimen2,Historia,Deseos];

const Seccion8 = new Secciones("8",contadordecoronas(ColecciondeBurbujas8),ColecciondeBurbujas8);

//General
const SeccionesIngles = [Seccion0,Seccion1,Seccion2,Seccion3,Seccion4,Seccion5,Seccion6,Seccion7,Seccion8];
const Ingles = new CursosDuolingo(8350,contadordecoronas(SeccionesIngles) + 70,SeccionesIngles,"Ingles")


const ColeccionTotalDeBurbujas = ColecciondeBurbujas0.concat(ColecciondeBurbujas1,ColecciondeBurbujas2,
    ColecciondeBurbujas3,ColecciondeBurbujas4,ColecciondeBurbujas5,ColecciondeBurbujas6,ColecciondeBurbujas7,ColecciondeBurbujas8);

//Debes realizar 1 saltos en el tema de Banco 2 que está en la sección 6 || 04.24.2022

