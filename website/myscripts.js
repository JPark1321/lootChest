// Display an alert when the page loads
/* window.onload = function () {
    alert("Welcome to GFG!");
};
*/

// Add an event listener to change the paragraph text when clicked
document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.querySelector("p");
    paragraph.addEventListener("click", function () {
        paragraph.textContent = "You clicked the paragraph!";
    });
});

// Generates a random chest,
// Stores obtained chests dynamically by using localStorage,
document.addEventListener("DOMContentLoaded", function () {
    const loot = document.getElementById("loot");
    const message = document.getElementById("treasure-message");
    const inventoryButton = document.getElementById("inventory-button");
    const indexButton = document.getElementById("index-button");

    // Initiaalize obtained chests array in localStorage
    if (!localStorage.getItem("obtainedChests")) {
        localStorage.setItem("obtainedChests", JSON.stringify([]));
    }

    // Add click event listener to the treasure chest
    loot.addEventListener("click", function () {
        // Generate a random number between 0 and 1
        const randomChance = Math.random();
        let chestType = "";
        // Variable to hold text color
        let color = "";

        // Give chest based on the random chance
        if(randomChance < 0.5) {
            loot.src = "commonChest.png";
            message.textContent = "You got a COMMON chest!";
            chestType = "Common";
            color = "brown";
        }
        else if(randomChance < 0.8) {
            loot.src = "uncommonChest.png";
            message.textContent = "You got an UNCOMMON chest!";
            chestType = "Uncommon";
            color = "silver";
        }
        else {
            loot.src = "rareChest.png";
            message.textContent = "You got a RARE chest!";
            chestType = "Rare";
            color = "gold";
        }

        // Change the color of the text
        message.style.color = color;

        // Show the treasure message
        message.style.display = "block";

        // Optionally, disable further clicks
        // loot.style.pointerEvents = "none";

        // Update localStorage with the obtained chest
        const obtainedChests = JSON.parse(localStorage.getItem("obtainedChests")) || [];
        obtainedChests.push({ type: chestType, img: loot.src});
        localStorage.setItem("obtainedChests", JSON.stringify(obtainedChests));
    });

    // Click event listener for the inventory button
    inventoryButton.addEventListener("click", function() {
        window.location.href = "inventory.html";
    });

    // Click event listener for the index button
    // indexButton.addEventListener("click", function() {
    //     window.location.href = "index.html";
    // });

});

