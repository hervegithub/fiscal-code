"use strict";
exports.__esModule = true;
exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.initUserInfos = function () {
        this.firstName = '';
        this.lastName = '';
        this.birthday = '';
        this.genre = '';
        this.place = '';
    };
    Users.prototype.getFirstName = function () {
        return this.firstName;
    };
    Users.prototype.setFirstName = function (firstname) {
        this.firstName = firstname;
    };
    Users.prototype.getLastName = function () {
        return this.lastName;
    };
    Users.prototype.setLastName = function (lastname) {
        this.lastName = lastname;
    };
    Users.prototype.getBirthday = function () {
        return this.birthday;
    };
    Users.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Users.prototype.getGesnre = function () {
        return this.genre;
    };
    Users.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Users.prototype.getPlace = function () {
        return this.place;
    };
    Users.prototype.setPlace = function (place) {
        this.place = place;
    };
    return Users;
}());
exports.Users = Users;
