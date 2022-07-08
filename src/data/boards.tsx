import { TBoard, TPick, TPlayer } from "../types";
import { createBoardForIceybigbucks } from "./board/ Iceybigbucks";
import { createBoardForMichaelFarrell } from "./board/ MichaelFarrell";
import { createBoardForRandomTask26 } from "./board/ RandomTask26";
import { createBoardFor57special } from "./board/57special";
import { createBoardForAntonche } from "./board/Antonche";
import { createBoardForArwin } from "./board/Arwin";
import { createBoardForBeauterham } from "./board/Beauterham";
import { createBoardForBhrangerfan0809 } from "./board/Bhrangerfan0809";
import { createBoardForBizz } from "./board/Bizz";
import { createBoardForBrettRichardson } from "./board/BrettRichardson";
import { createBoardForBukwas } from "./board/bukwas";
import { createBoardForCanada4Gold } from "./board/Canada4Gold";
import { createBoardForCapSpace } from "./board/CapSpace";
import { createBoardForCheesymc } from "./board/cheesymc";
import { createBoardForCosmix } from "./board/Cosmix";
import { createBoardForDanyhabsfan } from "./board/danyhabsfan";
import { createBoardForDollardStLaurent } from "./board/DollardStLaurent";
import { createBoardForDraftconsensus } from "./board/draftconsensus";
import { createBoardForGermanSpitfire } from "./board/GermanSpitfire";
import { createBoardForGoldenhands } from "./board/Goldenhands";
import { createBoardForGretzkys99Problems } from "./board/Gretzkys99Problems";
import { createBoardForHamilton_Bulldogs } from "./board/HamiltonBulldogs";
import { createBoardForHer_Slave } from "./board/HerSlave";
import { createBoardForHolyJumpin40 } from "./board/HolyJumpin40";
import { createBoardForHugeInTheShire } from "./board/HugeInTheShire";
import { createBoardForIlvins } from "./board/Ilvins";
import { createBoardForJT3 } from "./board/JT3";
import { createBoardForKaprizovSaveUs } from "./board/KaprizovSaveUs";
import { createBoardForKearns } from "./board/Kearns";
import { createBoardForLavarBall } from "./board/LavarBall";
import { createBoardForLJ7 } from "./board/LJ7";
import { createBoardForM0pe } from "./board/m0pe";
import { createBoardForMaffew } from "./board/Maffew";
import { createBoardForMajormajor } from "./board/majormajor";
import { createBoardForMaplebeasts } from "./board/Maplebeasts";
import { createBoardForMattEllis } from "./board/MattEllis";
import { createBoardForMGK } from "./board/MGK";
import { createBoardForNewdimension } from "./board/newdimension";
import { createBoardForNotTooWideArena } from "./board/NotTooWideArena";
import { createBoardForObtenebris } from "./board/Obtenebris";
import { createBoardForODoyle } from "./board/ODoyle";
import { createBoardForPatmac40 } from "./board/Patmac40";
import { createBoardForPavelBuchnevich } from "./board/PavelBuchnevich";
import { createBoardForPKSpecialist } from "./board/PKSpecialist";
import { createBoardForPostBradMalone } from "./board/PostBradMalone";
import { createBoardForPuckProspects } from "./board/PuckProspects";
import { createBoardForRememberTheName } from "./board/RememberTheName";
import { createBoardForRmx3466 } from "./board/Rmx3466";
import { createBoardForRyancallahan } from "./board/ryancallahan";
import { createBoardForSaabman0508 } from "./board/Saabman0508";
import { createBoardForSlimnipsu } from "./board/slimnipsu";
import { createBoardForSpfan } from "./board/spfan";
import { createBoardForStanleyjub } from "./board/Stanleyjub";
import { createBoardForStewie_Griffin } from "./board/StewieGriffin";
import { createBoardForTechcoockie } from "./board/Techcoockie";
import { createBoardForTheSnipeshow91 } from "./board/TheSnipeshow91";
import { createBoardForTheYardMachine } from "./board/TheYardMachine";
import { createBoardForTrick9 } from "./board/Trick9";
import { createBoardForTryamkin } from "./board/Tryamkin";
import { createBoardForUncleben } from "./board/uncleben";
import { createBoardForVildurson } from "./board/Vildurson";
import { createBoardForWandering_Cynic } from "./board/WanderingCynic";
import { createBoardForYotes4Cup } from "./board/Yotes4Cup";
import { createBoardFor_vivelequebec_ } from "./board/_vivelequebec_";
import { getPlayers } from "./players";

