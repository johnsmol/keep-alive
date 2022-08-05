# KEEP-ALIVE
Simple keep-alive React component to prevent session expiration and Google App Engine shutdown.

## Description
Just copy-pasta this component inside the project and activate it in the pages or components on which the user may not be triggering any HTTP call for a significant amount of time but you still need to keep the session, or back-end service, alive (e.g. big forms).

## Usage
KeepAlive component accepts two parameters:
- url [**mandatory**]
- sleep [**optional**] (default: 5 minutes)

The **url** is mandatory and may point to an external resource or to a specific endpoint of your backend service.
The **sleep** parameter is optional and represents the time in **milliseconds** between two consecutive keep alive pings. If not set, the default interval between pings is 5 minutes.

### Syntax
```html
<KeepAlive url={'https://httpstat.us/200'} gap={1500}/>
```