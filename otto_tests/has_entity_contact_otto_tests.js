// Contains all of the test cases from ../spec/has_check_contact_spec.js such that they can be ran using 
// the Otto JS VM.  During the test, the current version of lib/has_check_contact.js is appended to this file
// and ran with Otto

function has_entity_contact_test0() {
    var msg = "returns false when event has no labels";
    var event = {};
    var result = has_entity_contact(event, "any");
    
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}
function has_entity_contact_test1() {
    var msg = "returns false when event has an empty labels map";
    var event = {
        check: {
            labels: {}
        },
        entity: {}
    }

    var result = has_entity_contact(event, "any");

    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function has_entity_contact_test2() {
    var msg = "returns true when event has only entity contacts, one of which matches";
    var event = {
        check: {},
        entity: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };

    var result = has_entity_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_entity_contact_test3() {
    var msg = "returns true when event only has entity contacts, one of which matches"
    var event = {
        check: {},
        entity: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };

    var result = has_entity_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}


function has_entity_contact_test7() {
    var msg = "returns true when entity contacts match exactly";
    var contact = "foo"
    var event = {
        entity: {
            labels: {
                contacts: contact
            }
        }
    };
    var result = has_entity_contact(event, contact);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_entity_contact_test8() {
    var msg = "returns true when entity contacts values contains a match";
    var event = {
        entity: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };
    var result = has_entity_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_entity_contact_test9() {
    var msg = "returns false when check has contacts which do not match and entity contains contacts that do match";
    var event = {
        entity: {
            labels: {
                contacts: "foo,bar"
            }
        }
    };
    var result = has_entity_contact(event, "qux");
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function has_entity_contact_test10() {
    var msg = "returns true when entity contacts match, even with blank space in commma separated values";
    var event = {
        entity: {
            labels: {
                contacts: "foo, bar , baz"
            }
        }
    };

    var result = has_entity_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_entity_contact_test12() {
    var msg = "returns true when contacts match, even with blank space inside contact name";
    var event = {
        entity: {
            labels: {
                contacts: "foo, steve from accounting , baz"
            }
        }
    };

    var result = has_entity_contact(event, "steve from accounting");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_entity_contact_test13() {
    var msg = "returns true when contacts match, even with email address as contact name";
    var event = {
        entity: {
            labels: {
                contacts: "invalid@example.com, do-not-reply@example.com, steve@example.com"
            }
        }
    };

    var result = has_entity_contact(event, "do-not-reply@example.com");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

console.log("Testing has_entity_contacts")
has_entity_contact_test0();
has_entity_contact_test1();
has_entity_contact_test2();
has_entity_contact_test3();
has_entity_contact_test7();
has_entity_contact_test8();
has_entity_contact_test9();
has_entity_contact_test10();
has_entity_contact_test12();
has_entity_contact_test13();