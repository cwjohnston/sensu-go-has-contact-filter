function trimit(item, index, arr) {
    arr[index] = item.trim();
}

function has_check_contact(event, contact) {
    var check_contacts = [];

    if (event.hasOwnProperty("check") && event.check.hasOwnProperty("labels") && event.check.labels.hasOwnProperty("contacts")) {
        check_contacts = event.check.labels.contacts.split(",");
        check_contacts.forEach(trimit);
    }

    // if there are no contacts, the event is not allowed
    if (check_contacts.length == 0) {
        return false;
    }

    // allow the event if contact is present in check contacts
    if (check_contacts.indexOf(contact.trim()) >= 0) {
        return true;
    }

    // otherwise event is not allowed
    return false;
}