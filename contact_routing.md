Contacts are defined by the label `contacts` that can be applied to a check or agent configuration

Contact routing with an agent and check defined, the check will win over the agent. 

The label must match the expression - hasContact('CONTACT_NAME')
A handler configuration would need to be created for each handler + contact 
An EventFilter will need to be created for each contact or groups of contacts


each handler should be named by HANDLER-CONTACT 
The command will be the handler to use
The filter should include the filter name  used for the contact


configuring the contact:

To create a contact you'll require the sensu-libcontactrouting runtime_asset found in bonsai.sensu.io

minimal viable configuration:

contact-appops.yml
---
action: allow
runtime_assets:
  - sensu-libcontactrouting
expression
  - hasContact('appops')


The expression `hasContact('appops')` is what is used to match with the contacts in check or 


app_check_example.yml
---
name: app_check_example
labels:
  contacts: appdev,appops

########################################

## Overview

Every incident, outage or event has an ideal first responder: a team or individual with the knowledge to triage and address the issue.
Using the built-in features of Sensu-Go you can configure contact routing use case by use case.

In this guide we'll cover configuring and using EventFilters to configure contact routing.

## Contact Routing Basics

In Sensu Enterprise Classic contacts were defined in one large subset that came with its own drawbacks when used at scale. 

Sensu Go recommended way of using Contact Routing is to filter by the contact name on each handler configuration. 
This setup requires the sensu-libcontactrouting runtime_asset to be used.
Once you have your initial configuration in place you'll be able to easily add and remove contacts on both assets and 
checks and have the correct handler used without worrying about tokens. 

## Contacts and Handlers configuration

For our examples we'll be using Pagerduty as our Handler and will be creating three contacts for appdev, appops and infraops. 

### Configuring Handler Sets

Sensu-Go can use Handler Sets to configure a single handler definition that utilizes multiple Handlers.
This allows us to apply a single handler to a check that then uses multiple handler definitions.

We'll first define our handler set. In our example we'll be configuring a Handler called pagerduty which will have three handlers defined for appdev, appops and infraops.

pagerduty.yml

{{< highlight yaml >}}
---
name: pagerduty
type: set
handlers:
  - pagerduty-appdev
  - pagerduty-appops
  - pagerduty-infraops
{{< /highlight >}}


### Configuring the Contact Handlers

We'll then create the handlers for each one of the above. 

pagerduty-appdev.yml
{{< highlight yaml >}}
---
name: pagerduty-appdev
command: pagerduty-handler
filters:
  - isIncident
  - contact-appdev
{{< /highlight >}}


pagerduty-appops.yml
{{< highlight yaml >}}
---
name: pagerduty-appops
command: pagerduty-handler
filters:
  - isIncident
  - contact-appops
{{< /highlight >}}

pagerduty-infraops.yml
{{< highlight yaml >}}
---
name: pagerduty-infraops
command: pagerduty-handler
filters:
  - isIncident
  - contact-infraops
{{< /highlight >}}

The inclusion of the built in filter `isIncident` will filter non incidents from being handled.


### Configuring the EventFilters

`EventFilters` are used to define what we'll be filtering on for each contact.
Utilizing the runtime_asset `sensu-libcontactrouting`, the expression `hasContact` will define what to filter on.

contact-appdev.yml
{{< highlight yaml >}}
---
name: contact-appdev
runtime_assets:
  - sensu-libcontactrouting
expressions:
  - hasContact('appdev')
{{< /highlight >}}

contact-appops.yml
{{< highlight yaml >}}
---
name: contact-appops
runtime_assets:
  - sensu-libcontactrouting
expressions:
  - hasContact('appops')
{{< /highlight >}}

contact-infraops.yml
{{< highlight yaml >}}
---
name: contact-infraops
runtime_assets:
  - sensu-libcontactrouting
expressions:
  - hasContact('infraops')
{{< /highlight >}}

The three `EventFilters` will be used in conjunction with the handlers we defined in the previous section.

These are able to be applied to as many handlers as you may want to create. shown in the pervious section.

### Configuring a contact for a check

Now that we've configured the backend portion of our contact routing we'll now need to configure our check to utilize the correct contact. 

In the following example we have an application check. We define the handler we want to use and the contacts that should be notified.


app_check_example.yml
---
name: app_check_example
command: "query-influx..."
handlers: pagerduty
labels:
  contacts: appdev,appops

Since