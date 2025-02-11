describe("has_entity_contact", function() {
    it("returns false when event has no labels", function() {
        var event = {}

        expect(has_entity_contact(event,"any")).toBe(false);
    });

    it("returns false when event has only some of the expected labels", function() {
        var event = {
            check: {},
            entity: {
                labels: {}
            }
        };

        expect(has_entity_contact(event, "any")).toBe(false);
    });

    it("returns true when event only has entity contacts, one of which matches", function() {
        var contact = "bar"
        var event = {
            check: {},
            entity: {
                labels: {
                    contacts: `foo,${contact},baz`
                }
            }
        };

        expect(has_entity_contact(event, contact)).toBe(true);
    });

    it("returns false when check and entity labels are empty", function() {
        var event = {
            check: {
                labels: {}
            },
            entity: {
                labels: {}
            }
        };

        expect(has_entity_contact(event, "any")).toBe(false);
    });

    it("returns true when entity contacts match exactly", function() {
        var contact = "foo"
        var event = {
            entity: {
                labels: {
                    contacts: contact
                }
            }
        };

        expect(has_entity_contact(event, contact)).toBe(true);
    });

    it("returns true when entity contacts match, even with whitespace", function() {
        var contact = "bar"
        var event = {
            entity: {
                labels: {
                    contacts: `foo, ${contact}, baz`
                }
            }
        };

        expect(has_entity_contact(event, contact)).toBe(true);
    });


    it("returns false when entity has contacts which do not match", function() {
        var contact = "qux"
        var event = {
            entity: {
                labels: {
                    contacts: `foo,baz,bar`
                }
            }
        }

        expect(has_entity_contact(event, contact)).toBe(false);
    });
});
