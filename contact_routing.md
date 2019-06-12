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

### Configuring Handler Sets

Sensu-Go can use Handler Sets to configure a single handler definition that utilizes multiple Handlers. 
This allows us to apply a single handler to a check that then uses multiple handlers. 

We'll first define our handler set. In our example we'll be configuring a Handler called pagerduty which will have three handlers defined.

pagerduty.yml
---
name: pagerduty
type: set
handlers:
  - pagerduty-appdev
  - pagerduty-appops
  - pagerduty-infraops

The above configuration defines our pagerduty handler that references three handlers for appdev, appops and infraops.


### Configuring the Contact Handlers

We'll then create the handlers for each one of the above.

pagerduty-appdev.yml
---
name: pagerduty-appdev
command: pagerduty-handler
filters:
  - isIncident
  - contact-appdev


pagerduty-appops.yml
---
name: pagerduty-appops
command: pagerduty-handler
filters:
  - isIncident
  - contact-appops

pagerduty-infraops.yml
---
name: pagerduty-infraops
command: pagerduty-handler
filters:
  - isIncident
  - contact-infraops


The three 