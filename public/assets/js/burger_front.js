// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const changeBtn = document.querySelectorAll(".change-devoured");
  // Set up the event listener for the create button
  if (changeBtn) {
    changeBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const newEat = e.target.getAttribute("data-newEat");

        const newEatState = {
          devoured: newEat,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newEatState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed devoured to: ${newEat}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  // CREATE
  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "bg"
      const newBurger = {
        burger_name: document.getElementById("bg").value.trim(),
        devoured: document.getElementById("devoured").checked,
      };

      // Send POST request to create a new quote
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById("bg").value = "";

        // Reload the page so the user can see the new quote
        console.log("Created a new burger!");
        location.reload();
      });
    });
  }
});
