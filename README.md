# W3D3 Lecture

## Ajax

- What is AJAX?

- Microsoft added a little-known function call named XMLHttpRequest to IE5
- Originated from Microst ActiveX, a component base software technology
- Took off after the publication [Ajax: A New Approach to Web Applications](https://adaptivepath.org/ideas/ajax-new-approach-web-applications/) in 2005
- AJAX is a technique allowing the user interface to updates itself without reloading the whole web page.
- AJAX will communicate with the server, get data from the server, update UI on the basis of that data without reloading the whole web page.
- Before 2005, this could only be accomplished with Flash or Java Applets

## XMLHttpRequest

```javascript
xhr.open(method:string,url:string,asynchronous:boolean)
```

The XMLHttpRequest object, first call the open() method of XHR with three arguments :

1. method (GET, POST, DELETE)
2. url(requested URL)
3. true(asynchronous or synchronous)

```javascript
const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', false);
xhr.send(null);

if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
  console.log(xhr.responseText);
} else {
  console.log('Some problem ' + xhr.status);
}
```

The full list of the readyState values is documented at XMLHTTPRequest.readyState and is as follows:

- 0 (uninitialized) or (request not initialized)
- 1 (loading) or (server connection established)
- 2 (loaded) or (request received)
- 3 (interactive) or (processing request)
- 4 (complete) or (request finished and response is ready)

[Ajax: A New Approach to Web Applications](https://adaptivepath.org/ideas/ajax-new-approach-web-applications/)

[MDN Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

[Ajax Getting Started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
