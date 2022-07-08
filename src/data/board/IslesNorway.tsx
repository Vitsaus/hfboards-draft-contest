import { TBoard } from "../../types";
import { Picker } from "../boards";

export function getBoardForIslesNorway(pick: Picker): TBoard {
    return {
        user: "IslesNorway",
        picks: [
            pick("Wright"),
            pick("Slaf"),
            pick("Cooley"),
            pick("Nemec"),
            pick("Jiricek"),
            pick("Gauthier"),
            pick("Kemell"),
            pick("Lekkerimaki"),
            pick("Kasper"),
            pick("Korchinski"),
            pick("Mintyukov"),
            pick("Östlund"),
            pick("Mateychuk"),
            pick("Savoie"),
            pick("Bichsel"),
            pick("Yurov"),
            pick("Östlund"),
            pick("Howard"),
            pick("Chesley"),
            pick("Geekie"),
            pick("Snuggerud"),
            pick("Kulich"),
            pick("Mateychuk"),
            pick("Miroshnichenko"),
            pick("Del Bel Belluz"),
            pick("Pickering"),
            pick("McGroarty"),
            pick("Bichsel"),
            pick("Gaucher"),
            pick("Beck"),
            pick("Luneau"),
            pick("Casey")
        ]
    }
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Jiricek
6. CBJ: Gauthier
7. OTT: Kemell
8. DET: Lekkerimaki
9. BUF: Kasper
10. ANA: Korchinsky
11. SJS: Mintyukov
12. CBJ: Öhlund
13. NYI: Mateychuck
14. WIN: Savoie
15. VAN: Bichsel
16. BUF: Östlund
17. NSH: Pickering
18. DAL: Howard
19. MIN: Geekie
20. WSH: Yurov
21. PIT: Gaucher
27. ARI: Snuggerud
28. BUF: Lambert
29. EDM: Firkus
30. WIN: Mesar
31. TBL: Trikosov
32. ARI: Hutson
*/