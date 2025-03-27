type Elem = 'B' | 'R' | 'Y' | 'X'

type Line = Elem[]

type Grid = Line[]

// 8 or 9 per color
// 7 yello and one black
// total = 25


function shuffle(input : string) : string {

    function halfShuffle(input : string) : string {
        var left = '';
        var middle = '';
        var right = '';
        for (var i = 0; i < input.length; i++) {
            var modRes = i % 5;
            if (modRes == 0) {
                left = left + input[i]; 
            } else if (modRes == 1) {
                middle = middle + input[i]; 
            } else {
                right = right + input[i]; 
            }
        }
        
        return  left + middle + right;
    }

    var ret = input;
    for (var i = 0; i < 10000; i++) {
        ret = halfShuffle(ret);
    }
    return ret;
}

function genGrid() : Grid {
    var allCards : string = '';
    // add all red cards
    allCards = allCards + 'R'.repeat(8);
    allCards = allCards + 'B'.repeat(9);
    allCards = allCards + 'Y'.repeat(7);
    allCards = allCards + 'X'.repeat(1);

    console.log("MY LIST:", allCards);
    console.log("My ARRAY:", Array.from(allCards));

    const myArray: Line = <Line> Array.from(shuffle(allCards));

    console.log("MY SLICE:", myArray.slice(0, 5));

    var ret : Grid = [];

    ret.push(myArray.slice(0, 5));
    ret.push(myArray.slice(5, 10));
    ret.push(myArray.slice(10, 15));
    ret.push(myArray.slice(15, 20));
    ret.push(myArray.slice(20, 25));

    const lineLength = 5;

    var i = 0;


    return ret;
}

const oneList = ['R', 'Y', 'R', 'B', 'Y', 'Y', 'X', 'B', 'R'];



export { genGrid };
export type { Elem, Line, Grid };