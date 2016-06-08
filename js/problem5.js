"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here
function changeElementText(element, answer) {
    $(element).text(answer);
}


function reverseWrittenOrder( advertisement ){

    changeElementText("#totalWordCount", countWords(advertisement));
    changeElementText("#advertisingText", formatAdvertisement(advertisement));

    advertisement[1] = reverseLine(advertisement[1]);

    changeElementText("#correctAdvertisingText", formatAdvertisement(advertisement));
}


function formatAdvertisement(advertisement){
    var str = "";
    for(var i = 0; i < advertisement.length; i ++){
        for(var j = 0; j < advertisement[i].length; j ++){
            str += advertisement[i][j] + " ";
        }
    }
    return str;
}

function reverseLine( line ){
    for( var i = 0; i < line.length/2; i ++){
        var str = line[i];
        line[i] = line[ line.length -1 - i];
        line[ line.length -1 - i] = str;
    }
    return line;
}

function countWords (advertisement){
    var count = 0;
    for(var i = 0; i < advertisement.length; i ++){
        for(var j = 0; j < advertisement[i].length; j ++){
            count += 1;
        }
    }
    return count;
 }
