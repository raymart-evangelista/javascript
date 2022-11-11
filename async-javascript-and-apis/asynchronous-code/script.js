'use strict'

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Good to go!')
  }, 1000)
})

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 - the promising')
  }, 1500);
})

Promise.all([myPromise, myPromise2])
  .then((data) => {
    console.log(data)
  })