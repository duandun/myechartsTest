/**
 * Created by changrui on 15/12/16.
 */

///<reference path="Validation.ts"/>
///<reference path="ZipCodeValidator.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
// Some samples to try
var strings = ['Hello', '9002', '101'];
// Validators to use
var validators: {[s: string]: Validation.StringValidator;} = {};
validators['Zip code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});



