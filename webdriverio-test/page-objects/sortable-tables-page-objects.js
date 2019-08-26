
class LastNameField {
    get columnSort() { return $('//*[@id="table1"]/thead/tr/th[1]') }
    get columnName() { return $('//*[@id="table1"]/thead/tr/th[1]/span') }
    get firstRowValue() { return $('//*[@id="table1"]/tbody/tr[1]/td[1]') }
    get secondRowValue() { return $('//*[@id="table1"]/tbody/tr[2]/td[1]') }
    get thirdRowValue() { return $('//*[@id="table1"]/tbody/tr[3]/td[1]') }
    get fourthRowValue() { return $('//*[@id="table1"]/tbody/tr[4]/td[1]') }
}
class FirstNameField {
    get columnSort() { return $('//*[@id="table1"]/thead/tr/th[2]') }
    get columnName() { return $('//*[@id="table1"]/thead/tr/th[2]/span') }
    get firstRowValue() { return $('//*[@id="table1"]/tbody/tr[1]/td[2]') }
    get secondRowValue() { return $('//*[@id="table1"]/tbody/tr[2]/td[2]') }
    get thirdRowValue() { return $('//*[@id="table1"]/tbody/tr[3]/td[2]') }
    get fourthRowValue() { return $('//*[@id="table1"]/tbody/tr[4]/td[2]') }
}
class EmailField {
    get columnSort() { return $('//*[@id="table1"]/thead/tr/th[3]') }
    get columnName() { return $('//*[@id="table1"]/thead/tr/th[3]/span') }
    get firstRowValue() { return $('//*[@id="table1"]/tbody/tr[1]/td[3]') }
    get secondRowValue() { return $('//*[@id="table1"]/tbody/tr[2]/td[3]') }
    get thirdRowValue() { return $('//*[@id="table1"]/tbody/tr[3]/td[3]') }
    get fourthRowValue() { return $('//*[@id="table1"]/tbody/tr[4]/td[3]') }
}
class DueField {
    get columnSort() { return $('//*[@id="table1"]/thead/tr/th[4]') }
    get columnName() { return $('//*[@id="table1"]/thead/tr/th[4]/span') }
    get firstRowValue() { return $('//*[@id="table1"]/tbody/tr[1]/td[4]') }
    get secondRowValue() { return $('//*[@id="table1"]/tbody/tr[2]/td[4]') }
    get thirdRowValue() { return $('//*[@id="table1"]/tbody/tr[3]/td[4]') }
    get fourthRowValue() { return $('//*[@id="table1"]/tbody/tr[4]/td[4]') }
}
class WebSiteField {
    get columnSort() { return $('//*[@id="table1"]/thead/tr/th[5]') }
    get columnName() { return $('//*[@id="table1"]/thead/tr/th[5]/span') }
    get firstRowValue() { return $('//*[@id="table1"]/tbody/tr[1]/td[5]') }
    get secondRowValue() { return $('//*[@id="table1"]/tbody/tr[2]/td[5]') }
    get thirdRowValue() { return $('//*[@id="table1"]/tbody/tr[3]/td[5]') }
    get fourthRowValue() { return $('//*[@id="table1"]/tbody/tr[4]/td[5]') }
}
class ActionField {
    get columnName() { return $('//*[@id="table1"]/thead/tr/th[6]/span') }
}

module.exports = {
    LastNameField, FirstNameField,
    EmailField, DueField,
    WebSiteField, ActionField
}