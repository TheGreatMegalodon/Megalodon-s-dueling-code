/*
 |  Mod creator : Megalodon
 |  Coding support : Lotus, Bhpsngum

What has been fixed/added from v1.4.0: 
  - Huge changes in the whole code.
  - Fixed the AFK checker, has steped back from one version (the 1.3.5 afk checked is used here).
  - Better more customizable way to add the ships into a mod has been added.
  - Admin command has been reviewed.
  - SET command has been reviewed.
  - Introduction text now have smaller Urls and a better organization.
  - Every buttons cooldown have been reduced by atleast one second on each.
  - better background images usage.
  - Improved UI’s.
  - Resolved a few bugs in the commands.
  - More customizable game.
  - Copyrights ©Megalodon 2023-2024.
  - Added a button.
      - “More”.
          - Allow you to check informations about the game while playing.
  - removed beta logo.
  - more warnings have been added.

See the documentation on the github page for more information about the mod and its integrated commands.
link: https://megalodon-dueling.notion.site/megalodon-dueling/Meg-s-dueling-Documentation-14fded21b2e648039ed441fc13fb7431
*/

var gameOptions = { 
  Copyright: "©Megalodon 2023-2024",
  Version: "v1.4.1",
  Creator: "Megalodon#0001",
  Name: "Meg's Dueling",
  Auth: `#${Auth(Math.random()*Math.floor(Math.random() * 6) + 15)}`,
  Connexions: {
    discord: "https://discord.gg/KXvCq4N",
    documentation: "https://urlz.fr/lQZd",
    feedback: "https://urlz.fr/lQZg",
  },
  issue: {
    1: `⚠️ Main code has been edited ⚠️`,
    2: `Issues might occur in the future`
  },
  
  // LeaderBoard Feature: (leave thoses variables empty if you don't want a special color on the leaderboard)
  YourIGN_Name: "", // Put here your "in Game Name"!
  YourIGN_Color: "", // Put here your "Favorite Color" using a Hex code (they usally look like this: #6a65ff)!
  
  // Moderation
  BannedList: [],
  BannedListReasons: [],
  
  // Main gameSettings:
  ships: [],
  shipCodes: [],
  spectatorShip: [],
  adminShip: [],
  shipInformations: {
    /*
    empty string = using the default model from vanila.
    */
    spectator: { // not more then one spectator ship.
      191: {
        name: "Spectating",
        code: '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}'
      }
    },
    admin: { // admin ships are specific, you must have and advanced amout of skill in coding in order to add more.
      192: {
        name: "AdminToolPrecision",
        code: '{"name":"AdminToolPrecision","level":1.9,"model":2,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"bodies":{"object0":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17,4],"angle":0,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}}},"typespec":{"name":"AdminToolPrecision","level":1.9,"model":2,"code":192,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"shape":[0.802,0.803,0.375,0.227,0.16,0.126,0.107,0.095,0.085,0.078,0.075,0.072,0.071,0.071,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.071,0.072,0.075,0.078,0.085,0.095,0.107,0.126,0.16,0.227,0.375,0.803],"lasers":[{"x":0,"y":-0.8,"z":0,"angle":0,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":0.803}}'
      },
      193: {
        name: "AdminToolGeneral",
        code: '{"name":"Admin_Ship_General","level":1.9,"model":3,"size":1.2,"zoom":0.5,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"bodies":{"Body1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":5,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":10,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":15,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":20,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":25,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":30,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body7":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":35,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body8":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":40,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body9":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":45,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body10":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":50,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body11":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":55,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body12":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":60,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body13":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":65,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body14":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":70,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body15":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":75,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body16":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":80,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body17":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":85,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body18":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":90,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body19":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":95,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body20":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":100,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body21":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":105,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body22":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":110,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body23":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":115,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body24":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":120,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body25":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":125,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body26":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":130,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body27":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":135,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body28":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":140,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body29":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":145,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body30":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":150,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body31":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":155,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body32":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":160,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body33":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":165,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body34":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":170,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body35":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":175,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body36":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":180,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body37":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":185,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body38":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":190,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body39":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":195,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body40":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":200,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body41":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":205,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body42":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":210,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body43":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":215,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body44":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":220,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body45":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":225,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body46":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":230,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body47":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":235,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body48":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":240,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body49":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":245,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body50":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":250,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body51":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":255,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body52":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":260,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body53":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":265,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body54":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":270,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body55":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":275,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body56":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":280,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body57":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":285,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body58":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":290,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body59":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":295,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body60":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":300,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body61":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":305,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body62":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":310,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body63":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":315,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body64":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":320,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body65":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":325,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body66":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":330,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body67":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":335,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body68":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":340,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body69":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":345,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body70":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":350,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body71":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":355,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body72":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":360,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}}},"typespec":{"name":"Admin_Ship_General","level":1.9,"model":3,"code":193,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"shape":[0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961],"lasers":[{"x":-0.084,"y":-0.956,"z":0,"angle":5,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.167,"y":-0.945,"z":0,"angle":10,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.248,"y":-0.927,"z":0,"angle":15,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.328,"y":-0.902,"z":0,"angle":20,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.406,"y":-0.87,"z":0,"angle":25,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.48,"y":-0.831,"z":0,"angle":30,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.551,"y":-0.786,"z":0,"angle":35,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.617,"y":-0.735,"z":0,"angle":40,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.679,"y":-0.679,"z":0,"angle":45,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.735,"y":-0.617,"z":0,"angle":50,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.786,"y":-0.551,"z":0,"angle":55,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.831,"y":-0.48,"z":0,"angle":60,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.87,"y":-0.406,"z":0,"angle":65,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.902,"y":-0.328,"z":0,"angle":70,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.927,"y":-0.248,"z":0,"angle":75,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.945,"y":-0.167,"z":0,"angle":80,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.956,"y":-0.084,"z":0,"angle":85,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":0,"z":0,"angle":90,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.956,"y":0.084,"z":0,"angle":95,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.945,"y":0.167,"z":0,"angle":100,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.927,"y":0.248,"z":0,"angle":105,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.902,"y":0.328,"z":0,"angle":110,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.87,"y":0.406,"z":0,"angle":115,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.831,"y":0.48,"z":0,"angle":120,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.786,"y":0.551,"z":0,"angle":125,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.735,"y":0.617,"z":0,"angle":130,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.679,"y":0.679,"z":0,"angle":135,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.617,"y":0.735,"z":0,"angle":140,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.551,"y":0.786,"z":0,"angle":145,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.48,"y":0.831,"z":0,"angle":150,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.406,"y":0.87,"z":0,"angle":155,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.328,"y":0.902,"z":0,"angle":160,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.248,"y":0.927,"z":0,"angle":165,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.167,"y":0.945,"z":0,"angle":170,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.084,"y":0.956,"z":0,"angle":175,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0.96,"z":0,"angle":180,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.084,"y":0.956,"z":0,"angle":185,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.167,"y":0.945,"z":0,"angle":190,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.248,"y":0.927,"z":0,"angle":195,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.328,"y":0.902,"z":0,"angle":200,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.406,"y":0.87,"z":0,"angle":205,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.48,"y":0.831,"z":0,"angle":210,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.551,"y":0.786,"z":0,"angle":215,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.617,"y":0.735,"z":0,"angle":220,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.679,"y":0.679,"z":0,"angle":225,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.735,"y":0.617,"z":0,"angle":230,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.786,"y":0.551,"z":0,"angle":235,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.831,"y":0.48,"z":0,"angle":240,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.87,"y":0.406,"z":0,"angle":245,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.902,"y":0.328,"z":0,"angle":250,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.927,"y":0.248,"z":0,"angle":255,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.945,"y":0.167,"z":0,"angle":260,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.956,"y":0.084,"z":0,"angle":265,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.96,"y":0,"z":0,"angle":270,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.956,"y":-0.084,"z":0,"angle":275,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.945,"y":-0.167,"z":0,"angle":280,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.927,"y":-0.248,"z":0,"angle":285,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.902,"y":-0.328,"z":0,"angle":290,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.87,"y":-0.406,"z":0,"angle":295,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.831,"y":-0.48,"z":0,"angle":300,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.786,"y":-0.551,"z":0,"angle":305,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.735,"y":-0.617,"z":0,"angle":310,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.679,"y":-0.679,"z":0,"angle":315,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.617,"y":-0.735,"z":0,"angle":320,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.551,"y":-0.786,"z":0,"angle":325,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.48,"y":-0.831,"z":0,"angle":330,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.406,"y":-0.87,"z":0,"angle":335,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.328,"y":-0.902,"z":0,"angle":340,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.248,"y":-0.927,"z":0,"angle":345,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.167,"y":-0.945,"z":0,"angle":350,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.084,"y":-0.956,"z":0,"angle":355,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-0.96,"z":0,"angle":360,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":0.961}}'
      }
    },
    main: { // add pretty much anything you want.
      101: { name: "Fly", code: `` },
      201: { name: "Delta-Fighter", code: `` },
      202: { name: "Trident", code: `` },
      301: { name: "Pulse-Fighter",code: `` },
      302: { name: "Side-Fighter", code: `` },
      303: { name: "Shadow X-1", code: `` },
      304: { name: "Y-Defender", code: `` },
      401: { name: "Vanguard", code: `` },
      402: { name: "Mercury",code: `` },
      403: { name: "X-Warior", code: `` },
      404: { name: "Side-interceptor", code: `` },
      405: { name: "Pioneer",code: `` },
      406: { name: "Crusader", code: `` },
      501: { name: "U-Sniper", code: `` },
      502: { name: "FuryStar", code: `` },
      503: { name: "T-Warrior",code: `` },
      504: { name: "Aetos",code: `` },
      505: { name: "Shadow X-2", code: `` },
      506: { name: "Howler", code: `` },
      507: { name: "Bat-Defender", code: `` },
      601: { name: "Advanced-Fighter", code: `` },
      602: { name: "Scorpion", code: `` },
      603: { name: "Marauder", code: `` },
      604: { name: "Condor", code: `` },
      605: { name: "A-Speedster",code: `` },
      606: { name: "Rock-Tower", code: `` },
      607: {
        name: "O-Defender",
        code: '{"name":"O-Defender","level":6,"model":7,"size":2.2,"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-88,0,90,91],"z":[0,0,0,0,0]},"width":[5,6,25,10,20],"height":[2,10,40,20,20],"texture":[63,1,10],"propeller":true,"laser":{"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"angle":0,"error":0}},"side":{"section_segments":10,"offset":{"x":50,"y":0,"z":0},"position":{"x":[-40,-5,15,25,20,0,-50],"y":[-100,-70,-40,-10,20,50,90],"z":[0,0,0,0,0,0,0]},"width":[5,20,20,20,20,20,5],"height":[15,25,30,30,30,25,0],"texture":[0,1,2,3,4,63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":18},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,5,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"top_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]},"bottom_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":-10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[80,0],"width":[130,50],"angle":[-1],"position":[0,-30],"texture":[8],"bump":{"position":-20,"size":15}}},"typespec":{"name":"O-Defender","level":6,"model":8,"code":608,"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"shape":[4.409,4.448,4.372,4.204,4.119,4.136,4.174,4.107,4.066,4.094,4.073,4.141,4.16,4.062,4.015,3.966,3.83,3.76,3.742,3.591,3.502,3.494,3.575,4.291,4.422,4.409,4.422,4.291,3.575,3.494,3.502,3.591,3.742,3.76,3.83,3.966,4.015,4.062,4.16,4.141,4.073,4.094,4.066,4.107,4.174,4.136,4.119,4.204,4.372,4.448],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.448}}'
      },
      608: {
        name: "Payload",
        code: '{"name":"Payload","level":6,"model":8,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[150,230],"reload":[45,70]},"ship":{"mass":200,"speed":[85,120],"rotation":[40,60],"acceleration":[45,65]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-70,-50,-40,0,40,50,80,85],"z":[-5,-5,-3,0,0,0,10,10,10]},"width":[4,11,14,8,10,10,12,10,0],"height":[0,5,6,8,12,10,8,9,0],"texture":[63,4,4,3,3,13,2,13],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-55,"z":12},"position":{"x":[0,0,0,0],"y":[-20,0,10],"z":[-4,0,6]},"width":[5,10,5],"height":[0,7,0],"texture":[9]},"uwings":{"section_segments":8,"offset":{"x":25,"y":10,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-44,-43,-45,-40,10,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,6,8,10,12,10,14,12,0],"height":[0,8,10,12,14,12,16,12,0],"texture":[13,13,4,3,4,3,4,13],"propeller":true},"main_cannon":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,-20,-10,0,20,50,55],"z":[-10,-10,-10,-10,0,0,0]},"width":[0,8,12,10,15,12,0],"height":[0,5,10,10,10,8,0],"angle":0,"laser":{"damage":[110,190],"rate":1,"type":2,"speed":[70,90],"recoil":750,"number":1},"propeller":false,"texture":[111,4,63,3,4,13]},"side_cannons":{"section_segments":10,"offset":{"x":70,"y":20,"z":-10},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-55,-10,0,20,35,30],"z":[0,0,0,0,0,0,0,0]},"width":[0,3,7,12,10,5,0],"height":[0,3,5,7,5,3,0],"laser":{"damage":[6,12],"rate":7.5,"type":1,"speed":[40,80],"number":1,"error":20},"propeller":true,"texture":[13,3,4,63,4,13]}},"wings":{"main":{"length":[50,25,20,10,10,16,2,2],"width":[60,60,50,50,55,60,5,60,0],"angle":[-10,-10,-10,-10,-10,-10,-10,-10],"position":[-10,10,5,-5,-20,-35,-30,-40,-30],"doubleside":true,"offset":{"x":0,"y":10,"z":10},"bump":{"position":0,"size":10},"texture":[4,8,3,63,4,3,63,63]},"winglets":{"length":[30,10],"width":[30,20,0],"angle":[15,10],"position":[0,10,35],"doubleside":true,"offset":{"x":5,"y":60,"z":20},"bump":{"position":0,"size":10},"texture":[4,63]}},"typespec":{"name":"Payload","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[150,230],"reload":[45,70]},"ship":{"mass":200,"speed":[85,120],"rotation":[40,60],"acceleration":[45,65]}},"shape":[2.403,2.354,1.869,0.835,1.243,1.362,1.443,1.406,1.303,4.322,4.239,4.094,4.009,3.929,3.222,3.018,2.765,2.778,2.784,2.14,2.086,2.988,3.139,2.474,2.472,2.55,2.472,2.474,3.139,2.988,2.086,2.14,2.784,2.778,2.765,3.018,3.222,3.502,4.009,4.094,4.239,4.322,1.303,1.406,1.443,1.362,1.243,0.835,1.869,2.354],"lasers":[{"x":0,"y":-0.6,"z":0,"angle":0,"damage":[110,190],"rate":1,"type":2,"speed":[70,90],"number":1,"spread":0,"error":0,"recoil":750},{"x":2.1,"y":-1.05,"z":-0.3,"angle":0,"damage":[6,12],"rate":7.5,"type":1,"speed":[40,80],"number":1,"spread":0,"error":20,"recoil":0},{"x":-2.1,"y":-1.05,"z":-0.3,"angle":0,"damage":[6,12],"rate":7.5,"type":1,"speed":[40,80],"number":1,"spread":0,"error":20,"recoil":0}],"radius":4.322}}'
      },
      609: {
        name: "H_Mercury",
        code: '{"name":"H-Mercury","level":6,"model":9,"size":2.2,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":275,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[4,7],"rate":8,"type":1,"speed":[100,150],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":275,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"shape":[3.086,3.088,2.59,2.24,2.004,4.566,4.489,4.168,3.955,3.818,3.747,4.587,4.622,4.713,4.854,4.959,5.317,5.372,4.412,4.987,5.408,5.207,3.941,3.8,4.86,4.849,4.86,3.8,3.941,5.207,5.408,4.987,4.412,5.372,5.317,4.959,4.854,4.713,4.622,4.587,3.747,3.818,3.955,4.168,4.489,4.566,2.004,2.24,2.59,3.088],"lasers":[{"x":0,"y":-3.08,"z":0.88,"angle":0,"damage":[4,7],"rate":8,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.575,"y":-3.739,"z":-0.44,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.575,"y":-3.739,"z":-0.44,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":4.285,"y":-1.009,"z":0.22,"angle":3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.285,"y":-1.009,"z":0.22,"angle":-3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.408}}'
      },
      610: {
        name: "Vampire",
        code: '{"name":"Vampire","designer":"nex","level":6,"model":10,"size":1.5,"specs":{"shield":{"capacity":[230,275],"reload":[6,9]},"generator":{"capacity":[190,225],"reload":[35,50]},"ship":{"mass":170,"speed":[120,130],"rotation":[90,90],"acceleration":[120,120]}},"bodies":{"main_DOESNOTSHOOT":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-35,-45,-15,10,30,45,70,100,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,15,25,15,15,25,20,0],"height":[0,6,13,17,13,13,17,13,0],"texture":[3,11,1,63,4,3,8,17],"propeller":true},"boris":{"section_segments":8,"offset":{"x":20,"y":30,"z":-5},"position":{"x":[0,0,-1,0,0,0,10,0,0],"y":[-105,-97,-80,-60,-20,0,20,50,40],"z":[-6.6,-10,-10,-10,0,0,0,0,0]},"width":[0,7,10,10,8,14,15,15,0],"height":[0,6,8,12,8,13,13,13,0],"texture":[6,4,1,10,8,4,13,17],"propeller":false,"angle":5,"laser":{"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"error":25,"angle":0,"recoil":15}},"propeller":{"section_segments":8,"offset":{"x":24,"y":25,"z":-5},"position":{"x":[0,0],"y":[41,40],"z":[0,0]},"width":[15,0],"height":[11,0],"texture":[69],"propeller":true,"angle":5},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-1,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-25,-5,20,30,20],"z":[0,0,0,3,0,0]},"width":[0,9,12,17,10,0],"height":[0,8,12,14,13,0],"texture":[3,9,9,4],"propeller":false}},"wings":{"holy_moly_its_goku":{"offset":{"x":29,"y":44,"z":0},"length":[25,30],"width":[60,35,20],"angle":[-30,-20],"position":[0,10,25],"texture":[11,4],"doubleside":true,"bump":{"position":0,"size":10}},"what_no_way":{"offset":{"x":5,"y":45,"z":0},"length":[30,30],"width":[60,35,20],"angle":[30,20],"position":[0,15,35],"texture":[11,4],"doubleside":true,"bump":{"position":0,"size":10}},"teeth":{"offset":{"x":8,"y":-60,"z":-19},"length":[10,-10,25],"width":[15,15,55,25],"angle":[-30,-30,-20],"position":[10,3,-20,10],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}},"backteeth":{"offset":{"x":33,"y":60,"z":-10},"length":[30,-10,30],"width":[25,15,55,20],"angle":[-28,-20,-30],"position":[-20,-30,-40,-10],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}},"somanyteeth":{"offset":{"x":15,"y":10,"z":-5},"length":[10,-10,25],"width":[15,15,55,20],"angle":[30,30,50],"position":[-10,-20,-30,0],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}}},"typespec":{"name":"Vampire","level":6,"model":20,"code":620,"specs":{"shield":{"capacity":[230,275],"reload":[6,9]},"generator":{"capacity":[190,225],"reload":[35,50]},"ship":{"mass":170,"speed":[120,130],"rotation":[90,90],"acceleration":[120,120]}},"shape":[1.829,3.234,2.747,2.384,2.136,1.76,1.481,1.028,0.933,0.896,0.885,1.531,1.62,1.758,1.943,2.226,2.604,2.82,3.244,3.348,3.231,3.146,2.667,3.059,3.054,3.006,3.054,3.059,2.667,3.146,3.231,3.348,3.244,2.82,2.604,2.226,1.943,1.758,1.62,1.531,0.885,0.896,0.933,1.028,1.481,1.76,2.136,2.384,2.747,3.234],"lasers":[{"x":0.325,"y":-2.238,"z":-0.15,"angle":5,"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"spread":0,"error":25,"recoil":15},{"x":-0.325,"y":-2.238,"z":-0.15,"angle":-5,"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"spread":0,"error":25,"recoil":15}],"radius":3.348}}'
      },
      611: {
        name: "Mk47",
        code: '{"name":"Mk47","level":6,"model":11,"size":1.52,"specs":{"shield":{"capacity":[200,250],"reload":[8,10]},"generator":{"capacity":[105,170],"reload":[30,50]},"ship":{"mass":150,"speed":[70,160],"rotation":[60,75],"acceleration":[100,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-10,"z":-2},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-65,-75,-55,-40,-5,0,30,35,70,65],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,14,18,20,23,20,20,20,0],"height":[0,5,10,11,11,11,10,12,6,0],"texture":[6,4,2,11,5,10,5,18,17],"propeller":true,"laser":{"damage":[6,10],"rate":10,"type":2,"speed":[170,200],"recoil":0,"number":1,"error":2}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-80,"z":8},"position":{"x":[0,0,0,0,0,0],"y":[15,35,60,85,90],"z":[-1,-2,-1,-4,0]},"width":[0,8,10,6,0],"height":[0,8,10,10,0],"texture":[8.98,8.98,4]},"intake":{"section_segments":12,"angle":0,"offset":{"x":15,"y":5,"z":-2},"position":{"x":[6,6,6,-4,0,0,0,0],"y":[-25,-30,-5,30,45,65,60],"z":[-2,-2,-2,0,0,0,0,0]},"width":[0,5,10,10,13,8,0],"height":[0,6,11,12,12,8,0],"texture":[6,4,63,4,63,17],"propeller":1,"laser":{"damage":[6,8],"angle":2,"rate":4,"type":2,"speed":[140,180],"recoil":0,"number":1,"error":5}}},"wings":{"main":{"length":[10,30,20],"width":[0,55,40,20],"angle":[0,-20,0],"position":[20,20,40,15],"texture":[3,11,63],"doubleside":true,"bump":{"position":10,"size":15},"offset":{"x":0,"y":15,"z":1}},"font":{"length":[25],"width":[30,10],"angle":[-10],"position":[0,15],"texture":[63],"doubleside":true,"bump":{"position":10,"size":15},"offset":{"x":5,"y":-65,"z":-7}}},"typespec":{"name":"Mk47","level":6,"model":19,"code":619,"specs":{"shield":{"capacity":[200,250],"reload":[8,10]},"generator":{"capacity":[105,170],"reload":[30,50]},"ship":{"mass":150,"speed":[70,160],"rotation":[60,75],"acceleration":[100,140]}},"shape":[2.589,2.59,2.205,2.04,1.933,1.679,1.097,1.088,1.015,0.968,0.939,0.926,0.941,0.942,0.916,1.902,2.016,2.151,2.199,2.285,2.415,2.559,2.465,2.237,2.166,1.827,2.166,2.237,2.465,2.559,2.415,2.285,2.199,2.151,2.016,1.902,0.916,0.939,0.942,0.926,0.939,0.968,1.015,1.088,1.097,1.679,1.933,2.04,2.205,2.59],"lasers":[{"x":0,"y":-2.584,"z":-0.061,"angle":0,"damage":[6,10],"rate":10,"type":2,"speed":[170,200],"number":1,"spread":0,"error":2,"recoil":0},{"x":0.638,"y":-0.76,"z":-0.061,"angle":0,"damage":[6,8],"rate":4,"type":2,"speed":[140,180],"number":1,"spread":2,"error":5,"recoil":0},{"x":-0.638,"y":-0.76,"z":-0.061,"angle":0,"damage":[6,8],"rate":4,"type":2,"speed":[140,180],"number":1,"spread":2,"error":5,"recoil":0}],"radius":2.59}}'
      },
      612: {
        name: "Phantom",
        code: '{"name":"Phantom","level":6,"model":12,"size":1.55,"zoom":0.8,"specs":{"shield":{"capacity":[130,190],"reload":[8,10]},"generator":{"capacity":[140,210],"reload":[30,43]},"ship":{"mass":150,"speed":[110,140],"rotation":[40,62],"acceleration":[130,150]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-70,-60,-30,0,20,55,75,95,85],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,14,17,14,18,14,10,0],"height":[0,5,10,13,15,15,10,8,0],"texture":[1,3,4,3,8,4,8,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-65,"z":7},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-5,0,20,40,50,70,85],"z":[-7,-5,0,0,3,4,3,5]},"width":[0,5,8,9,9,6,0],"height":[0,8,10,8,8,8,0],"texture":[3,9,9,2,3,4,3,2]},"cannons":{"section_segments":8,"offset":{"x":30,"y":45,"z":-15},"position":{"x":[0,0,0,0,-10,-25],"y":[-75,-70,-53,-25,-10,0],"z":[0,0,0,0,0,0]},"width":[0,5,6,8,10,0],"height":[0,3,5,6,8,0],"angle":1,"laser":{"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1},"propeller":0,"texture":[6,3,3,3,1,3,1,3,1,3]},"cannons2":{"section_segments":8,"offset":{"x":25,"y":33,"z":-15},"position":{"x":[0,0,0,0,-10,-25],"y":[-75,-70,-53,-25,-10,0],"z":[0,0,0,0,0,0]},"width":[0,5,6,8,10,0],"height":[0,3,5,6,8,0],"angle":1,"laser":{"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1},"propeller":0,"texture":[6,3,3,3,1,3,1,3,1,3]},"body":{"section_segments":8,"offset":{"x":20,"y":0,"z":-5},"position":{"x":[-5,-3,0,0,0,0,-3,-5],"y":[-25,-20,-10,0,20,40,60,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,10,12,10,12,8,0],"height":[0,4,6,8,9,10,10,0],"texture":[1,3,1,3,4,4,17],"propeller":true}},"wings":{"w":{"offset":{"x":-3,"y":40,"z":0},"length":[12,8,20,10],"width":[90,40,80,70,85],"angle":[10,-15,-10,0],"position":[-30,-60,-60,-10,15],"texture":[4,63,4,63],"bump":{"position":10,"size":10}},"plswork":{"doubleside":true,"offset":{"x":5,"y":-25,"z":4},"length":[20,40],"width":[60,35,15],"angle":[15,-20],"position":[0,45,80],"texture":[63,4],"bump":{"position":10,"size":5}},"top":{"doubleside":true,"offset":{"x":10,"y":30,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}}},"typespec":{"name":"Phantom","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[130,190],"reload":[8,10]},"generator":{"capacity":[140,210],"reload":[30,43]},"ship":{"mass":150,"speed":[110,140],"rotation":[40,62],"acceleration":[130,150]}},"shape":[2.635,2.448,1.929,1.813,1.568,1.476,1.405,1.304,1.296,1.211,1.155,1.139,1.21,1.313,1.463,1.534,1.633,2.154,2.63,2.727,2.675,3.335,2.501,3.045,2.499,2.485,2.499,3.045,2.501,3.335,2.675,2.727,2.63,2.154,1.633,1.534,1.463,1.313,1.21,1.139,1.155,1.211,1.296,1.304,1.405,1.476,1.568,1.813,1.929,2.448],"lasers":[{"x":0.889,"y":-0.93,"z":-0.465,"angle":1,"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.889,"y":-0.93,"z":-0.465,"angle":-1,"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.734,"y":-1.302,"z":-0.465,"angle":1,"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.734,"y":-1.302,"z":-0.465,"angle":-1,"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.335}}'
      },
      613: {
        name: "Contraband",
        code: '{"name":"Contraband","level":6,"model":13,"size":1.6,"zoom":0.85,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-80,-20,0,15,20,60,65,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,24,26,20,20,20,20,25,12,0],"height":[0,5,25,25,20,15,15,15,20,10,0],"texture":[1,2,4,63,5,10,5,63,4,17],"propeller":true,"laser":{"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"recoil":250,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-55,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,5,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"cannons":{"section_segments":12,"offset":{"x":18,"y":65,"z":20},"position":{"x":[0,0,0,0,0],"y":[-50,-45,-20,-5,5],"z":[0,0,0,0,0]},"width":[0,5,7,8,0],"height":[0,5,7,8,0],"angle":0,"laser":{"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,63,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[37,0],"width":[20,70],"angle":[0],"position":[-95,0],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":25,"y":52,"z":0},"length":[35],"width":[10,10],"angle":[0],"position":[0,0,0,50],"texture":[8],"doubleside":1,"bump":{"position":0,"size":0}},"wing1":{"doubleside":true,"offset":{"x":50,"y":52,"z":-36},"length":[0,30,20,30],"width":[0,0,100,100,0],"angle":[110,70,90,110],"position":[0,0,0,0,0],"texture":[63],"bump":{"position":0,"size":5}}},"typespec":{"name":"Contraband","level":6,"model":15,"code":615,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"shape":[2.72,2.573,2.079,1.758,1.578,1.455,1.368,1.312,1.283,1.278,1.269,1.222,1.193,1.961,2.033,2.148,2.313,2.561,2.818,3.145,3.625,3.791,3.803,3.701,3.223,3.206,3.223,3.701,3.803,3.791,3.625,3.145,2.818,2.561,2.313,2.148,2.033,1.961,1.193,1.222,1.269,1.278,1.283,1.312,1.368,1.455,1.578,1.758,2.079,2.573],"lasers":[{"x":0,"y":-2.56,"z":0,"angle":0,"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"number":1,"spread":0,"error":0,"recoil":250},{"x":0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.803}}'
      },
      614: {
        name: "C_Speedster",
        code: '{"name":"C-Speedster","level":6,"model":14,"size":1.4,"specs":{"shield":{"capacity":[150,250],"reload":[8,10]},"generator":{"capacity":[150,200],"reload":[20,35]},"ship":{"mass":155,"speed":[100,125],"rotation":[55,75],"acceleration":[95,145]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-85,-80,-50,0,0,70,65],"z":[0,0,0,0,0,0,0]},"width":[0,10,21,28,20,20,0],"height":[0,7,16,25,20,15,0],"texture":[63,4,11,5,18,12],"propeller":true,"laser":{"damage":[25,65],"rate":3,"type":1,"speed":[160,200],"number":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-50,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,8,10,10,0],"height":[0,10,12,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"tops":{"section_segments":12,"offset":{"x":15,"y":45,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-45,-40,-25,0,15,40,35],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,13,11,6,0],"height":[0,5,9,8,6,5,0],"propeller":1,"angle":0,"texture":[5,4,10,63,4,17]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"join1":{"offset":{"x":0,"y":20,"z":0},"length":[37],"width":[20,70],"angle":[0],"position":[-95,-10],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":0,"y":50,"z":0},"length":[30],"width":[20,70],"angle":[0],"position":[-95,-10],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}}},"typespec":{"name":"C-Speedster","level":6,"model":14,"code":614,"specs":{"shield":{"capacity":[150,250],"reload":[8,10]},"generator":{"capacity":[150,200],"reload":[20,35]},"ship":{"mass":155,"speed":[100,125],"rotation":[55,75],"acceleration":[95,145]}},"shape":[2.38,2.312,2.007,1.668,1.485,1.388,1.314,1.274,1.253,1.179,1.113,1.066,1.042,1.043,1.487,1.656,1.757,1.903,1.92,2.239,2.689,3.102,3.328,3.238,2.423,1.964,2.423,3.238,3.328,3.102,2.689,2.239,1.92,1.903,1.757,1.656,1.487,1.043,1.042,1.066,1.113,1.179,1.253,1.274,1.314,1.388,1.485,1.668,2.007,2.312],"lasers":[{"x":0,"y":-2.38,"z":0,"angle":0,"damage":[25,65],"rate":3,"type":1,"speed":[160,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.328}}'
      },
      615: {
        name: "B_Speedster",
        code: '{"name":"B-Speedster","level":6,"model":15,"size":1.6,"specs":{"shield":{"capacity":[250,350],"reload":[8,10]},"generator":{"capacity":[90,150],"reload":[25,40]},"ship":{"mass":210,"speed":[90,100],"rotation":[50,70],"acceleration":[100,130]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-95,0,0,60,85,75],"z":[0,0,0,0,0,0,0]},"width":[0,10,40,20,22,15,0],"height":[0,5,30,30,20,15,0],"texture":[6,18,5,11,15,17],"propeller":true,"laser":{"damage":[48,94],"rate":1,"type":2,"speed":[185,240],"recoil":70,"number":1,"error":0}},"core":{"vertical":true,"angle":180,"section_segments":[30,90,150,210,270,330],"offset":{"x":0,"y":-5,"z":-40},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-40,-43,-40,-30,0,0],"z":[0,0,0,0,0,0,0]},"width":[1,13,18,23,30,30,0],"height":[1,13,18,23,30,30,0],"texture":[16.9,4.9,63,3.9,9.9,0.9,11.9]},"ye":{"vertical":true,"section_segments":12,"offset":{"x":0,"y":38,"z":-40},"position":{"x":[0,0,0],"y":[-10,-3,-1],"z":[0,0,0]},"width":[0,5,0],"height":[0,5,0],"texture":[5]},"shield":{"section_segments":12,"offset":{"x":30,"y":-40,"z":0},"position":{"x":[-6,0,0,0,0,-4],"y":[-70,-60,-10,15,30,40],"z":[0,0,0,0,0,0]},"width":[0,3,3,3,3,0],"height":[0,5,5,8,3,0],"texture":63,"angle":16},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,17]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":0,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}}},"typespec":{"name":"B-Speedster","level":6,"model":13,"code":613,"specs":{"shield":{"capacity":[250,350],"reload":[8,10]},"generator":{"capacity":[90,150],"reload":[25,40]},"ship":{"mass":210,"speed":[90,100],"rotation":[50,70],"acceleration":[100,130]}},"shape":[3.384,3.353,3.037,2.443,2.076,1.832,1.659,1.541,1.458,1.406,1.378,1.341,1.248,1.801,2.197,2.375,2.52,2.637,3.021,3.288,3.665,3.862,3.713,2.623,2.758,2.725,2.758,2.623,3.713,3.862,3.665,3.288,3.021,2.637,2.52,2.375,2.197,1.801,1.248,1.341,1.378,1.406,1.458,1.541,1.659,1.832,2.076,2.443,3.037,3.353],"lasers":[{"x":0,"y":-3.2,"z":0,"angle":0,"damage":[48,94],"rate":1,"type":2,"speed":[185,240],"number":1,"spread":0,"error":0,"recoil":70},{"x":0.96,"y":-0.32,"z":0.96,"angle":0,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-0.96,"y":-0.32,"z":0.96,"angle":0,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.862}}'
      },
      701: { name: "Odyssey", code: `` },
      702: { name: "Shadow X-3", code: `` },
      703: { name: "Bastion", code: `` },
      704: { name: "Aries", code: `` },
      705: {
        name: "Poseidon",
        code: '{"name":"Poseidon","level":7,"model":5,"size":4,"specs":{"shield":{"capacity":[650,650],"reload":[15,15]},"generator":{"capacity":[300,300],"reload":[100,100]},"ship":{"mass":650,"speed":[50,50],"rotation":[25,25],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-80,-75,-90,-80,0,30,40,80,90,80],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,15,20,25,20,15,20,15,0],"height":[0,5,10,15,20,25,20,15,20,15,0],"texture":[13,13,13,4,1,10,4,12,63,13],"laser":{"damage":[125,125],"rate":0.7,"type":1,"speed":[95,95],"number":1,"error":3,"recoil":50},"propeller":true},"shield":{"section_segments":14,"offset":{"x":70,"y":0,"z":0},"position":{"x":[-25,-20,-5,0,0,0,0,0,0,0,0,0],"y":[-100,-80,-60,-40,-35,0,35,45,65,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,4,8,6,15,20,15,6,12,8,0],"height":[0,4,8,6,15,20,15,6,12,8,0],"texture":[13,63,63,4,8,3,4,12,63,13],"propeller":true},"sidecannons":{"section_segments":20,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,18,15,20,40],"z":[0,0,0,0,0]},"width":[0,5,10,15,20],"height":[0,5,10,15,15],"texture":[13,13,63,63,4],"angle":-90,"laser":{"damage":[10,10],"rate":4,"type":1,"speed":[200,200],"number":2,"angle":45}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-39,"z":17},"position":{"x":[0,0,0,0],"y":[-35,-10,10,35],"z":[0,0,0,0]},"width":[10,15,15,10],"height":[5,8,10,5],"texture":[9,9,9]}},"wings":{"bridge1":{"offset":{"x":15,"y":20,"z":-5},"length":[45],"width":[18,6],"angle":[10],"position":[0,0],"texture":[4],"bump":{"position":0,"size":50},"doubleside":true},"bridge2":{"offset":{"x":15,"y":-10,"z":5},"length":[45],"width":[18,16],"angle":[-10],"position":[0,10],"texture":[63],"bump":{"position":0,"size":15},"doubleside":true},"bridge3":{"offset":{"x":15,"y":-40,"z":-5},"length":[45],"width":[18,6],"angle":[10],"position":[0,20],"texture":[4],"bump":{"position":0,"size":50},"doubleside":true},"winglets1":{"offset":{"x":16,"y":-70,"z":10},"length":[15],"width":[18,13],"angle":[45],"position":[0,-10],"texture":[63],"bump":{"position":0,"size":10},"doubleside":true},"winglets2":{"offset":{"x":16,"y":-70,"z":-10},"length":[15],"width":[18,13],"angle":[-45],"position":[0,-10],"texture":[63],"bump":{"position":0,"size":10},"doubleside":true}},"typespec":{"name":"Poseidon","level":7,"model":6,"code":706,"specs":{"shield":{"capacity":[650,650],"reload":[15,15]},"generator":{"capacity":[300,300],"reload":[100,100]},"ship":{"mass":650,"speed":[50,50],"rotation":[25,25],"acceleration":[120,120]}},"shape":[8,7.299,7.24,8.773,8.634,7.85,7.586,7.547,7.295,7.326,7.292,7.516,7.994,8,7.516,7.292,7.326,7.869,8.372,8.18,2.921,3.185,4.206,7.07,7.299,7.214,7.299,7.07,4.206,3.185,2.921,8.18,8.372,7.869,7.326,7.292,7.516,7.994,8,7.516,7.292,7.326,7.295,7.547,7.586,7.85,8.634,8.773,7.24,7.299],"lasers":[{"x":0,"y":-8,"z":0,"angle":0,"damage":[125,125],"rate":0.7,"type":1,"speed":[95,95],"number":1,"spread":0,"error":3,"recoil":50},{"x":8,"y":0,"z":0,"angle":-90,"damage":[10,10],"rate":4,"type":1,"speed":[200,200],"number":2,"spread":45,"error":0,"recoil":0},{"x":-8,"y":0,"z":0,"angle":90,"damage":[10,10],"rate":4,"type":1,"speed":[200,200],"number":2,"spread":45,"error":0,"recoil":0}],"radius":8.773}}'
      },
      706: {
        name: "Warthog",
        code: '{"name":"Warthog","level":7,"model":6,"size":3,"specs":{"shield":{"capacity":[350,350],"reload":[15,15]},"generator":{"capacity":[140,140],"reload":[80,80]},"ship":{"mass":300,"speed":[60,60],"rotation":[35,35],"acceleration":[85,85]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-140,-110,-30,0,80,160,165],"z":[0,0,0,3,10,20,24]},"width":[0,15,26,28,22,6,0],"height":[0,15,25,25,20,8,0],"texture":[63,1,10,1,2,4]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":10},"position":{"x":[0,0,0],"y":[-70,-50,0],"z":[-3,-3,0]},"width":[8,13,13],"height":[10,25,15],"texture":[9]},"engines":{"section_segments":10,"offset":{"x":30,"y":0,"z":5},"position":{"x":[-29,0,0,0,0],"y":[-18,60,100,110,100],"z":[-2.7,0,0,0,0]},"width":[22,22,20,18,0],"height":[24,22,20,18,0],"propeller":true,"texture":[10,13,12,17]},"cannon":{"section_segments":8,"offset":{"x":0,"y":-90,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-30,-20,0,20,10],"z":[0,0,0,5,10,20]},"width":[0,5,6,6,6,0],"height":[0,6,7,7,7,0],"angle":0,"propeller":false,"texture":[6,3,4],"laser":{"damage":[80,80],"rate":2,"type":2,"speed":[85,85],"number":1}}},"wings":{"main":{"doubleside":true,"offset":{"x":10,"y":20,"z":15},"length":[70,60,15],"width":[60,50,40,25],"angle":[-10,-5,45],"position":[0,10,0,0],"texture":[8,2,63],"bump":{"position":10,"size":10}},"winglets":{"doubleside":true,"offset":{"x":5,"y":-75,"z":5},"length":[35],"width":[35,20],"angle":[-5],"position":[0,5],"texture":[63],"bump":{"position":10,"size":10}},"tail":{"doubleside":true,"offset":{"x":0,"y":140,"z":20},"length":[60,20],"width":[50,40,30],"angle":[10,40],"position":[-6,7,9,0],"texture":[11,63],"bump":{"position":0,"size":11}}},"typespec":{"name":"Warthog","level":7,"model":2,"code":702,"specs":{"shield":{"capacity":[350,350],"reload":[15,15]},"generator":{"capacity":[140,140],"reload":[80,80]},"ship":{"mass":300,"speed":[60,60],"rotation":[35,35],"acceleration":[85,85]}},"shape":[8.4,7.425,5.402,5.349,5.363,4.463,2.32,2.061,1.882,1.761,1.675,2.107,3.33,9.029,9.169,8.87,7.45,6.39,5.56,4.775,5.6,10.479,10.805,10.485,9.962,9.9,9.962,10.485,10.805,10.479,5.6,4.775,5.56,6.39,7.45,8.87,9.169,9.029,8.322,2.107,1.675,1.761,1.882,2.061,2.32,4.463,5.363,5.349,5.402,7.425],"lasers":[{"x":0,"y":-7.8,"z":-0.9,"angle":0,"damage":[80,80],"rate":2,"type":2,"speed":[85,85],"number":1,"spread":0,"error":0,"recoil":0}],"radius":10.805}}'
      }
    }
  },
  images: {
    "MapCenter": {
      image: "https://raw.githubusercontent.com/TheGreatMegalodon/Megalodon-s-dueling-code/main/gameImages/megs_dueling_center_map_with_speedsters.png",
      positions: { x: -1, y: 0, width: 95, height: 52, depth: 0 }
    },
    "ModVersion": {
      image: `https://raw.githubusercontent.com/TheGreatMegalodon/Megalodon-s-dueling-code/main/gameImages/versions/v1.4.1_Img.png`,
      positions: { x: 21, y: -8.5, width: 20, height: 11, depth: -0.30 }
    }
  },
  vocabulary: [
    {text: "You", icon: "\u004e", key: "O"},
    {text: "Me", icon: "\u004f", key: "E"},
    {text: "Wait", icon: "\u0048", key: "T"},
    {text: "Yes", icon: "\u004c", key: "Y"},

    {text: "No", icon: "\u004d", key: "N"},
    {text: "Hello", icon: "\u0045", key: "H"},
    {text: "Sorry", icon: "\u00a1", key: "S"},
    {text: "Thanks", icon: "\u0041", key: "X"},

    {text: "Attack", icon: "\u0049", key: "A"},
    {text: "Follow Me", icon: "\u0050", key: "F"},
    {text: "Good Game", icon: "\u00a3", key: "G"},
    {text: "Leave", icon: "\u00b3", key: "L"},

    {text: "Gems", icon: "\u0044", key: "M"},
    {text: "Stats", icon: "\u0078", key: "K"},
    {text: "Hmm", icon: "\u004b", key: "Q"},
    {text: "No Prb", icon: "\u0047", key: "P"},
  
    {text: "Discord", icon: "\u007b", key: "D"},
    {text: "Idiot", icon: "\u0079", key: "I"},
    {text: "Lag", icon: "\u0069", key: "J"},
    {text: "Spectate", icon: "\u0059", key: "W"}
  ],
  getWarning: false, // Get a warning everytime a suspicious player joins the game. (Beta Feature)
  Enable_antiCheat: true, // Changing the value while the mod is running isn't recomanded.
  Enable_AFK: true, // Allow AFK checker to run
  AFK_Cooldown: 40,
  always_pickup_crystals: true,
  delays: { // in seconds
    spawn_zone_delay: 1,
    switch_ship_delay: 0.15,
    spectator_switch_delay: 1,
    TP_points_delay: 1,
    Regenerate_delay: 2,
    wrap_delay: 0.25,
    Mb_delay: 1,
  },
  anchorMenu: {
    anchor: {x: 0, y: 0},
    look: {
      componentBoxWidth: 7,
      opacity: "0.35"
    }
  }
};

