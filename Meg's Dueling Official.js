const mod_version =
"v1.3.6";

/*
 |  Mod creator : Megalodon
 |  Coding support : Lotus, Bhpsngum

What has been fixed/added from v1.3.5: 
  - Removed 3 commands:
    - tpall / tpto / tp
  - Created 1 new command:
    - Admin command (allows you to give the admin power to a play ingame)
  - You can now choose how many players will have the admin permission when entering the game.
  - More optimiaztion.
  - Created new function and Optimized Old function.
  - Overall mod works better
  - Admin ships reworked
  - You will now always see yourself on the leaderboard
  - No more issues on the stats button!

See the documentation on the github page for more information about the mod and his integrated commands.
link : https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/README.md
*/

// Ship Codes
const Ship_Codes = [101, 201, 202, 301, 302, 303, 304, 401, 402, 403, 404, 405, 406, 501, 502, 503, 504, 505, 506, 507, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615];
const spectator_ship_code = 191;
const admin_ship_codes = [192, 193];

// Delays (in seconds)
const spawn_zone_delay = 2;
const switch_ship_delay = 0.25;
const spectator_switch_delay = 2;
const TP_points_delay = 2;
const Regenerate_delay = 4;
const Stats_delay = 0.5;
const wrap_delay = 0.25;
const Mb_delay = 2;

// AFK settings
const Enable_AFK = true; // allow AFK | true / false
const AFK_speed = 10e-2;
const AFK_rotation = 0.3;
const AFK_Pretime = 10;
const AFK_Cooldown = 20;

// Other
var admin_number = 1; // from 1 to infinity
var always_pickup_gems = true; // always pickup gems | true / false
var BannedList = [];
var BannedListReasons = [];

// Admin
const Spectator_191 = '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}';
const AdminToolPrecision_192 = '{"name":"AdminToolPrecision","level":1.9,"model":2,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"bodies":{"object0":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17,4],"angle":0,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}}},"typespec":{"name":"AdminToolPrecision","level":1.9,"model":2,"code":192,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"shape":[0.802,0.803,0.375,0.227,0.16,0.126,0.107,0.095,0.085,0.078,0.075,0.072,0.071,0.071,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.071,0.072,0.075,0.078,0.085,0.095,0.107,0.126,0.16,0.227,0.375,0.803],"lasers":[{"x":0,"y":-0.8,"z":0,"angle":0,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":0.803}}';
const Admin_Ship_General_193 = '{"name":"Admin_Ship_General","level":1.9,"model":3,"size":1.2,"zoom":0.5,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"bodies":{"Body1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":5,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":10,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":15,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":20,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":25,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":30,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body7":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":35,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body8":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":40,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body9":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":45,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body10":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":50,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body11":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":55,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body12":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":60,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body13":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":65,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body14":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":70,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body15":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":75,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body16":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":80,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body17":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":85,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body18":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":90,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body19":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":95,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body20":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":100,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body21":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":105,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body22":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":110,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body23":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":115,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body24":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":120,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body25":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":125,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body26":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":130,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body27":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":135,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body28":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":140,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body29":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":145,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body30":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":150,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body31":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":155,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body32":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":160,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body33":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":165,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body34":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":170,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body35":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":175,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body36":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":180,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body37":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":185,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body38":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":190,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body39":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":195,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body40":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":200,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body41":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":205,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body42":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":210,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body43":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":215,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body44":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":220,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body45":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":225,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body46":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":230,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body47":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":235,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body48":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":240,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body49":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":245,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body50":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":250,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body51":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":255,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body52":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":260,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body53":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":265,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body54":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":270,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body55":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":275,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body56":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":280,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body57":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":285,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body58":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":290,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body59":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":295,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body60":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":300,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body61":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":305,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body62":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":310,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body63":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":315,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body64":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":320,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body65":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":325,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body66":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":330,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body67":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":335,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body68":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":340,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body69":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":345,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body70":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":350,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body71":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":355,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}},"Body72":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[17,4],"angle":360,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}}},"typespec":{"name":"Admin_Ship_General","level":1.9,"model":3,"code":193,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"shape":[0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961,0.961],"lasers":[{"x":-0.084,"y":-0.956,"z":0,"angle":5,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.167,"y":-0.945,"z":0,"angle":10,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.248,"y":-0.927,"z":0,"angle":15,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.328,"y":-0.902,"z":0,"angle":20,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.406,"y":-0.87,"z":0,"angle":25,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.48,"y":-0.831,"z":0,"angle":30,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.551,"y":-0.786,"z":0,"angle":35,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.617,"y":-0.735,"z":0,"angle":40,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.679,"y":-0.679,"z":0,"angle":45,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.735,"y":-0.617,"z":0,"angle":50,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.786,"y":-0.551,"z":0,"angle":55,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.831,"y":-0.48,"z":0,"angle":60,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.87,"y":-0.406,"z":0,"angle":65,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.902,"y":-0.328,"z":0,"angle":70,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.927,"y":-0.248,"z":0,"angle":75,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.945,"y":-0.167,"z":0,"angle":80,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.956,"y":-0.084,"z":0,"angle":85,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":0,"z":0,"angle":90,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.956,"y":0.084,"z":0,"angle":95,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.945,"y":0.167,"z":0,"angle":100,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.927,"y":0.248,"z":0,"angle":105,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.902,"y":0.328,"z":0,"angle":110,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.87,"y":0.406,"z":0,"angle":115,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.831,"y":0.48,"z":0,"angle":120,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.786,"y":0.551,"z":0,"angle":125,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.735,"y":0.617,"z":0,"angle":130,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.679,"y":0.679,"z":0,"angle":135,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.617,"y":0.735,"z":0,"angle":140,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.551,"y":0.786,"z":0,"angle":145,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.48,"y":0.831,"z":0,"angle":150,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.406,"y":0.87,"z":0,"angle":155,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.328,"y":0.902,"z":0,"angle":160,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.248,"y":0.927,"z":0,"angle":165,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.167,"y":0.945,"z":0,"angle":170,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.084,"y":0.956,"z":0,"angle":175,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0.96,"z":0,"angle":180,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.084,"y":0.956,"z":0,"angle":185,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.167,"y":0.945,"z":0,"angle":190,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.248,"y":0.927,"z":0,"angle":195,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.328,"y":0.902,"z":0,"angle":200,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.406,"y":0.87,"z":0,"angle":205,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.48,"y":0.831,"z":0,"angle":210,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.551,"y":0.786,"z":0,"angle":215,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.617,"y":0.735,"z":0,"angle":220,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.679,"y":0.679,"z":0,"angle":225,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.735,"y":0.617,"z":0,"angle":230,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.786,"y":0.551,"z":0,"angle":235,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.831,"y":0.48,"z":0,"angle":240,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.87,"y":0.406,"z":0,"angle":245,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.902,"y":0.328,"z":0,"angle":250,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.927,"y":0.248,"z":0,"angle":255,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.945,"y":0.167,"z":0,"angle":260,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.956,"y":0.084,"z":0,"angle":265,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.96,"y":0,"z":0,"angle":270,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.956,"y":-0.084,"z":0,"angle":275,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.945,"y":-0.167,"z":0,"angle":280,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.927,"y":-0.248,"z":0,"angle":285,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.902,"y":-0.328,"z":0,"angle":290,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.87,"y":-0.406,"z":0,"angle":295,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.831,"y":-0.48,"z":0,"angle":300,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.786,"y":-0.551,"z":0,"angle":305,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.735,"y":-0.617,"z":0,"angle":310,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.679,"y":-0.679,"z":0,"angle":315,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.617,"y":-0.735,"z":0,"angle":320,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.551,"y":-0.786,"z":0,"angle":325,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.48,"y":-0.831,"z":0,"angle":330,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.406,"y":-0.87,"z":0,"angle":335,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.328,"y":-0.902,"z":0,"angle":340,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.248,"y":-0.927,"z":0,"angle":345,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.167,"y":-0.945,"z":0,"angle":350,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.084,"y":-0.956,"z":0,"angle":355,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-0.96,"z":0,"angle":360,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":0.961}}';

