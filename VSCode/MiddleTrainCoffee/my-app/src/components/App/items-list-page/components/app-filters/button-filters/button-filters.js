import "./button-filters.scss";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "Brazil", className: "btn-brazil" },
    { name: "Kenya", className: "btn-kenya" },
    { name: "Columbia", className: "btn-columbia" },
  ];
  const buttons = buttonsData.map(({ name, className }) => {
    const active = props.filterBy === name;
    const clazz = active ? className + " active" : className;
    return (
      <button
        className={className + clazz}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {name}
      </button>
    );
  });
  return (
    <div className="filter container">
      <div className="filter-by-btn">
        <span>Or filter</span>
        <div className="btn-group">{buttons}</div>
      </div>
    </div>
  );
};
export default AppFilter;
