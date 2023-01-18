const badurl = "www.coinbase.com"
const worseurl = 'coinbase.com'
const goodurl = 'https://www.coinbase.com'


function urlCorrector(url){
    const prefix =  'https://www.'
    const www = 'www.'


    if(url.substring(0,12) === prefix){
        return url
    } else if (url.substring(0,12) !== prefix && url.substring(0,4) === www){
        return 'https://'+url
    } else {
        return prefix+url
    }
}

console.log(urlCorrector(
    worseurl
    ))

export default urlCorrector