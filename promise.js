// try catch

// then catch
// async function Tinh() {
//   try {
//     const a = 3;
//     const b = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let result = a * 2;
//         resolve(result);
//       }, 2000);
//     });
//     console.log( b);
//   } catch (error) {}
// }
// Tinh();

async function Sum() {
  try {
    let n = 9;
    let doubleN = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n > 10) {
          reject("n is to big");
        } else {
          let result = n + n;
          resolve(result);
        }
      }, 1000);
    });
    console.log(doubleN);
  } catch (error) {
    console.log("Loi do a qua lon");
  }
}
Sum();
