const BotonParaAzar = document.getElementById("Azarboton");
const BotonParaInfo = document.getElementById("Infoboton");
const BotonParaInfo2 = document.getElementById("Infoboton2");
const Texto = document.getElementById("texto");

function CursoDuolingo(experience,crowns,sections,language){
    this.experience = experience,
    this.crowns = crowns,
    this.sections = sections,
    this.language = language
};


function Sections(number,level,bubbles){
    this.number = number,
    this.level = level,
    this.bubbles = bubbles
};

function Bubble(value,maxLevel,Level,maxLessons,Lessons,Section){
    this.value = value,
    this.maxLevel = maxLevel,
    this.Level = Level,
    this.maxLessons = maxLessons,
    this.Lessons = Lessons,
    this.Section = Section
};