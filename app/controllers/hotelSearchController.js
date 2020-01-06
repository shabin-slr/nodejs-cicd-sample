const hotelSearchService = require("../services/hotelSearchService")

let handleSearchRequest = (req, res) => {
    hotelSearchService.searchHotels(req.query)
    .then(hotels=>{
        res.send(hotels);
        //res.send(JSON.stringify(hotels, null, 8).replace(/\n/g, "<br>").replace(/\s/g, "&nbsp"));
    }).catch(e=>{
        console.error(e);
        res.status(500).send({errors : ["Internal Server Error"]});
    })
};

module.exports = {
    handleSearchRequest : handleSearchRequest
}