const ships = [
  // Admins
  Spectator_191,
  AdminToolPrecision_192,
  Admin_Ship_General_193,
  // Dueling ship
    // Vanilla ships
  O_Defender_607 = '{"name":"O-Defender","level":6,"model":7,"size":2.2,"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-88,0,90,91],"z":[0,0,0,0,0]},"width":[5,6,25,10,20],"height":[2,10,40,20,20],"texture":[63,1,10],"propeller":true,"laser":{"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"angle":0,"error":0}},"side":{"section_segments":10,"offset":{"x":50,"y":0,"z":0},"position":{"x":[-40,-5,15,25,20,0,-50],"y":[-100,-70,-40,-10,20,50,90],"z":[0,0,0,0,0,0,0]},"width":[5,20,20,20,20,20,5],"height":[15,25,30,30,30,25,0],"texture":[0,1,2,3,4,63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":18},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,5,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"top_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]},"bottom_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":-10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[80,0],"width":[130,50],"angle":[-1],"position":[0,-30],"texture":[8],"bump":{"position":-20,"size":15}}},"typespec":{"name":"O-Defender","level":6,"model":8,"code":608,"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"shape":[4.409,4.448,4.372,4.204,4.119,4.136,4.174,4.107,4.066,4.094,4.073,4.141,4.16,4.062,4.015,3.966,3.83,3.76,3.742,3.591,3.502,3.494,3.575,4.291,4.422,4.409,4.422,4.291,3.575,3.494,3.502,3.591,3.742,3.76,3.83,3.966,4.015,4.062,4.16,4.141,4.073,4.094,4.066,4.107,4.174,4.136,4.119,4.204,4.372,4.448],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.448}}',
  Payload_608 = '{"name":"Payload","level":6,"model":8,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[150,230],"reload":[45,70]},"ship":{"mass":200,"speed":[85,120],"rotation":[40,60],"acceleration":[45,65]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-70,-50,-40,0,40,50,80,85],"z":[-5,-5,-3,0,0,0,10,10,10]},"width":[4,11,14,8,10,10,12,10,0],"height":[0,5,6,8,12,10,8,9,0],"texture":[63,4,4,3,3,13,2,13],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-55,"z":12},"position":{"x":[0,0,0,0],"y":[-20,0,10],"z":[-4,0,6]},"width":[5,10,5],"height":[0,7,0],"texture":[9]},"uwings":{"section_segments":8,"offset":{"x":25,"y":10,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-44,-43,-45,-40,10,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,6,8,10,12,10,14,12,0],"height":[0,8,10,12,14,12,16,12,0],"texture":[13,13,4,3,4,3,4,13],"propeller":true},"main_cannon":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,-20,-10,0,20,50,55],"z":[-10,-10,-10,-10,0,0,0]},"width":[0,8,12,10,15,12,0],"height":[0,5,10,10,10,8,0],"angle":0,"laser":{"damage":[110,190],"rate":1,"type":2,"speed":[70,90],"recoil":750,"number":1},"propeller":false,"texture":[111,4,63,3,4,13]},"side_cannons":{"section_segments":10,"offset":{"x":70,"y":20,"z":-10},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-55,-10,0,20,35,30],"z":[0,0,0,0,0,0,0,0]},"width":[0,3,7,12,10,5,0],"height":[0,3,5,7,5,3,0],"laser":{"damage":[6,12],"rate":7.5,"type":1,"speed":[40,80],"number":1,"error":20},"propeller":true,"texture":[13,3,4,63,4,13]}},"wings":{"main":{"length":[50,25,20,10,10,16,2,2],"width":[60,60,50,50,55,60,5,60,0],"angle":[-10,-10,-10,-10,-10,-10,-10,-10],"position":[-10,10,5,-5,-20,-35,-30,-40,-30],"doubleside":true,"offset":{"x":0,"y":10,"z":10},"bump":{"position":0,"size":10},"texture":[4,8,3,63,4,3,63,63]},"winglets":{"length":[30,10],"width":[30,20,0],"angle":[15,10],"position":[0,10,35],"doubleside":true,"offset":{"x":5,"y":60,"z":20},"bump":{"position":0,"size":10},"texture":[4,63]}},"typespec":{"name":"Payload","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[150,230],"reload":[45,70]},"ship":{"mass":200,"speed":[85,120],"rotation":[40,60],"acceleration":[45,65]}},"shape":[2.403,2.354,1.869,0.835,1.243,1.362,1.443,1.406,1.303,4.322,4.239,4.094,4.009,3.929,3.222,3.018,2.765,2.778,2.784,2.14,2.086,2.988,3.139,2.474,2.472,2.55,2.472,2.474,3.139,2.988,2.086,2.14,2.784,2.778,2.765,3.018,3.222,3.502,4.009,4.094,4.239,4.322,1.303,1.406,1.443,1.362,1.243,0.835,1.869,2.354],"lasers":[{"x":0,"y":-0.6,"z":0,"angle":0,"damage":[110,190],"rate":1,"type":2,"speed":[70,90],"number":1,"spread":0,"error":0,"recoil":750},{"x":2.1,"y":-1.05,"z":-0.3,"angle":0,"damage":[6,12],"rate":7.5,"type":1,"speed":[40,80],"number":1,"spread":0,"error":20,"recoil":0},{"x":-2.1,"y":-1.05,"z":-0.3,"angle":0,"damage":[6,12],"rate":7.5,"type":1,"speed":[40,80],"number":1,"spread":0,"error":20,"recoil":0}],"radius":4.322}}',
  H_Mercury_609 = '{"name":"H-Mercury","level":6,"model":9,"size":2.2,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":275,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[4,7],"rate":8,"type":1,"speed":[100,150],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":275,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"shape":[3.086,3.088,2.59,2.24,2.004,4.566,4.489,4.168,3.955,3.818,3.747,4.587,4.622,4.713,4.854,4.959,5.317,5.372,4.412,4.987,5.408,5.207,3.941,3.8,4.86,4.849,4.86,3.8,3.941,5.207,5.408,4.987,4.412,5.372,5.317,4.959,4.854,4.713,4.622,4.587,3.747,3.818,3.955,4.168,4.489,4.566,2.004,2.24,2.59,3.088],"lasers":[{"x":0,"y":-3.08,"z":0.88,"angle":0,"damage":[4,7],"rate":8,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.575,"y":-3.739,"z":-0.44,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.575,"y":-3.739,"z":-0.44,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":4.285,"y":-1.009,"z":0.22,"angle":3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.285,"y":-1.009,"z":0.22,"angle":-3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.408}}',
    // SDC
  Vampire_610 = '{"name":"Vampire","designer":"nex","level":6,"model":10,"size":1.5,"specs":{"shield":{"capacity":[230,275],"reload":[6,9]},"generator":{"capacity":[190,225],"reload":[35,50]},"ship":{"mass":170,"speed":[120,130],"rotation":[90,90],"acceleration":[120,120]}},"bodies":{"main_DOESNOTSHOOT":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-35,-45,-15,10,30,45,70,100,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,15,25,15,15,25,20,0],"height":[0,6,13,17,13,13,17,13,0],"texture":[3,11,1,63,4,3,8,17],"propeller":true},"boris":{"section_segments":8,"offset":{"x":20,"y":30,"z":-5},"position":{"x":[0,0,-1,0,0,0,10,0,0],"y":[-105,-97,-80,-60,-20,0,20,50,40],"z":[-6.6,-10,-10,-10,0,0,0,0,0]},"width":[0,7,10,10,8,14,15,15,0],"height":[0,6,8,12,8,13,13,13,0],"texture":[6,4,1,10,8,4,13,17],"propeller":false,"angle":5,"laser":{"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"error":25,"angle":0,"recoil":15}},"propeller":{"section_segments":8,"offset":{"x":24,"y":25,"z":-5},"position":{"x":[0,0],"y":[41,40],"z":[0,0]},"width":[15,0],"height":[11,0],"texture":[69],"propeller":true,"angle":5},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-1,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-25,-5,20,30,20],"z":[0,0,0,3,0,0]},"width":[0,9,12,17,10,0],"height":[0,8,12,14,13,0],"texture":[3,9,9,4],"propeller":false}},"wings":{"holy_moly_its_goku":{"offset":{"x":29,"y":44,"z":0},"length":[25,30],"width":[60,35,20],"angle":[-30,-20],"position":[0,10,25],"texture":[11,4],"doubleside":true,"bump":{"position":0,"size":10}},"what_no_way":{"offset":{"x":5,"y":45,"z":0},"length":[30,30],"width":[60,35,20],"angle":[30,20],"position":[0,15,35],"texture":[11,4],"doubleside":true,"bump":{"position":0,"size":10}},"teeth":{"offset":{"x":8,"y":-60,"z":-19},"length":[10,-10,25],"width":[15,15,55,25],"angle":[-30,-30,-20],"position":[10,3,-20,10],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}},"backteeth":{"offset":{"x":33,"y":60,"z":-10},"length":[30,-10,30],"width":[25,15,55,20],"angle":[-28,-20,-30],"position":[-20,-30,-40,-10],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}},"somanyteeth":{"offset":{"x":15,"y":10,"z":-5},"length":[10,-10,25],"width":[15,15,55,20],"angle":[30,30,50],"position":[-10,-20,-30,0],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}}},"typespec":{"name":"Vampire","level":6,"model":20,"code":620,"specs":{"shield":{"capacity":[230,275],"reload":[6,9]},"generator":{"capacity":[190,225],"reload":[35,50]},"ship":{"mass":170,"speed":[120,130],"rotation":[90,90],"acceleration":[120,120]}},"shape":[1.829,3.234,2.747,2.384,2.136,1.76,1.481,1.028,0.933,0.896,0.885,1.531,1.62,1.758,1.943,2.226,2.604,2.82,3.244,3.348,3.231,3.146,2.667,3.059,3.054,3.006,3.054,3.059,2.667,3.146,3.231,3.348,3.244,2.82,2.604,2.226,1.943,1.758,1.62,1.531,0.885,0.896,0.933,1.028,1.481,1.76,2.136,2.384,2.747,3.234],"lasers":[{"x":0.325,"y":-2.238,"z":-0.15,"angle":5,"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"spread":0,"error":25,"recoil":15},{"x":-0.325,"y":-2.238,"z":-0.15,"angle":-5,"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"spread":0,"error":25,"recoil":15}],"radius":3.348}}',
  Mk47_611 = '{"name":"Mk47","level":6,"model":11,"size":1.52,"specs":{"shield":{"capacity":[200,250],"reload":[8,10]},"generator":{"capacity":[105,170],"reload":[30,50]},"ship":{"mass":150,"speed":[70,160],"rotation":[60,75],"acceleration":[100,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-10,"z":-2},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-65,-75,-55,-40,-5,0,30,35,70,65],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,14,18,20,23,20,20,20,0],"height":[0,5,10,11,11,11,10,12,6,0],"texture":[6,4,2,11,5,10,5,18,17],"propeller":true,"laser":{"damage":[6,10],"rate":10,"type":2,"speed":[170,200],"recoil":0,"number":1,"error":2}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-80,"z":8},"position":{"x":[0,0,0,0,0,0],"y":[15,35,60,85,90],"z":[-1,-2,-1,-4,0]},"width":[0,8,10,6,0],"height":[0,8,10,10,0],"texture":[8.98,8.98,4]},"intake":{"section_segments":12,"angle":0,"offset":{"x":15,"y":5,"z":-2},"position":{"x":[6,6,6,-4,0,0,0,0],"y":[-25,-30,-5,30,45,65,60],"z":[-2,-2,-2,0,0,0,0,0]},"width":[0,5,10,10,13,8,0],"height":[0,6,11,12,12,8,0],"texture":[6,4,63,4,63,17],"propeller":1,"laser":{"damage":[6,8],"angle":2,"rate":4,"type":2,"speed":[140,180],"recoil":0,"number":1,"error":5}}},"wings":{"main":{"length":[10,30,20],"width":[0,55,40,20],"angle":[0,-20,0],"position":[20,20,40,15],"texture":[3,11,63],"doubleside":true,"bump":{"position":10,"size":15},"offset":{"x":0,"y":15,"z":1}},"font":{"length":[25],"width":[30,10],"angle":[-10],"position":[0,15],"texture":[63],"doubleside":true,"bump":{"position":10,"size":15},"offset":{"x":5,"y":-65,"z":-7}}},"typespec":{"name":"Mk47","level":6,"model":19,"code":619,"specs":{"shield":{"capacity":[200,250],"reload":[8,10]},"generator":{"capacity":[105,170],"reload":[30,50]},"ship":{"mass":150,"speed":[70,160],"rotation":[60,75],"acceleration":[100,140]}},"shape":[2.589,2.59,2.205,2.04,1.933,1.679,1.097,1.088,1.015,0.968,0.939,0.926,0.941,0.942,0.916,1.902,2.016,2.151,2.199,2.285,2.415,2.559,2.465,2.237,2.166,1.827,2.166,2.237,2.465,2.559,2.415,2.285,2.199,2.151,2.016,1.902,0.916,0.939,0.942,0.926,0.939,0.968,1.015,1.088,1.097,1.679,1.933,2.04,2.205,2.59],"lasers":[{"x":0,"y":-2.584,"z":-0.061,"angle":0,"damage":[6,10],"rate":10,"type":2,"speed":[170,200],"number":1,"spread":0,"error":2,"recoil":0},{"x":0.638,"y":-0.76,"z":-0.061,"angle":0,"damage":[6,8],"rate":4,"type":2,"speed":[140,180],"number":1,"spread":2,"error":5,"recoil":0},{"x":-0.638,"y":-0.76,"z":-0.061,"angle":0,"damage":[6,8],"rate":4,"type":2,"speed":[140,180],"number":1,"spread":2,"error":5,"recoil":0}],"radius":2.59}}',
  Phantom_612 = '{"name":"Phantom","level":6,"model":12,"size":1.55,"zoom":0.8,"specs":{"shield":{"capacity":[130,190],"reload":[8,10]},"generator":{"capacity":[140,210],"reload":[30,43]},"ship":{"mass":150,"speed":[110,140],"rotation":[40,62],"acceleration":[130,150]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-70,-60,-30,0,20,55,75,95,85],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,14,17,14,18,14,10,0],"height":[0,5,10,13,15,15,10,8,0],"texture":[1,3,4,3,8,4,8,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-65,"z":7},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-5,0,20,40,50,70,85],"z":[-7,-5,0,0,3,4,3,5]},"width":[0,5,8,9,9,6,0],"height":[0,8,10,8,8,8,0],"texture":[3,9,9,2,3,4,3,2]},"cannons":{"section_segments":8,"offset":{"x":30,"y":45,"z":-15},"position":{"x":[0,0,0,0,-10,-25],"y":[-75,-70,-53,-25,-10,0],"z":[0,0,0,0,0,0]},"width":[0,5,6,8,10,0],"height":[0,3,5,6,8,0],"angle":1,"laser":{"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1},"propeller":0,"texture":[6,3,3,3,1,3,1,3,1,3]},"cannons2":{"section_segments":8,"offset":{"x":25,"y":33,"z":-15},"position":{"x":[0,0,0,0,-10,-25],"y":[-75,-70,-53,-25,-10,0],"z":[0,0,0,0,0,0]},"width":[0,5,6,8,10,0],"height":[0,3,5,6,8,0],"angle":1,"laser":{"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1},"propeller":0,"texture":[6,3,3,3,1,3,1,3,1,3]},"body":{"section_segments":8,"offset":{"x":20,"y":0,"z":-5},"position":{"x":[-5,-3,0,0,0,0,-3,-5],"y":[-25,-20,-10,0,20,40,60,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,10,12,10,12,8,0],"height":[0,4,6,8,9,10,10,0],"texture":[1,3,1,3,4,4,17],"propeller":true}},"wings":{"w":{"offset":{"x":-3,"y":40,"z":0},"length":[12,8,20,10],"width":[90,40,80,70,85],"angle":[10,-15,-10,0],"position":[-30,-60,-60,-10,15],"texture":[4,63,4,63],"bump":{"position":10,"size":10}},"plswork":{"doubleside":true,"offset":{"x":5,"y":-25,"z":4},"length":[20,40],"width":[60,35,15],"angle":[15,-20],"position":[0,45,80],"texture":[63,4],"bump":{"position":10,"size":5}},"top":{"doubleside":true,"offset":{"x":10,"y":30,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}}},"typespec":{"name":"Phantom","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[130,190],"reload":[8,10]},"generator":{"capacity":[140,210],"reload":[30,43]},"ship":{"mass":150,"speed":[110,140],"rotation":[40,62],"acceleration":[130,150]}},"shape":[2.635,2.448,1.929,1.813,1.568,1.476,1.405,1.304,1.296,1.211,1.155,1.139,1.21,1.313,1.463,1.534,1.633,2.154,2.63,2.727,2.675,3.335,2.501,3.045,2.499,2.485,2.499,3.045,2.501,3.335,2.675,2.727,2.63,2.154,1.633,1.534,1.463,1.313,1.21,1.139,1.155,1.211,1.296,1.304,1.405,1.476,1.568,1.813,1.929,2.448],"lasers":[{"x":0.889,"y":-0.93,"z":-0.465,"angle":1,"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.889,"y":-0.93,"z":-0.465,"angle":-1,"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.734,"y":-1.302,"z":-0.465,"angle":1,"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.734,"y":-1.302,"z":-0.465,"angle":-1,"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.335}}',
    // SDC first version
  Contraband_613 = '{"name":"Contraband","level":6,"model":13,"size":1.6,"zoom":0.85,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-80,-20,0,15,20,60,65,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,24,26,20,20,20,20,25,12,0],"height":[0,5,25,25,20,15,15,15,20,10,0],"texture":[1,2,4,63,5,10,5,63,4,17],"propeller":true,"laser":{"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"recoil":250,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-55,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,5,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"cannons":{"section_segments":12,"offset":{"x":18,"y":65,"z":20},"position":{"x":[0,0,0,0,0],"y":[-50,-45,-20,-5,5],"z":[0,0,0,0,0]},"width":[0,5,7,8,0],"height":[0,5,7,8,0],"angle":0,"laser":{"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,63,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[37,0],"width":[20,70],"angle":[0],"position":[-95,0],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":25,"y":52,"z":0},"length":[35],"width":[10,10],"angle":[0],"position":[0,0,0,50],"texture":[8],"doubleside":1,"bump":{"position":0,"size":0}},"wing1":{"doubleside":true,"offset":{"x":50,"y":52,"z":-36},"length":[0,30,20,30],"width":[0,0,100,100,0],"angle":[110,70,90,110],"position":[0,0,0,0,0],"texture":[63],"bump":{"position":0,"size":5}}},"typespec":{"name":"Contraband","level":6,"model":15,"code":615,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"shape":[2.72,2.573,2.079,1.758,1.578,1.455,1.368,1.312,1.283,1.278,1.269,1.222,1.193,1.961,2.033,2.148,2.313,2.561,2.818,3.145,3.625,3.791,3.803,3.701,3.223,3.206,3.223,3.701,3.803,3.791,3.625,3.145,2.818,2.561,2.313,2.148,2.033,1.961,1.193,1.222,1.269,1.278,1.283,1.312,1.368,1.455,1.578,1.758,2.079,2.573],"lasers":[{"x":0,"y":-2.56,"z":0,"angle":0,"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"number":1,"spread":0,"error":0,"recoil":250},{"x":0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.803}}',
  C_Speedster_614 = '{"name":"C-Speedster","level":6,"model":14,"size":1.4,"specs":{"shield":{"capacity":[150,250],"reload":[8,10]},"generator":{"capacity":[150,200],"reload":[20,35]},"ship":{"mass":155,"speed":[100,125],"rotation":[55,75],"acceleration":[95,145]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-85,-80,-50,0,0,70,65],"z":[0,0,0,0,0,0,0]},"width":[0,10,21,28,20,20,0],"height":[0,7,16,25,20,15,0],"texture":[63,4,11,5,18,12],"propeller":true,"laser":{"damage":[25,65],"rate":3,"type":1,"speed":[160,200],"number":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-50,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,8,10,10,0],"height":[0,10,12,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"tops":{"section_segments":12,"offset":{"x":15,"y":45,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-45,-40,-25,0,15,40,35],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,13,11,6,0],"height":[0,5,9,8,6,5,0],"propeller":1,"angle":0,"texture":[5,4,10,63,4,17]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"join1":{"offset":{"x":0,"y":20,"z":0},"length":[37],"width":[20,70],"angle":[0],"position":[-95,-10],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":0,"y":50,"z":0},"length":[30],"width":[20,70],"angle":[0],"position":[-95,-10],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}}},"typespec":{"name":"C-Speedster","level":6,"model":14,"code":614,"specs":{"shield":{"capacity":[150,250],"reload":[8,10]},"generator":{"capacity":[150,200],"reload":[20,35]},"ship":{"mass":155,"speed":[100,125],"rotation":[55,75],"acceleration":[95,145]}},"shape":[2.38,2.312,2.007,1.668,1.485,1.388,1.314,1.274,1.253,1.179,1.113,1.066,1.042,1.043,1.487,1.656,1.757,1.903,1.92,2.239,2.689,3.102,3.328,3.238,2.423,1.964,2.423,3.238,3.328,3.102,2.689,2.239,1.92,1.903,1.757,1.656,1.487,1.043,1.042,1.066,1.113,1.179,1.253,1.274,1.314,1.388,1.485,1.668,2.007,2.312],"lasers":[{"x":0,"y":-2.38,"z":0,"angle":0,"damage":[25,65],"rate":3,"type":1,"speed":[160,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.328}}',
  B_Speedster_615 = '{"name":"B-Speedster","level":6,"model":15,"size":1.6,"specs":{"shield":{"capacity":[250,350],"reload":[8,10]},"generator":{"capacity":[90,150],"reload":[25,40]},"ship":{"mass":210,"speed":[90,100],"rotation":[50,70],"acceleration":[100,130]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-95,0,0,60,85,75],"z":[0,0,0,0,0,0,0]},"width":[0,10,40,20,22,15,0],"height":[0,5,30,30,20,15,0],"texture":[6,18,5,11,15,17],"propeller":true,"laser":{"damage":[48,94],"rate":1,"type":2,"speed":[185,240],"recoil":70,"number":1,"error":0}},"core":{"vertical":true,"angle":180,"section_segments":[30,90,150,210,270,330],"offset":{"x":0,"y":-5,"z":-40},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-40,-43,-40,-30,0,0],"z":[0,0,0,0,0,0,0]},"width":[1,13,18,23,30,30,0],"height":[1,13,18,23,30,30,0],"texture":[16.9,4.9,63,3.9,9.9,0.9,11.9]},"ye":{"vertical":true,"section_segments":12,"offset":{"x":0,"y":38,"z":-40},"position":{"x":[0,0,0],"y":[-10,-3,-1],"z":[0,0,0]},"width":[0,5,0],"height":[0,5,0],"texture":[5]},"shield":{"section_segments":12,"offset":{"x":30,"y":-40,"z":0},"position":{"x":[-6,0,0,0,0,-4],"y":[-70,-60,-10,15,30,40],"z":[0,0,0,0,0,0]},"width":[0,3,3,3,3,0],"height":[0,5,5,8,3,0],"texture":63,"angle":16},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,17]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":0,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}}},"typespec":{"name":"B-Speedster","level":6,"model":13,"code":613,"specs":{"shield":{"capacity":[250,350],"reload":[8,10]},"generator":{"capacity":[90,150],"reload":[25,40]},"ship":{"mass":210,"speed":[90,100],"rotation":[50,70],"acceleration":[100,130]}},"shape":[3.384,3.353,3.037,2.443,2.076,1.832,1.659,1.541,1.458,1.406,1.378,1.341,1.248,1.801,2.197,2.375,2.52,2.637,3.021,3.288,3.665,3.862,3.713,2.623,2.758,2.725,2.758,2.623,3.713,3.862,3.665,3.288,3.021,2.637,2.52,2.375,2.197,1.801,1.248,1.341,1.378,1.406,1.458,1.541,1.659,1.832,2.076,2.443,3.037,3.353],"lasers":[{"x":0,"y":-3.2,"z":0,"angle":0,"damage":[48,94],"rate":1,"type":2,"speed":[185,240],"number":1,"spread":0,"error":0,"recoil":70},{"x":0.96,"y":-0.32,"z":0.96,"angle":0,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-0.96,"y":-0.32,"z":0.96,"angle":0,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.862}}',
];

