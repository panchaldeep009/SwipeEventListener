"use strict";
(() => {
    let swipeEventPosX = 0,
        swipeEventPosY = 0,
        swipeEventLElement = null,
        swipeEventDownFlag = false;
    window.addEventListener('mousedown', function(e){
        swipeEventPosX = e.clientX;
        swipeEventPosY = e.clientY;
        swipeEventLElement = e.target;
        swipeEventDownFlag = true;
        swipeStartDispatch(e.target,e.clientX,e.clientY);
    });
    window.addEventListener('mousemove', function(e){
        if(swipeEventDownFlag){
            if(e.target == swipeEventLElement){
                swipingDispatch(swipeEventLElement,swipeEventPosX,swipeEventPosY,e.clientX,e.clientY);
            } else {
                swipeEndDispatch(swipeEventLElement,swipeEventPosX,swipeEventPosY,e.clientX,e.clientY);
            }
        }
    });
    window.addEventListener('mouseup', function(e){
        if(swipeEventDownFlag){
            swipeEventDownFlag = false;
            swipeEndDispatch(swipeEventLElement,swipeEventPosX,swipeEventPosY,e.clientX,e.clientY);
        }
    });
    window.addEventListener('touchstart', function(e){
        swipeEventPosX = e.touches[0].clientX;
        swipeEventPosY = e.touches[0].clientY;
        swipeEventLElement = e.target;
        swipeEventDownFlag = true;
        swipeStartDispatch(e.target,e.touches[0].clientX,e.touches[0].clientY);
    });
    window.addEventListener('touchmove', function(e){
        if(swipeEventDownFlag){
            if(e.touches[0].target == swipeEventLElement){
                swipingDispatch(swipeEventLElement,swipeEventPosX,swipeEventPosY,e.touches[0].clientX,e.touches[0].clientY);
            } else {
                swipeEndDispatch(swipeEventLElement,swipeEventPosX,swipeEventPosY,e.touches[0].clientX,e.touches[0].clientY);
            }
        }
    });
    window.addEventListener('touchend', function(e){
        if(swipeEventDownFlag){
            swipeEventDownFlag = false;
            swipeEndDispatch(swipeEventLElement,swipeEventPosX,swipeEventPosY,e.changedTouches[0].clientX,e.changedTouches[0].clientY);
        }
    });
    function swipeStartDispatch(swipeElement,eX,eY){
        swipeElement.dispatchEvent(
            new CustomEvent("swipeStart", {
                "bubbles": true,
                "detail": {
                    "type": "swipeStart",
                    "direction" : "all",
                    "target": swipeElement,
                    "startX" : eX,
                    "startY" : eY,
                    "currentX" : eX,
                    "currentY" : eY,
                    "endX" : eX,
                    "endY" : eY,
                }
            })
        );
        swipeElement.dispatchEvent(
            new CustomEvent("swipeLeftStart", {
                "bubbles": true,
                "detail": {
                    "type": "swipeLeftStart",
                    "direction" : "left",
                    "target": swipeElement,
                    "startX" : eX,
                    "startY" : eY,
                    "currentX" : eX,
                    "currentY" : eY,
                    "endX" : eX,
                    "endY" : eY,
                }
            })
        );
        swipeElement.dispatchEvent(
            new CustomEvent("swipeRightStart", {
                "bubbles": true,
                "detail": {
                    "type": "swipeRightStart",
                    "direction" : "right",
                    "target": swipeElement,
                    "startX" : eX,
                    "startY" : eY,
                    "currentX" : eX,
                    "currentY" : eY,
                    "endX" : eX,
                    "endY" : eY,
                }
            })
        );
        swipeElement.dispatchEvent(
            new CustomEvent("swipeUpStart", {
                "bubbles": true,
                "detail": {
                    "type": "swipeUpStart",
                    "direction" : "up",
                    "target": swipeElement,
                    "startX" : eX,
                    "startY" : eY,
                    "currentX" : eX,
                    "currentY" : eY,
                    "endX" : eX,
                    "endY" : eY,
                }
            })
        );
        swipeElement.dispatchEvent(
            new CustomEvent("swipeDownStart", {
                "bubbles": true,
                "detail": {
                    "type": "swipeDownStart",
                    "direction" : "down",
                    "target": swipeElement,
                    "startX" : eX,
                    "startY" : eY,
                    "currentX" : eX,
                    "currentY" : eY,
                    "endX" : eX,
                    "endY" : eY,
                }
            })
        );

    }
    function swipingDispatch(swipeElement,preX,preY,eX,eY){
        let swipeELDiffX = preX - eX,
            swipeELDiffY = preY - eY,
            swipeELDirX = (swipeELDiffX > 0) ? 'Left' : 'Right',
            swipeELDirY = (swipeELDiffY > 0) ? 'Up' : 'Down',
            swipeELDir = (Math.abs(swipeELDiffX) > Math.abs(swipeELDiffY)) ?  swipeELDirX : swipeELDirY;
        swipeElement.dispatchEvent(
            new CustomEvent("swiping", {
                "bubbles": true,
                "detail": {
                    "type": "swiping",
                    "direction" : swipeELDir.toLowerCase(),
                    "target": swipeElement,
                    "startX" : preX,
                    "startY" : preY,
                    "currentX": eX,
                    "currentY": eY,
                    "endX": eX,
                    "endY": eY,
                }
            })
        );
        swipeElement.dispatchEvent(
            new CustomEvent("swiping"+swipeELDir, {
                "bubbles": true,
                "detail": {
                    "type": "swiping"+swipeELDir,
                    "direction" : swipeELDir.toLowerCase(),
                    "target": swipeElement,
                    "startX" : preX,
                    "startY" : preY,
                    "currentX": eX,
                    "currentY": eY,
                    "endX": eX,
                    "endY": eY,
                }
            })
        );
    }
    function swipeEndDispatch(swipeElement,preX,preY,eX,eY){
        let swipeELDiffX = preX - eX,
            swipeELDiffY = preY - eY,
            swipeELDirX = (swipeELDiffX > 0) ? 'Left' : 'Right',
            swipeELDirY = (swipeELDiffY > 0) ? 'Up' : 'Down',
            swipeELDir = (Math.abs(swipeELDiffX) > Math.abs(swipeELDiffY)) ?  swipeELDirX : swipeELDirY;
        swipeElement.dispatchEvent(
            new CustomEvent("swipe", {
                "bubbles": true,
                "detail": {
                    "type": "swipe",
                    "direction" : swipeELDir.toLowerCase(),
                    "target": swipeElement,
                    "startX" : preX,
                    "startY" : preY,
                    "currentX": eX,
                    "currentY": eY,
                    "endX": eX,
                    "endY": eY,
                }
            })
        );
        swipeElement.dispatchEvent(
            new CustomEvent("swipe"+swipeELDir, {
                "bubbles": true,
                "detail": {
                    "type": "swipe"+swipeELDir,
                    "direction" : swipeELDir.toLowerCase(),
                    "target": swipeElement,
                    "startX" : preX,
                    "startY" : preY,
                    "currentX": eX,
                    "currentY": eY,
                    "endX": eX,
                    "endY": eY,
                }
            })
        );
    }
    window.addEventListener('DOMContentLoaded', function(){
        let modes = ['swipe','swipeStart','swiping'],
            directions = ['','Left','Right','Up','Down'];
        modes.forEach(mode => {
            directions.forEach(direction => {
                document.querySelectorAll('[on'+(mode.toLowerCase())+((direction != "") ? '-'+(direction.toLowerCase()) : '')+']').forEach(el => {
                    el.addEventListener(mode+direction, function(e){
                        eval(el.getAttribute('on'+(mode.toLowerCase())+((direction != "") ? '-'+(direction.toLowerCase()) : '')));
                    })
                });
            });
        });
        modes.forEach(mode => {
            directions.forEach(direction => {
                document.querySelectorAll('[ng-'+mode+((direction != "") ? '-'+(direction.toLowerCase()) : '')+']').forEach(el => {
                    let appElement = el;
                    while(!appElement.hasAttribute('ng-app')){
                        appElement = appElement.parentElement;
                        if(appElement == document.body){
                            break;
                        }
                    }
                    if(appElement.hasAttribute('ng-app')){
                        el.addEventListener(mode+direction, function($event){
                            eval("angular.element(appElement).scope()."+this.getAttribute('ng-'+mode+((direction != "") ? '-'+(direction.toLowerCase()) : '')));
                        });
                    }
                });
            });
        });
    });
})();