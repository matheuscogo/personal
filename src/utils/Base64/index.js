import { Base64 } from "js-base64"

const decodeBase64 = () =>{
    try {

        var query = window.location.search.substring(1).split('&')
        var data = {}
        query.forEach(function (parte) {
            var chaveValor = parte.split('=')
            var chave = chaveValor[0]
            var valor = chaveValor[1]
            data[chave] = valor
        })
        
        const base64ToObject = JSON.parse(Base64.decode(data.param))
        
        return base64ToObject
    } catch (e) {
        return {}
    }
}

export { decodeBase64 }