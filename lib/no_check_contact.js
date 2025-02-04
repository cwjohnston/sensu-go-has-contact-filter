function no_check_contact(event) {
    var check_contacts = [];

    if (event.hasOwnProperty("check") && event.check.hasOwnProperty("labels") && event.check.labels.hasOwnProperty("contacts")) {
        check_contacts = event.check.labels.contacts.split(",");
        // filter out any elements which do not contain at least one non-whitespace character
        check_contacts = check_contacts.filter(function(entry) { return /\S/.test(entry); });
    }

    if (check_contacts.length == 0) {
        return true;
    }
    return false;
}