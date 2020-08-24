"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_modal_1 = require("../modal/user.modal");
var ContentComponent = /** @class */ (function () {
    function ContentComponent(fb) {
        this.fb = fb;
        this.user = new user_modal_1.Users();
        this.user.initUserInfos();
        this.rForm = fb.group({
            'firstName': [null, forms_1.Validators.required],
            'lastName': [null, forms_1.Validators.required],
            'birthday': [null, forms_1.Validators.required],
            'genre': [null, forms_1.Validators.required],
            'place': [null, forms_1.Validators.required]
        });
    }
    ContentComponent.prototype.onSoumission = function (value) {
    };
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'app-content',
            templateUrl: './content.component.html',
            styleUrls: ['./content.component.scss']
        })
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
