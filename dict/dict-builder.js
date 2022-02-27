// * I read all json dicts and filter into dict of five letter words : FIVE.json

const fs = require('fs')

const FIVE = {}
const special = [' ','-']
const hasSpecialChar = word=>special.filter(ch=>word.includes(ch)).length!==0

for(let a=97;a<=122;a++){
    const ch = String.fromCharCode(a)
    let dict = require(`./wordset-dictionary/data/${ch}.json`)
    Object.keys(dict).forEach(word=>{
        word = word.toLowerCase()
        if(word.length===5)
        if(!hasSpecialChar(word))
            FIVE[word] = dict[word]
    })
}


fs.writeFileSync('./five.json', JSON.stringify({five: FIVE }) , err=>{
    if(err)
        console.log(' ERROR ', err)
    else
        console.log(' SUccess ')
})

return 1;