chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {

    if (request.action === "GET_ARTICLE") {

      const articleText = document.body.innerText;

      sendResponse({
        articleText
      });
    }

    return true;
  }
);