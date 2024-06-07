import React from "react";
import { Badge, Card } from "antd";
import { images as DEPARTMENTS } from "../../assets/images/departments";
import { useNavigate } from "react-router-dom";
const gridStyle = {
  width: "50%",
  textAlign: "center",
};
const App = () => {
  const navigate = useNavigate();
  return (
    <div className="p-2 h-[90vh] overflow-auto">
      <Card title="Đoàn đại biểu" className="items-center text-center">
        {DEPARTMENTS &&
          DEPARTMENTS.map((item) => {
            return (
              <Card.Grid
                onClick={() => {
                  navigate(`/department/${item.id}`);
                }}
                style={gridStyle}
                className="flex flex-col gap-2 items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-24 h-auto"
                />
                <p>Khoa {item.label}</p>
              </Card.Grid>
            );
          })}
      </Card>
    </div>
  );
};
export default App;
