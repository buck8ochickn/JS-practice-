//Date: 2017-12-13
//
//Notes from 'Java script Cookbook 2nd E'
/////////////////////////////////////////////////////////////////;)

var searchString = "Now is the time and this is the time and that is the time";
var pattern = /t\w*e/g;
var matchArray;

var str ="";
//check for pattern with regex exec, if not null process

while ((matchArray = pattern.exec(searchString)) != null) {
    str+="at " + matchArray.index + " we found " + matchArray[0] + "\n";
}

console.log(str);