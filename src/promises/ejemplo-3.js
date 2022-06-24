'use strict'

const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

'use strict'

const getData = () => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            let res = response.json()
            console.log(res)
            return res
        })
        .then((data) => {
            console.log(data)
            return 4
        })
        .then(cuatro => console.log(cuatro))
        .catch(error => console.error(error))

}

getData()
