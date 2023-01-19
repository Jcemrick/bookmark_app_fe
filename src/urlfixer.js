const goodurl = "https://www.google.com"
const midurl = 'www.google.com'
const badurl = 'google.com'

function urlCorrector(url){
    const fullPrefix = "https://www."
    const httpPrefix = "https://"
    const wwwPrefix = 'www.'

    if (url.substring(0,12) === fullPrefix){
        return(url)
    } else if (url.substring(0,4) === wwwPrefix){
        return (httpPrefix+url)
    } 
    else if (url.substring(0,12)!== fullPrefix && url.substring(0,4) !== wwwPrefix){
        return(fullPrefix+url)
    }
}

export default urlCorrector