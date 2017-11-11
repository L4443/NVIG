/*
Filnavn: about.js
Skrevet av: Emil Strand, Lars Martin Hodne
Når: November 2017
Mening: Legge til innhold i about.html siden.
*/

//legger eventlisteners på knappene, kjører showBox med hensyn til tilhørende index i arrayene
document.getElementById('NVIGButton').addEventListener('click', function () {showBox(0);});
document.getElementById('GoalButton').addEventListener('click', function () {showBox(1);});
document.getElementById('MALEButton').addEventListener('click',function () {showBox(2);});
document.getElementById('VexologyButton').addEventListener('click', function () {showBox(3);});
document.getElementById('LogoButton').addEventListener('click', function () {showBox(4);});

//beskrivelser
let aboutText = ["NTNUs Vexillologiske Interesse Gruppe, også kjent som NVIG, er en studentorganisasjon opptatt" +
"        av spredningen av vexillologiens goder, spesifikt blant våre medstudenter ved NTNU." +
"        Inspirert av TED-talken til Roman Mars (som kan ses på NVIGs framside) om manglende engasjement anngående byflagg, ble NVIG grunnlagt" +
"        av fem informatikkstudenter i 2017.", "Vi i NVIG er bekymret over mangelen av kunnskap om flag i samfunnet, derfor er målet vårt" +
"        å spre informasjon og engasjement rundt flag. NVIG jobber med denne spredningen i håp om en" +
"        framtidig prioritering av flaggdesign. De ufyselige designene man finner i flagget til San" +
"        Francisco, Pocatello og de fleste andre flag med tekst på var også en sterk inspirasjon for" +
"        grunnleggerne av NVIG. NVIG ønsker at alle byer, stater og organisasjoner skal kunne ha et flagg" +
"        verdt å samle seg bak.", "MALE³ er en gruppe med studenter fra NTNU som studerer informatikk. Gruppen består av" +
"        Eirik Leikvoll, Emil Strand, Lars Martin Hodne, August Noer Steinset og Einar Viddal." +
"        Navnet MALE³ kommer fra forbokstavene i navnene til medlemene av gruppa. MALE³" +
"        er også grunnleggerne av NVIG.", "Har du noen gang sett det norske flagget i utlandet eller på internasjonal TV?" +
"        Et blikk på en olympisk utøver sin drakt så ser du det kanskje. Flagg" +
"        er både språk og identitet samtidig. Det er ikke bare nasjoner som har egne" +
"        flagg. Byer har også flagg, men de er desverre sjeldent verdt å nevne. " +
"        De fleste byflagg går glemt på grunn av sitt dårlige design." +
"        De fleste vexillogister mener at alle har rett til et bra flagg å samle seg bak," +
"        og ved å engasjere deg i denne saken, kan DU utgjøre en forskjell!", "Hjernen symboliserer NVIGs medlemmers sinn, " +
"flaggstangen er presentert som en plante som spirer opp av hjernen, alt som skal til er" +
" å plante vexillologiens frø i sinnet. Gjennom NVIg håper vi å oppnå akkuratt dette for andre medstudenter" +
"på NTNU, og alle andre som kunne la seg friste av å lære noe om vexillologi"];

//Overskrifter til beskrivelsene
let aboutHeading = ["NVIG", "NVIG sitt mål", "MALE³", "Hvorfor Vexillologi?", "Logo"];

let about = document.getElementById("aboutDiv");
let text  = document.createElement("div");
let heading = document.createElement("h2");

about.appendChild(heading);
about.appendChild(text);


//gjør at NVIGknappen er i focus i CSSens øyne
document.getElementById("NVIGButton").focus();

function showBox(index) {
    text.innerText = aboutText[index];
    heading.innerText = aboutHeading[index];
}
//henter info om NVIG når bruker åpner siden
showBox(0);
