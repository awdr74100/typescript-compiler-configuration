const btn = document.querySelector(".btn")!;

// This is fucking comments
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked!");

  const arr = [{ name: "Ian" }, { name: "Owen" }];

  for (const { name } of arr) {
    console.log(name);
  }
});