const vocabulary = [
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
  {text: "Spectate", icon: "\u0059", key: "L"},

  {text: "Gems", icon: "\u0044", key: "M"},
  {text: "Stats", icon: "\u0078", key: "K"},
  {text: "Hmm", icon: "\u004b", key: "Q"},
  {text: "No Prb", icon: "\u0047", key: "P"},
  
  {text: "Discord", icon: "\u007b", key: "D"},
  {text: "Idiot", icon: "\u0079", key: "I"},
  {text: "Lag", icon: "\u0069", key: "J"}
];

MapOpen();
const music = ["civilisation.mp3", "procedurality.mp3", "argon.mp3", "crystals.mp3", "red_mist.mp3", "warp_drive.mp3"];
this.options = {
  map_name: "Meg's Dueling",
  max_players: 69, // :D haha funny
  starting_ship: 605,
  map_size: 100,
  speed_mod: 1.2,
  max_level: 6,
  weapons_store: false,
  soundtrack: music[~~(Math.random() * music.length)],
  vocabulary: vocabulary,
  ships: ships,
  custom_map: "",
};

// Admin buttons
const Admin = {
  id: "Admin",
  position: [21, 0, 7.2, 4],
  clickable: true,
  visible: true,
  shortcut: "1",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(255, 255, 255, 0.40)", stroke: "#FFFFFF", width: 8
    },
    {
      type: "text", position: [0, 20, 100, 60], value: "Admin [1]", color: "#FFFFFF"
    }
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
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(40, 40, 215, 0.40)", stroke: "#2828D7", width: 8
    },
    {
      type: "text", position: [0, 20, 100, 60], value: "Spectate [8]", color: "#ffffff"
    }
  ]
};

