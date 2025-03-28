type Elem = 'B' | 'R' | 'Y' | 'X'

type Line = Elem[]

type Grid = Line[]

type GridSpec = {
    dimention: number;
    seed: number;
}

type Repartition = { r: number, b: number, y: number, x: number, j: number };

// 8 or 9 per color
// 7 yello and one black
// total = 25


function shuffle(input: string, seed: number): string {

    function halfShuffle(input: string): string {
        var left = '';
        var middle = '';
        var right = '';
        for (var i = 0; i < input.length; i++) {
            var modRes = i % 3;
            if (modRes == 0) {
                left = left + input[i];
            } else if (modRes == 1) {
                middle = middle + input[i];
            } else {
                right = right + input[i];
            }
        }

        return left + middle + right;
    }

    var ret = input;
    for (var i = 0; i < 100 + (seed % 100); i++) {
        ret = halfShuffle(ret);
    }
    return ret;
}

function repartition(count: number): Repartition {
    const r = Math.round(8 / 24 * count);
    const b = Math.round(8 / 24 * count);
    const x = Math.round(1 / 24 * count);
    return {
        r: r,
        b: b,
        y: count - (r + b + x + 1),
        x: x,
        j: 1,
    };
}

function genGrid(gridSpec: GridSpec): Grid {

    const r25 = repartition(25);
    const r36 = repartition(36);
    console.log("REPARTION: 25", repartition(25), "total:", r25.b + r25.j + r25.r + r25.x + r25.y);
    console.log("REPARTION: 36", repartition(36), "total:", r36.b + r36.j + r36.r + r36.x + r36.y);

    const rep = repartition(gridSpec.dimention * gridSpec.dimention);

    var allCards: string = '';
    // add all red cards
    allCards = allCards + 'R'.repeat(rep.r + (gridSpec.seed % 2 ? rep.j : 0));
    allCards = allCards + 'B'.repeat(rep.b + (gridSpec.seed % 2 ? 0 : rep.j));
    allCards = allCards + 'Y'.repeat(rep.y);
    allCards = allCards + 'X'.repeat(rep.x);

    // console.log("SEED:", gridSpec.seed);s
    // console.log("MY LIST:", allCards);
    // console.log("My ARRAY:", Array.from(allCards));

    const myArray: Line = <Line>Array.from(shuffle(allCards, gridSpec.seed));

    // console.log("MY SLICE:", myArray.slice(0, 5));

    var ret: Grid = [];

    // ret.push(myArray.slice(0, 5));
    // ret.push(myArray.slice(5, 10));
    // ret.push(myArray.slice(10, 15));
    // ret.push(myArray.slice(15, 20));
    // ret.push(myArray.slice(20, 25));

    const total = gridSpec.dimention * gridSpec.dimention;
    for (var i = 0; i < total; i += gridSpec.dimention) {
        ret.push(myArray.slice(i, i + gridSpec.dimention));
    }

    const lineLength = 5;

    var i = 0;


    return ret;
}

const oneList = ['R', 'Y', 'R', 'B', 'Y', 'Y', 'X', 'B', 'R'];



export { genGrid };
export type { Elem, Line, Grid, GridSpec };