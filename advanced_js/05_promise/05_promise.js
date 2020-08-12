"use strict";

// console.log("Запрос данных....");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка данных....");
//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });
// p.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = "order";
//       resolve(product);
//       //   reject();
//     }, 2000);
//   });
// })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Error");
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

// ============================================================================
// setTimeout(() => {
//   console.log("Подготовка данных....");

//   const product = {
//     name: "TV",
//     price: 2000,
//   };

//   setTimeout(() => {
//     product.status = "order";
//     console.log(product);
//   }, 2000);
// }, 2000);

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => {
//   console.log("1000 ms");
// });
// test(2000).then(() => {
//   console.log("3000 ms");
// });

Promise.all([test(1000), test(3000)]).then(() => {
  console.log("All");
});

Promise.race([test(1000), test(3000)]).then(() => {
  console.log("first");
});
