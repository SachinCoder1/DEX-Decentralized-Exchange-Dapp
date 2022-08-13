import React from "react";
import { Line } from "react-chartjs-2";

const Assets = ({ coin, price }) => {
  const randomNumber = () => {
    let data = [];
    for (let i = 0; i < 9; i++) {
      let randomNum = Math.floor(Math.random() * 100);
      data = [...data, randomNum];
    }
    return data;
  };

  const setGraphColor = () => {
    if (coin.change < 0) {
      return "#ef4b09";
    } else {
      return "#00ff1a";
    }
  };

  const data = {
    labels: [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    datasets: [
      {
        fill: false,
        lineTension: 0.01,
        backgroundColor: setGraphColor(),
        borderColor: setGraphColor(),
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: setGraphColor(),
        pointBackgroundColor: setGraphColor(),
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: setGraphColor(),
        pointHoverBorderColor: setGraphColor(),
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: randomNumber(),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="flex justify-between items-center p-5  hover:bg-gray-300 duration-300">
      <div className="">{coin}</div>
      <div className="w-36 h-full">
        <Line data={data} options={options} width={400} height={150} />
      </div>
      <div className="">
        {price}
        <span
          className=""
          style={{ color: coin.change < 0 ? "#ef4b09" : "green" }}
        >
          %
        </span>
      </div>
    </div>
  );
};

export default Assets;
