const deployUrl=""
document.addEventListener("DOMContentLoaded", () => {
  const jsonForm = document.getElementById("jsonForm");
  const jsonDataInput = document.getElementById("jsonData");
  const resultDiv = document.getElementById("result");
  const responseContainer = document.getElementById("responseContainer");

  jsonForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const jsonData = jsonDataInput.value;

    try {
      const response = await fetch(`/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jsonData }),
      });

      // console.log(response); // Debugging line

      if (response.ok) {
        const data = await response.json();
        resultDiv.classList.remove("hidden");
        responseContainer.innerHTML = "";

        for (const key in data) {
          const value = data[key];
          const keyValueDiv = document.createElement("div");
          keyValueDiv.classList.add("key-value");
          keyValueDiv.innerHTML = `
            <div class="key">${key}</div>
            <input class="value" type="text" value="${
              typeof value === "object" ? JSON.stringify(value) : value
            }">
          `;
          responseContainer.appendChild(keyValueDiv);
        }

        Swal.fire({
          icon: "success",
          title: "Request Sent Successfully",
          text: "API response is here",
        });
      } else {
        throw new Error("Invalid JSON data");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid JSON data! Please check your input.",
      });
    }
  });
});
