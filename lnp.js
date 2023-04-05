// v2

let content = document.querySelectorAll('.ball')

function doSomething() {
    // console.log(content[0].textContent)
    
    

    // for (number in content) {
    //     console.log(content[number].textContent)
    //     numArray.push(content[number].textContent)
    // }

    // for (let i = 0; i < content.length; i++) {
    //     console.log(content[i].textContent)
    //     numArray.push(content[i].textContent)
    // }
    // for (let i = 0; i < 6; i++) {
    //     numArray.push(Math.ceil(Math.random() * 49))
    //     content[i].textContent = numArray[i]
    // }

    let numSet = new Set(), numArray = []

    /*
    - while the set doesn't have 6 unique numbers in it
        - fill the set with random numbers between 1 and 49
    */
    while (numSet.size !== 6) {
        numSet.add(Math.ceil(Math.random() * 49))
    }        
 
    numArray = [...numSet]

    for (let i = 0; i < 6; i++) {
        content[i].textContent = numArray[i]
        // console.log(numSet.values().next().value)
    }

    console.log(`This is the array: ${numArray}`)
    console.log(`This is the set: ${numSet}`)
    
    // console.log(numSet.values().next().value)

}