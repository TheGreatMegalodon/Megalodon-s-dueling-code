<div align="center">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/Photo_MegsDueling.png" width="900" alt="Megalodon-s-dueling-code" /></a>
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

### How to kick a player:
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

## Commands
You will find here all of the commands in the mod that you can use.

| - | - |
| - | - |

## Support
* [My Discord Server](https://discord.gg/KXvCq4N)
* Discord: Megalodon#0001
