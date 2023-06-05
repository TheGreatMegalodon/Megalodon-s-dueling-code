// Variables that are required for the commands to work

var gameOptions = { 
  BannedList = [],
  BannedListReasons = [],
  always_pickup_gems = true
}

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