game.custom.launched||MapOpen();
game.custom.launched&&(game.modding.terminal.echo(`\n          [[g;#ff7070;] ${gameOptions.issue[1]} ]\n          [[g;#ff7070;] ${gameOptions.issue[2]} ]\n`));
function Auth(t){const n="abcdefghijklmnopqrstuvwxyz0123456789";let o="";for(;o.length<t;){const t=Math.floor(36*Math.random()),r=n.charAt(t);o.includes(r)||(o+=r)}return o}
!function(){ gameOptions.ships=[...Object.values(gameOptions.shipInformations.spectator).flatMap((a=>a.code)),...Object.values(gameOptions.shipInformations.admin).flatMap((a=>a.code)),...Object.values(gameOptions.shipInformations.main).flatMap((a=>a.code))] }();
!function(){ const{main:e,spectator:s,admin:t}=gameOptions.shipInformations; gameOptions.shipCodes=Object.keys(e), gameOptions.spectatorShip=Object.keys(s), gameOptions.adminShip=Object.keys(t) }();
!function(){ for(let t of Object.keys(gameOptions.images)){const e=gameOptions.images[t],i=gameOptions.images[t].positions;game.setObject({id:t,type:{id:t,obj:"https://starblast.data.neuronality.com/mods/objects/plane.obj",emissive:e.image},position:{x:i.x,y:i.y,z:-15},scale:{x:i.width,y:i.height,z:0},rotation:{x:Math.PI,y:0,z:i.depth}})} }();
this.options = {
  map_name: gameOptions.Name,
  max_players: 69, // :D haha funny
  starting_ship: 801,
  map_size: 100,
  speed_mod: 1.2,
  max_level: 1,
  weapons_store: false,
  vocabulary: gameOptions.vocabulary,
  ships: gameOptions.ships,
  custom_map: ""
};