const Regen = {
  id: "Regen",
  position: [72.2, 0, 7.6, 4],
  clickable: true,
  visible: true,
  shortcut: "9",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(0, 255, 0, 0.40)", stroke: "#00FF00", width: 8
    },
    {
      type: "text", position: [0, 20, 100, 60], value: "Regen [9]", color: "#ffffff"
    }
  ]
};

const Menu_ = {
  id: "Menu_",
  position: [64.1, 0, 7.6, 4],
  clickable: true,
  visible: true,
  shortcut: "0",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(255, 0, 0, 0.40)", stroke: "#FF0000", width: 8
    },
    {
      type: "text", position: [0, 20, 100, 60], value: "Menu [0]", color: "#ffffff"
    }
  ]
};

// Switch Screen
const Square = {
  id: "Square",
  position: [30, 30, 40, 40],
  clickable: false,
  visible: true,
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(255,255,255, 0.20)", stroke: "#FFFFFF", width: 12
    },
    {
      type: "box", position: [0, 0, 100, 15], stroke: "#FFFFFF", width: 6
    },
    {
      type: "round", position: [34, 24, 32, 55], stroke: "#FFFFFF", width: 5
    },
    {
      type: "text", position: [30, -2, 40, 20], value: "Actions Menu", color: "#FFFFFF"
    }
  ]
};

