const racesData =  [
  {
    year: 2023,
    raceId: 3,
    driverId: 1,
    car: "Red Bull Racing Honda RBPT",
    laps: "58",
    time: "2:32:38.371",
    points: "25",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 6,
    car: "Mercedes",
    laps: "58",
    time: "+0.179s",
    points: "18",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 9,
    car: "Aston Martin Aramco Mercedes",
    laps: "58",
    time: "+0.769s",
    points: "15",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 15,
    car: "Aston Martin Aramco Mercedes",
    laps: "58",
    time: "+3.082s",
    points: "12",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 3,
    car: "Red Bull Racing Honda RBPT",
    laps: "58",
    time: "+3.320s",
    points: "11",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 7,
    car: "McLaren Mercedes",
    laps: "58",
    time: "+3.701s",
    points: "8",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 24,
    car: "Haas Ferrari",
    laps: "58",
    time: "+4.939s",
    points: "6",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 22,
    car: "McLaren Mercedes",
    laps: "58",
    time: "+5.382s",
    points: "4",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 18,
    car: "Alfa Romeo Ferrari",
    laps: "58",
    time: "+5.713s",
    points: "2",
  },
  {
    year: 2023,
    raceId: 3,
    car: "AlphaTauri Honda RBPT",
    laps: "58",
    time: "+6.052s",
    points: "1",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 10,
    car: "Alfa Romeo Ferrari",
    laps: "58",
    time: "+6.513s",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 5,
    car: "Ferrari",
    laps: "58",
    time: "+6.594s",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 23,
    car: "Alpine Renault",
    laps: "56",
    time: "DNF",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 8,
    car: "Alpine Renault",
    laps: "56",
    time: "DNF",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 21,
    car: "AlphaTauri Honda RBPT",
    laps: "56",
    time: "DNF",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 25,
    car: "Williams Mercedes",
    laps: "56",
    time: "DNF",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 13,
    car: "Haas Ferrari",
    laps: "52",
    time: "DNF",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 4,
    car: "Mercedes",
    laps: "17",
    time: "DNF",
    points: "0",
  },
  {
    year: 2023,
    raceId: 3,
    driverId: 19,
    car: "Williams Mercedes",
    laps: "6",
    time: "DNF",
    points: "0",
  },
];

function generateInsertStatements(tableName, data) {
  const insertStatements = [];

  for (const race of data) {
    const columns = [];
    const values = [];

    for (const [key, value] of Object.entries(race)) {
      columns.push(`\`${key}\``);
      if (typeof value === "string") {
        values.push(`'${value.replace(/'/g, "''")}'`);
      } else {
        values.push(value);
      }
    }

    const columnsStr = columns.join(", ");
    const valuesStr = values.join(", ");

    insertStatements.push(
      `INSERT INTO \`${tableName}\` (${columnsStr}) VALUES (${valuesStr});`
    );
  }

  return insertStatements;
}

const tableName = "raceresult";
const insertStatements = generateInsertStatements(tableName, racesData);
console.log(insertStatements.join("\n"));
