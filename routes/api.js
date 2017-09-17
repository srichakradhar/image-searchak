
/*
 * GET imagesearch.
 */
const imageSearch = require('image-search-google');

exports.imagesearch = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    if(req.params.search_term){
        var options = {page:1};
        const client = new imageSearch('008635907997645508970:br67gicv6a4', 'AIzaSyDzitNLWEBNtQ_amX1sL6KUxxLALL0_8fI');
        if(req.query.offset){
            options.num = req.query.offset;
        }
        client.search(req.params.search_term, options)
        .then(images => {
            res.send(JSON.stringify(images));
        })
        .catch(error => console.log(error));
    }
    else
        res.send(JSON.stringify({ error: "invalid search term" })); 
};

exports.latest = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: "invalid search term" }));
};