const next_ship = {
  id: "next_ship",
  position: [32, 39, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "3",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(0, 148, 255, 0.50)", stroke: "rgb(0, 148, 255)", width: 9
    },
    {
      type: "text", position: [0, 17, 100, 62], value: "Next [3]", color: "#ffffff"
    }
  ]
};

const previous_ship = {
  id: "previous_ship",
  position: [58, 39, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "4",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(0, 148, 255, 0.50)", stroke: "rgb(0, 148, 255)", width: 9
    },
    {
      type: "text", position: [0, 17, 100, 62], value: "Previous [4]", color: "#ffffff"
    }
  ]
};

const Tp_Spawn = {
  id: "Tp_Spawn",
  position: [58, 46, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "5",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(255, 0, 0, 0.50)", stroke: "rgb(255, 0, 0)", width: 9
    },
    {
      type: "text", position: [0, 17, 100, 62], value: "Center [5]", color: "#ffffff"
    }
  ]
};

const Stats = {
  id: "Stats",
  position: [32, 46, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "7",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(255, 232, 0, 0.50)", stroke: "rgb(255, 232, 0)", width: 9
    },
    {
      type: "text", position: [0, 17, 100, 62], value: "Stats [7]", color: "#ffffff"
    }
  ]
};

const Wrap = {
  id: "Wrap",
  position: [32, 53, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "6",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(55, 255, 55, 0.50)", stroke: "rgb(55, 255, 55)", width: 9
    },
    {
      type: "text", position: [0, 17, 100, 62], value: "Wrap [6]", color: "#ffffff"
    }
  ]
};

const Box_Exit_screen = {
  id: "Box_Exit_screen",
  position: [58, 61, 10, 5.5],
  clickable: true,
  visible: true,
  shortcut: "0",
  components: [
    {
      type: "box", position: [0, 0, 100, 100], fill: "rgba(255,255,255, 0.40)", stroke: "#ffffff", width: 9
    },
    {
      type: "text", position: [0, 17, 100, 62], value: "Exit [0]", color: "#ffffff"
    }
  ]
};

//Hide buttons
const HideShow_Buttons = {
  id: "HideShow_Buttons",
  position: [4.8, 27.5, 11, 7],
  clickable: true,
  visible: true,
  shortcut: "2",
  components: [
    {
      type: "text", position: [0, 0, 100, 100], value: "Hide Buttons [2]", color: "#ffffff"
    }
  ]
};

// Other
const Always_Pickup_Crystals = {
  id: "APC",
  position: [-4.5, -5, 110, 110],
  clickable: false,
  visible: true,
  components: [
    {
      type: "text", position: [-4, 5, 100, 3], value: "--", color: "#ffffff"
    }
  ]
};

this.tick = function(game) {
  if (game.step % 60 === 0) {
    updateScoreboard(game);
    for (let ship of game.ships) {
      AFKship(ship);
      if (!BannedList.includes(ship.name)) {
        if (!ship.custom.init) {
          ship.custom.init = true;
          ship.custom.ISidle = false;
          ship.custom.keep_maxed = true;
          ship.custom.ButtonsShowed = true;
          ship.custom.Deaths = 0;
          ship.custom.Kills = 0;
          ship.custom.warpIndex = 0;
          for (let mainComponents of gameMainComponents) ship.setUIComponent(mainComponents);
          ship.setUIComponent(HideShow_Buttons);
          setAPC(ship);
        }
      }
    }
    for (let i = 0; i<admin_number; i++) {
      if (!game.ships[i].custom.admin) {
        game.ships[i].custom.admin = true;
        game.ships[i].setUIComponent(Admin);
      }
    }
  }
  if (game.step % 20 === 0) {
    for (let ship of game.ships) {
      if (always_pickup_gems) {
        let max_crystals = 20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100);
        if (ship.custom.crystals_last_updated != ship.last_updated && ship.crystals >= max_crystals) {
          ship.set({crystals: max_crystals - 1});
          ship.custom.crystals_last_updated = ship.last_updated;
        }
      }
    }
  }
};

function AFKship(ship) {
  switch (ship.custom.afk_main) {
    case 0: reset_AFK(ship); break;
    case 1:
      if (ship.alive === true) {
        checkConstantSpeed_AFK(ship);
        checkRotation_AFK(ship);
        if (ship.custom.point1.x === ship.custom.point2.x && ship.custom.point2.x === ship.custom.point3.x || Math.abs(ship.custom.r1 - ship.custom.r2) <= AFK_rotation) {
          ship.custom.AFK_Cooldown_time--;
          if (ship.custom.AFK_Cooldown_time <= 0) {
            alert(ship, "Ship is going AFK in:", ship.custom.TimeS--,"rgba(255,55,55,0.8)", 1500);
            if (ship.custom.TimeS <= -1) spectator_ship(ship), ship.custom.isAFK = true;
          }
        } else reset_AFK(ship);
      } else reset_AFK(ship);
      break;
  }
}

