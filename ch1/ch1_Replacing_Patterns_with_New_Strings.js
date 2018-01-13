//Date: 2017-12-11
//
//Notes from 'Java script Cookbook 2nd E'
/////////////////////////////////////////////////////////////////;)

var searchString = "Now is the time, this is the tame";

var re = /t\w{2}e/g;
//var re = new RegExp('t\\w{2}e',"g");
// optional regex object.

var replacement = searchString.replace(re, "place");



console.log(replacement);


