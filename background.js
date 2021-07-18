chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {urls: ["*://www.twitter.com/*"]},
  ["blocking"]
);