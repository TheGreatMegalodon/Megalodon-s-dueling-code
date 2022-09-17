// Commands
// Moderation commands
game.modding.commands.info = function(){
  game.modding.terminal.echo(" | Total amount of aliens: "+game.aliens.length)
  game.modding.terminal.echo(" | Total amount of asteroids: "+game.asteroids.length)
  game.modding.terminal.echo(" | Total amount of players: "+game.ships.length)
  game.modding.terminal.echo("\n | List of players and their IDs:\n");
  for (let i=0; i<game.ships.length; i++){
    game.modding.terminal.echo(" | id: "+i+", Name: "+game.ships[i].name+", Type: "+game.ships[i].type+", Alive: "+game.ships[i].alive+"\n | Coordinates: X: "+game.ships[i].x+", Y: "+game.ships[i].y); 
  }
  game.modding.terminal.echo("\n");
};

kick = function(who,reason="Disturbing duels"){
  game.ships[who].gameover({"You were kicked for : ":reason,"Your name: ":game.ships[who].name,"Score: ":game.ships[who].score});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been kicked\n");
};

// General commands
set = function(who,what,crystals,stats=88888888){
  var level = Math.trunc(what / 100);
  var cargo = 1280;
  if (crystals === undefined) {
    switch (level) {
      case 1: crystals = 20; break; 
      case 2: crystals = 80; break; 
      case 3: crystals = 180; break; 
      case 4: crystals = 320; break; 
      case 5: crystals = 500; break; 
      case 6: crystals = 720; break; 
      case 7: crystals = 980; break;
    }
  }
  game.ships[who].set({type:what,crystals:crystals,stats:stats});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been given:");
  game.modding.terminal.echo(" | Type: "+what+", Crystals: "+crystals+", Stats: "+stats+"\n");
};

crystals = function(who,crystals){
  game.ships[who].set({crystals:crystals});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been given:");
  game.modding.terminal.echo(" | Crystals: "+crystals+"\n");
};

// Teleportation commands
tpto = function(who,towho){
  ship = game.ships[towho];
  game.ships[who].set({x:ship.x,y:ship.y});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been TP to:");
  game.modding.terminal.echo(" | Player: "+game.ships[towho].name+", id: "+towho+", coordinates: X: "+game.ships[towho].x+", Y:"+game.ships[towho].y+"\n");
};

tp = function(who,xx,yy){
  game.ships[who].set({x:xx,y:yy});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been TP to:");
  game.modding.terminal.echo(" | Coordinates: X: "+xx+", Y:"+yy+"\n");
};

tpall = function(x,y){
  var x = [...new Array(21)].map((j, i) => x - 10 + i)
  var y = [...new Array(21)].map((j, i) => y - 10 + i)
  for (let ship of game.ships) {
    ship.set({x: x[~~(Math.random()*x.length)], y: y[~~(Math.random()*y.length)]});
  }
  for (i=0;i<game.ships.length;i++) {
  game.modding.terminal.echo(" | Player: "+game.ships[i].name+", id: "+i);
  }
  game.modding.terminal.echo(" | Has been successfully TP to:");
  game.modding.terminal.echo(" | Coordinates: X: "+x[~~(Math.random()*x.length)]+", Y:"+y[~~(Math.random()*y.length)]+"\n");
};

// Announce command
say = function(text=""){
  for (i=0;i<game.ships.length;i++)
  {
    ship = game.ships[i];
    ship.setUIComponent({
      id: "announceText",
      position: [20,75,50,25],
      clickable: false,
      visible: true,
      components: [
        {type: "text", position: [0,0,100,20], color: "#FFFFFF", value: text},
        ]
    });
  }
  game.modding.terminal.echo(" | Text applyed\n");
};