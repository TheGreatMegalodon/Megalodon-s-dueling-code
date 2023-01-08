<div align="center">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/Photo_MegsDueling.png" width="2000" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

# Meg's dueling Documentation

### Mod Versions: 
* **v1.3.3**
* **v1.0.0s**

### Mod creator: 
* **Megalodon**

### Coding support:
* **Lotus**
* **Bhpsngum**

## Whats new!
- Fixed issues.
- Better optimization.
- Starblast vanilla full shiptree added
- Buttons reworked :
  - Next ship
  - Previous Ship
  - Stats Button
- Removed a useless button: (Stats2)
- Added a BETA logo, because why not

## Comming soon!!
* More features on the AFK Checker system.
* More documentation.

## Support
* [Support Discord Server](https://discord.gg/KXvCq4N)
* Discord: Megalodon#0001

## Summary
* [Help](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#help)
  * [How to host a dueling game](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#how-to-host-a-dueling-game)
  * [Kick](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#kick)
  * [Ban](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ban)
  * [GameOver](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#gameover-command)
* [SET command](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#set-command)
  * [Ship Type](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-type)
  * [Ship Crystals](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-crystals)
  * [Ship Stats](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-stats)
* [Add your own ships](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#add-your-own-ships)
* [Mod's Commands](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#mods-commands) 
  * [Moderation Commands](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#moderation-commands)
  * [Basic Commands](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#basic-commands)

## Help

**⚠️ Small skills in Modding/Coding are required to use thoses commands and use the mod.**

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
* [1.3.3](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Meg's%20Dueling%20Official.js) (Official Version)
* [1.0.0s](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Meg's%20Dueling%20Classic.js) (Classical Version)

Then just simply paste the version you choosed in your Modding tab.

and enjoy!

### Kick

To kick a player it is very easy. While your mod is running, you first need to write in the console:

```js
> info█
```

Once you've press "ENTER" the mod is going to reply you with something similar as this:

```js
Total amount of aliens: 0
Total amount of asteroids: 0
Total amount of players: 2
 
Banned players: Lotus
 
Player's and their index's:
  
index: 0, Name: Megalodon, Type: 613, Alive: true
Coordinates: X: 7, Y: 3
index: 1, Name: Kylo, Type: 601, Alive: false
Coordinates: X: 105, Y: 356

> █
```

While looking at it, you can see a few informations.

Firstly, you can obviously see this:

```js
Total amount of aliens: 0
Total amount of asteroids: 0
Total amount of players: 2
 
Banned players: Lotus
```

This shows you the number of aliens in the game the number of asteroids in the game and the number of players in the game.
Thoses informations can be useful when you like to make a mess in modding!

Right under it, the banned players name are shown.

Next we have all of the interesting stuff.

```js
Player's and their index's:

index: 0, Name: Megalodon, Type: 613, Alive: true
Coordinates: X: 7, Y: 3
index: 1, Name: Kylo, Type: 601, Alive: false
Coordinates: X: 105, Y: 356
```

These informations shows you the index of a player and his name. Which can be useful to recognize the player you want to kick, you can also see the ship he have, if he is dead or not, and his coordinates.

To kick a player you will only need the first lane:

```js
index: 0, Name: Megalodon, Type: 613, Alive: true
```

Watch carefuly the names, pick your cible and watch his index, in my case its 0.
The command you're gonna be using to kick someone is:

```js
> kick()
> █
```

Remember the index, of the player, and write it down between the parenthesis.

For my case its gonna look like this:

```js
> kick(0)
> █
```

Once you've press "ENTER" this is what you should see:

```js
> kick(0)
 Player: Megalodon, index: 0 Has successfully been kicked
 
> █
```

Which mean, that you have successfully kick someone!

You can also add a custom reason, but keep in mind that this part is optional.
but if you still want to set a custom reason you will need to write it like this:

```js
> kick(0,"Not skilled enough to survive")█
```

you can then put anything you want between the quotation marks.

If an error shows up, please restart the mod.

### Ban

It is vers easy aswell to ban a player.
The ban system is "NAME" based, which means to counter a ban, the player just needs to change his name.

There are no other way to ban a player.
(DM me on discord if you have any other ideas on how we could imporve the banning system, credits will also be given).

In the console just like the "Kick" Command, you will have to type:
```js
> info█
```
(I will skip a few parts, for more details check: [Kick](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#kick))

Once you've got the Index of the player you want to ban just simply write:

```js
> ban("player index")
> █
```
 Once you've press "ENTER" you should see this:
 ```js
> ban(1)
Player: Gilles, index: 1 Has successfully been banned
❗INFO Type: banlist, to see all of the banned players.

> █
 ```
And congratulation you have succesfuly Banned your first player!

But!

You can also add a custom reason like the kick command:
```js
> ban(1,"You cannot rejoin now")
Player: Gilles, index: 1 Has successfully been banned
❗INFO Type: banlist, to see all of the banned players.

> █
```

### Unban

Now unlike the Kick command, the player that has been "banned" cannot rejoin under his original name. 
For him to rejoin, you will have to Unban him. 
To do so you can do this command:
```js
> banlist█
```
Once you've press "ENTER", all of the players that have been banned on the current game will show up with their ban reason.

It should look like this:
```js
> banlist
Index: 0, Name: Megalodon, Reason: Disturbing duels
Index: 1, Name: Nébuleuse, Reason: Being annoying, and Disturbing duels
❗INFO Type: unban(index), to unabn a player.

> █
```
Now with this list you will be looking at the index number. This number will allow you to choose who do you want to Unban. 
In My case I will take Nébuleuse as an example. 
To Unban him I will need to write: 

```js
> unban(1)█
```
By pressing "ENTER" this will show up:
```js
> unban(0)
Player: Nébuleuse, reason: Being annoying, and Disturbing duels, Has successfully been unbanned

> █
```
Well done! you now know how to "Ban" and "Unban" someone from Meg's Dueling Starblast Custom Server!

### GameOver command
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

### SET Command

#### Ship Type

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

#### Ship Crystals

You basically don't need to set any value, its automatically giving the right amount of gems.

if you want to change the ship type, stats, and crystals amount at the same time, you can do:

```js
> set(0,602,560)█
```

#### Ship Stats

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
> set(0,601,0,00000000)█
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

### Add your own ships

```diff
- Comming soon.
```

## Mod's Commands
**Here you will find all of the commands that you can use while running the mod.**

### Moderation Commands

| **Command Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `info` | Gives a bunch of informations about the game and the players in it. | -- | info |
| `idle()` | Makes a specific player stuck in one position and disable his buttons. | idle("**player index**") | `idle(0)` |
| `unidle()` | Makes a specific player free, and makes his buttons usable again. | unidle("**player index**") | `unidle(0)` |
| `kick()` | To kick someone from the game. more details [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#kick). | kick("**player index**","**reason**") | `kick(1)` or `kick(1,"can't stand the power of modding")` |
| `ban()` | To ban someone from the game, works like the `kick()` command | ban("**player index**","**reason**") | `ban(1)` or `ban(1,"You cannot rejoin now ;)")` |
| `unban()` | To unban someone from the game, using the exact same name is really important | unban("**player NAME**") | `unban("Bylolopro")` |
| `banlist` | shows a list of all the banned players and their INDEX to unban them | -- | `banlist` |
| `gameover()` | Give the opportunity to end a dueling game smoothly | gameover(**0 or 1**) | `gameover(1)` |

### Basic Commands

| **Command Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `apc` | You are now able to choose if you want to be able to always pickup gems or not | -- | apc |
| `set()` | basically replace: game.ships[0].set({});. | set("**player index**","**[What ship](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-type)**","**[How many crystals](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-crystals)**","**[What stats](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-stats)**") See more about it [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#set-command) | `set(0,605,500,45232455)` |
| `tpto()` | To teleport a player to another player. | tpto("**player index**","**to player index**") | `tpto(0,1)` |
| `tp()` | To teleport someone at specific coordinates. | tp("**player index**","**X value**","**Y value**") | `tp(0,200,200)` |
| `tpall()` | To teleports everyone at specific coordinates. | tpall("**X value**","**Y value**") | `tpall(200,200)` |
| `say("")` | To make a text appear while playing. | say("**Your message**") Writing `say()` will delete your message. | `say("The game ends soon")` |
