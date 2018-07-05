
function dateFormat(date) {

    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    return `${day} - ${month} - ${year}`

}

module.exports = dateFormat