// Admin buttons
const Admin = {
  id: "Admin",
  position: [21, 0, 7.2, 4],
  clickable: true,
  visible: true,
  shortcut: "1",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(255, 255, 255, ${gameOptions.anchorMenu.look.opacity})`, stroke: "#FFFFFF", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 20, 100, 60], value: "Admin [1]", color: "#FFFFFF"}
  ]
};

// Buttons
const Spectate = {
  id: "Spectate",
  position: [72.2, 4.8, 7.6, 4],
  clickable: true,
  visible: true,
  shortcut: "8",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(55, 55, 255, ${gameOptions.anchorMenu.look.opacity})`, stroke: "#2828D7", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 20, 100, 60], value: "Spectate [8]", color: "#ffffff"}
  ]
};

const Regen = {
  id: "Regen",
  position: [72.2, 0, 7.6, 4],
  clickable: true,
  visible: true,
  shortcut: "9",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(55, 255, 55, ${gameOptions.anchorMenu.look.opacity})`, stroke: "#00FF00", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 20, 100, 60], value: "Regen [9]", color: "#ffffff"}
  ]
};

const Menu_ = {
  id: "Menu_",
  position: [64.1, 0, 7.6, 4],
  clickable: true,
  visible: true,
  shortcut: "0",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(255, 55, 55, ${gameOptions.anchorMenu.look.opacity})`, stroke: "#FF0000", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 20, 100, 60], value: "Menu [0]", color: "#ffffff"}
  ]
};

