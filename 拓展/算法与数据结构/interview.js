for (var i = 0; i < 5; i++) {
  console.log(new Date(), i)
}
console.log(new Date(), i)
//0,1,2,3,4,5

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(new Date(), i)
  }, 1000)
}
console.log(new Date(), i)
// 5(隔1s)，5,5,5,5,5

//闭包
for (var i = 0; i < 5; i++) {
  ;(j => {
    setTimeout(() => {
      console.log(new Date(), j)
    }, 1000)
  })(i)
}
console.log(new Date(), i)
//5=>0,1,2,3,4

//按值传递
var inputValue = function(i) {
  setTimeout(() => {
    console.log(new Date(), i)
  }, 1000)
}

for (var i = 0; i < 5; i++) {
  inputValue(i)
}
console.log(new Date(), i)
//5=>0,1,2,3,4
//es6
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(new Date(), i)
  }, 1000)
}
console.log(new Date(), i)
//会报错

//如何输出0=>1=>2=>3=>4=>5
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(new Date(), j)
    }, 1000 * j)
  })(i)
}

setTimeout(() => {
  console.log(new Date(), i)
}, 1000 * i)
//0=>1=>2=>3=>4=>5
//es6优化上述问题
let task = []
for (var i = 0; i < 5; i++) {
  (j => {
    task.push(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(new Date(), j)
          resolve()
        }, 1000 * j)
      })
    )
  })(i)
}

Promise.all(task).then(() => {
  setTimeout(() => {
    console.log(new Date(), i)
  }, 1000)
})

//es7优化上述问题
const sleep = time => {
  new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
(async () => {
  for (var i = 0; i < 5; i++) {
    await sleep(1000)
    console.log(new Date(), i)
  }
  await sleep(1000)
  console.log(new Date(), i)
})()
