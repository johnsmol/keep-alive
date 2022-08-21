# KEEP-ALIVE

Simple keep-alive React component to prevent session expiration and Google App Engine shutdown.

## Usage

Just _copy-pasta_ this component inside the project and activate it in the pages or components on which the user may not be triggering any HTTP call for a significant amount of time
but you still need to keep the session, or back-end service, alive (e.g. big forms).

KeepAlive component accepts five parameters:

- url [string, **required**] - the URL to point to for the HTTP keep-alive calls.
- sleep [number, optional, default: 5 minutes] - the time in ms between two subsequent keep-alive calls.
- delay [number, optional, default: 0] - the time in ms before the component starts executing its function.
- maxIdleTime [number, optional, default: _sleep_ parameter] - the time in ms between user actions after which it's considered idle. Only considered if _eventDetection_ is enabled.
- eventDetection [number, optional, default: false] - enable or disable the listeners for _keydown_, _mousedown_ and _mousemove_ events.

The **url** is mandatory and may point to an external resource or to a specific endpoint of your backend service.

### Syntax

```html
<KeepAlive
        url={'https://httpstat.us/200'}
        sleep={2000}
        delay={3000}
        maxIdleTime={5000}
        eventDetection={true}
/>
```