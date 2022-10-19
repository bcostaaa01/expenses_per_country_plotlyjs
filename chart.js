data = [
  {
    country: "Portugal",
    type: "scatterpolar",
    r: [730, 70, 20, 2.0, 300, 20],
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
    country: "Netherlands",
    type: "scatterpolar",
    r: [1670, 150, 100, 2.0, 400, 109],
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
    country: "Spain",
    type: "scatterpolar",
    r: [1200, 70, 20, 1.6, 300, 20],
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
];

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 1670],
    },
  },
  showlegend: false,
};

Plotly.newPlot("myChart", data, layout);
