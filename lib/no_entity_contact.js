function no_entity_contact(event) {
    var entity_contacts = [];
    if (event.hasOwnProperty("entity") && event.entity.hasOwnProperty("labels") && event.entity.labels.hasOwnProperty("contacts")) {
        entity_contacts = event.entity.labels.contacts.split(",");
        // filter out any elements which do not contain at least one non-whitespace character
        entity_contacts = entity_contacts.filter(function(entry) { return /\S/.test(entry); });
    }
    if (entity_contacts.length == 0) {
        return true;
    } 
    return false;
}