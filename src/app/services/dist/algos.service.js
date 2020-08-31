"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlgosService = void 0;
var core_1 = require("@angular/core");
var AlgosService = /** @class */ (function () {
    function AlgosService() {
        this.code = '';
        this.codePrenoms = "";
    }
    AlgosService.prototype.getVoyelOnString = function (inputString) {
        var voyellePattern = /['aeiou']/gi;
        var voyelles = inputString.match(voyellePattern).join('').toUpperCase();
        return voyelles;
    };
    AlgosService.prototype.getConsonneOnString = function (inputString) {
        var consonnePattern = /(?![aeiou])[a-z]/gi;
        var consonne = inputString.match(consonnePattern).join('').toUpperCase();
        return consonne;
    };
    AlgosService.prototype.ConstituateSurnameCode = function (inputString) {
        var consonna = this.getConsonneOnString(inputString);
        if (consonna.length === 3) {
            this.code = consonna;
        }
        else if (consonna.length > 3) {
            //console.log("nombre sup à 3");
            this.code = consonna.slice(0, 3);
        }
        else {
            var voyelles = this.getVoyelOnString(inputString);
            console.log('nombre inf 3');
            if (consonna.length === 1) {
                this.code = consonna.concat(voyelles.substr(0, 2));
            }
            if (consonna.length === 2) {
                this.code = consonna.concat(voyelles.substr(0, 1));
            }
        }
    };
    AlgosService.prototype.getFirstNameCode = function (inputText) {
        var stringLenght = inputText.length;
        console.log(stringLenght);
        if (stringLenght === 1) {
            var inputString = inputText.concat('XX');
            this.ConstituateSurnameCode(inputString);
        }
        if (stringLenght === 2) {
            var inputString = inputText = inputText.concat('XX');
            this.ConstituateSurnameCode(inputString);
        }
        return this.code;
    };
    // code pour la gestion des prenoms
    AlgosService.prototype.setPrenomCode = function (prenoms) {
        var prenom = prenoms.replace(' ', '');
    };
    AlgosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AlgosService);
    return AlgosService;
}());
exports.AlgosService = AlgosService;
