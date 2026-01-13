export interface LinkItem {
  title: string;
  href: string;
}

export interface Emne {
  id: number;
  name: string;
  color: string;
  weeks: {
    id: number;
    links: LinkItem[];
  }[];
}

export const apiUrl = "https://ukesoversikt.azurewebsites.net/api/Comments";

export const emner: Emne[] = [
  {
    id: 1,
    name: "Emne 1",
    color: "#FF5733",
    weeks: [
      {
        id: 1,
        links: [
          {
            title: "Introduksjon tekst",
            href: "https://irobin93.github.io/VSCode/uke1/Introduksjontekst.html",
          },
          {
            title: "Enkle knapper",
            href: "https://irobin93.github.io/VSCode/uke1/SimpleButtons.html",
          },
          {
            title: "Første GetAcademy time",
            href: "https://irobin93.github.io/VSCode/uke1/førsteGetTime.html",
          },
          {
            title: "Min første HTML",
            href: "https://irobin93.github.io/VSCode/uke1/MinFørsteHTML.html",
          },
          {
            title: "Min første onclick",
            href: "https://irobin93.github.io/VSCode/uke1/MinFørsteOnclick.html",
          },
          {
            title: "Funksjon med parameter",
            href: "https://irobin93.github.io/VSCode/uke1/funksjonMedParameter.html",
          },
          {
            title: "Farge lek",
            href: "https://irobin93.github.io/VSCode/uke1/merOmVariabler.html",
          },
        ],
      },
      {
        id: 2,
        links: [
          {
            title: "Mine styrker",
            href: "https://irobin93.github.io/VSCode/uke2/styrker.html",
          },
          {
            title: "Andre Get Time",
            href: "https://irobin93.github.io/VSCode/uke2/andreGetTime.html",
          },
          {
            title: "Team Oppgave 1 - Inventory Game",
            href: "https://touraymk.github.io/inventory-game/",
          },
          {
            title: "Stoppeklokke",
            href: "https://irobin93.github.io/VSCode/uke2/simpleStopWatch.html",
          },
          {
            title: "Trafikklys",
            href: "https://irobin93.github.io/VSCode/uke2/trafikkLys.html",
          },
          {
            title: "Tastatur",
            href: "https://irobin93.github.io/VSCode/uke2/keyboard.html",
          },
          {
            title: "Lyspæra og bryteren",
            href: "https://irobin93.github.io/VSCode/uke2/lysBryter.html",
          },
          {
            title: "Krokodille Spillet",
            href: "https://irobin93.github.io/VSCode/uke2/krokodilleSpillet.html",
          },
        ],
      },
      {
        id: 3,
        links: [
          {
            title: "Formater Stringen",
            href: "https://irobin93.github.io/VSCode/uke3/formaterStringen.html",
          },
          {
            title: "Adjektiv Historien",
            href: "https://irobin93.github.io/VSCode/uke3/adjektivHistorie.html",
          },
          {
            title: "Gange Tabellen",
            href: "https://irobin93.github.io/VSCode/uke3/gangeTabellen.html",
          },
          {
            title: "Tell antall vokaler i teksten",
            href: "https://irobin93.github.io/VSCode/uke3/vokalTeller.html",
          },
          {
            title: "Bakvendt Snakk",
            href: "https://irobin93.github.io/VSCode/uke3/reverserStringen.html",
          },
          {
            title: "To Random Nummere Blir Ett",
            href: "https://irobin93.github.io/VSCode/uke3/randomNumberFinder.html",
          },
          {
            title: "Shopping Cart",
            href: "https://irobin93.github.io/VSCode/uke3/shoppingCart.html",
          },
          {
            title: "8Ball",
            href: "https://irobin93.github.io/VSCode/uke3/8Ball.html",
          },
          {
            title: "Sjekk gyldig Email",
            href: "https://irobin93.github.io/VSCode/uke3/findEmail.html",
          },
          {
            title: "The Light Game",
            href: "https://irobin93.github.io/VSCode/uke3/lightGame.html",
          },
          {
            title: "To do list",
            href: "https://irobin93.github.io/VSCode/uke3/toDoList.html",
          },
        ],
      },
      {
        id: 4,
        links: [
          {
            title: "Soundboard",
            href: "https://irobin93.github.io/VSCode/uke4/soundboard.html",
          },
          {
            title: "Super Mario",
            href: "https://irobin93.github.io/VSCode/uke4/superMario.html",
          },
          {
            title: "Programmers Life - Teamoppgave 2",
            href: "https://irobin93.github.io/ProgrammersLife/",
          },
          {
            title: "Code Along 1",
            href: "https://irobin93.github.io/VSCode/uke4/codeAlong1.html",
          },
          {
            title: "Dukke",
            href: "https://irobin93.github.io/VSCode/uke4/dukke.html",
          },
          {
            title: "Chatbot",
            href: "https://irobin93.github.io/VSCode/uke4/chatbot.html",
          },
          {
            title: "Guess the Number!",
            href: "https://irobin93.github.io/VSCode/uke4/guessTheNumber.html",
          },
          {
            title: "Stein, Saks, Papir",
            href: "https://irobin93.github.io/VSCode/uke4/steinSaksPapir.html",
          },
          {
            title: "shoppingList2",
            href: "https://irobin93.github.io/VSCode/uke4/handleListe.html",
          },
          {
            title: "PokemonCatcher1",
            href: "https://irobin93.github.io/VSCode/uke4/pokemonCatcher1.html",
          },
        ],
      },
      {
        id: 5,
        links: [
          {
            title: "Morse oversetting",
            href: "https://irobin93.github.io/VSCode/uke5/morseTranslate.html",
          },
          {
            title: "Simon Says",
            href: "https://irobin93.github.io/VSCode/uke5/simonSays.html",
          },
          {
            title: "Tampen Brenner",
            href: "https://irobin93.github.io/VSCode/uke5/tampenBrenner.html",
          },
          {
            title: "Det Norske flagg",
            href: "https://irobin93.github.io/VSCode/uke5/norskFlagg.html",
          },
        ],
      },
      {
        id: 6,
        links: [
          {
            title: "Chess",
            href: "https://irobin93.github.io/VSCode/uke6/chess.html",
          },
          {
            title: "Teamoppgave 3: Ikke Mujaffas BMW",
            href: "https://irobin93.github.io/ikkeMujaffasBMW/",
          },
        ],
      },
      {
        id: 7,
        links: [
          {
            title: "NonoGram",
            href: "https://irobin93.github.io/VSCode/uke7/nonoGram.html",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Emne 2",
    color: "#33FF57",
    weeks: [
      {
        id: 9,
        links: [
          {
            title: "Labyrint",
            href: "https://irobin93.github.io/VSCode/uke8/labyrint.html",
          },
        ],
      },
      {
        id: 11,
        links: [
          {
            title: "Snake",
            href: "https://irobin93.github.io/VSCode/uke11/snake.html",
          },
        ],
      },
      {
        id: 12,
        links: [
          {
            title: "Strikke Nettbutikk",
            href: "https://irobin93.github.io/Strikkebutikk/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Emne 3",
    color: "#33A1FF",
    weeks: [
      {
        id: 13,
        links: [
          {
            title: "Test",
            href: "StartProgram:Emne3/1of6/NoReturn/NoReturn/bin/Debug/net8.0/NoReturn.exe",
          },
        ],
      },
      {
        id: 15,
        links: [
          {
            title: "NoReturn",
            href: "StartProgram:Emne3/1of6/NoReturn/NoReturn/bin/Debug/net8.0/NoReturn.exe",
          },
          {
            title: "3Variabler",
            href: "StartProgram:Emne3/1of6/3Variabler/3Variabler/bin/Debug/net8.0/3Variabler.exe",
          },
          {
            title: "InitializeVariables",
            href: "StartProgram:Emne3/1of6/InitializeVariables/InitializeVariables/bin/Debug/net8.0/InitializeVariables.exe",
          },
          {
            title: "ReturnTwoNumbers",
            href: "StartProgram:Emne3/1of6/ReturnTwoNumbers/ReturnTwoNumbers/bin/Debug/net8.0/ReturnTwoNumbers.exe",
          },
          {
            title: "IfElseTask1",
            href: "StartProgram:Emne3/2of6/IfElseTask1/IfElseTask1/bin/Debug/net8.0/IfElseTask1.exe",
          },
          {
            title: "IsTheNumber30",
            href: "StartProgram:Emne3/2of6/IsTheNumber30/bin/Debug/net8.0/IsTheNumber30.exe",
          },
          {
            title: "TwoNumbersSumOrMultiplied",
            href: "StartProgram:Emne3/2of6/TwoNumbersSumOrMultiplied/TwoNumbersSumOrMultiplied/bin/Debug/net8.0/TwoNumbersSumOrMultiplied.exe",
          },
          {
            title: "RandomHobby",
            href: "StartProgram:Emne3/2of6/RandomHobby/bin/Debug/net8.0/RandomHobby.exe",
          },
          {
            title: "GetDate",
            href: "StartProgram:Emne3/2of6/GetDate/bin/Debug/net8.0/GetDate.exe",
          },
          {
            title: "GetDateTwo",
            href: "StartProgram:Emne3/2of6/GetDateTwo/bin/Debug/net8.0/GetDateTwo.exe",
          },
          {
            title: "ForTask1",
            href: "StartProgram:Emne3/2of6/ForTask1/bin/Debug/net8.0/ForTask1.exe",
          },
          {
            title: "ForTask2",
            href: "StartProgram:Emne3/2of6/ForTask2/bin/Debug/net8.0/ForTask2.exe",
          },
          {
            title: "ForTask3",
            href: "StartProgram:Emne3/2of6/ForTask3/bin/Debug/net8.0/ForTask3.exe",
          },
          {
            title: "CrocodileGame",
            href: "StartProgram:Emne3/2of6/CrocodileGame/bin/Debug/net8.0/CrocodileGame.exe",
          },
          {
            title: "TekstTukling",
            href: "StartProgram:Emne3/2of6/TekstTukling/bin/Debug/net8.0/TekstTukling.exe",
          },
          {
            title: "ParProgrammering-Pokemon",
            href: "StartProgram:Emne3/3of6/ParProgrammering-Pokemon/bin/Debug/net8.0/ParProgrammering-Pokemon.exe",
          },
        ],
      },
      {
        id: 16,
        links: [
          {
            title: "MakeAPokemonClass",
            href: "StartProgram:Emne3/3of6/MakeAPokemonClass/bin/Debug/net8.0/MakeAPokemonClass.exe",
          },
          {
            title: "NyreTransplantasjon",
            href: "StartProgram:Emne3/3of6/NyreTransplantasjon/bin/Debug/net8.0/NyreTransplantasjon.exe",
          },
          {
            title: "OverloadsTest",
            href: "StartProgram:Emne3/3of6/OverloadsTest/bin/Debug/net8.0/OverloadsTest.exe",
          },
          {
            title: "FriendFace",
            href: "StartProgram:Emne3/3of6/FriendFace/bin/Debug/net8.0/FriendFace.exe",
          },
          {
            title: "Studentadministrasjonssystem",
            href: "StartProgram:Emne3/3of6/Studentadministrasjonssystem/bin/Debug/net8.0/Studentadministrasjonssystem.exe",
          },
          {
            title: "BossFight",
            href: "StartProgram:Emne3/3of6/BossFight/bin/Debug/net8.0/BossFight.exe",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Emne 4",
    color: "#FF33A1",
    weeks: [
      {
        id: 17,
        links: [
          {
            title: "BreakfastCheck",
            href: "https://irobin93.github.io/BreakfastCheck/",
          },
          { title: "Vue MusicApp", href: "https://irobin93.github.io/Emne4/" },
          {
            title: "GameReview",
            href: "https://irobin93.github.io/gamereviewclient/",
          },
          {
            title: "FonteneLunsj",
            href: "https://lunsj.fontenehuset-oslosor.no",
          },
          {
            title: "StudieTracker",
            href: "https://irobin93.github.io/StudieoktFrontend/",
          },
                    {
            title: "Vær-App-Vue",
            href: "https://irobin93.github.io/Weather-App/",
          },
        ],
      },
    ],
  },
];
