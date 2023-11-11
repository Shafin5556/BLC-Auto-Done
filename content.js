
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "executeCode") {
      try {
        var buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
          if (button.textContent.trim() === "Mark as done") {
            button.click();
          }
        });
        chrome.runtime.sendMessage({ action: "showSuccessPopup" });
      } catch (error) {
        console.error(error);
        chrome.runtime.sendMessage({ action: "showErrorPopup" });
      }
    }
  });
  