// Switch Screen
const Square = {
  id: "Square",
  position: [30+gameOptions.anchorMenu.anchor.x,27.5+gameOptions.anchorMenu.anchor.y,40,42.5],
  clickable: false,
  visible: true,
  components: [
    {type:"box",position:[0,10,100,84],fill: `rgba(155, 155, 155, ${gameOptions.anchorMenu.look.opacity})`},
    {type:"box",position:[0,2,41.5,10],fill:"rgba(200, 200, 200)"},
    {type:"box",position:[0,8,100,8],fill:"rgba(200, 200, 200)"}, // 
    {type: "text",position:[-2,3.5,45,11],value:"Actions Menu",color:"#000000"},
    {type: "text",position:[-8,88,45,4.5],value:gameOptions.Copyright,color:"#439fff"},
    {type: "text",position:[18,88,45,4.5],value:`AntiCheat  ${gameOptions.Enable_antiCheat ? "Active" : "inactive"}`,color:gameOptions.Enable_antiCheat ? "#85ff70" : "#ff7070"}
  ]
};

const more = {
  id: "More",
  position: [65.9+gameOptions.anchorMenu.anchor.x, 31.1+gameOptions.anchorMenu.anchor.y, 4, 3],
  clickable: true,
  visible: true,
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(100, 100, 100, ${gameOptions.anchorMenu.look.opacity})`, stroke: "rgb(100, 100, 100)", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 16.5, 100, 70], value: "More", color: `rgb(0,0,0)` }
  ]
};

const next_ship = {
  id: "next_ship",
  position: [31+gameOptions.anchorMenu.anchor.x, 37.5+gameOptions.anchorMenu.anchor.y, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "3",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(0, 148, 255, ${gameOptions.anchorMenu.look.opacity})`, stroke: "rgb(0, 148, 255)", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 17, 100, 62], value: "Next [3]", color: "#ffffff"}
  ]
};

