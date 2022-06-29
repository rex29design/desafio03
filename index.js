const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('products.txt');

(async function() {
    await contenedor.init()

    await contenedor.save({
        title: 'vino tinto',
        price: 240.56,
        thumbnail: "https://www.vinoteca.com/lindemans-bin-50-shiraz-750ml/p"
    })
    await contenedor.save({
        title: 'vino blanco',
        price: 195.63,
        thumbnail: "https://www.vinoteca.com/lindemans-bin-50-shiraz-750ml/p"
    })
    await contenedor.save({
        title: 'vino espumoso',
        price: 953.10,
        thumbnail: "https://www.vinoteca.com/lindemans-bin-50-shiraz-750ml/p"
    })
    await contenedor.save({
        title: 'vino rosado',
        price: 225.00,
        thumbnail: "https://www.vinoteca.com/lindemans-bin-50-shiraz-750ml/p"
    })

    console.log(contenedor.getAll())

    console.log(contenedor.getById(2))
    
    await contenedor.deleteById(1)

    console.log(contenedor.getAll())

})();