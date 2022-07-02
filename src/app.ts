const btn = document.querySelector(".btn")!;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked!");

  const arr = [{ name: "Ian" }, { name: "Owen" }];

  for (const { name } of arr) {
    console.log(name);
  }
});
