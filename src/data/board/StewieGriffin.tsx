import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForStewie_Griffin(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Stewie Griffin", `
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Jiricek
7. CHI: Savoie
8. DET: Lekkerimäki
9. BUF: Nazar
10. ANA: Korchinski
11. SJS: Kemell
12. CBJ: Kasper
13. NYI: Mintyukov
14. WIN: Geekie
15. VAN: Östlund
16. BUF: Lambert
17. NSH: Mateychuk
18. DAL: Howard
19. MIN: Yurov
20. WSH: Kulich
21. PIT: McGroarty
22. ANA: Öhgren
23. STL: Snuggerud
24. MIN: Kulich
25. TOR: Gaucher
26. MTL: Bichsel
27. ARI: Pickering
28. BUF: Chesley
29. EDM: Goyette
30. WIN: Luneau
31. TBL: Firkus
32. ARI: Miro
    `)
}

/*

*/