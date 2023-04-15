<div align="center">
  <br />
  <p>
    <a href="https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/"><img src="https://github.com/TheGreatMegalodon/Dueling-Component/blob/main/Megs_Dueling_Images_readme/073a4de7d7f091565295ea95d4b281d9.png" width="2000" alt="Megalodon-s-dueling-code" /></a>
  </p>
</div>

### Mod Version: 
* [1.3.7](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Meg's%20Dueling%20Official.js) Most Popular
* [1.0.0](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code/blob/main/Unofficial%20Meg's%20Dueling.js) Smallest Dueling mod

### Mod creator: 
* **Megalodon**

### Coding support:
* **Lotus**
* **Bhpsngum**

## Support
* [Discord Dueling Server](https://discord.gg/MF7zwS89TU)
* [Support Discord Server](https://discord.gg/KXvCq4N)
* Discord: Megalodon#0001

## Mod's Commands
**Here you will find all of the commands that you can use while running the mod.**

### Moderation Commands

| **Command Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `info` | Gives a bunch of informations about the game and the players in it. | -- | info |
| `idle()` | Makes a specific player stuck in one position and disable his buttons. | idle(**player index**) | `idle(0)` |
| `unidle()` | Makes a specific player free, and makes his buttons usable again. | unidle(**player index**) | `unidle(0)` |
| `kick()` | To kick someone from the game. more details [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#kick). | kick(**player index**,"**reason**") | `kick(1)` or `kick(1,"can't stand the power of modding")` |
| `ban()` | To ban someone from the game, works like the `kick()` command | ban(**player index**,"**reason**") | `ban(1)` or `ban(1,"You cannot rejoin now ;)")` |
| `unban()` | To unban someone from the game | unban(**player index**) | `unban(1)` |
| `banlist` | shows a list of all the banned players and their INDEX to unban them | -- | `banlist` |
| `admin()` | allows you to give the admin power to a player ingame | admin(**player index**, **duration (in seconds)**) | `admin(0)` or `admin(0, 20)` |

### Basic Commands

| **Command Name** | **What is it for** | **How to use it** | **Usage example** |
| - | - | - | - |
| `apc` | You are now able to choose if you want to be able to always pickup gems or not | -- | apc |
| `set()` | basically replace: game.ships[0].set({});. | set(**player index**,**[What ship](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-type)**,**[crystal amount](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-crystals)**,**[What stats](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#ship-stats)**) See more about it [here](https://github.com/TheGreatMegalodon/Megalodon-s-dueling-code#set-command) | `set(0,605,500,45232455)` |
| `say("")` | To make a text appear while playing. | say("**Your message**") Writing `say()` will delete your message. | `say("The game ends soon")` |
