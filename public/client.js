

async function loadTable(table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch('/api');
    const { headers, rows } = await response.json();

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    for (const headerText of headers) {
        const headerElement = document.createElement("th");
        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }

    for (const row of rows) {
        const rowElement = document.createElement("tr");
        const cellFav = document.createElement("td");
        cellFav.style.textAlign = "center";
        cellFav.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        rowElement.appendChild(cellFav);

        for (const cell of row) {
            const cellElement = document.createElement("td");
            cellElement.textContent = cell;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
    }
}

loadTable(document.querySelector("table"))