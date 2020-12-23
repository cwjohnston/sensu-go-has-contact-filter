// Contains all of the test cases from ../spec/no_contacts_spec.js such that they can be ran using 
// the Otto JS VM.  During the test, the current version of lib/no_contacts.js is appended to this file
// and ran with Otto

function no_contacts_test0() {
    var msg = "returns true when event has no labels";
    var event = {};
    var result = no_contacts(event);

    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function no_contacts_test1() {
    var msg = "returns true when event has only some of the expected labels";
    var event = {
        check: {},
        entity: {
            labels: {}
        }
    };
    var result = no_contacts(event);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function no_contacts_test2() {
    var msg = "returns false when event has only entity contacts";
    var event = {
        check: {},
        entity: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };
    var result = no_contacts(event);
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function no_contacts_test3() {
    var msg = "returns false when event has only check contacts";
    var event = {
        check: {
            labels: {
                contacts: "foo,bar,baz"
            }
        },
        entity: {}
    };
    var result = no_contacts(event);
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function no_contacts_test4() {
    var msg = "returns true when check and entity labels are empty";
    var event = {
        check: {
            labels: {}
        },
        entity: {
            labels: {}
        }
    };
    var result = no_contacts(event);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function no_contacts_test5() {
    var msg = "returns true when labels are empty strings";
    var event = {
        check: {
            labels: {
                contacts: ""
            }
        }
    }
    var result = no_contacts(event);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

console.log("Testing no_contacts");
no_contacts_test0();
no_contacts_test1();
no_contacts_test2();
no_contacts_test3();
no_contacts_test4();
no_contacts_test5();