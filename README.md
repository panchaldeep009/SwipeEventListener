# SwipeEventListener
This is JavaScript library, to Listen Swipe events 
## How to use
  - Include this JavaScript Script
  ```HTML 
  <script src="http://cdn.deep.gallery/SwipeEventListener.js"></script>
  ```
  - Minified Version
  ```HTML 
  <script src="http://cdn.deep.gallery/SwipeEventListener.min.js"></script>
  ```
 ### 1. Using `.addEventListener`<br/>
 ```javascript
<targetElement>.addEventListener('swipe', function(e){
    // Your Instructions.
 });
 ```
   **Event Types**

   - `swipe`, `swipeLeft`, `swipeRight`, `swipeUp`, `swipeDown`,<br/>
    These events trigger after swipe on traget element or swipe in a particular direction, depending on what type of event used from above.<br/>

   - `swiping`, `swipingLeft`, `swipingRight`, `swipingUp`, `swipingDown`<br/>
    These events trigger while swiping on traget element or swiping in a particular direction, depending on what type of event used from above.<br/>

   - `swipeStart`, `swipeStartLeft`, `swipeStartRight`, `swipeStartUp`, `swipeStartDown`<br/>
    These events trigger before swipe on traget element or swipe in a particular direction, depending on what type of event used from above.<br/>
    
   **Event Output**
 ```javascript
 <targetElement>.addEventListener('swiping', function(event){
    event.detail.type // Type of event, in this case 'swiping'
    event.detail.direction // Gives swipe direction (up, down, left, right);
    event.detail.target // Gives Traget Element, in this case '<targetElement>'
    event.detail.startX // Gives horizontal starting point of swipe
    event.detail.startY // Gives vertical starting point of swipe
    event.detail.currentX // Gives horizontal current point of swipe
    event.detail.currentY // Gives vertical current point of swipe
    event.detail.endX // Gives horizontal current point of swipe
    event.detail.endY // Gives vertical current point of swipe
 });
 ```
  ### 2. Using Attributes<br/>
 ```HTML
  <div onswipe="myFunction(e)"></div>
 ```
 <br/>
     'e' is mandatory to catch event data in function.<br/>

  **Event Attributes**

   - `onswipe`, `onswipe-left`, `onswipe-right`, `onswipe-up`, `onswipe-down`,<br/>
    These attributes trigger function after swipe on traget element or swipe in a particular direction, depending on what type of event used from above.<br/>

   - `onswiping`, `onswiping-left`, `onswiping-right`, `onswiping-up`, `onswiping-down`<br/>
    These attributes trigger function while swiping on traget element or swiping in a particular direction, depending on what type of event used from above.<br/>

   - `onswipestart`, `onswipestart-left`, `onswipestart-right`, `onswipestart-up`, `onswipestart-down`<br/>
    These attributes trigger function before swipe on traget element or swipe in a particular direction, depending on what type of event used from above.<br/>
    
    
  ## JavaScript Frameworks Support <br/>
  ### Vue <br/>
 ```HTML
  <div @swipe="vueFunction"></div>
 ```
   **Event Attributes**
   - `v-on:swipe`,`@swipe`<br/>
    These attributes trigger Vue function after swipe on traget element.<br/>

   - `v-on:swiping`,`@swiping`<br/>
    These attributes trigger Vue function while swiping on traget element.<br/><br/>
    **Tip**
    - These Events' data always has a direction value of swipe, so it can help to run particular instruction of particular swipe direction.<br/>
    **Example** <br/>
 ```javascript
    ...
    methods{
      vueFunction = function(event){
        if(event.detail.direction == 'left'){
          scrollLeft();
        }
      }
    },
    ...
 ```
    
  ### AngularJS <br/>
 ```HTML
  <div ng-swipe="angularFunction($event)"></div>
 ```
 <br/>
     '$event' is mandatory to catch event data in angular function.<br/>

  **Event Attributes**

   - `ng-swipe`, `ng-swipe-left`, `ng-swipe-right`, `ng-swipe-up`, `ng-swipe-down`,<br/>
    These attributes trigger angular function after swipe on traget element or swipe in a particular direction, depending on what type of event used from above.<br/>

   - `ng-swiping`, `ng-swiping-left`, `ng-swiping-right`, `ng-swiping-up`, `ng-swiping-down`<br/>
    These attributes trigger angular function while swiping on traget element or swiping in a particular direction, depending on what type of event used from above.<br/>

   - `ng-swipeStart`, `ng-swipeStart-left`, `ng-swipeStart-right`, `ng-swipeStart-up`, `ng-swipeStart-down`<br/>
    These attributes trigger angular function before swipe on traget element or swipe in a particular direction, depending on what type of event used from above.<br/>
    
   
