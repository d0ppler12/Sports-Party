async function test() {
  fetch("http://localhost:5000/harsh").then((response) =>
    console.log(response)
  );
}

async function test2() {
  const x = await test();
  console.log(x);
}
