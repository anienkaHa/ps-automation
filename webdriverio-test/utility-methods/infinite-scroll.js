

const randomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber) + 1
}

const scrollInfinite = (number) => {
    const parentElement = $('//*[@id="content"]/div/div/div/div')
    console.log(parentElement.childern.length)
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
    const option1 = $('//*[@id="dropdown"]/option[2]')
    const option2 = $('//*[@id="dropdown"]/option[3]')
    const randomOption = randomNumber(2)
    if (randomOption === 1) {
        option1.click()
    }

    if (randomOption === 2) {
        option2.click()
    }
}