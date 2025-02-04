function trimit(item, index, arr) {
    arr[index] = item.trim();
}

function has_entity_contact(event, contact) {
    var entity_contacts = [];

    if (event.hasOwnProperty("entity") && event.entity.hasOwnProperty("labels") && event.entity.labels.hasOwnProperty("contacts")) {
        entity_contacts = event.entity.labels.contacts.split(",");
        entity_contacts.forEach(trimit);
    }

    // if there are no contacts, the event is not allowed
    if (entity_contacts.length == 0) {
        return false;
    }

    // allow the event if contact is present in check contacts
    if (entity_contacts.indexOf(contact.trim()) >= 0) {
        return true;
    }

    // otherwise event is not allowed
    return false;

}