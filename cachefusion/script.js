document.getElementById("homeBtn").addEventListener("click", function() {
    const title = "Cache Fusion";
    const subtitle = "Unifying Speed and Efficiency";
    let index = 0;

    document.getElementById("content").innerHTML = ""; // Clear previous content

    const titleElement = document.createElement("h1");
    const subtitleElement = document.createElement("h2");
    subtitleElement.style.fontSize = "24px"; // Smaller font size for subtitle
    document.getElementById("content").appendChild(titleElement);
    document.getElementById("content").appendChild(subtitleElement);

    const interval = setInterval(() => {
        if (index < title.length) {
            titleElement.textContent += title[index];
            index++;
        } else {
            clearInterval(interval);
            subtitleElement.textContent = subtitle; // Set subtitle after title is complete
        }
    }, 300); // Adjust speed here (300ms between letters)

    document.getElementById("experimentFrame").style.display = "none"; // Hide the iframe
    document.getElementById("aboutBtn").style.display = "none"; // Hide the about button
});

document.getElementById("experimentBtn").addEventListener("click", function() {
    document.getElementById("experimentFrame").style.display = "block"; // Show the iframe
    document.getElementById("experimentFrame").src = "https://cachefusion.vercel.app/"; // Replace with your link
    document.getElementById("content").innerHTML = ""; // Clear previous content
    document.getElementById("aboutBtn").style.display = "block"; // Show the about button
});

document.getElementById("aboutBtn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <div class="about-box">
            <h3>Cache Fusion</h3>
            <p>UNIFYING SPEED AND EFFICIENCY</p>
            <p>Mentor: Dr.S.Padmini (Associate Professor)</p>
            <p>Team:</p>
            <ul>
                <li>Vickash Narayan R (RA2311003011590)</li>
                <li>Raghunath SR (RA2311003011573)</li>
                <li>Mohana Prasath (RA2311003011593)</li>
            </ul>
            <p>Contact Us: 9566477586</p>
        </div>
    `;
    document.getElementById("experimentFrame").style.display = "none"; // Hide the iframe
});
