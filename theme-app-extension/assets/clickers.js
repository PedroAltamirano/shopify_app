const fetcher = (type) => {
  fetch(`/apps/tinkin/add_click?type=${type}`)
    .then(console.log("added click"))
    .catch((error) => console.error(error), {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    });
};

document
  .querySelector("#ok_btn")
  .addEventListener("click", () => fetcher("ok"));
document
  .querySelector("#cancel_btn")
  .addEventListener("click", () => fetcher("cancel"));
