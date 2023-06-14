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
import Menu from "../components/Menu/Menu.jsx";
const Grafico1 = () => {
  const data1 = [
    { name: "Abertos", Quantidade: 18 , fill: "#65b70a"},
    { name: "Fechados", Quantidade: 41, fill: "#D20f0f" },
    { name: "Pendentes", Quantidade: 4, fill: "#F3f727" },
  ]
    const data2 = [
      { name: "Comercial", Quantidade:  28, fill: "orange"},
      { name: "Operação", Quantidade: 26, fill: "purple" },
      { name: "Tecnologia", Quantidade: 9, fill: "pink" },
  ];
const {h1,div,div2,body} = Dashboardstyle;
  return (
    <body style={body}>
    <><Menu /><div style={div}>
      <h1 style={h1}>Situação dos Chamados:</h1>
      <div className="Graficos">
        <PieChart width={600} height={350}>
          <Pie
            dataKey="Quantidade"
            isAnimationActive={false}
            data={data1}
            cx={"50%"}
            cy={"50%"}
            outerRadius={100}
            fill="#fff"
            label />
          <Tooltip />
        </PieChart>
        <BarChart
          width={450}
          height={350}
          data={data1}
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
            padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Quantidade" fill="black" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
      <div style={div2}>
        <PieChart width={600} height={350}>
          <Pie
            dataKey="Quantidade"
            isAnimationActive={false}
            data={data2}
            cx={"50%"}
            cy={"50%"}
            outerRadius={100}
            fill="#fff"
            label />
          <Tooltip />
        </PieChart>
        <BarChart
          width={450}
          height={350}
          data={data2}
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
            padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Quantidade" fill="black" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div></>
    </body>

  );
};
export default Grafico1