# stock_app_test
Here’s a README text that explains how to set up and execute the code for displaying stock market data using a webpage with Bootstrap and Chart.js:


## Stock Market Data Viewer

This project provides a simple webpage to view stock market data from an Excel file (`dump.xlsx`). The webpage displays a list of index dates on the left side, and clicking on a date will update a chart on the right side with relevant data for that date.

### Prerequisites

1. **Web Browser**: Modern web browsers like Chrome, Firefox, Safari, or Edge.
2. **Local Web Server**: You need a local web server to serve the files due to CORS restrictions when using the `fetch` API to load local files.

### Project Structure

```
/project-directory
│
├── index.html       # Main HTML file with Bootstrap layout
├── script.js        # JavaScript file to fetch and parse CSV data, and handle chart rendering
├── data.csv         # CSV file containing the converted data from dump.xlsx
└── README.md        # Instructions on how to set up and run the project
```

### Setup Instructions

1. **Convert Excel Data to CSV**:
   - Open `dump.xlsx` in Excel or any spreadsheet editor.
   - Save the data as `data.csv` in the same directory as `index.html`.

2. **Set Up a Local Web Server**:
   To use the `fetch` API for loading `data.csv`, you need to run a local web server. You can use Python to set up a simple HTTP server.

   - **Using Python 3**:
     Open your terminal (Command Prompt, PowerShell, etc.) and navigate to the directory containing your project files. Run the following command:
     ```bash
     python -m http.server 8000
     ```
     This command will start a local web server on port 8000.

   - **Alternative Tools**:
     You can also use tools like **Live Server** in VS Code or other local server applications to achieve the same effect.

3. **Open the Webpage in Your Browser**:
   - Once the local server is running, open your web browser.
   - Go to `http://localhost:8000` to load the `index.html` file.

4. **Interacting with the Webpage**:
   - You will see a list of index dates on the left-hand side.
   - Click on any date to view the corresponding data on the chart displayed on the right-hand side.

### Technologies Used

- **HTML/CSS**: Basic webpage structure and styling.
- **Bootstrap**: For responsive design and styling.
- **JavaScript**: To handle data fetching, parsing, and chart rendering.
- **Chart.js**: To render dynamic and interactive charts.

### Notes

- Ensure that `data.csv` is correctly formatted and saved in the same directory as `index.html`.
- The web server is necessary because most browsers block `fetch` requests for local files due to security reasons.
- Make sure your CSV file format matches the expected structure used in `script.js`.

### Troubleshooting

- **CORS Errors**: Ensure you are running a local web server. Opening `index.html` directly from the file system (file:///) will not work.
- **404 Errors**: Check that all files (`index.html`, `script.js`, `data.csv`) are in the correct directory and the web server is pointing to the right folder.
- **Chart Not Updating**: Verify that your CSV file is correctly formatted and that the date values match those expected by the script.
- **Demo Link**:https://drive.google.com/file/d/11OrKIDOwushWbvWXj5Sce5HpgSsRSSBs/view?usp=drive_link
  

