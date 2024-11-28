function convertMilliseconds(ms) {
    return {
        d: Math.floor(ms/(1000*60*60*24)),
        h: Math.floor(ms/(1000*60*60)),
        m: Math.floor(ms/(1000*60)),
        s: Math.floor(ms/(1000)),
    }
}

console.log(convertMilliseconds(1234567890)); 