const previous_ship = {
  id: "previous_ship",
  position: [59+gameOptions.anchorMenu.anchor.x, 37.5+gameOptions.anchorMenu.anchor.y, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "4",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(0, 148, 255, ${gameOptions.anchorMenu.look.opacity})`, stroke: "rgb(0, 148, 255)", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 17, 100, 62], value: "Previous [4]", color: "#ffffff"}
  ]
};

const Tp_Spawn = {
  id: "Tp_Spawn",
  position: [59+gameOptions.anchorMenu.anchor.x, 45+gameOptions.anchorMenu.anchor.y, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "5",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(255, 55, 55, ${gameOptions.anchorMenu.look.opacity})`, stroke: "rgb(255, 0, 0)", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 17, 100, 62], value: "Center [5]", color: "#ffffff"}
  ]
};

const Stats = {
  id: "Stats",
  position: [31+gameOptions.anchorMenu.anchor.x, 45+gameOptions.anchorMenu.anchor.y, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "7",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(255, 232, 0, ${gameOptions.anchorMenu.look.opacity})`, stroke: "rgb(255, 232, 0)", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 17, 100, 62], value: "Stats [7]", color: "#ffffff"}
  ]
};

const Wrap = {
  id: "Wrap",
  position: [31+gameOptions.anchorMenu.anchor.x, 52.5+gameOptions.anchorMenu.anchor.y, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "6",
  components: [
    {type: "box", position: [0, 0, 100, 100], fill: `rgba(55, 255, 55, ${gameOptions.anchorMenu.look.opacity})`, stroke: "rgb(55, 255, 55)", width: gameOptions.anchorMenu.look.componentBoxWidth},
    {type: "text", position: [0, 17, 100, 62], value: "Wrap [6]", color: "#ffffff"}
  ]
};

//Hide buttons
const HideShow_Buttons = {
  id: "HideShow_Buttons",
  position: [4.8, 27.5, 11, 7],
  clickable: true,
  visible: true,
  shortcut: "2",
  components: [{type: "text", position: [0, 0, 100, 100], value: "Hide Buttons [2]", color: "#ffffff"}]
};

// Other
const Always_Pickup_Crystals = {
  id: "APC",
  position: [-4.5, -5, 110, 110],
  clickable: false,
  visible: true,
  components: [{type: "text", position: [-4, 5, 100, 3], value: "--", color: "#ffffff"}]
};

this.tick = function(game) {
  if (game.step % 120 === 0 && !game.custom.launched) {
    for (const ship of game.ships) alert(ship, "The code didn't loaded properly..!", "Clear and copy the code in your modding tab again!");
    return;
  }
  if (game.step % 60 === 0 && game.custom.launched) {
    updateScoreboard(game);
    for (const ship of game.ships) if (gameOptions.Enable_AFK) AFKship(ship);
  }
  if (game.step % 20 === 0 && gameOptions.always_pickup_crystals) {
    game.ships.forEach((ship) => {
      let max_crystals = 20 * Math.pow(Math.trunc(ship.type / 100), 2);
      if (ship.crystals >= max_crystals && ship.custom.crystals_last_updated !== ship.last_updated) {
        ship.set({ crystals: max_crystals - 1 });
        ship.custom.crystals_last_updated = ship.last_updated;
      }
    });
  }
};

function getShipAFKinfo(t,o,u,s){return t.custom.point1={x:o,y:u},t.custom.r1=s,setTimeout((()=>{t.custom.point2={x:o,y:u},t.custom.r2=s}),200),setTimeout((()=>{t.custom.point3={x:o,y:u}}),400),Math.sqrt(Math.pow(t.vx,2)+Math.pow(t.vy,2))<=0.005&&t.custom.r1===t.custom.r2||t.custom.point1.x===t.custom.point2.x&&t.custom.point2.x===t.custom.point3.x&&t.custom.r1===t.custom.r2}
function AFKship(ship) {
  switch (ship.custom.afk_main) {
    case 0:  ship.custom.TimeAFK = gameOptions.AFK_Cooldown; break;
    case 1:
      if (ship.alive) {
        ship.custom.TimeAFK--;
        if (ship.custom.TimeAFK <= 10) {
          ship.custom.oldR = ship.r;
          setTimeout(function() {
            if (getShipAFKinfo(ship, ship.vx, ship.vy, ship.r)) {
              alert(ship, `Going AFK`, ship.custom.TimeAFK, "rgba(255,55,55,0.8)", 1500);
              if (ship.custom.TimeAFK <= 0) {
                spectator_ship(ship);
                ship.custom.isAFK = true;
                alert(ship, `You're now AFK!`, ``, "rgba(255,55,55,0.8)", 5000);
              }
            } else ship.custom.TimeAFK = gameOptions.AFK_Cooldown;
          }, 400);
        }
      } else ship.custom.TimeAFK = gameOptions.AFK_Cooldown;
      break;
    default: break;
  }
}

