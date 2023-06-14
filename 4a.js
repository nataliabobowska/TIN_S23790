<!DOCTYPE html>
<html>
<head>
  <title>Temperature Conversion</title>
  <script src="4a.js"></script>
</head>
<body>
  <h1>Temperature Conversion</h1>
  <label for="temperature">Temperature:</label>
  <input type="number" id="temperature" required>
  <select id="scale">
    <option value="celsius">Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
  </select>
  <button onclick="convertTemperature()">Convert</button>
  <p id="result"></p>
</body>
</html>