export type Picker = (name: string) => TPick

export function getBoards(players: TPlayer[]): TBoard[] {
    return [
        createBoardForVildurson(players),
        createBoardForYotes4Cup(players),
        createBoardForTrick9(players),
        createBoardForHamilton_Bulldogs(players),
        createBoardForHer_Slave(players),
        createBoardForMattEllis(players),
        createBoardForMaplebeasts(players),
        createBoardForMaffew(players),
        createBoardForTheSnipeshow91(players),
        createBoardForMajormajor(players),
        createBoardForBeauterham(players),
        createBoardForIlvins(players),
        createBoardForRmx3466(players),
        createBoardForKaprizovSaveUs(players),
        createBoardForMGK(players),
        createBoardForGermanSpitfire(players),
        createBoardForTheYardMachine(players),
        createBoardForNotTooWideArena(players),
        createBoardForAntonche(players),
        createBoardForM0pe(players),
        createBoardForPKSpecialist(players),
        createBoardForDollardStLaurent(players),
        createBoardForObtenebris(players),
        createBoardForGoldenhands(players),
        createBoardForArwin(players),
        createBoardForRandomTask26(players),
        createBoardForODoyle(players),
        createBoardForGretzkys99Problems(players),
        createBoardForKearns(players),
        createBoardFor_vivelequebec_(players),
        createBoardForHugeInTheShire(players),
        createBoardForJT3(players),
        createBoardForSlimnipsu(players),
        createBoardForPostBradMalone(players),
        createBoardForLavarBall(players),
        createBoardForCheesymc(players),
        createBoardForLJ7(players),
        createBoardForUncleben(players),
        createBoardForHolyJumpin40(players),
        createBoardForCapSpace(players),
        createBoardForIceybigbucks(players),
        createBoardForCosmix(players),
        createBoardForTechcoockie(players),
        createBoardForDanyhabsfan(players),
        createBoardForWandering_Cynic(players),
        createBoardForNewdimension(players),
        createBoardForDraftconsensus(players),
        createBoardForPavelBuchnevich(players),
        createBoardForBrettRichardson(players),
        createBoardForPuckProspects(players),
        createBoardForTryamkin(players),
        createBoardForRyancallahan(players),
        createBoardForMichaelFarrell(players),
        createBoardForBukwas(players),
        createBoardForRememberTheName(players),
        createBoardForBizz(players),
        createBoardForCanada4Gold(players),
        createBoardForSaabman0508(players),
        createBoardForStanleyjub(players),
        createBoardForStewie_Griffin(players),
        createBoardForPatmac40(players),
        createBoardFor57special(players),
        createBoardForBhrangerfan0809(players),
        createBoardForSpfan(players),
    ]
}

export function makePick(players: TPlayer[], name: string): TPick {
    const player = players.find((player) => {
        return player.name.toLowerCase().includes(name.toLowerCase());
    });

    if (!player) {
        throw new Error(`Player ${name} was not found!`);
    }

    return {
        player,
    }
}

export function getBoard(user: string): TBoard {
    const board = getBoards(getPlayers()).find((board) => {
        return board.user === user;
    });
    if (!board) {
        throw new Error(`Board for: ${user} was not found!`);
    }
    return board;
}

export function getBoardFromSnippet(players: TPlayer[], user: string, text: string): TBoard {
    const picks: TPick[] = text.trim().split('\n').map((line) => {
        const parts = line.split(':');
        const playerName = parts[1].trim() as string;
        return makePick(players, playerName);
    });
    return {
        user,
        picks,
    }
}