function updateScoreboard(game) {
  let sorted_ships_KDratio = [...game.ships].sort((a, b) => (b.custom.Kills - b.custom.Deaths) - (a.custom.Kills - a.custom.Deaths)).slice(0, 8);
  game.ships.forEach((ship) => {
    if (ship.name == gameOptions.YourIGN_Name) ship.custom.customColor = gameOptions.YourIGN_Color;
    else if (ship.name.includes(["Megalodon"])) ship.custom.customColor = "#005cb9";
    else ship.custom.customColor = ship.custom.isAFK ? "rgb(200,111,111)" : ship.custom.spectator ? "rgb(155,155,155)" : (ship.id === sorted_ships_KDratio[0].id && ship.custom.Kills >= 1) ? "rgb(255, 215, 0)" : "rgb(255, 255, 255)";
  });
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {type: "box", position: [0, 0, 100, 10], fill: "rgba(255, 255, 255, 0.35)"},
      {type: "box", position: [81, 0, 7.5, 10], fill: "rgba(55, 255, 55, 0.35)"},
      {type: "box", position: [88.5, 0, 7.5, 10], fill: "rgba(255, 55, 55, 0.35)"},
      {type: "text", position: [3, 0.7, 69, 8.5], value: "Players", color: "rgb(255,255,255)", align: "left"},
      {type: "text", position: [66, 1, 29, 8.5], value: "K/D", color: "rgb(255,255,255)", align: "right"},
      ...sorted_ships_KDratio.map((ship, i) => [
        {
          type: "player", 
          index: i, 
          position: [0, 11.25 * i + 11, 77, 9.25], 
          id: sorted_ships_KDratio[i].id, 
          color: ship.custom.customColor, 
          value: "", 
          align: "left"
        },
        {
          type: "text", 
          position: [74, 11.25 * i + 11.5, 29, 8.5], 
          value: sorted_ships_KDratio[i].custom.Kills + "/" + ship.custom.Deaths, 
          color: "rgb(255,255,255)", 
          align: "center"
        }
      ]).flat(Infinity)
    ]
  };
  for (let ship of game.ships) {
    if (ship === null) continue;
    let components = [...Scoreboard.components];
    let index = components.findIndex(c => c.type == "player" && c.id === ship.id);
    if (index == -1) {
      let last = Scoreboard.components.at(-2);
      last.id = ship.id;
      last.color = ship.custom.customColor;
      Scoreboard.components.at(-1).value = ship.custom.Kills + "/" + ship.custom.Deaths;
      index = Scoreboard.components.length - 2;
    }
    Scoreboard.components.splice(index, 0, {type: "box",position: [0, components[index].index * 11.25 + 10.50, 100, 10], fill: "rgba(200, 200, 255, 0.15)"});
    ship.setUIComponent(Scoreboard);
    Scoreboard.components = components;
  }
}

function getCords(size, info, random = true) {
  const mapSize = size + 1;
  const newInfo = Array(mapSize).fill(0).map((_, i) => (info.cords - Math.round(size / 2)) + i);
  return random ? newInfo[~~(Math.random() * newInfo.length)] : newInfo;
}

function setAPC(ship) {
  const isAlwaysPickup = gameOptions.always_pickup_crystals ? "ON" : "OFF";
  Always_Pickup_Crystals.components[0].value = `Always Pickup Crystals: ${isAlwaysPickup}`;
  Always_Pickup_Crystals.components[0].color = gameOptions.always_pickup_crystals ? "rgba(55, 255, 55, 0.4)" : "rgba(255, 55, 55, 0.4)";
  ship.setUIComponent(Always_Pickup_Crystals);
}

function alert(ship, Value1 = "", Value2 = "", Color = "rgba(255,255,255,0.8)", time = 2500) {
  clearTimeout(ship.custom.logtimeout);
  ship.custom.logtimeout = setTimeout(() => {ship.setUIComponent({id: "Text", visible: false})}, time);
  ship.setUIComponent({
    id: "Text",
    position: [-5, -5, 110, 110],
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [0, 18, 100, 4], color: Color, value: Value1},
      {type: "text", position: [0, 23, 100, 4], color: Color, value: Value2}
    ]
  });
}

function format_time(time) {
  if (time > 0) {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    if (time % 60 === 0) return `${(time / 60).toString()}:00`;
    if (seconds < 10) seconds = `0${seconds.toString()}`;
    if (minutes < 1) return seconds.toString();
    return `${minutes.toString()}:${seconds.toString()}`;
  } else return "0:00";
}

function MapOpen() {
  var tm = 0;
  setTimeout(function() { game.modding.terminal.echo(`\n\n                      [[gb;#007bff;]★ ${gameOptions.Name} ★]\n\n\n   [[gi;#00d5ff;]This is an official dueling mod produced by] [[giu;#00d5ff;]${gameOptions.Creator}][[gi;#00d5ff;].]\n   [[gi;#00d5ff;]Any modified version of this code posted online can result in copyrights problems.]`); }, tm);
  setTimeout(function() { game.modding.terminal.echo(`\n               [[gu;#00d5ff;]Current Version]  [[gb;#ffc300;]${gameOptions.Version}]\n               [[gu;#00d5ff;]Authentication]  [[gb;#ffc300;]${gameOptions.Auth}]\n`); }, tm+=200);
  // link given
  setTimeout(function() { game.modding.terminal.echo(`\n\n               [[gu;#ffdf00;]Support Server & documentation]\n                 ${gameOptions.Connexions.discord}\n                    ${gameOptions.Connexions.documentation}\n`); }, tm+=1500);
  setTimeout(function() { game.modding.terminal.echo(`                  [[gu;#eb171e;]Give us your feedback] [[gb;#eb171e;]\u2764]\n                    ${gameOptions.Connexions.feedback}\n\n`), game.custom.launched = true; }, tm+=200);
}

function newPlayerJoined(ship) {
  const containsClan = new RegExp(["ҒꝚ▸", "ҒR▸", "ᚫᚱ▸", "FЯ▸", "✯", "F℣➛", "【🔥IS】", "⌥Ƒᔦ", "SᄅF̶ ", "[S&C]", "[△]", "ɆØ₮⇝", "ɆØ₵➛", "[NUB]", "Λᴄᗯ"].join("|"));
  const safeClans = (["ҒꝚ▸", "ҒR▸", "ᚫᚱ▸", "FЯ▸","【🔥IS】", "SᄅF̶ ", "[S&C]", "[△]", "ɆØ₵➛"])
  game.modding.terminal.echo(`[[g;#fffc50;]\nNew player joined \nIndex: ${game.ships.indexOf(ship)}, Name: ${getPlayerName(ship)}]`);
  if (!gameOptions.getWarning) {
    return;
  }
  if (!containsClan.test(ship.name)) {
    game.modding.terminal.echo(`[[g;#d3d3d3;]The player does not belong to any renowned clan/team.]`);
    return;
  }
  game.modding.terminal.echo(`[[g;#d3d3d3;]The recently joined player is a member of ⭢] [[gub;#d3d3d3;]${ship.name.match(containsClan)[0]}]`);
  safeClans.includes(ship.name.match(containsClan)[0]) ? game.modding.terminal.echo(`[[g;#85ff97;] ⮡ Typically, this group does not engage in cheating and is unlikely to create any problems.]`) : game.modding.terminal.echo(`[[g;#ff6666;] ⮡  Be cautious of this clan as they have a reputation for being friendly towards cheaters.]`);
}

