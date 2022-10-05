<div align="center">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/Photo_MegsDueling.png" width="1000" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

# Meg's dueling Documentation

### Mod Versions: 
* **~v0.3.3~**  *(Not supported)*
* **v1.1s**  *(Most used)*

### Mod creator: 
* **Megalodon**

### Coding support:
* **Lotus/Notus**
* **Bhpsngum**

## Support
* [Support Discord Server](https://discord.gg/KXvCq4N)
* Discord: Megalodon#0001

## Comming soon!!
An AFK system:
 - If a player stops moving for more than 30 seconds he will turn into spectator mode.

## Summary
* [Support](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#support)
* [Help](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#help)
  * [How to host a dueling game](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#how-to-host-a-dueling-game)
    * [Starblast Modding link](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#starblast-modding-link)
  * [Kick](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#kick)
* [SET command](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#set-command)
  * [Ship Type](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-type)
  * [Ship Crystals](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-crystals)
  * [Ship Stats](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-stats)
* [How to add your own ships](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#how-to-add-your-own-ships)
* [Command Usage](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#commands-usage)
  * [GameOver command](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#how-to-use-the-gameover-command) 
  * [Moderation Commands](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#moderation-commands)
  * [Basic Commands](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#basic-commands)

## Help

**⚠️ Small skills in modding are required to use thoses commands.**

While runing the mod you can always type:
```js
> help█
```
To see all the commands you can use.

### How to host a dueling game

#### Starblast Modding link:

[![ModdingSpace](https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/Modding_space_button.png)](https://starblast.io/modding.html)

First of all you have to remove any code, like in this image:

<div align="center"> 
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/image.png" width="700" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

Next you have to choose between the 2 verion of the mod that are available:
* [~0.3.3~](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Meg's%20Dueling%20Full.js) (Not supported)
* [1.1s](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Meg's%20Dueling%20Optimized.js) (Optimized Version)

Then just simply paste the version you choosed in your Modding tab.

and enjoy!

### Kick
To kick a player it is very easy. While your mod is running, you first need to write in the console:

```js
> info█
```

Once you've press "ENTER" the mod is going to reply you with something similar as this:

```js
 | Total amount of aliens: 0
 | Total amount of asteroids: 0
 | Total amount of players: 2
 
 | List of players and their IDs:
  
 | id: 0, Name: Megalodon, Type: 613, Alive: true
 | Coordinates: X: 7, Y: 3
 | id: 1, Name: Kylo, Type: 601, Alive: false
 | Coordinates: X: 105, Y: 356
> █
```

While looking at it, you can see a few informations.

Firstly, you can obviously see this:

```js
 | Total amount of aliens: 0
 | Total amount of asteroids: 0
 | Total amount of players: 2
```

This shows you the number of aliens in the game the number of asteroids in the game and the number of players in the game.
Thoses informations can be useful when you like to make a mess in modding!

Next we have all of the interesting stuff.

```js
 | id: 0, Name: Megalodon, Type: 613, Alive: true
 | Coordinates: X: 7, Y: 3
 | id: 1, Name: Kylo, Type: 601, Alive: false
 | Coordinates: X: 105, Y: 356
```

These informations shows you the ID(index) of a player and his name. Which can be useful to recognize the player you want to kick, you can also see the ship he have, if he is dead or not, and his coordinates.

To kick a player you will only need the first lane:

```js
 | id: 0, Name: Megalodon, Type: 613, Alive: true
```

Watch carefuly the names, pick your cible and watch his ID, in my case its 0.
The command you're gonna be using to kick someone is:

```js
> kick()
> █
```

Remember the ID, of the player, and write it down between the parenthesis.

For my case its gonna look like this:

```js
> kick(0)
> █
```

Once you've press "ENTER" this is what you should see:

```js
> kick(0)
 | Player: Megalodon, id: 0 Has successfully been kicked
> █
```

Which mean, that you have successfully kick someone!

You can also add a custom reason, but keep in mind that this part is optional.
but if you still want to set a custom reason you will need to write it like this:

```js
kick(0,"Not skilled enough to survive")
```

you can then put anything you want between the quotation marks.

If an error shows up, please restart the mod.

### SET Command

### Ship Type

The `ship.type` is a way to recognize a ship without his name.

The easiest way to explain it is this:

<div align="left">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/starblast-1662404446569.png" width="900" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

Lets take the Fly, the Fly is a `Tier 1` and the `first ship` of his list, so his `code/id` is `101`.

Next we can take the A-Speedster, A-Speedster is a `Tier 6` and he is the `5th ship` on his list, which means his `code/id` is `605`

And its the same thing for all of ships in starblast.

### Ship Crystals

You basically don't need to set any value, its automatically giving the right amount of gems.

but in case you want to change the crystals amount of a player you can use:

```js
crystals(560)
```

or if you want to change the ship type, stats, and crystals amount at the same time

```js
set(0,602,560)
```

### Ship Stats

Stats are simple as `ship.type`

first you should know that all ships work in a way that their level is equivalent to the number of upgrades they can have per category. For example lets take the `X-Warrior`. The `X-Warrior` is a `Tier 4`, if you have followed what i have said before and understood, you should know that his `code/id` is `402` because he is a `Tier 4` and he is the `2nd ship` of his list, anyway.

Knowing that, you should then know that there are 8 category for the stats:

* **The shield group**
  * Capacity
  * Regeneration
* **The Laser Group**
  * Capacity
  * Regeneration
  * Damage
  * Laser Speed
* **The Velocity Group**
  * Speed
  * Agility

With that in your mind, lets head to the coding part.

To remove upgardes from a ship, the stats should look like this `00000000` and in the console:

```js
set(0,601,0,00000000)
```

But to max a ship you will need to replace the "0" with numbers. 
lets take an example: `24354321` Thoses numbers means that:

* Capacity 🠚 **2 upgrades**
* Regeneration 🠚 **4 upgrades**
* Capacity 🠚 **3 upgrades**
* Regeneration 🠚 **5 upgrades**
* Damage 🠚 **4 upgrades**
* Laser Speed 🠚 **3 upgrades**
* Speed 🠚 **2 upgrades**
* Agility 🠚 **1 upgrade**

The `set` command will look like this:

```js
set(0,601,0,24354321)
> █
```

You don't need to put `66666666` as stats to max your ship, the default value is `88888888` which means you ship get totally maxed.

It would look like this with using the defauld value:

```js
set(0,601)
> █
```

## How to add your own ships
First of all you must have read and understand the usage of the entire [SET Command](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#set-command) and the you will be able to start this tutorial.

Lets start with the things you will need to find:
#### the variables:
```js
// Ship Codes
var switch_ship_codes = [606,631];
var spectator_ship_code = 191;
var admin_ship_codes = [192,194];
```

#### the ship codes:
```js
// Dueling ship
  // Vanilla ships
var Fly_101 = '{"name":"Fly","level":1,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]}...
var Odyssey_601 = '{"name":"Odyssey","level":6,"model":1,"size":4,"specs":{"shield":{"capacity":[750,750],"reload":[15,15]}...
var Shadow_X_3_602 = '{"name":"Shadow X-3","level":6,"model":2,"size":2.5,"specs":{"shield":{"capacity":[400,400],"reload":[12,12]}...
[...]
var Persuasion_629 = '{"name":"Persuasion","level":6,"model":29,"size":3.4,"specs":{"shield":{"capacity":[200,350],"reload":[6,8]}...
var Star_Drive_630 = '{"name":"Star-Drive","level":6,"model":30,"size":1.6,"zoom":0.85,"next":[745,746],"specs":{"shield":{"capacity":[155,250],"reload":[6,9.3]}...
var Typhoon_631 = '{"name":"Typhoon","level":6,"model":31,"size":1.52,"zoom":0.85,"specs":{"shield":{"capacity":[230,310],"reload":[6,9]}...
```

#### the Ships definition:
```js
var ships = [
// Dueling ship
  // Vanilla ships
  Fly_101,
  Odyssey_601,
  Shadow_X_3_602,
[...]
  Persuasion_629,
  Star_Drive_630,
  Typhoon_631,
];
```

Now that you've found them in the Dueling Mod, you will normally start to notice some sort of logic around the [ship codes](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-type), they go from __601,602__ to __630,631__.
The first step is to also understand that 2 ships cannot have the same ID, so 2 ship's ID connot be, for example 615. if it happen that your mod contains 2 ships with the same ID, you will have a beautiful black screen when joining the game.

To change a ship ID you will need to go on the Ship Editor Website, for this click here:

[![ShipEditor](https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/Ship_Editor_button.png)](https://starblast.io/shipeditor/)

Now import your ship using [Code converter](https://bhpsngum.github.io/starblast/sscv/) to conver your Mod Export ship code to the right language. And then paste it into The [Ship Editor](https://starblast.io/shipeditor/) tab, **Make sure there is nothing in it before pasting the nex code!!**

To change a ship's ID you will head to the first part of the code:
```js
return model =
  name: 'A-Speedster'
  level: 6
  model: 5
  size: 1.5
[...]
  mass: 175
  speed: [90,115]
  rotation: [60,80]
  acceleration: [90,140]
```
 you will then start looking for the ship's `level` and the ship's `mode`.
 Here I took the speedster, and this is what you will be looking for:
```js
return model =
  name: 'A-Speedster'
  level: 6  🠘 Here
  model: 5  🠘 Here
  size: 1.5
[...]
  mass: 175
  speed: [90,115]
  rotation: [60,80]
  acceleration: [90,140]
```
Following the starblast's logic, the ship you want to add will be:
```js
return model =
  name: 'A-Speedster'
  level: *6*  🠘 Here
  model: *32*  🠘 Here
  size: 1.5
[...]
  mass: 175
  speed: [90,115]
  rotation: [60,80]
  acceleration: [90,140]
```
 then press the modexport button, coppy the code and paste it and the end for [that list](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/README.md#the-ship-codes)
 
 then add the ship to the [Ship's definition](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#the-ships-definition) part by adding the Name and the ID:
 ```js
 var ships = [
// Dueling ship
  // Vanilla ships
  Fly_101,
  Odyssey_601,
  Shadow_X_3_602,
[...]
  Persuasion_629,
  Star_Drive_630,
  Typhoon_631,
  // My ships:
  
  A-speedster_632,
  
];
 ```
don't forget to add a coma after the ship's ID.

and then, head to [the variables](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#the-variables) part, see this lane:
```js
var switch_ship_codes = [606,631];
```
and replace the last number by the ship's ID you've just added.
here it would look like this:
```js
var switch_ship_codes = [606, 632 ];
```
and thats pretty much it!
Enjoy your new customized Mod!

## Commands Usage
**Here you will find all of the commands that you can use while running the mod.**

### How to use the GameOver command
Its by far one of the most easiest command to use. All you need to know is the logic behind the code, i made it so when you type in the console:
```js
> gameover(1)
> █
```
A timer of 5 minutes starts, and the ned of thoses 5 minutes the game will kick everyone and close the game.

**But** if you feel like you can run the mod a little more, then just do in the console:
```js
> gameover(0)
> █
```
it will then stop and reset the timer, and you will be able to continue your duels like nothing has ever hapened.

### Moderation Commands

| **Command Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `info` | Gives a bunch of informations about the game and the players in it. | -- | info |
| `idle()` | Makes a specific player stuck in one position and disable his buttons. | idle("**player ID**") | `idle(0)` |
| `unidle()` | Makes a specific player free, and makes his buttons usable again. | unidle("**player ID**") | `unidle(0)` |
| `kick()` | To kick someone from the game. more details [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#kick). | kick("**player ID**","**reason**") | `kick(1)` or `kick(1,"can't stand the power of modding")` |
|`gameover()`| Give the opportunity to end a dueling game smoothly | gameover(**0 or 1**) | `gameover(1)` |

### Basic Commands

| **Command Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `set()` | basically replace: game.ships[0].set({});. | set("**player ID**","**[What ship](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-type)**","**[How many crystals](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-crystals)**","**[What stats](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-stats)**") See more about it [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#set-command) | `set(0,605,500,45232455)` |
| `crystals()` | To give a certain amout of crystals to someone. | crystals("**[amount of gems](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-crystals)**") | `crystals(720)` |
| `tpto()` | To teleport a player to another player. | tpto("**player ID**","**to player ID**") | `tpto(0,1)` |
| `tp()` | To teleport someone at specific coordinates. | tp("**player ID**","**X value**","**Y value**") | `tp(0,200,200)` |
| `tpall()` | To teleports everyone at specific coordinates. | tpall("**X value**","**Y value**") | `tpall(200,200)` |
| `say("")` | To make a text appear while playing. | say("**Your message**") Writing `say()` will delete your message. | `say("The game ends soon")` |
