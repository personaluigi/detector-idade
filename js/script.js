function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Insira seus dados corretamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'childm.jpg')
            } else if (idade < 24) {
                img.setAttribute('src', 'youngm.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultm.jpg')
            } else {
                img.setAttribute('src', 'oldm.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'childf.jpg')
            } else if (idade < 24) {
                img.setAttribute('src', 'youngf.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultf.jpg')
            } else {
                img.setAttribute('src', 'oldf.jpg')
            }
        }
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}