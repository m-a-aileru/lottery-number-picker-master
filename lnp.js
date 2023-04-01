// Version 2 JS

var x = document.getElementsByTagName('p'); 

// Event listeners
document.addEventListener("keydown", eventManager);

function generateRandomNumbers(a) {
   for (var i = 0; i < a.length; i++) {
       a[i].innerHTML = Math.round(Math.random()*48)+1;
   }
}

function findDuplicates(b) {
    for (var i = 0; i < b.length; i++) {
        for (var j = i; j < b.length; j++) {
            if (i !== j && b[i] == b[j]) {
                b[j] = Math.ceil(Math.random()*49); /** draw a different number */
               /** b[j] += "d";   - left in for future testing purposes */
            } 
        }
    }
}

function drawOrRedraw() {
    generateRandomNumbers(x);
    
    var nodeArray = [];
    
    // Create 'snapshot' of contents of the NodeList and put them into an array
    for (var i = 0; i < x.length; ++i) {
        nodeArray[i] = x[i].innerHTML;
    }
    
    findDuplicates(nodeArray);
    
    for (var i = 0; i < nodeArray.length; ++i) {
        x[i].innerHTML = nodeArray[i];
    }
    
    return nodeArray;        
}

function eventManager(event) {
    var x = event.key;
    
    if (x === "d" || x === "D") {
        drawOrRedraw();
    }
}
