data = [
  {
    country: "Portugal",
    type: "scatterpolar",
    r: [730, 70, 20, 1.9, 300, 20, 800],
    theta: [
      "Minimum Wage",
      "Electricity",
      "Water",
      "Gas",
      "Groceries",
      "Insurance",
      "Avg. rent",
    ],
    fill: "toself",
  },
  {
    country: "Netherlands",
    type: "scatterpolar",
    r: [1670, 150, 100, 2.0, 400, 109, 850],
    theta: [
      "Minimum Wage",
      "Electricity",
      "Water",
      "Gas",
      "Groceries",
      "Insurance",
      "Avg. rent",
    ],
    fill: "toself",
  },
  {
    country: "Spain",
    type: "scatterpolar",
    r: [1200, 70, 20, 1.6, 300, 20, 500],
    theta: [
      "Minimum Wage",
      "Electricity",
      "Water",
      "Gas",
      "Groceries",
      "Insurance",
    ],
    fill: "toself",
  },
  {
    name: "Germany",
    type: "scatterpolar",
    r: [2500, 150, 30, 1.9, 300, 180, 700],
    theta: [
      "Minimum Wage",
      "Electricity",
      "Water",
      "Gas",
      "Groceries",
      "Insurance",
      "Avg. rent",
    ],
    fill: "toself",
  },
];

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 2500],
    },
  },
  showlegend: false,
};

Plotly.newPlot("myChart", data, layout);