function reset_AFK(ship) {
  ship.custom.TimeS = AFK_Pretime;
  ship.custom.AFK_Cooldown_time = AFK_Cooldown;
}

function checkConstantSpeed_AFK(ship) {
  ship.custom.point1 = {x: ship.vx, y: ship.vy};
  setTimeout(() => {
    ship.custom.point2 = {x: ship.vx, y: ship.vy}, 
    setTimeout(() => {ship.custom.point3 = {x: ship.vx, y: ship.vy}}, 200);
  }, 200);
}

function checkRotation_AFK(ship) {
  ship.custom.r1 = ship.r;
  setTimeout(() => {ship.custom.r2 = ship.r}, 200);
}

function updateScoreboard(game) {
  let sorted_ships_KDratio = [...game.ships].sort((a, b) => (b.custom.Kills - b.custom.Deaths) - (a.custom.Kills - a.custom.Deaths)).slice(0, 8);
  for (let ship of game.ships) {
    if (["Megalodon", "ҒꝚ▸Megalodon"].includes(ship.name)) {
      ship.custom.C_color = "#005cb9";
    } else {
      if (ship.id === sorted_ships_KDratio[0].id && ship.custom.Kills >= 1) ship.custom.C_color = "rgb(255, 215, 0)";
      else ship.custom.C_color = "rgb(255, 255, 255)";
      if (ship.custom.isAFK) ship.custom.C_color = "rgb(111,111,111)";
    }
  }
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {
        type: "box", position: [0, 0, 100, 10], fill: "rgba(255, 255, 255, 0.35)"
      },
      {
        type: "box", position: [81, 0, 7.5, 10], fill: "rgba(55, 255, 55, 0.35)"
      },
      {
        type: "box", position: [88.5, 0, 7.5, 10], fill: "rgba(255, 55, 55, 0.35)"
      },
      {
        type: "text", position: [3, 0.7, 69, 8.5], value: "Players", color: "rgb(255,255,255)", align: "left"
      },
      {
        type: "text", position: [66, 1, 29, 8.5], value: "K/D", color: "rgb(255,255,255)", align: "right"
      },
      ...(sorted_ships_KDratio).map((ship, i) => [
        {
          type: "player", index: i, position: [0, 11.25 * i + 11, 75.5, 9.25], id: sorted_ships_KDratio[i].id, color: ship.custom.C_color, value: "", align: "left"
        },
        {
          type: "text", position: [74, 11.25 * i + 11.5, 29, 8.5], value: sorted_ships_KDratio[i].custom.Kills + "/" + ship.custom.Deaths, color: "rgb(255,255,255)", align: "center"
        }
      ]).flat(Infinity)
    ]
  };
  for (let ship of game.ships) {
    if (ship == null) continue;
    let components = [...Scoreboard.components];
    let index = components.findIndex(c => c.type == "player" && c.id === ship.id);
    if (index == -1) {
      let last = Scoreboard.components.at(-2);
      last.id = ship.id;
      last.color = ship.custom.C_color;
      Scoreboard.components.at(-1).value = ship.custom.Kills + "/" + ship.custom.Deaths;
      index = Scoreboard.components.length - 2;
    }
    Scoreboard.components.splice(index, 0, {type: "box",position: [0, components[index].index * 11.25 + 10.50, 100, 10],fill: "rgba(200, 200, 255, 0.15)"})
    ship.setUIComponent(Scoreboard);
    Scoreboard.components = components;
  }
};

function setAPC(ship) {
  if (always_pickup_gems === true) Always_Pickup_Crystals.components[0].value = "Always Pickup Crystals: ON", Always_Pickup_Crystals.components[0].color = "rgba(55,255,55,0.4)";
  else Always_Pickup_Crystals.components[0].value = "Always Pickup Crystals: OFF", Always_Pickup_Crystals.components[0].color = "rgba(255,55,55,0.4)";
  ship.setUIComponent(Always_Pickup_Crystals);
}

function MapOpen() {
  game.modding.terminal.echo("[[bg;dodgerblue;]\n - Meg's Dueling - ]\n[[i;Cyan;]\nVersion: "+mod_version+"\nAll credits goes to Megalodon#0001\n]");
  game.modding.terminal.echo("[[bg;Gold;]Support Server & documentation:]");
  game.modding.terminal.echo("https://discord.gg/KXvCq4N\nhttps://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/README.md\n");
}

function alert(ship, Value1, Value2 = "", Color = "rgba(255,255,255,0.8)", time = 2500) {
  clearTimeout(ship.custom.logtimeout);
  ship.custom.logtimeout = setTimeout(() => {ship.setUIComponent({id: "Text", visible: false})}, time);
  ship.setUIComponent({
    id: "Text",
    position: [-5, -5, 110, 110],
    clickable: false,
    visible: true,
    components: [
      {
        type: "text", position: [0, 16, 100, 4], color: Color, value: Value1
      },
      {
        type: "text", position: [0, 21, 100, 4], color: Color, value: Value2
      }
    ]
  });
}

function format_time(time) {
  if (time > 0) {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    if (time % 60 === 0) {
      minutes = time / 60;
      seconds = "00";
      return minutes.toString() + ":" + seconds
    }
    if (seconds < 10) seconds = "0" + seconds.toString();
    return minutes.toString() + ":" + seconds.toString();
  } else return "0:00";
}

