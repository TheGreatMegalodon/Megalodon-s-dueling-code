<div align="center">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/Photo_MegsDueling.png" width="1000" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

# Meg's dueling Documentation

### Mod Versions: 
* **v0.3.3**
* **v1.0s**  *(Most used)*

### Mod creator: 
* **Megalodon**

### Coding support:
* **Lotus/Notus**
* **Bhpsngum**

## Support
* [Support Discord Server](https://discord.gg/KXvCq4N)
* Discord: Megalodon#0001

## Comming soon!!

```diff
- None yet
```

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
* [0.3.3](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Meg's%20Dueling%20Full.js) (Full Version)
* [1.0s](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Meg's%20Dueling%20Optimized.js) (Optimized Version)

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

```diff
- Incomming
```

## Commands Usage
**Here you will find all of the commands that you can use while running the mod.**

### How to use the GameOver command

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
