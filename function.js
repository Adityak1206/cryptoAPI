const mongo = require('../Project3/mongo');
const saveCrypto = async (symbol, price) => {
    const product = new mongo({
        SYMBOL: symbol,
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
