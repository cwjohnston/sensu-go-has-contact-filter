// Contains all of the test cases from ../spec/no_entity_contact_spec.js such that they can be ran using 
// the Otto JS VM.  During the test, the current version of lib/no_entity_contact.js is appended to this file
// and ran with Otto

function no_entity_contact_test0() {
    var msg = "returns true when event has no labels";
    var event = {};
    var result = no_entity_contact(event);

    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function no_entity_contact_test1() {
    var msg = "returns true when event has only some of the expected labels";
    var event = {
        check: {},
        entity: {
            labels: {}
        }
    };
    var result = no_entity_contact(event);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

function no_entity_contact_test2() {
    var msg = "returns false when event has only entity contacts";
    var event = {
        check: {},
        entity: {
            labels: {
                contacts: "foo,bar,baz"
            }
        }
    };
    var result = no_entity_contact(event);
    if (result) {
        console.log("FAILED ❌ " + msg);
    } else {
        console.log("PASSED ✅ " + msg);
    }
}

function no_entity_contact_test5() {
    var msg = "returns true when labels are empty strings";
    var event = {
        entity: {
            labels: {
                contacts: ""
            }
        },
        check: {}
    }
    var result = no_entity_contact(event);
    if (result) {
        console.log("PASSED ✅ " + msg);
    } else {
        console.log("FAILED ❌ " + msg);
    }
}

console.log("Testing no_entity_contact");
no_entity_contact_test0();
no_entity_contact_test1();
no_entity_contact_test2();
no_entity_contact_test5();