let buttonElement = document.getElementById("sendPostRequestBtn");
let requestBody = document.getElementById("requestBody");
let requestStatusEle = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendPostHTTPRequest() {
    let metadata = JSON.parse(requestBody.value);
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 0f83af995cf311d72e0e991fd8affb351ccfcd032fa06968b2685f15cd1bc546"
        },
        body: JSON.stringify(metadata)
    };
    let url = "https://gorest.co.in/public-api/users";

    // Show loading indicator
    loadingEl.classList.remove("d-none");
    requestStatusEle.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json().then(jsonData => ({
                statusCode: response.status,
                jsonData
            }));
        })
        .then(function(data) {
            // Hide loading indicator
            loadingEl.classList.add("d-none");

            // Display status code
            requestStatusEle.classList.remove("d-none");
            requestStatusEle.textContent = data.statusCode;

            // Display HTTP response
            httpResponse.textContent = JSON.stringify(data.jsonData);
        });
}

buttonElement.onclick = sendPostHTTPRequest;
