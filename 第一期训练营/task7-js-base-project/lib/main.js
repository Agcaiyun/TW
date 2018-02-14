function main(num){
    let baseStr = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    let baseStrOnWall = ' of beer on the wall';
    let baseStrOfBeer = ' of beer.\n';
    let roundStr = `Take one down and pass it around, `;
    let roundStr1 = 'no more bottles of beer on the wall.\n'

    if(num === 0){
        return baseStr;
    }else{
        let str = '';

        for(let i = num;i > 0;i--){
            let currentBottle = i < 2 ? 'bottle' : 'bottles';
            let nextBottle = i - 1 < 2 ? 'bottle' : 'bottles';
            
            if (i === 1) {
                str += i + ' ' + currentBottle + baseStrOnWall + ', ' + i + ' ' + currentBottle + baseStrOfBeer + roundStr + roundStr1;
            }else{
                str += i + ' ' + currentBottle + baseStrOnWall + ', ' +  i + ' ' + currentBottle + baseStrOfBeer + roundStr + (i - 1) + ' ' + nextBottle + baseStrOnWall + '.\n';
            }
        }
        str += baseStr;
        return str;
    }
}

module.exports = main;
