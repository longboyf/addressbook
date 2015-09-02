var seedContacts = function () {

  if (!localStorage.contacts) {

    localStorage.contacts = JSON.stringify({
      firstName: "Chase",
      lastName: "Adams",
      phone: "867-5309",
      likes: ["dogs", "computing"],
      birthday: "Feb 01, 2000",
      single: false
    }, {
      firstName: "Scooby",
      lastName: "Doo",
      phone: "555-5555",
      likes: ["scooby snacks", "van"],
      birthday: "Feb 01, 2000",
      single: false
    });
  }
};

seedContacts();
