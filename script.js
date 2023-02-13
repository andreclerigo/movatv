document.addEventListener("DOMContentLoaded", function() {
    // Get the page elements
    var videoFrame = document.getElementById("videoFrame");
    var video = document.getElementById("video");
    var content = document.getElementById("content");
    var footer = document.getElementById("footer");

    // Hide the page elements
    content.style.display = "none";
    for (const child of content.children) child.style.display = "none";
    footer.style.display = "none";

    // Show the video
    video.style.display = "block";
    video.play();
    document.body.style.overflow = "hidden";

    // Show the page elements when the video ends
    video.onended = function() {
        // Remove the video element
        video.remove();
        video.style.display = "none";
        videoFrame.style.display = "none";
        document.body.style.overflow = "auto";
        
        // Show the page elements
        content.style.display = "block";
        for (const child of content.children) child.style.display = "block";
        footer.style.display = "block";
    };
});
