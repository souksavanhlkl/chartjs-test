import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    //Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Saya",
          "Vientiane",
          "Khammeuan",
          "Savannakhet",
          "Huaphan",
          "Attapue"
        ],
        datasets: [
          {
            label: "population",
            data: [23434, 24242, 45434, 23234, 34343, 23234],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart
          chartData={this.state.chartData}
          location="Laos"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
