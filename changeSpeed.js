let currentPlaybackRate = document.getElementsByTagName("video")[0]
  .playbackRate;

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

document.getElementsByTagName("video")[0].playbackRate = currentPlaybackRate;
