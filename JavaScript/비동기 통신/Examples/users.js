//code squad examples
const executeButton = document.getElementById("execute");

function fetchForPromise(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.addEventListener("load", function() {
      let htData = JSON.parse(req.responseText);
      if(typeof htData !== "object") reject("wrong");
      else resolve(htData);
    });
    req.open("GET", url);
    req.send();
  });
}

const fetchApi = () => {
  fetchForPromise("./data/users.json")
  .then(function(data) {
    const usersDiv = document.createElement("div");
    executeButton.insertAdjacentElement("afterend", usersDiv);
    usersDiv.innerText = JSON.stringify(data);
  });
}

executeButton.addEventListener("click", function() {
  fetchApi();
});
