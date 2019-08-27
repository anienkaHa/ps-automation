

const randomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber) + 1
}

const scrollInfinite = (number) => {
    const scrollableElement = $('//*[@id="content"]/div/div/div/div')
    let i = 1
    scrollableElement.scrollIntoView(false)
    browser.pause(100)
    scrollableElement.scrollIntoView(false)
    scrollableElement.scrollIntoView(false)
    while ( i <= number){
        scrollableElement.scrollIntoView(false)
        browser.pause(100)
        scrollableElement.scrollIntoView(false)
        scrollableElement.scrollIntoView(false)
        i++
    }
}

const checkBoxes = () => {
    const checkbox1 = $('//*[@id="checkboxes"]/input[1]')
    const checkbox2 = $('//*[@id="checkboxes"]/input[2]')
    let a = 1
    let b = 1
    const clicksBox1 = randomNumber(10)
    const clicksBox2 = randomNumber(10)
    while (a <= clicksBox1) {
        a++
        checkbox1.click()
    }
    while (b <= clicksBox2) {
        b++
        checkbox2.click()
    }
}

const selectDropDown = () => {
    const dropDownOption1 = $('//*[@id="dropdown"]/option[2]')
    const dropDownOption2 = $('//*[@id="dropdown"]/option[3]')
    const randomOption = randomNumber(2)
    if (randomOption === 1) {
        dropDownOption1.click()
        return dropDownOption1.isSelected()
        
    }

    if (randomOption === 2) {
        dropDownOption2.click()
        return dropDownOption2.isSelected()
    }
}

module.exports={
    scrollInfinite,
    checkBoxes,
    selectDropDown
}