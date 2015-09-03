require("../app.scss");

$("#app").append("hello world!");

var seedContacts = function () {

};

var addToLocalStorage = function (contacts) {
  localeStorage.contacts = JSON.stringify(contacts); //
};

var getContacts = function () {
  return JSON.parse(localStorage.contacts);
};

var getContact = function (idx) {
  return getContacts()[idx];
};

var addContact = function (contact) {
  var contacts = getContacts();
  contacts.push(contact);
  addToLocalStorage(contacts);
  return contact;
};

var editContact = function (idx, contact) { //idx => int, contact => {...}
  var contacts = getContacts(); //contacts => [{...}...]
  contacts[idx] = contact;
  addToLocalStorage(contacts);
  return contact;
};

var removeContact = function (idx) {
  var contacts = getContacts();
  var contact = contacts.splice(idx, 1)[0];
  addToLocaleStore(contacts);
  return contact;
};


window.getContacts = getContacts;

var generateAddressBook = function () {
  $("#app").append("<table id=\"address-book\"></table>");
  $("#address-book").append("<thead><th>Name</th></thead>");
  var contactTmpl = _.template($("#contact-template").html());
  contacts.getContacts().forEach(function (contact) {
    $("#address-book").append(contactTmpl(contact));
    // add to the template
    // add to the table

  })
};

generateAddressBook();