<div align="center">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/Photo_MegsDueling.png" width="1000" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

## Megalodon's dueling code
**Here is my very first dueling mod, I hope you enjoy!**

### Mod Versions: 
* **v0.3.1**
* **v0.3.1s**

### Mod creator: 
* **Megalodon**

### Coding support:
* **Lotus/Notus**
* **Bhpsngum**

## Help

**⚠️ Small skills in modding are required to use thoses commands.**

While runing the mod you can always type:
```js
> help█
```
To see all the commands you can use.

### How to "kick" a player?
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

These informations shows you the ID*(index)* of a player his name which can be useful to recognize the player you want to kick, the ship he have, if he is dead or not, and his coordinates.

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

If an error shows up, please restart the mod.

### How to use the "set" command?

### What is the type?

The `ship.type` is a way to recognize a ship without his name.

The easiest way to explain it to you is this:

<div align="left">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/starblast-1662404446569.png" width="900" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

Lets take the Fly, the Fly is a `Tier 1` and the `first ship` of his list, so his `code/id` is `101`.

Next we can take the A-Speedster, A-Speedster is a `Tier 6` and he is the `5th ship` on his list, which means his `code/id` is `605`

And its the same thing for all of ships in starblast.

### How to set the stats?

Stats are simple as `ship.type`

first you should know that all ships work in a way that their level is equivalent to the number of upgrades they can have per category. For example lets take the `X-Warrior` is a `Tier 4`, if you have followed what i have said before and understood, you should know that his code/ID is 402 because he is a `Tier 4` and he is the `2nd ship` of his list.

with knowing that, you should also know that there are category. first we have:
* The shield group
  * Capacity
  * Regeneration
* The Laser Group
  * Capacity
  * Regeneration
  * Damage
  * Laser Speed
* The Velocity Group
  * Speed
  * Agility

**The crystals and stats parameter are optional, their defaul value is:** 
* crystals: 720
* stats: 88888888

### How to set the crystals

## Commands Usage
**Here you will find all of the commands that you can use while running the mod.**

### Moderation Commands

| **Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `idle()` | Makes a specific player stuck in one position and disable his buttons | idle("**player ID**") | `idle(0)` |
| `unidle()` | Makes a specific player free, and makes his buttons usable again | unidle("**player ID**") | `unidle(0)` |
| `kick()` | To kick someone from the game. more details [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/README.md#how-to-kick-a-player) | kick("**player ID**","**reason**") | `kick(1)` or `kick(1,"can't stand the power of modding")` |

### Basic Commands

| **Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `set()` | basically replace: game.ships[0].set({});. | set("**player ID**","**What ship**","**How many crystals**","**What stats**") See more about it [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/README.md#how-to-use-the-set-command) | `set(0,605,500,45232455)` |
| `crystals()` | To give a certain amout of crystals to someone. | crystals("**amount of gems**") | `crystals(720)` |
| `tpto()` | To teleport a player to another player. | tpto("**player ID**","**to player ID**") | `tpto(0,1)` |
| `tp()` | To teleport someone at specific coordinates. | tp("**player ID**","**X value**","**Y value**") | `tp(0,200,200)` |
| `tpall()` | To teleports everyone at specific coordinates. | tpall("**X value**","**Y value**") | `tpall(200,200)` |
| `say("")` | To make a text appear while playing. | say("**Your message**") Writing say() will delete your message. | `say("The game ends soon")` |

## Support
* [My Discord Server](https://discord.gg/KXvCq4N)
* Discord: Megalodon#0001
