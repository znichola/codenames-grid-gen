type Elem = 'B' | 'R' | 'Y' | 'X'

type Line = Elem[]

type Grid = Line[]

function genGrid() : Grid {
    return [
        ['B', 'Y', 'Y'],
        ['R', 'Y', 'R'],
        ['X', 'B', 'R']
    ];
}

export { genGrid };
export type { Elem, Line, Grid };