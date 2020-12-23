// Contains all of the test cases from ../spec/has_contact_spec.js such that they can be ran using 
// the Otto JS VM.  During the test, the current version of lib/has_contact.js is appended to this file
// and ran with Otto

function has_contact_test0() {
    var msg = "returns false when event has no labels";
    var event = {};
    var result = has_contact(event, "any");
    
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}
function has_contact_test1() {
    var msg = "returns false when event has an empty labels map";
    var event = {
        check: {},
        entity: {
            labels: {}
        }
    }

    var result = has_contact(event, "any");

    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function has_contact_test2() {
    var msg = "returns true when event has only entity contacts, one of which matches";
    var event = {
        check: {},
        entity: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };

    var result = has_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_contact_test3() {
    var msg = "returns true when event only has check contacts, one of which matches"
    var event = {
        check: {
            labels: {
                contacts: "foo,bar,baz"
            }
        },
        entity: {}
    };

    var result = has_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_contact_test4() {
    var msg = "returns false when check and entity labels are empty";
    var event = {
        check: {
            labels: {}
        },
        entity: {
            labels: {}
        }
    };
    
    var result = has_contact(event, "any");

    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function has_contact_test5() {
    var msg = "returns true when check contacts match exactly";
    var contact = "foo"
    var event = {
        check: {
            labels: {
                contacts: contact
            }
        }
    };

    var result = has_contact(event, contact);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_contact_test6() {
    var msg = "returns true when check contacts values contains a match";
    var event = {
        check: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };
    var result = has_contact(event, "bar");

    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_contact_test7() {
    var msg = "returns true when entity contacts match exactly";
    var contact = "foo"
    var event = {
        entity: {
            labels: {
                contacts: contact
            }
        }
    };
    var result = has_contact(event, contact);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_contact_test8() {
    var msg = "returns true when check contacts values contains a match";
    var event = {
        entity: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };
    var result = has_contact(event, "bar");
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function has_contact_test9() {
    var msg = "returns false when check has contacts which do not match and entity contains contacts that do match";
    var event = {
        entity: {
            labels: {
                contacts: "foo,qux,bar"
            }
        },
        check: {
            labels: {
                contacts: "baz"
            }
        }
    };
    var result = has_contact(event, "qux");
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

console.log("Testing has_contacts")
has_contact_test0();
has_contact_test1();
has_contact_test2();
has_contact_test3();
has_contact_test4();
has_contact_test5();
has_contact_test6();
has_contact_test7();
has_contact_test8();
has_contact_test9();