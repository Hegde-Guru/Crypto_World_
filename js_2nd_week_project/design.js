

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
.then(response => response.json())
.then(data => renderTable(data))
.catch(error => console.log(error));




 async function fetchData() {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
      const data = await response.json();
      renderTable(data);
    } catch (error) {
      console.log(error);
    }
  }  



  function renderTable(data) {
    const tableBody = document.querySelector("#cryptoTable tbody");
    tableBody.innerHTML = "";

    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><img src="${item.image}" width="20"></td>
        <td>${item.name}</td>
        <td>${item.id}</td>
        <td>${item.symbol}</td>
        <td>${item.current_price}</td>
        <td>${item.total_volume}</td>
      `;
      tableBody.appendChild(row);
    });
  }



  function sort(column) {
    const table = document.querySelector("#cryptoTable");
    const rows = Array.from(table.rows);
    const sortedRows = rows.slice(1).sort((a, b) => {
      const aValue = parseFloat(a.cells[column].textContent);
      const bValue = parseFloat(b.cells[column].textContent);
      return aValue - bValue;
    });

    table.tBodies[0].append(...sortedRows);
  }