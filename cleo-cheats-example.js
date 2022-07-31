/// <reference path=".config/vc.d.ts" />

import * as Cheats from './cleo-cheats/index';
import { CheatCode } from './cleo-cheats';

const FRAME_ID = 'CHEAT_MENU';
const mainWindowTitle = 'Cheat menu';

let menuVisible = false;
let selectedCheadId = 0;
let buttonClicked = false;

const cheatsCombo = [
    {
        text: 'Weapon set 1',
        cheat: new CheatCode(Cheats.ThugsTools)
    },
    {
        text: 'Weapon set 2',
        cheat: new CheatCode(Cheats.ProfessionalTools)
    },
    {
        text: 'Weapon set 3',
        cheat: new CheatCode(Cheats.NutterTools)
    },
    {
        text: 'Aspirine',
        cheat: new CheatCode(Cheats.Aspirine)
    },
    {
        text: 'Panzer',
        cheat: new CheatCode(Cheats.Panzer)
    },
    {
        text: 'Rubbish Car',
        cheat: new CheatCode(Cheats.RubbishCar)
    }
]

function toggleMenuVisibility() {
    menuVisible = !menuVisible;
}

while (true) {
    wait(0);

    if (Pad.IsKeyUp(81)) {
        toggleMenuVisibility();
    }

    if (menuVisible) {
        ImGui.BeginFrame(FRAME_ID);
            ImGui.Begin(mainWindowTitle, true, false, false, false, false);
                
                ImGui.SetCursorVisible(true);
                selectedCheadId = ImGui.ComboBox('Select a cheat code', cheatsCombo.map(value => value.text).join(','), selectedCheadId);
                buttonClicked = ImGui.Button('Activate', 100.0, 40.0);
                
                if (buttonClicked) {
                    cheatsCombo[selectedCheadId].cheat.run();
                }
            ImGui.End();
        ImGui.EndFrame();
    }
}