import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForTechcoockie(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Techcoockie", `
    1: Cooley
    2: Slafkovsky
    3: Wright
    4: Savoie
    5: Kemell
    6: Nemec
    7: Lambert
    8: Mintyukov
    9: Östlund
    10: Öhgren
    11: Hutson
    12: Jiricek
    13: Lekkerimäki
    14: Howard
    15: Kasper
    16: Gauthier
    17: Sykora
    18: Yurov
    19: Firkus
    20: Nazar
    21: Miroshnichenko
    `)
}

/*
1. Cooley

2. Slafkovsky

3. Wright

4. Savoie

5. Kemell

6. Nemec

7. Lambert

8. Mintyukov

9. Ostlund

10. Ohgren

11. Hutson

12. Jiricek

13. Lekkerimaki

14. Howard

15. Kasper

16. Gauthier

17. Sykora

18. Yurov

19. Firkus

20. Nazar

21. Miroshnichenko

*/