const cheerio = require("cheerio");
const axios = require("axios");

axios
  .get(
    "https://www.formula1.com/en/results.html/2023/races/1143/australia/race-result.html"
  )
  .then((response) => {
    const $ = cheerio.load(response.data);

    // Scraping logic here
    const table = $(".resultsarchive-table");

    // Select the table rows within the table
    const rows = table.find("tr");
    const tableData = [];
    const pointsData = [];
    const headers = $(rows[0]).find("th");
    const data = [
      { id: 1, grandPrix: "Bahrain" },
      { id: 2, grandPrix: "Saudi Arabia" },
      { id: 3, grandPrix: "Australia" },
      { id: 4, grandPrix: "Azerbaijan" },
      { id: 5, grandPrix: "Miami" },
      { id: 6, grandPrix: "Monaco" },
      { id: 7, grandPrix: "Spain" },
      { id: 8, grandPrix: "Canada" },
    ];
    const driverData = [
      { id: 1, fullName: "Max Verstappen " },
      { id: 2, fullName: "Charles Leclerc " },
      { id: 3, fullName: "Sergio Perez " },
      { id: 4, fullName: "George Russell " },
      { id: 5, fullName: "Carlos Sainz " },
      { id: 6, fullName: "Lewis Hamilton " },
      { id: 7, fullName: "Lando Norris " },
      { id: 8, fullName: "Esteban Ocon " },
      { id: 9, fullName: "Fernando Alonso " },
      { id: 10, fullName: "Valtteri Bottas " },
      { id: 13, fullName: "Kevin Magnussen " },
      { id: 15, fullName: "Lance Stroll " },
      { id: 18, fullName: "Zhou Guanyu " },
      { id: 19, fullName: "Alexander Albon " },
      { id: 21, fullName: "Nyck De Vries " },
      { id: 22, fullName: "Oscar Piastri " },
      { id: 23, fullName: "Pierre Gasly " },
      { id: 24, fullName: "Nico Hulkenberg " },
      { id: 25, fullName: "Logan Sargeant " },
    ];
    // Iterate over each row
    for (let i = 1; i < rows.length - 1; i++) {
      const row = rows[i];
      const rowData = {};
      const pointrow = {};
      // Select the table cells within the row
      const cells = $(row).find("td");
      const grandPrix = cells[2];
      const winner = cells[3];
      const car = cells[4];
      const laps = cells[5];
      const time = cells[6];
      const points = cells[7];
      // data.map((item) => {
      //   if (item.grandPrix === $(grandPrix).text().trim())
      //     rowData.raceId  = item.id;
      // });
      rowData.year = 2023;
      rowData.raceId = 3;

      driverData.map((item) => {
        if (
          item.fullName ===
          $(winner).text().trim().replace(/\s+/g, " ").slice(0, -3)
        )
          rowData.driverId = item.id;
      });
      rowData.car = $(car).text().trim();
      rowData.laps = $(laps).text().trim();
      rowData.time = $(time).text().trim();
      rowData.points = $(points).text().trim();
      tableData.push(rowData);
    }
    console.log(JSON.stringify(tableData));
    // console.log(JSON.stringify(pointsData));
  })
  .catch((error) => {
    console.log(error);
  });
