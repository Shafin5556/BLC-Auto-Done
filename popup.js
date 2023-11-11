document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentUrl = tabs[0].url;
      if (currentUrl.includes('https://elearn.daffodilvarsity.edu.bd/course/view.php?id=')) {
        document.getElementById('doneButton').style.display = 'block';
        document.getElementById('instructionLabel').style.display = 'none';
      } else {
        document.getElementById('doneButton').style.display = 'none';
        document.getElementById('instructionLabel').style.display = 'block';
      }
    });
document.getElementById('doneButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "executeCode" });
    
  });
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "showSuccessPopup") {
      window.close();
    } else if (message.action === "showErrorPopup") {
      alert("Error: Something went wrong.");
      window.close();
    }
  });
  });
  