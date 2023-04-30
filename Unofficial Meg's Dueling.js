const Version = 
      "1.0.0";
/*
Small Dueling Mod by: Megalodon
*/

var regen_button = {
  id: "regen",
  position: [76,1.5,3,3],
  clickable: true,
  shortcut: "W",
  visible: true,
  components: [
    {
      type:"box",
      position:[0,0,100,100],
      fill:"#479",
      stroke:"#CDE",
      width:4
    },
    {
      type: "text",
      position:[10,24,80,50],
      value:"regen [W]",
      color:"#CDE"
    }
  ]
};

var spectate_button = {
  id: "spectate",
  position: [72,1.5,3,3],
  clickable: true,
  shortcut: "B",
  visible: true,
  components: [
    {
      type:"box",
      position:[0,0,100,100],
      fill:"#974",
      stroke:"#CDE",
      width:4
    },
    {
      type: "text",
      position:[10,24,80,50],
      value:"spectate [B]",
      color:"#CDE"
    }
  ]
};

const ships = [
  Spectator_191 = '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}',
  AdminToolPrecision_192 = '{"name":"AdminToolPrecision","level":1.9,"model":2,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"bodies":{"object0":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17,4],"angle":0,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}}},"typespec":{"name":"AdminToolPrecision","level":1.9,"model":2,"code":192,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"shape":[0.802,0.803,0.375,0.227,0.16,0.126,0.107,0.095,0.085,0.078,0.075,0.072,0.071,0.071,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.071,0.072,0.075,0.078,0.085,0.095,0.107,0.126,0.16,0.227,0.375,0.803],"lasers":[{"x":0,"y":-0.8,"z":0,"angle":0,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":0.803}}'
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

this.options = {
  ships: ships, 
  vocabulary: vocabulary,
  root_mode: "", 
  map_name: "Meg's Dueling", 
  custom_map: "", 
  map_size: 60, 
  max_level: 6, 
  maxtierlives: 5, 
  starting_ship: 605, 
  weapons_store: false
};

this.tick = function(game) {
  for (let ship of game.ships) {
    if (game.step % 30 === 0) {
      if (ship.crystals >= 720) {
        ship.set({crystals: (20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100))-1});
      }
    }
  }
};

this.event = function(event, game) {
  switch (event.name) {
    case "ui_component_clicked":
      let component = event.id;
      if (component == "regen") regenShip(event.ship);
      else if (component == "spectate") spectateShip(event.ship); 
      break;
    case "ship_destroyed": 
      event.ship.custom.info = {x: event.ship.x, y: event.ship.y}; 
      break;
    case "ship_spawned":
      spectateShip(event.ship); 
      if (event.ship.custom.init !== true) {
        event.ship.custom.init = true;
        event.ship.setUIComponent(spectate_button);
        event.ship.setUIComponent(regen_button);
        event.ship.set({x:0,y:0});
      } else event.ship.set({x: event.ship.custom.info.x, y: event.ship.custom.info.y});
      break;
  }
};

function interactive(ship, button, colorAfter, colorTimeout) {
  clearTimeout(ship.custom.tm);
  button.components[0].fill = colorTimeout;
  ship.setUIComponent(button);
  ship.custom.tm = setTimeout(() => {
    regen_button.components[0].fill = colorAfter;
    ship.setUIComponent(button);
  }, 500);
}

function regenShip(ship) {
  let max_stats;
  let max_crystals;
  clearTimeout(ship.custom.tm);
  if (ship.type === 191 || ship.type === 192 ) {
    if (ship.custom.init === true) interactive(ship, regen_button, "#479", "#911");
  } else {
    interactive(ship, regen_button, "#479", "#191");
    if (Math.trunc(ship.type / 100) < 7)  max_stats = 11111111 * Math.trunc(ship.type / 100); else max_stats = 0;
    max_crystals = 20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100);
    ship.set({shield: 999, crystals: max_crystals, stats: max_stats,invulnerable: 80});
  }
}

function spectateShip(ship) {
  let max_stats;
  let max_crystals;
  if (ship.type === 192) {
    if (Math.trunc(ship.custom.oldAdminShip / 100) < 7)  max_stats = 11111111 * Math.trunc(ship.custom.oldAdminShip / 100); else max_stats = 0;
    max_crystals = 20 * Math.trunc(ship.custom.oldShip / 100) * Math.trunc(ship.custom.oldShip / 100);
    ship.set({shield: 999, crystals: max_crystals, stats: max_stats, invulnerable: 80, type: ship.custom.oldAdminShip});
  } else if (ship.type === 191) {
    if (Math.trunc(ship.custom.oldShip / 100) < 7)  max_stats = 11111111 * Math.trunc(ship.custom.oldShip / 100); else max_stats = 0;
    max_crystals = 20 * Math.trunc(ship.custom.oldShip / 100) * Math.trunc(ship.custom.oldShip / 100);
    ship.set({shield: 999, crystals: max_crystals, stats: max_stats, invulnerable: 80, type: ship.custom.oldShip, collider: true});
  } else {
    if (ship.type !== 192) {
      ship.custom.oldShip = ship.type;
      ship.set({shield: 999, crystals: 0, stats: 0, type: 191, collider: false});
    }
  }
}

set = function(who,what,max_crystals,max_stats){
  if (!max_stats && max_stats !== 0) if (Math.trunc(game.ships[who].type / 100) < 7)  max_stats = 11111111 * Math.trunc(game.ships[who].type / 100); else max_stats = 0; else max_stats;
  if (!max_crystals) max_crystals = 20 * Math.trunc(game.ships[who].type / 100) * Math.trunc(game.ships[who].type / 100); else max_crystals;
  game.ships[who].set({type: what, crystals: max_crystals, stats: max_stats, shield: 999, collider: true});
};

admin = function(who) {
  let max_stats;
  let max_crystals;
  if (game.ships[who].type === 192) {
    if (Math.trunc(game.ships[who].custom.oldAdminShip / 100) < 7)  max_stats = 11111111 * Math.trunc(game.ships[who].custom.oldAdminShip / 100); else max_stats = 0;
    max_crystals = 20 * Math.trunc(game.ships[who].custom.oldShip / 100) * Math.trunc(game.ships[who].custom.oldShip / 100);
    game.ships[who].set({shield: 999, crystals: max_crystals, stats: max_stats, invulnerable: 240, type: game.ships[who].custom.oldAdminShip});
  } else {
    if (game.ships[who].type === 191) spectateShip(game.ships[who]);
    setTimeout(() => {
      game.ships[who].custom.oldAdminShip = game.ships[who].type;
      game.ships[who].set({shield: 999, crystals: 0, stats: 0, type: 192});
    }, 250);
  }
};

game.modding.commands.info = function() {
  game.modding.terminal.echo("Total amount of players: "+game.ships.length);
  game.modding.terminal.echo("\nPlayer's and their index's:\n");
  for (let i = 0; i < game.ships.length; i++) game.modding.terminal.echo("Index: " + i + ", Name: " + game.ships[i].name);
  game.modding.terminal.echo("\n");
};
