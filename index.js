
var Myo = require('myo');

var FB = require

FB.api("/POST_ID/likes", 'post',function(response) {
    if(response === true) {
        alert("done!");
    }
});