function wrap_ship(ship, game) {
  if (!ship.custom.wrap || game.step >= ship.custom.wrap) {
    ship.custom.wrap = game.step + gameOptions.delays.wrap_delay * 60;
    if (game.ships.length <= 1) {
      alert(ship, "You are the only player in this game.");
      return;
    } else if (!ship.custom.spectator) {
      spectator_ship(ship);
    } else if (game.ships.length > 1) {
      ship.custom.warpIndex = (ship.custom.warpIndex + 1) % game.ships.length;
      game.ships.indexOf(ship) === ship.custom.warpIndex ? (ship.custom.warpIndex = (ship.custom.warpIndex + 1) % game.ships.length) : undefined;
      ship.set({x: getCords(10, {cords: game.ships[ship.custom.warpIndex].x}), y: getCords(10, {cords: game.ships[ship.custom.warpIndex].y}), vx: 0, vy: 0});
      alert(ship, `You have been teleported to ${game.ships[ship.custom.warpIndex].name}`);
    }
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function next_ship_button(ship) {
  let index;
  let next_type;
  if (gameOptions.adminShip.includes(ship.type.toString())) {
    admin_ship(ship, true);
  } else if (ship.custom.spectator) {
    spectator_ship(ship);
  } else if (!ship.custom.next_switch || game.step >= ship.custom.next_switch) {
    ship.custom.next_switch = game.step + gameOptions.delays.switch_ship_delay * 60;
    index = gameOptions.shipCodes.indexOf(ship.type.toString());
    if (index >= 0) next_type = gameOptions.shipCodes[(index + 1) % gameOptions.shipCodes.length];
    ship.custom.last_ship = next_type;
    ship.set({
      type: next_type, collider: true, shield: 999,
      crystals: 20 * Math.trunc(next_type / 100) * Math.trunc(next_type / 100)
    });
    alert(ship, "", gameOptions.shipInformations.main[next_type].name, "rgb(55,255,55)");
    update_stats_button(ship);
    reset_afk_timer(ship);
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function previous_ship_button(ship) {
  let index;
  let previous_type;
  if (gameOptions.adminShip.includes(ship.type.toString())) {
    admin_ship(ship, true);
  } else if (ship.custom.spectator) {
    spectator_ship(ship);
  } else if (!ship.custom.next_switch || game.step >= ship.custom.next_switch) {
    ship.custom.next_switch = game.step + gameOptions.delays.switch_ship_delay * 60;
    if (ship.type.toString() === gameOptions.shipCodes[0]) previous_type = gameOptions.shipCodes[gameOptions.shipCodes.length - 1];
    else if (gameOptions.shipCodes.indexOf(ship.type.toString()) >= 0) previous_type = gameOptions.shipCodes[(gameOptions.shipCodes.indexOf(ship.type.toString()) - 1) % gameOptions.shipCodes.length];
    ship.custom.last_ship = previous_type;
    ship.set({
      type: previous_type, collider: true, shield: 999,
      crystals: 20 * Math.trunc(previous_type / 100) * Math.trunc(previous_type / 100)
    });
    alert(ship, "", gameOptions.shipInformations.main[previous_type].name, "rgb(55,255,55)");
    update_stats_button(ship);
    reset_afk_timer(ship);
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function spectator_ship(ship, rps=true) {
  if (!ship.custom.spectator_switch || game.step >= ship.custom.spectator_switch) {
    ship.custom.spectator_switch = game.step + gameOptions.delays.spectator_switch_delay * 60;
    if (gameOptions.adminShip.includes(ship.type.toString())) {
      admin_ship(ship, true);
    } else if (ship.custom.spectator) {
      if (ship.custom.isAFK) ship.custom.isAFK = false;
      ship.custom.spectator = false;
      ship.custom.afk_main = 1;
      if (ship.custom.last_ship.toString() === gameOptions.spectatorShip[0]) ship.custom.last_ship = gameOptions.shipCodes[0];
      alert(ship, "", gameOptions.shipInformations.main[ship.custom.last_ship].name, "rgb(55,255,55)");
      ship.set({
        type: ship.custom.last_ship, collider: true, shield: 999, stats: ship.custom.stats, vx: 0, vy: 0,
        crystals: 20 * Math.trunc(ship.custom.last_ship / 100) * Math.trunc(ship.custom.last_ship / 100)
      });
      ship.custom.lastlyUsedMore = false;
      update_stats_button(ship, false);
    } else {
      ship.custom.spectator = true;
      ship.custom.last_ship = rps ? ship.type : 605;
      ship.custom.stats =  rps ? ship.stats : 66666666;
      ship.custom.afk_main = 0;
      alert(ship, "", gameOptions.shipInformations.spectator[gameOptions.spectatorShip[0]].name, "rgb(255,155,55)");
      ship.set({
        type: gameOptions.spectatorShip[0], crystals: 0, stats: 0, shield: 999, collider: false
      });
    }
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function admin_ship(ship, off = false) {
  let next_type;
  let collider;
  if (ship.type.toString() === gameOptions.spectatorShip[0]) spectator_ship(ship);
  else {
    if (off === true) next_type = ship.custom.last_admin_ship;
    else {
      if (ship.type.toString() >= gameOptions.adminShip[0] && ship.type.toString() <= gameOptions.adminShip[1]) {
        if (ship.type.toString() === gameOptions.adminShip[1]) next_type = ship.custom.last_admin_ship;
        else next_type = (ship.type + 1).toString();
      } else {
        ship.custom.last_admin_ship = ship.type;
        next_type = gameOptions.adminShip[0];
      }
      if (ship.type.toString() === gameOptions.spectatorShip[0]) collider = true;
      if (ship.custom.last_admin_ship === gameOptions.spectatorShip[0]) collider = false;
    }
    if (next_type <= gameOptions.adminShip[1]) ship.custom.afk_main = 0;
    else ship.custom.afk_main = 1;
    (gameOptions.adminShip.includes(next_type)) ? alert(ship, "", gameOptions.shipInformations.admin[next_type].name, "rgb(255,55,55)") : alert(ship, "", gameOptions.shipInformations.main[next_type].name, "rgb(55,255,55)");
    ship.set({
      type: next_type, collider: collider, stats: (gameOptions.adminShip.includes(next_type.toString())) ? 0 : 11111111 * Math.trunc(next_type / 100),
      crystals: (gameOptions.adminShip.includes(next_type.toString())) ? 0 : 20 * Math.trunc(next_type / 100) * Math.trunc(next_type / 100)
    });
  }
}

function regen(ship) {
  if (ship.type.toString() === gameOptions.spectatorShip[0] || gameOptions.adminShip.includes(ship.type.toString())) {
    alert(ship, "You can't regenerate", "while using that ship");
    return;
  }
  let level = Math.trunc(ship.type / 100);
  if (!ship.custom.Regenerate || game.step >= ship.custom.Regenerate) {
    ship.custom.Regenerate = game.step + gameOptions.delays.Regenerate_delay * 60;
    let max_crystals = 20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100);
    ship.set({crystals: max_crystals, shield: 999});
  } else alert(ship, "Hold up! You're clicking too fast!");
};

function update_stats_button(ship, op_button = true, allow_stats = true, check_max = false) {
  if (check_max) ship.custom.keep_maxed = (ship.stats === 11111111 * Math.trunc(ship.type / 100)) ? true : false;
  if (allow_stats) ship.set({stats: ship.custom.keep_maxed ? 88888888 : 0});
  if (op_button) {
    Stats.components[1].value = ship.custom.keep_maxed ? "Stats [7]" : "⚠️ Stats [7]";
    ship.setUIComponent(Stats);
  }
}

function Stats_button(ship) {
  if (gameOptions.spectatorShip[0] === ship.type.toString() || gameOptions.adminShip.includes(ship.type.toString())) {
    alert(ship, "You can't interact with the stats", "while using that ship");
    return;
  }
  ship.custom.keep_maxed = ship.stats !== 11111111 * Math.trunc(ship.type / 100);
  update_stats_button(ship);
}


function Teleport_Center(ship) {
  if (!ship.custom.spawn || game.step >= ship.custom.spawn) {
    ship.custom.spawn = game.step + gameOptions.delays.spawn_zone_delay * 60;
    const posx = getCords(20, {cords: 0});
    const posy = getCords(20, {cords: 0});
    ship.set({ x: posx,  y: posy });
    alert(ship, "Teleported to", `x: ${posx}, y: ${posy}`, "rgb(55,255,55)");
  } else alert(ship, "Hold up! You're clicking too fast!");
}

// Exit Screen Commands
const gameComponents = [Stats, Wrap, Tp_Spawn, next_ship, previous_ship, more, Square];
const gameComponentsID = ["Tp_Spawn", "Square", "next_ship", "previous_ship", "Stats", "Wrap", "Box_Exit_screen", "More"];
function Exit_screen(ship, withMenu = true) {
  if (withMenu) {
    Menu_.components[0].fill = `rgba(255, 55, 55, ${gameOptions.anchorMenu.look.opacity})`;
    Menu_.components[0].stroke = "#FF0000";
    Menu_.components[1].value = "Open [0]";
    Menu_.position = [64.1, 0, 7.6, 4];
    ship.setUIComponent(Menu_);
  }
  gameComponentsID.forEach(id => ship.setUIComponent({ id, visible: false }));
}

function TP_points_button(ship) {
  let level = Math.trunc(ship.type / 100);
  let max_stats = 11111111 * level; 
  if (!ship.custom.TP_points || game.step >= ship.custom.TP_points) {
    ship.custom.TP_points = game.step + gameOptions.delays.TP_points_delay * 60;
    update_stats_button(ship, true, false, true);
    Menu_.components[0].fill = `rgba(200, 200, 200, ${gameOptions.anchorMenu.look.opacity})`;
    Menu_.components[0].stroke = "#FFFFFF";
    Menu_.components[1].value = "Close [0]";
    Menu_.position = [59+gameOptions.anchorMenu.anchor.x, 60+gameOptions.anchorMenu.anchor.y, 10, 5.5];
    ship.setUIComponent(Menu_);
    gameComponents.forEach(component => ship.setUIComponent(component));
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function update_Menu(ship) {ship.setUIComponent(Menu_);
  ship.custom.isOpen ? Exit_screen(ship) : TP_points_button(ship);
  ship.custom.isOpen = !ship.custom.isOpen;
}

// HideShow_Buttons Command
const gameMainComponents = [Regen, Spectate, Menu_];
const gameMainComponentsID = ["Regen", "Spectate", "Menu_", "APC"];
function Manage_Buttons(ship) {
  if (!ship.custom.Mb || game.step >= ship.custom.Mb) {
    ship.custom.Mb = game.step + gameOptions.delays.Mb_delay * 60;
    if (ship.custom.ButtonsShowed) {
      gameMainComponentsID.forEach(id => ship.setUIComponent({ id, visible: false }));
      Exit_screen(ship, false);
    } else {
      if (ship.custom.isOpen) update_Menu(ship);
      if (Menu_.position[0] === 59+gameOptions.anchorMenu.anchor.x && Menu_.position[1] === 60+gameOptions.anchorMenu.anchor.y && Menu_.position[2] === 10 && Menu_.position[3] === 5.5) Exit_screen(ship);
      gameMainComponents.forEach(component => ship.setUIComponent(component));
      setAPC(ship);
    }
    ship.custom.ButtonsShowed = !ship.custom.ButtonsShowed;
    HideShow_Buttons.components[0].value = ship.custom.ButtonsShowed ? "Show Buttons [2]" : "Hide Buttons [2]";
    ship.setUIComponent(HideShow_Buttons);
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function moreEvent(ship) {
  update_Menu(ship);
  const gameHost = game.findShip(Math.min(...game.ships.map(s => s.id)));
  if (gameOptions.spectatorShip[0] !== ship.type.toString() && !gameOptions.adminShip.includes(ship.type.toString())) spectator_ship(ship, true);
  ship.intermission({
    "Version":gameOptions.Version,
    "Authentication":gameOptions.Auth,
    "Game Developer":gameOptions.Creator,
    " ":" ",
    "Game Host": gameHost.name === ship.name ? "You" : gameHost.name,
    "Kills": ship.custom.Kills > 0 ? ship.custom.Kills : "None",
    "Deaths": ship.custom.Deaths > 0 ? ship.custom.Deaths : "None"
  });
}

this.event = function(event, game) {
  switch (event.name) {
    case "ui_component_clicked":
      if (event.id === "using_subspace" && gameOptions.Enable_antiCheat) {
        idle(game.ships.indexOf(event.ship), false);
        event.ship.gameover({
          "Subspace isn't allowed": "in Meg's Dueling"
        });
      } else if (!event.ship.custom.ISidle) {
        switch (event.id) {
          case "Menu_": update_Menu(event.ship); break;
          case "HideShow_Buttons": Manage_Buttons(event.ship); break;
          case "Regen": regen(event.ship); break;
          case "Spectate": spectator_ship(event.ship); break;
          case "Admin": admin_ship(event.ship); break;
          case "next_ship": next_ship_button(event.ship); break;
          case "previous_ship": previous_ship_button(event.ship); break;
          case "Stats": Stats_button(event.ship); break;
          case "Tp_Spawn": Teleport_Center(event.ship); break;
          case "Wrap": wrap_ship(event.ship, game); break;
          case "More": moreEvent(event.ship); break;
        }
      }
      break;
    case "ship_spawned":
      if (gameOptions.BannedList.includes(event.ship.name.replace(/[\[\]]/g, '|')) && !event.ship.custom) {
        idle(game.ships.indexOf(event.ship), false);
        event.ship.gameover({
          "You are banned from this game": "-",
          "reason":gameOptions.BannedListReasons[gameOptions.BannedList.indexOf(event.ship.name.replace(/[\[\]]/g, '|'))]
        });
        break;
      }
      if (!event.ship.custom.init) {
        if (!game.ships[0].custom.defaultAdmin) {
          game.ships[0].custom.defaultAdmin = true;
          game.ships[0].setUIComponent(Admin);
        }
        for (let i = 0; i<2; i++) update_Menu(event.ship);
        event.ship.custom = {
          init: true, ISidle: false, keep_maxed: true, ButtonsShowed: true, Deaths: 0, Kills: 0, warpIndex: 0, isOpen: false,
          ...event.ship.custom
        };
        for (const component of gameMainComponents) event.ship.setUIComponent(component);
        event.ship.setUIComponent(HideShow_Buttons);
        setAPC(event.ship);
        Teleport_Center(event.ship);
        spectator_ship(event.ship, false);
        newPlayerJoined(event.ship);
      } else {
        const {x = 0, y = 0} = event.ship.custom;
        if (!event.ship.custom.spectator) spectator_ship(event.ship);
        if (!event.ship.custom.ButtonsShowed) Manage_Buttons(event.ship);
        event.ship.set({
          x: getCords(20, {cords: x}),
          y: getCords(20, {cords: y})
        });
        if (gameOptions.BannedList.includes(event.ship.name.replace(/[\[\]]/g, '|'))) {
          setTimeout(() => {alert(event.ship, `Warning!`, "Your name matches with a banned player name.", "rgba(255,55,55,0.8)")}, 3500);
        }
      }
      break;
    case "ship_destroyed":
      if (event.ship) { event.ship.custom.Deaths++;
        Object.assign(event.ship.custom, {x: event.ship.x, y: event.ship.y, type: event.ship.type});
        if (event.killer) event.killer.custom.Kills++;
      }
      break;
    case "ship_disconnected":
      if (!gameOptions.BannedList.includes(event.ship.name.replace(/[\[\]]/g, '|'))) {
        if (event.ship.custom.ISidle && !event.ship.custom.hasBeenKicked) {
          event.ship.custom.hasBeenKicked = !event.ship.custom.hasBeenKicked;
          ban(game.ships.indexOf(event.ship), "left while in idle mode");
          return;
        }
        game.modding.terminal.echo(`\n[[g;#ff8770;]${event.ship.name.replace(/[\[\]]/g, '|')} just left the game.]`);
      }
      break;
  }
}

;(function(){
  var internals_init = function() {
    if (game.custom.shipDisconnected_init) return;
    const modding = game.modding;
    const internals = Object.values(modding).find(val => val && typeof val.shipDisconnected === "function");
    if (!internals) {
      modding.terminal.error(new Error("Failed to initialize 'ship_disconnected' event: modding internals object not found"));
      return;
    }
    if (!internals.shipDisconnected.old) {
      function shipDisconnected({id} = {}) {
        if (modding.context.event && id) var ship = game.findShip(id);
        var result = shipDisconnected.old.apply(this, arguments);
        if (ship) {
          try {
            modding.context.event({ name: "ship_disconnected", ship }, game);
          } catch (e) {}
        }
        return result;
      }
      shipDisconnected.old = internals.shipDisconnected;
      internals.shipDisconnected = shipDisconnected;
    }
    game.custom.shipDisconnected_init = true;
  }
  var tick = this.tick;
  this.tick = function() {
    this.tick = tick;
    try { internals_init() } catch(e){}
    return typeof this.tick == "function" && this.tick.apply(this, arguments);
  }
}).call(this);

// Commands
// Moderation commands

function getPlayerName(player) {
  const icon = (player.custom.admin || player.custom.defaultAdmin) ? "⚔️" : (player.name.includes(["Megalodon"])) ? "🦈" : "";
  return `${player.name.replace(/[\[\]]/g, '|')} ${icon}`;
}

game.modding.commands.info = function() {
  const totalPlayers = game.ships.length;
  const bannedPlayers = gameOptions.BannedList.length === 0 ? "None" : gameOptions.BannedList;
  game.modding.terminal.echo(`\n[[g;#85ff70;]Total amount of aliens:] [[g;#fffc70;]${game.aliens.length}]`);
  game.modding.terminal.echo(`[[g;#85ff70;]Total amount of asteroids:] [[g;#fffc70;]${game.asteroids.length}]`);
  game.modding.terminal.echo(`[[g;#85ff70;]Total amount of players:] [[g;#fffc70;]${totalPlayers}\n]`);
  game.modding.terminal.echo(`[[g;#ff7070;]Banned players: ${bannedPlayers}\n]`);
  game.modding.terminal.echo(`[[g;#70aeff;]⚔️ = Has admin permisions]`);
  game.modding.terminal.echo(`[[g;#70aeff;]🦈 = Megalodon :D]\n`);
  game.modding.terminal.echo("[[gu;#70aeff;]Player's and their index's:\n]");
  for (let i = 0; i < totalPlayers; i++) {
    const player = game.ships[i];
    const color = (player.custom.admin || player.custom.defaultAdmin) ? "#fffc70" : "#70e4ff";
    game.modding.terminal.echo(`[[g;${color};]Index: ${i}, Name: ${getPlayerName(player)}, Ship type: ${player.type}\nCoordinates: X: ${Math.round(player.x)}, Y: ${Math.round(player.y)}\n]`);
  }
};

idle = function(who, showMessage = true) {
  const ship = game.ships[who];
  if (ship.custom.ISidle) {
    modding.terminal.error(new Error(`${ship.name.replace(/[\[\]]/g, '|')} is already frozen.`));
    return;
  }
  ship.set({ idle: true });
  Exit_screen(ship);
  ship.custom.ISidle = true;
  if (ship.type !== 191) spectator_ship(ship);
  if (showMessage) game.modding.terminal.echo(`[[g;#70ffc1;]The player ${getPlayerName(ship)}, index ${who}, has been frozen.]\n❗INFO Type unidle() to unfreeze a player.`);
};

unidle = function(who) {
  const ship = game.ships[who];
  if (!ship.custom.ISidle) {
    modding.terminal.error(new Error("This player is not frozen."));
    return;
  }
  ship.set({ idle: false });
  ship.custom.ISidle = false;
  game.modding.terminal.echo(`[[g;#70ffc1;]The player ${getPlayerName(ship)}, index ${who}, has been unfrozen.]`);
};

kick = function(who, reason = "Disturbing duels") {
  const ship = game.ships[who];
  if (!game.ships.includes(ship)) {
    modding.terminal.error(new Error("\nThe index you used doesn't exist, try again with a valid index\n"));
    return;
  }
  game.ships.forEach(function(ship) {alert(ship, `Player: ${getPlayerName(ship)} has been kicked`, "", "rgba(255,155,55,0.8)")});
  idle(who, false);
  ship.custom.hasBeenKicked = true;
  ship.gameover({
    "You got kicked from the game" : "-",
    "Reason" : reason, 
    "Kills" : ship.custom.Kills, 
    "Deaths" : ship.custom.Deaths
  });
  game.modding.terminal.echo(`[[g;#70ffc1;]Player: ${getPlayerName(ship)}, index: ${who}, has been kicked\n]`);
};

ban = function(who, reason = "Disturbing duels") {
  const ship = game.ships[who];
  if (!ship) {
    game.modding.terminal.error(new Error("\nThe index you used doesn't exist, try again with a valid index\n"));
    return;
  }
  gameOptions.BannedList.push(ship.name.replace(/[\[\]]/g, '|'));
  gameOptions.BannedListReasons.push(reason);
  idle(who, false);
  ship.gameover({
    "You got banned from the game" : "-",
    "Reason" : reason, 
    "Kills" : ship.custom.Kills, 
    "Deaths" : ship.custom.Deaths
  });
  for (const otherShip of game.ships) {
    alert(otherShip, `Player: ${getPlayerName(ship)} has been banned.`, "", "rgba(255,55,55,0.8)");
    if (otherShip.name.replace(/[\[\]]/g, '|') == ship.name.replace(/[\[\]]/g, '|')) {
      setTimeout(() => {alert(otherShip, `Warning!`, "Your name matches with a banned player name.", "rgba(255,55,55,0.8)")}, 3500);
    }
  }
  game.modding.terminal.echo(`[[g;#70ffc1;]Player: ${getPlayerName(ship)}, index: ${who} has successfully been banned]\n\n❗INFO Type: banlist, to see all of the banned players.\n`);
};

game.modding.commands.banlist = function() {
  if (!gameOptions.BannedList.length > 0) {
    game.modding.terminal.error(new Error(`\nThere are no banned players in this game.\n`));
    return;
  }
  game.modding.terminal.echo(`[[g;#70aeff;]Banned player list:]\n\n[[g;#689bdd;]Banned Players Amount: ${gameOptions.BannedList.length}]\n`);
  gameOptions.BannedList.forEach((player, index) => {game.modding.terminal.echo(`[[g;#70e4ff;]Index: ${index}, Name: ${player}, Reason: ${gameOptions.BannedListReasons[index]}]`)});
  game.modding.terminal.echo(`\n❗INFO Type: unban(index), to unban a player.\n`);
};

unban = function(index) {
  if (!gameOptions.BannedList.includes(gameOptions.BannedList[index])) {
    modding.terminal.error(new Error("\n" + "You gave a wrong index or the player that you're trying to unban isn't banned or already got unbanned.\n"));
    return;
  }
  game.ships.forEach(ship => { alert(ship, `Player: ${gameOptions.BannedList[index]} has been unbanned.`, "", "rgba(55,255,55,0.8)")});
  game.modding.terminal.echo(`[[g;#70ffc1;]Player: ${gameOptions.BannedList[index]}, reason: ${gameOptions.BannedListReasons[index]} , Has successfully been unbanned]\n`);
  gameOptions.BannedListReasons.splice(index, 1);
  gameOptions.BannedList.splice(index, 1);
};

admin = function(who, duration = Infinity) {
  const ship = game.ships[who];
  clearTimeout(ship.custom.adm);
  if (ship.custom.admin) {
    ship.setUIComponent({id: "Admin", visible: false});
    if (gameOptions.adminShip.includes(ship.type)) admin_ship(ship, true);
    ship.custom.admin = false;
    game.modding.terminal.echo(`[[g;#ff8770;]Player: ${getPlayerName(ship)}, index: ${who} has had their admin commands removed]\n`);
  } else {
    if (duration !== Infinity) {
      ship.custom.adm = setTimeout(() => {
        if (gameOptions.adminShip.includes(ship.type)) admin_ship(ship, true);
        ship.setUIComponent({id: "Admin", visible: false});
        ship.custom.admin = false;
        game.modding.terminal.echo(`[[g;#ff8770;]Player: ${getPlayerName(ship)}, index: ${who} has lost their admin powers]\n`);
      }, duration * 1000);
    }
    ship.setUIComponent(Admin);
    ship.custom.admin = true;
    game.modding.terminal.echo(`[[g;#70ffc1;]Player: ${getPlayerName(ship)}, index: ${who}, Duration: ${duration} has been given the admin commands]\n`);
  }
};

// General commands
game.modding.commands.apc = function() {
  gameOptions.always_pickup_crystals = !gameOptions.always_pickup_crystals;
  game.ships.forEach(ship => {
    if (ship.custom.ButtonsShowed) setAPC(ship);
  });
  const status = gameOptions.always_pickup_crystals ? "ON" : "OFF";
  const color = gameOptions.always_pickup_crystals ? "#70ffc1" : "#ff8770";
  game.modding.terminal.echo(`[[g;${color};]Always Pickup Crystals feature is now ${status}\n]`);
};

set = function(who, what, max_crystals = 0, max_stats = 0) {
  const ship = game.ships[who];
  if (ship.custom.isAFK) {
    modding.terminal.error(new Error(`${getPlayerName(ship)} is AFK and cannot be switched to another ship.`));
    return;
  }
  if (!max_stats) max_stats = Math.trunc(what / 100) < 7 ? 11111111 * Math.trunc(what / 100) : 0;
  if (!max_crystals) max_crystals = 20 * Math.trunc(what / 100) ** 2;
  const collider = (what == gameOptions.spectatorShip[0]) ? false : (ship.type == gameOptions.spectatorShip[0] && what != gameOptions.spectatorShip[0]) ? true : true;
  ship.set({type: what, crystals: max_crystals, stats: max_stats, shield: 999, collider: collider});
  game.modding.terminal.echo(`[[g;#70ffc1;]Player ${getPlayerName(ship)} (index: ${who}) has been given:\nShip Type: ${what}, Crystals: ${max_crystals}, Stats: ${max_stats}\n]`);
}

// Announce command
say = function(text = "", duration = 4) {
  game.ships.forEach(ship => {
    clearTimeout(ship.custom.gameAnnouncement);
    ship.setUIComponent({
      id: "announceText",
      position: [20, 75, 50, 25],
      clickable: false,
      visible: true,
      components: [
        {type: "text",position: [0, 0, 100, 20],color: "#FFFFFF",value: text}
      ]
    });
    ship.custom.gameAnnouncement = setTimeout(() => {
      ship.setUIComponent({
        id: "announceText",
        visible: false
      });
    }, duration * 1000);
  });
  game.modding.terminal.echo(`[[g;#70ffc1;]Text: ${text} applied]\n`);
}
