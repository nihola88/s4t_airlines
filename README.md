# airlines-fiori
Fiori App exploiting SAP flights Demo tables

This simple App is an example of various Fiori functionalities/Views, based on the SAP Demo tables SCARR, SPFLI, SBOOK, SCUSTOMER, etc.

The models are based on Odata and CDS
Among the Fiori Objects used: SplitApp, DynamicPage, GenericTile, ChartContainer, Select, Text, Icon, Table, Text, Link, Button, Text Area, StandardListItem, HBox/VBox, Toolbar, SmartFilterBar

Other Features:
- Use of Sync/Async OData calls
- Use of public APIs (i.e. a GET to guess a person's sex from name
- Use of SAP Icons and images from web

## Note
This is a demonstration project with anonymized/sample data.

## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Dec 13 2024 12:20:37 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.15.7|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>SAP System (ABAP On Premise)|
|**Service URL**<br>http://s4demo.horsa.it:44301/sap/opu/odata/sap/ZTEST_FLIGHTS_NV_SRV|
|**Module Name**<br>s4t_airlines|
|**Application Title**<br>Airlines|
|**Namespace**<br>s4t_airlines|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.120.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## s4t_airlines

Airlines and Flights

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


