let currentPlaybackRate = 1;

browser.browserAction.onClicked.addListener(() => {
  if (currentPlaybackRate === 1) {
    currentPlaybackRate = 2;
    browser.browserAction.setIcon({
      path: "icons/2x.png"
    });
  } else {
    currentPlaybackRate = 1;
    browser.browserAction.setIcon({
      path: "icons/yt_logo.ico"
    });
  }

  browser.tabs.executeScript({
    code: `document.getElementsByTagName("video")[0].playbackRate = ${currentPlaybackRate};`
  });
});
