const mongo = require('../Project3/mongo');
const saveCrypto = async (fromSymbol, toSymbol, price) => {
    const product = new mongo({
        FROMSYMBOL: fromSymbol,
        TOSYMBOL: toSymbol,
        PRICE: price,
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
}


module.exports = {
    saveCrypto
}
