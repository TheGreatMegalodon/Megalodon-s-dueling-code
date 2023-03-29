// classic Dueling by: Megalodon

var regen_button = {
  id: "regen",
  position: [86,40.4,8,5.5],
  clickable: true,
  shortcut: "J",
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
      value:"regen [J]",
      color:"#CDE"
    }
  ]
};

var spectate_button = {
  id: "spectate",
  position: [86,47,8,5.5],
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

ships = [
  Spectator_191 = '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}',
  AdminToolPrecision_192 = '{"name":"AdminToolPrecision","level":1.9,"model":2,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"bodies":{"object0":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-30,-30,0,0],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[4],"angle":0,"laser":{"damage":[1055,1055],"rate":10,"speed":[400,400],"number":1}}},"typespec":{"name":"AdminToolPrecision","level":1.9,"model":2,"code":192,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"shape":[0.601,0.604,0.373,0.227,0.166,0.129,0.11,0.097,0.085,0.079,0.075,0.073,0.071,0.071,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.071,0.073,0.075,0.079,0.085,0.097,0.11,0.129,0.166,0.227,0.373,0.604],"lasers":[{"x":0,"y":-0.6,"z":0,"angle":0,"damage":[1055,1055],"rate":10,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":0.604}}'
];

this.options = {
  ships: ships, 
  root_mode: "", 
  map_name: "Meg's Dueling", 
  custom_map: "", 
  map_size: 80, 
  max_level: 6, 
  maxtierlives: 5, 
  starting_ship: 605, 
  weapons_store: false
};

this.tick = function(game) {
  for (let ship of game.ships) {
    if (game.step % 60 === 0 && ship.custom.init !== true) {
      ship.custom.init = true;
      ship.setUIComponent(spectate_button);
      ship.setUIComponent(regen_button);
      ship.set({x:0,y:0});
    }
    if (game.step % 60 === 0) {
      let max_crystals = 20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100);
      if (ship.crystals >= 720) ship.set({crystals: max_crystals-1});
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
    case "ship_spawned": regenShip(event.ship); break;
  }
};

function regenShip(ship) {
  let max_stats;
  let max_crystals;
  if (ship.type !== 191) {
    if (Math.trunc(ship.type / 100) < 7)  max_stats = 11111111 * Math.trunc(ship.type / 100); else max_stats = 0;
    max_crystals = 20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100);
    ship.set({shield: 999, crystals: max_crystals, stats: max_stats,invulnerable: 80});
  }
}

function spectateShip(ship) {
  let max_stats;
  let max_crystals;
  if (ship.type === 191) {
    if (Math.trunc(ship.custom.oldShip / 100) < 7)  max_stats = 11111111 * Math.trunc(ship.custom.oldShip / 100); else max_stats = 0;
    max_crystals = 20 * Math.trunc(ship.custom.oldShip / 100) * Math.trunc(ship.custom.oldShip / 100);
    ship.set({shield: 999, crystals: max_crystals, stats: max_stats, invulnerable: 240, type: ship.custom.oldShip, collider: true});
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
    game.ships[who].custom.oldAdminShip = game.ships[who].type;
    game.ships[who].set({shield: 999, crystals: 0, stats: 0, type: 192});
  }
};
