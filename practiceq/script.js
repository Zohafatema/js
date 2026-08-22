// async function gretting() {
//     const result = await somePromise();
//     await new Promise(resolve=>setTimeout(resolve,2000));
//     console.log("Hello")
// }
// greeting();


// catch (error) {
//   console.log("Error:", error);
// }


async function greeting() {
  try {
    const result = await new Promise(reject =>
      setTimeout(() => reject("Hello World"), 1000)
    );

    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}

greeting();