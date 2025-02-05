// Contains all of the test cases from ../spec/has_check_contact_spec.js such that they can be ran using 
// the Otto JS VM.  During the test, the current version of lib/has_check_contact.js is appended to this file
// and ran with Otto

function has_check_contact_test0() {
    var msg = "returns false when check has no labels";
    var event = {};
    var result = has_check_contact(event, "any");
    
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}
function has_check_contact_test1() {
    var msg = "returns false when event has an empty labels map";
    var event = {
        check: {
            labels: {}
        },
        entity: {}
    }

    var result = has_check_contact(event, "any");

    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function has_check_contact_test2() {
    var msg = "returns true when event has only check contacts, one of which matches";
    var event = {
        check: {
            labels: {
                contacts: "foo,bar,baz"
            }
        },
        entity: {}
    };

    var result = has_check_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}


function has_check_contact_test5() {
    var msg = "returns true when check contacts match exactly";
    var contact = "foo"
    var event = {
        check: {
            labels: {
                contacts: contact
            }
        }
    };

    var result = has_check_contact(event, contact);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_check_contact_test6() {
    var msg = "returns true when check contacts values contains a match";
    var event = {
        check: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };
    var result = has_check_contact(event, "bar");

    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_check_contact_test10() {
    var msg = "returns true when check contacts match, even with blank space in commma separated values";
    var event = {
        check: {
            labels: {
                contacts: "foo, bar , baz"
            }
        }
    };

    var result = has_check_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_check_contact_test13() {
    var msg = "returns true when contacts match, even with email address as contact name";
    var event = {
        check: {
            labels: {
                contacts: "invalid@example.com, do-not-reply@example.com, steve@example.com"
            }
        }
    };

    var result = has_check_contact(event, "do-not-reply@example.com");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

console.log("Testing has_check_contacts")
has_check_contact_test0();
has_check_contact_test1();
has_check_contact_test2();
has_check_contact_test5();
has_check_contact_test6();
has_check_contact_test10();
has_check_contact_test13();