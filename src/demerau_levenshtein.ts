



const TokenizeQuery = (query :string) : string[] => {
    const cleaned = cleanQuery(query)

    console.log(cleaned)
    return query.split(' ')
}

const cleanQuery = (input: string): string  =>{
   return input.replace(/[aeiouAEIOU\W_]/g, '')
}

const Demerau_levenshtein = (val1 : string, val2 : string) : number => {
    
    if (val1 === val2) {
        return 0
    }

    const table : number[][] = Array<number>(val1.length +1).fill(0).map(()=> Array<number>(val1.length +1).fill(0));

    for (let i = 0; i <= val1.length; i++) {
    table[i][0] = i;
    }

    for (let j = 0; j <= val2.length; j++) {
     table[0][j] = j;
    }


    for (let val1Index = 1; val1Index <= val1.length; val1Index++) {
        for (let val2Index = 1; val2Index <= val2.length; val2Index++) {
            if (val1[val1Index - 1] === val2[val2Index - 1]) {
                table[val1Index][val2Index] = table[val1Index - 1][val2Index - 1];
            }
            else {
                table[val1Index][val2Index] = 1 + Math.min(table[val1Index - 1][val2Index], table[val1Index][val2Index - 1], table[val1Index - 1][val2Index - 1]);
            }
        }
    }

    return table[val1.length][val2.length];
}


const Main = () => {
    const result =  TokenizeQuery("Hee^1elllo Worl1d")
    console.log(result)

}

Main()