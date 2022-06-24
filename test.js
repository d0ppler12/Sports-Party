async function test() {
  const x = await fetch("http://localhost:5000/harsh").then((response) =>
    response.json()
  );
  console.log(x);
}
