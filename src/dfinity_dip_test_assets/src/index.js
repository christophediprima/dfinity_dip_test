import { dfinity_dip_test } from "../../declarations/dfinity_dip_test";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with dfinity_dip_test actor, calling the greet method
  const greeting = await dfinity_dip_test.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
