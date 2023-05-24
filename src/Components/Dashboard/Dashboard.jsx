import React from "react";
import Dashboardstyle from "./Dashboard.js";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Grafico = () => {
  const data = [
    { name: "Chamados Abertos", Quantidade: 18 , fill: "#65b70a"},
    { name: "Chamados Fechados", Quantidade: 41, fill: "#D20f0f" },
    { name: "Chamados Pendentes", Quantidade: 4, fill: "#F3f727" },
  ];
const {h1,div} = Dashboardstyle;
  return (
    <div style={div}>
      <h1 style={h1}>Situação dos Chamados</h1>
      <div className="Graficos">
        <PieChart width={600} height={250}>
          <Pie
            dataKey="Quantidade"
            isAnimationActive={false}
            data={data}
            cx={"50%"}
            cy={"50%"}
            outerRadius={100}
            fill="#fff"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={350}
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 80,
            bottom: 0,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Quantidade" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Grafico;