let swipeEventPosX = 0,
    swipeEventPosY = 0,
    swipeEventLElement = null,
    swipeEventDownFlag = false;
window.addEventListener('mousedown', function(e){
    swipeEventPosX = e.clientX;
    swipeEventPosY = e.clientY;
    swipeEventLElement = e.target;
    swipeEventDownFlag = true;
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeStart",
                "direction" : "all",
                "target": swipeEventLElement,
                "x" : swipeEventPosX,
                "y" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeLeftStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeLeftStart",
                "direction" : "all",
                "target": swipeEventLElement,
                "x" : swipeEventPosX,
                "y" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeRightStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeRightStart",
                "direction" : "all",
                "target": swipeEventLElement,
                "x" : swipeEventPosX,
                "y" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeUpStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeUpStart",
                "direction" : "all",
                "target": swipeEventLElement,
                "x" : swipeEventPosX,
                "y" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeDownStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeDownStart",
                "direction" : "all",
                "target": swipeEventLElement,
                "x" : swipeEventPosX,
                "y" : swipeEventPosY,
            }
        })
    );
});
window.addEventListener('mousemove', function(e){
    if(swipeEventDownFlag){
        let swipeELDiffX = swipeEventPosX - e.clientX,
            swipeELDiffY = swipeEventPosY - e.clientY,
            swipeELDirX = (swipeELDiffX > 0) ? 'Up' : 'Down',
            swipeELDirY = (swipeELDiffY > 0) ? 'Left' : 'Right',
            swipeELDir = (Math.abs(swipeELDiffX) > Math.abs(swipeELDiffY)) ?  swipeELDirX : swipeELDirY;
        swipeEventLElement.dispatchEvent(
            new CustomEvent("swiping", {
                "bubbles": true,
                "detail": {
                    "type": "swiping",
                    "direction" : swipeELDir,
                    "target": swipeEventLElement,
                    "startX" : swipeEventPosX,
                    "startY" : swipeEventPosY,
                    "currentX": e.clientX,
                    "currentY": e.clientY,
                }
            })
        );
    }
});
window.addEventListener('mouseup', function(e){
    if(swipeEventDownFlag){
        let swipeELDiffX = swipeEventPosX - e.clientX,
            swipeELDiffY = swipeEventPosY - e.clientY,
            swipeELDirX = (swipeELDiffX > 0) ? 'Left' : 'Right',
            swipeELDirY = (swipeELDiffY > 0) ? 'Up' : 'Down',
            swipeELDir = (Math.abs(swipeELDiffX) > Math.abs(swipeELDiffY)) ?  swipeELDirX : swipeELDirY;
        swipeEventDownFlag = false;
        swipeEventLElement.dispatchEvent(
            new CustomEvent("swipe", {
                "bubbles": true,
                "detail": {
                    "type": "swiping",
                    "direction" : swipeELDir,
                    "target": swipeEventLElement,
                    "startX" : swipeEventPosX,
                    "startY" : swipeEventPosY,
                    "endX": e.clientX,
                    "endY": e.clientY,
                }
            })
        );
        swipeEventLElement.dispatchEvent(
            new CustomEvent("swipe"+swipeELDir, {
                "bubbles": true,
                "detail": {
                    "type": "swiping",
                    "direction" : swipeELDir,
                    "target": swipeEventLElement,
                    "startX" : swipeEventPosX,
                    "startY" : swipeEventPosY,
                    "endX": e.clientX,
                    "endY": e.clientY,
                }
            })
        );
    }
});
window.addEventListener('touchstart', function(e){
    swipeEventPosX = e.touches[0].clientX;
    swipeEventPosY = e.touches[0].clientY;
    swipeEventLElement = e.target;
    swipeEventDownFlag = true;
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeStart",
                "direction" : "all",
                "target": swipeEventLElement,
                "startX" : swipeEventPosX,
                "startY" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeLeftStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeLeftStart",
                "direction" : "Left",
                "target": swipeEventLElement,
                "startX" : swipeEventPosX,
                "startY" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeRightStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeRightStart",
                "direction" : "Right",
                "target": swipeEventLElement,
                "startX" : swipeEventPosX,
                "startY" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeUpStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeUpStart",
                "direction" : "Up",
                "target": swipeEventLElement,
                "startX" : swipeEventPosX,
                "startY" : swipeEventPosY,
            }
        })
    );
    swipeEventLElement.dispatchEvent(
        new CustomEvent("swipeDownStart", {
            "bubbles": true,
            "detail": {
                "type": "swipeDownStart",
                "direction" : "Down",
                "target": swipeEventLElement,
                "startX" : swipeEventPosX,
                "startY" : swipeEventPosY,
            }
        })
    );
});
window.addEventListener('touchmove', function(e){
    if(swipeEventDownFlag){
        let swipeELDiffX = swipeEventPosX - e.touches[0].clientX,
            swipeELDiffY = swipeEventPosY - e.touches[0].clientY,
            swipeELDirX = (swipeELDiffX > 0) ? 'Up' : 'Down',
            swipeELDirY = (swipeELDiffY > 0) ? 'Left' : 'Right',
            swipeELDir = (Math.abs(swipeELDiffX) > Math.abs(swipeELDiffY)) ?  swipeELDirX : swipeELDirY;
        swipeEventLElement.dispatchEvent(
            new CustomEvent("swiping", {
                "bubbles": true,
                "detail": {
                    "type": "swiping",
                    "direction" : swipeELDir,
                    "target": swipeEventLElement,
                    "startX" : swipeEventPosX,
                    "startY" : swipeEventPosY,
                    "currentX": e.touches[0].clientX,
                    "currentY": e.touches[0].clientY,
                }
            })
        );
    }
});
window.addEventListener('touchend', function(e){
    console.log(e);
    if(swipeEventDownFlag){
        let swipeELDiffX = swipeEventPosX - e.changedTouches[0].clientX,
            swipeELDiffY = swipeEventPosY - e.changedTouches[0].clientY,
            swipeELDirX = (swipeELDiffX > 0) ? 'Left' : 'Right',
            swipeELDirY = (swipeELDiffY > 0) ? 'Up' : 'Down',
            swipeELDir = (Math.abs(swipeELDiffX) > Math.abs(swipeELDiffY)) ?  swipeELDirX : swipeELDirY;
        swipeEventDownFlag = false;
        swipeEventLElement.dispatchEvent(
            new CustomEvent("swipe", {
                "bubbles": true,
                "detail": {
                    "type": "swiping",
                    "direction" : swipeELDir,
                    "target": swipeEventLElement,
                    "startX" : swipeEventPosX,
                    "startY" : swipeEventPosY,
                    "endX": e.changedTouches[0].clientX,
                    "endY": e.changedTouches[0].clientY,
                }
            })
        );
        swipeEventLElement.dispatchEvent(
            new CustomEvent("swipe"+swipeELDir, {
                "bubbles": true,
                "detail": {
                    "type": "swiping",
                    "direction" : swipeELDir,
                    "target": swipeEventLElement,
                    "startX" : swipeEventPosX,
                    "startY" : swipeEventPosY,
                    "endX": e.changedTouches[0].clientX,
                    "endY": e.changedTouches[0].clientY,
                }
            })
        );
    }
});