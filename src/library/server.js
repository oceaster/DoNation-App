
const getServerAdr = () => {
    if (window.location.href.startsWith('http://localhost:')){
        return 'http://localhost:8000/'
    } else {
        return window.location.href
    }
}


const serverAdr = getServerAdr()

export default serverAdr
