// Fetch CSV data from the server (adjust the path if needed)
async function fetchCSVData() {
    const response = await fetch('dump.csv');  // replace with your actual file path if served differently
    const csvData = await response.text();
    return csvData;
}

// Parse CSV data into a usable format
function parseCSVData(csvData) {
    const rows = csvData.split("\n");
    const headers = rows[0].split(",");
    const data = rows.slice(1).map(row => row.split(","));
    const dates = Array.from(new Set(data.map(row => row[0])));
    const structuredData = {};

    dates.forEach(date => {
        structuredData[date] = data
            .filter(row => row[0] === date)
            .map(row => ({
                open: parseFloat(row[1]),
                high: parseFloat(row[2]),
                low: parseFloat(row[3]),
                close: parseFloat(row[4]),
                pointsChange: parseFloat(row[5]),
                percentChange: parseFloat(row[6]),
                volume: parseFloat(row[7]),
                turnover: parseFloat(row[8]),
                peRatio: parseFloat(row[9]),
                pbRatio: parseFloat(row[10]),
                divYield: parseFloat(row[11])
            }));
    });

    return { headers, structuredData };
}

// Render the date list in the sidebar
function renderDateList(dates) {
    const dateListContainer = document.getElementById("dateList");
    dates.forEach(date => {
        const dateElement = document.createElement("a");
        dateElement.className = "list-group-item list-group-item-action date-item";
        dateElement.innerText = date;
        dateElement.onclick = () => updateChart(date);
        dateListContainer.appendChild(dateElement);
    });
}

// Update the chart based on the selected date
function updateChart(date) {
    const chartData = parsedData.structuredData[date][0];
    chart.data.labels = ["Open", "High", "Low", "Close", "Volume", "Turnover"];
    chart.data.datasets[0].data = [
        chartData.open,
        chartData.high,
        chartData.low,
        chartData.close,
        chartData.volume,
        chartData.turnover
    ];
    chart.update();
}

// Initialize chart using Chart.js
function initChart() {
    const ctx = document.getElementById('indexChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Index Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    data: [],
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });
}

// Fetch and parse CSV data, then render UI elements
(async function () {
    const csvData = await fetchCSVData();
    parsedData = parseCSVData(csvData);
    renderDateList(Object.keys(parsedData.structuredData));
    initChart();
})();
