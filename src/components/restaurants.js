import fetch from 'node-fetch';

export default (req, res) => {
    res.statusCode = 200;
    fetch('http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ae1f69b84f3d5295&lat=35.66&lng=139.72&range=3&order=4&count=50&lunch=1&genre=G014&format=json')
        .then(res => res.json())
        .then(data => res.json(data));
}