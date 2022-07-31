# cleo-cheats
A small module that allows you to use cheat codes for GTA Vice City, developed for [Cleo Redux](https://github.com/cleolibrary/CLEO-Redux).

## How to use it
1. Download and install Cleo Redux from [website](https://re.cleo.li/);
2. Copy `cleo-cheats` folder and `cleo-cheats.js` in `/Grand Theft Auto Vice City/Cleo` folder.
3. Create a new JavaScript file in this folder and import copied files.

It could be something like this:

```
import { Aspirine } from './cheats.js';
import { CheatCode } from './cheatCode.js'

const cheat = new CheatCode(Aspirine);

while (true) {
  wait(0);
  
  // press the down arrow key
  if (Pad.IsKeyDown(40)) {
    cheat.run();
  }
}
```

If you want to try it in game, copy `cleo-cheats-example.js` in your `Cleo` folder, start the game and press `Q` in your keyboard for display runing cheats panel.