function wrap_ship(ship, game) {
  if (!ship.custom.spectator) spectator_ship(ship);
  else if (!ship.custom.wrap || game.step >= ship.custom.wrap) {
    ship.custom.wrap = game.step + wrap_delay * 60;
    if (game.ships.length > 1) {
      if (ship.custom.warpIndex >= game.ships.length-1) ship.custom.warpIndex = 0;
      else ship.custom.warpIndex++;
      if (ship.custom.warpIndex === game.ships.indexOf(ship)) {
        if (ship.custom.warpIndex >= game.ships.length-1) ship.custom.warpIndex = 0;
        else ship.custom.warpIndex++;
      }
    } else alert(ship, "Only one player is in the game.");
    ship.set({x: game.ships[ship.custom.warpIndex].x, y: game.ships[ship.custom.warpIndex].y, vx: 0, vy: 0});
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function next_ship_button(ship) {
  let index;
  let next_type;
  if (admin_ship_codes.includes(ship.type)) {
    admin_ship(ship, true);
  } else if (ship.custom.spectator) {
    spectator_ship(ship)
  } else if (!ship.custom.next_switch || game.step >= ship.custom.next_switch) {
    ship.custom.next_switch = game.step + switch_ship_delay * 60;
    index = Ship_Codes.indexOf(ship.type);
    if (index >= 0) {
      next_type = Ship_Codes[(index + 1) % Ship_Codes.length];
    }
    ship.custom.last_ship = next_type;
    ship.set({
      type: next_type, collider: true, shield: 999,
      crystals: 20 * Math.trunc(next_type / 100) * Math.trunc(next_type / 100)
    });
    update_stats_button(ship);
    reset_afk_timer(ship);
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function previous_ship_button(ship) {
  let index;
  let previous_type;
  if (admin_ship_codes.includes(ship.type)) {
    admin_ship(ship, true);
  } else if (ship.custom.spectator) {
    spectator_ship(ship)
  } else if (!ship.custom.next_switch || game.step >= ship.custom.next_switch) {
    ship.custom.next_switch = game.step + switch_ship_delay * 60;
    if (ship.type === Ship_Codes[0]) {
      previous_type = Ship_Codes[Math.max(Ship_Codes.length - 1)];
    } else {
      if (Ship_Codes.indexOf(ship.type) >= 0) {
        previous_type = Ship_Codes[(Ship_Codes.indexOf(ship.type) - 1) % Ship_Codes.length];
      }
    }
    ship.custom.last_ship = previous_type;
    ship.set({
      type: previous_type, collider: true, shield: 999,
      crystals: 20 * Math.trunc(previous_type / 100) * Math.trunc(previous_type / 100)
    });
    update_stats_button(ship);
    reset_afk_timer(ship);
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function spectator_ship(ship) {
  if (!ship.custom.spectator_switch || game.step >= ship.custom.spectator_switch) {
    ship.custom.spectator_switch = game.step + spectator_switch_delay * 60;
    if (ship.custom.spectator) {
      if (ship.custom.isAFK) ship.custom.isAFK = false;
      ship.custom.spectator = false;
      ship.custom.afk_main = 1;
      if (ship.custom.last_ship === spectator_ship_code) ship.custom.last_ship = switch_ship_codes[0];
      ship.set({
        type: ship.custom.last_ship, collider: true, shield: 999,
        crystals: 20 * Math.trunc(ship.custom.last_ship / 100) * Math.trunc(ship.custom.last_ship / 100)
      });
      update_stats_button(ship, false);
    } else {
      ship.custom.spectator = true;
      ship.custom.last_ship = ship.type;
      ship.custom.stats = ship.stats;
      ship.custom.afk_main = 0;
      ship.set({
        type: spectator_ship_code, crystals: 0, stats: 88888888, shield: 999, collider: false
      });
    }
  } else alert(ship, "Hold up! You're clicking too fast!");
}

function admin_ship(ship, off = false) {
  let next_type;
  let collider;
  if (ship.type === spectator_ship_code) spectator_ship(ship);
  else {
    if (off === true) next_type = ship.custom.last_admin_ship;
    else {
      if (ship.type >= admin_ship_codes[0] && ship.type <= admin_ship_codes[1]) {
        if (ship.type === admin_ship_codes[1]) next_type = ship.custom.last_admin_ship;
        else next_type = ship.type + 1;
      } else {
        ship.custom.last_admin_ship = ship.type;
        next_type = admin_ship_codes[0];
      }
      if (ship.type === spectator_ship_code) collider = true;
      if (ship.custom.last_admin_ship === spectator_ship_code) collider = false;
    }
    if (next_type <= admin_ship_codes[1]) ship.custom.afk_main = 0;
    else ship.custom.afk_main = 1;
    ship.set({
      type: next_type, stats: 66666666, collider: collider,
      crystals: 20 * Math.trunc(next_type / 100) * Math.trunc(next_type / 100)
    });
  }
}

function regen(ship) {
  if (ship.type !== spectator_ship_code) {
    let level = Math.trunc(ship.type / 100);
    if (!ship.custom.Regenerate || game.step >= ship.custom.Regenerate) {
      ship.custom.Regenerate = game.step + Regenerate_delay * 60;
      let max_crystals = 20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100);
      ship.set({crystals: max_crystals, shield: 999, generator: 999});
    } else alert(ship, "Hold up! You're clicking too fast!");
  }
};

function update_stats_button(ship, op_button = true, allow_stats = true, check_max = false) {
  if (check_max) {
    if (ship.stats === 11111111 * Math.trunc(ship.type / 100)) ship.custom.keep_maxed = true;
    else ship.custom.keep_maxed = false;
  }
  if (!ship.custom.keep_maxed) {
    if (allow_stats) ship.set({stats: 0});
    if (op_button) {
      Stats.components[1].value = "⚠️ Stats [7]";
      ship.setUIComponent(Stats);
    }
  } else {
    if (allow_stats) ship.set({stats: 88888888});
    if (op_button) {
      Stats.components[1].value = "Stats [7]";
      ship.setUIComponent(Stats);
    }
  }
}

function Stats_button(ship) {
  if (ship.type === spectator_ship_code || admin_ship_codes.includes(ship.type)) alert(ship, "You can't interact with the stats", "while being in that ship");
  else {
    if (ship.stats === 11111111 * Math.trunc(ship.type / 100)) ship.custom.keep_maxed = false;
    else ship.custom.keep_maxed = true;
    update_stats_button(ship);
  }
}

function Teleport_Center(ship) {
  if (!ship.custom.spawn || game.step >= ship.custom.spawn) {
    ship.custom.spawn = game.step + spawn_zone_delay * 60;
    ship.set({
      x: (Math.random() - 0.5) * game.options.map_size * 0.6, 
      y: (Math.random() - 0.5) * game.options.map_size * 0.6
    });
  } else alert(ship, "Hold up! You're clicking too fast!");
}

// Exit Screen Commands
const gameComponents = [Stats, Wrap, Tp_Spawn, next_ship, previous_ship, Box_Exit_screen, Square];
const gameComponentsID = ["Tp_Spawn", "Square", "next_ship", "previous_ship", "Stats", "Wrap", "Box_Exit_screen"];
function Exit_screen(ship) {
  ship.setUIComponent(Menu_);
  for (let ComponentsID of gameComponentsID) ship.setUIComponent({id: ComponentsID, visible: false});
}

function TP_points_button(ship) {
  let level = Math.trunc(ship.type / 100);
  let max_stats = 11111111 * level; 
  if (!ship.custom.TP_points || game.step >= ship.custom.TP_points) {
    ship.custom.TP_points = game.step + TP_points_delay * 60;
    update_stats_button(ship, true, false, true);
    for (let Components of gameComponents) ship.setUIComponent(Components);
    ship.setUIComponent({id: "Menu_", visible: false});
  } else alert(ship, "Hold up! You're clicking too fast!");
}

// HideShow_Buttons Command
const gameMainComponents = [Regen, Spectate, Menu_];
const gameMainComponentsID = ["Regen", "Spectate", "Menu_", "APC"];
function Manage_Buttons(ship) {
  if (!ship.custom.Mb || game.step >= ship.custom.Mb) {
    ship.custom.Mb = game.step + Mb_delay * 60;
    if (ship.custom.ButtonsShowed === true) {
      Exit_screen(ship);
      for (let mainComponentsID of gameMainComponentsID) ship.setUIComponent({id: mainComponentsID,visible: false});
      HideShow_Buttons.components[0].value = "Show Buttons [2]";
      ship.custom.ButtonsShowed = false;
    } else {
      for (let mainComponents of gameMainComponents) ship.setUIComponent(mainComponents);
      HideShow_Buttons.components[0].value = "Hide Buttons [2]";
      ship.custom.ButtonsShowed = true;
      setAPC(ship);
    }
    ship.setUIComponent(HideShow_Buttons);
  } else alert(ship, "Hold up! You're clicking too fast!");
}

this.event = function(event, game) {
  var ship = event.ship;
  switch (event.name) {
    case "ui_component_clicked":
      var component = event.id;
      if (component == "using_subspace") {
        ship.set({idle: true});
        ship.custom.IDidle = true;
        ship.gameover({"You have been caugth": "using Subspace"});
        break;
      }
      if (ship.custom.ISidle !== true) {
        if (component === "Menu_") TP_points_button(ship);
        else if (component === "HideShow_Buttons") Manage_Buttons(ship);
        else if (component === "Box_Exit_screen") Exit_screen(ship);
        else if (component === "Regen") regen(ship);
        else if (component === "Spectate") spectator_ship(ship);
        else if (component === "Admin") admin_ship(ship);
        else if (component === "next_ship") next_ship_button(ship);
        else if (component === "previous_ship") previous_ship_button(ship);
        else if (component === "Stats") Stats_button(ship);
        else if (component === "Tp_Spawn") Teleport_Center(ship);
        else if (component === "Wrap") wrap_ship(ship, game);
      }
      break;
    case "ship_spawned":
      if (BannedList.includes(ship.name)) {
        ship.set({idle: true});
        ship.custom.IDidle = true;
        ship.gameover({"You are banned from this game": "sorry."});
      } else {
        const {x = 0, y = 0} = ship.custom;
        let xx = [...new Array(41)].map((j, i) => x - 30 + i);
        let yy = [...new Array(41)].map((j, i) => y - 30 + i);
        ship.set({
          x: xx[~~(Math.random() * xx.length)],
          y: yy[~~(Math.random() * yy.length)],
          collider: true, crystals: 720, stats: 88888888
        });
        spectator_ship(ship);
        Show_Buttons_a(ship);
        game.modding.terminal.echo("\n | List of players and their IDs:\n");
        for (let i = 0; i < game.ships.length; i++) game.modding.terminal.echo(" | id: " + i + ", Name: " + game.ships[i].name + ", Type: " + game.ships[i].type + "\n | Coordinates: X: " + game.ships[i].x + ", Y: " + game.ships[i].y);
        game.modding.terminal.echo("\n");
      }
      break;
    case "ship_destroyed":
      Object.assign(ship.custom, {x: ship.x, y: ship.y});
      if (ship) ship.custom.Deaths++
      if (event.killer) event.killer.custom.Kills++;
      break;
  }
};

// Images
var MapCenter = {
  id: "MapCenter",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/TheGreatMegalodon/Dueling-Component/main/Dueling_Component/megs_dueling_center_map_with_speedsters.png",
};
var ModVersion = {
  id: "ModVersion",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/TheGreatMegalodon/Dueling-Component/main/Dueling_Component/v1.3.6_Img.png",
};
var BETAlogo = {
  id: "BETAlogo",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/TheGreatMegalodon/Dueling-Component/main/Dueling_Component/BETA.png",
};

AddObject = function(Name, ID, x, y, sx, sy, rz) {
  game.setObject({
    id: Name,
    type: ID,
    position: {x: x, y: y, z: -15},
    scale: {x: sx, y: sy, z: 0},
    rotation: {x: Math.PI, y: 0, z: rz}
  });
};

AddObject("MapCenter", MapCenter, -1, 0, 95, 52, 0);
AddObject("ModVersion", ModVersion, 21, -8.5, 20, 6, -0.30);
AddObject("BETAlogo", BETAlogo, -36, -1.25, 18, 9, 0);

// Commands
// Moderation commands
game.modding.commands.info = function() {
  game.modding.terminal.echo("Total amount of aliens: "+game.aliens.length)
  game.modding.terminal.echo("Total amount of asteroids: "+game.asteroids.length)
  game.modding.terminal.echo("Total amount of players: "+game.ships.length+"\n")
  if (BannedList.length === 0) names = "None";
  else names = BannedList;
  game.modding.terminal.echo("Banned players: " + names)
  game.modding.terminal.echo("\nPlayer's and their index's:\n");
  for (let i = 0; i < game.ships.length; i++) game.modding.terminal.echo("Index: " + i + ", Name: " + game.ships[i].name + ", Ship type: " + game.ships[i].type + "\nCoordinates: X: " + game.ships[i].x + ", Y: " + game.ships[i].y)
  game.modding.terminal.echo("\n");
};

idle = function(who, txt) {
  if (game.ships[who].custom.ISidle === true) {
    modding.terminal.error(new Error("\n" + game.ships[who].name + ", is already frozen.\n"));
  } else {
    game.ships[who].set({idle: true});
    Exit_screen(game.ships[who]);
    game.ships[who].custom.ISidle = true;
    if (game.ships[who].type !== 191) spectator_ship(game.ships[who])
    if (!txt) game.modding.terminal.echo("the player: " + game.ships[who].name + ", index: " + who + " has been freezed\n❗INFO Type unidle(index), to unfreeze a player.\n")
  }
};

unidle = function(who) {
  if (game.ships[who].custom.ISidle === true) {
    game.ships[who].set({idle: false});
    game.ships[who].custom.ISidle = false;
    game.modding.terminal.echo("the player: " + game.ships[who].name + ", index: " + who + " has been unfreezed\n");
  } else modding.terminal.error(new Error("\nThis player is not frozen\n"));
};

kick = function(who, reason = "Disturbing duels") {
  if (game.ships.includes(game.ships[who])) {
    for (let ship of game.ships) alert(ship, "Player: " + game.ships[who].name, "has been kicked.", "rgba(255,155,55,0.8)");
    idle(who, true);
    game.ships[who].gameover({"You were kicked for" : reason, "Kills": game.ships[who].custom.Kills, "Deaths": game.ships[who].custom.Deaths});
    game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Has successfully been kicked\n");
  } else modding.terminal.error(new Error("\n" + "The index you used doesn't exist, try again with a valid index\n"));
};

ban = function(who, reason = "Disturbing duels") {
  if (game.ships.includes(game.ships[who])) {
    BannedList.push(game.ships[who].name);
    BannedListReasons.push(reason);
    idle(who, true);
    game.ships[who].gameover({"You were banned for" : reason, "Kills": game.ships[who].custom.Kills, "Deaths": game.ships[who].custom.Deaths});
    for (let ship of game.ships) alert(ship, "Player: " + game.ships[who].name, "has been banned.", "rgba(255,55,55,0.8)");
    game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Has successfully been banned\n" + "\n❗INFO Type: banlist, to see all of the banned players.\n");
  } else modding.terminal.error(new Error("\n" + "The index you used doesn't exist, try again with a valid index\n"));
};

game.modding.commands.banlist = function() {
  if (BannedList.length > 0) {
    for (let i = 0; i < BannedList.length; i++) game.modding.terminal.echo("Index: " + i + ", Name: " + BannedList[i] + ", Reason: " + BannedListReasons[i]);
    game.modding.terminal.echo("❗INFO Type: unban(index), to unabn a player.\n");
  } else modding.terminal.error(new Error("\n" + "There are no banned players in this game.\n"));
};

unban = function(index) {
  if (BannedList.includes(BannedList[index])) {
    BannedListReasons.splice(index, 1);
    BannedList.splice(index, 1);
    for (let ship of game.ships) alert(ship, "Player: " + BannedList[index], "has been unbanned.", "rgba(55,255,55,0.8)");
    game.modding.terminal.echo("Player: " + BannedList[index] + ", reason: " + BannedListReasons[index] + ", Has successfully been unbanned\n");
  } else modding.terminal.error(new Error("\n" + "You gave a wrong index or the player that you're trying to unban isn't banned or got unbanned before.\n"));
};

// General commands
admin = function(who, duration=undefined) {
  if (who >= admin_number) {
    clearTimeout(game.ships[who].custom.adm);
    if (game.ships[who].custom.admin) {
      game.ships[who].setUIComponent({id: "Admin", visible: false});
      if (admin_ship_codes.includes(game.ships[who].type)) admin_ship(ship, true);
      game.ships[who].custom.admin = false;
      game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Has successfully been removed the admin commands\n");
    } else {
      if (duration) {
        game.ships[who].custom.adm = setTimeout(() => {
          game.ships[who].setUIComponent({id: "Admin", visible: false});
          if (admin_ship_codes.includes(game.ships[who].type)) admin_ship(ship, true);
          game.ships[who].custom.admin = false;
          game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Lost his admin powers\n");
        }, duration*1000);
      }
      game.ships[who].setUIComponent(Admin);
      game.ships[who].custom.admin = true;
      if (duration === undefined) duration = Infinity;
      game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + ", Duration: " + duration + " Has successfully been given the admin commands\n");
    }
  } else modding.terminal.error(new Error("\n" + "This player is a default admin, you cannot remove his permissions\n"));
};

game.modding.commands.apc = function() {
  if (always_pickup_gems === true) {
    always_pickup_gems = false;
    for (let ship of game.ships) if (ship.custom.ButtonsShowed === true) setAPC(ship);
    game.modding.terminal.echo("Always Pickup Crystals feature is now OFF\n");
  } else {
    always_pickup_gems = true;
    for (let ship of game.ships) if (ship.custom.ButtonsShowed === true) setAPC(ship);
    game.modding.terminal.echo("Always Pickup Crystals feature is now ON\n");
  }
};

set = function(who, what, crystals, stats = 88888888) {
  if (crystals === undefined) crystals = 20 * Math.trunc(what / 100) * Math.trunc(what / 100);
  game.ships[who].set({type: what, crystals: crystals, stats: stats, shield: 999});
  game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Has successfully been given:");
  game.modding.terminal.echo("Type: " + what + ", Crystals: " + crystals + ", Stats: " + stats + "\n");
};

// Announce command
say = function(text = "") {
  for (let ship of game.ships) {
    ship.setUIComponent({
      id: "announceText",
      position: [20, 75, 50, 25],
      clickable: false,
      visible: true,
      components: [
        {
          type: "text", position: [0, 0, 100, 20], color: "#FFFFFF", value: text
        }
      ]
    });
  }
  game.modding.terminal.echo("Text: " + text + " applyed\n");
};
