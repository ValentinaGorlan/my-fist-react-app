import "./app-info.css";

const AppInfo = ({total, increased}) => {
  return (
    <div className="app-info">
      <h1>Accounting for employees in the company.</h1>
      <h2>Total number of employees: {total}</h2>
      <h2>The award will be given to: {increased}</h2>
    </div>
  );
};

export default AppInfo;
