const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const ipa = products.filter(function(product){
	return product.category == 'IPA'
})
const apa = products.filter(function(product){
	return product.category == 'APA'
})

let mainController = {
    index: (req, res) => { 
        res.render("index", {
            lista: products,
            ipa,
            apa
        }); 
    },
    error: (req, res) => { 
        res.render("404");
    }
}


module.exports = mainController;