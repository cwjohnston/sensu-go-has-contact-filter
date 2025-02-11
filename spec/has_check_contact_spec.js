describe("has_check_contact", function() {

    it("returns false when event has no labels", function() {
        var event = {}

        expect(has_check_contact(event,"any")).toBe(false);
    });

    it("returns false when event has only some of the expected labels", function() {
        var event = {
            check: {
                labels: {}
            },
            entity: {}
        };

        expect(has_check_contact(event, "any")).toBe(false);
    });

    it("returns true when event has check contacts, one of which matches", function() {
        var contact = "bar"
        var event = {
            check: {
                labels: {
                    contacts: `foo,${contact},baz`
                }
            },
            entity: {}
        };

        expect(has_check_contact(event, contact)).toBe(true);
    });

    it("returns false when check labels are empty", function() {
        var event = {
            check: {
                labels: {}
            },
            entity: {
                labels: {}
            }
        };

        expect(has_check_contact(event, "any")).toBe(false);
    });

    it("returns true when check contacts match exactly", function() {
        var contact = "foo"
        var event = {
            check: {
                labels: {
                    contacts: contact
                }
            }
        };

        expect(has_check_contact(event, contact)).toBe(true);
    });

    it("returns true when check contacts match, even with whitespace", function() {
        var contact = "bar"
        var event = {
            check: {
                labels: {
                    contacts: `foo, ${contact}, baz`
                }
            }
        };

        expect(has_check_contact(event, contact)).toBe(true);
    });

    it("returns false when check has contacts which do not match", function() {
        var contact = "qux"
        var event = {
            check: {
                labels: {
                    contacts: "baz"
                }
            }
        }

        expect(has_check_contact(event, contact)).toBe(false);
    });

});