// Variables that are required for the commands to work

var always_pickup_gems = true; // always pickup gems | true / false
var BannedList = [];
var BannedListReasons = [];

// Functions that are required for the commands to work:

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

function setAPC(ship) {
  if (always_pickup_gems === true) Always_Pickup_Crystals.components[0].value = "Always Pickup Crystals: ON", Always_Pickup_Crystals.components[0].color = "rgba(55,255,55,0.4)";
  else Always_Pickup_Crystals.components[0].value = "Always Pickup Crystals: OFF", Always_Pickup_Crystals.components[0].color = "rgba(255,55,55,0.4)";
  ship.setUIComponent(Always_Pickup_Crystals);
}

function alert(ship, Value1, Value2 = "", Color = "rgba(255,255,255,0.8)", time = 2000) {
  clearTimeout(ship.custom.logtimeout);
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
  ship.custom.logtimeout = setTimeout(() => {ship.setUIComponent({id: "Text",visible: false})}, time);
}

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
  } else modding.terminal.error(new Error("\n" + "You gave a wrong index or the players that you're trying to unban isn't banned or got unbanned before.\n"));
};

// General commands
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
  var level = Math.trunc(what / 100);
  if (crystals === undefined) crystals = 20 * Math.trunc(what / 100) * Math.trunc(what / 100);
  game.ships[who].set({type: what, crystals: crystals, stats: stats, shield: 999});
  game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Has successfully been given:");
  game.modding.terminal.echo("Type: " + what + ", Crystals: " + crystals + ", Stats: " + stats + "\n");
};

// Teleportation commands
tpto = function(who, towho) {
  ship = game.ships[towho];
  game.ships[who].set({x: ship.x, y: ship.y});
  game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Has successfully been TP to:");
  game.modding.terminal.echo("Player: " + game.ships[towho].name + ", index: " + towho + ", coordinates: X: " + game.ships[towho].x + ", Y:" + game.ships[towho].y + "\n");
};

tp = function(who, xx, yy) {
  game.ships[who].set({x: xx, y: yy});
  game.modding.terminal.echo("Player: " + game.ships[who].name + ", index: " + who + " Has successfully been TP to:");
  game.modding.terminal.echo("Coordinates: X: " + xx + ", Y:" + yy + "\n");
};

tpall = function(x, y) {
  var x = [...new Array(21)].map((j, i) => x - 10 + i)
  var y = [...new Array(21)].map((j, i) => y - 10 + i)
  for (i = 0; i < game.ships.length; i++) {
    game.ships[i].set({x: x[~~(Math.random() * x.length)],y: y[~~(Math.random() * y.length)]});
    game.modding.terminal.echo("Player: " + game.ships[i].name + ", index: " + i);
  }
  game.modding.terminal.echo("Has been successfully TP to:");
  game.modding.terminal.echo("Coordinates: X: " + x + ", Y:" + y + "\n");
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
