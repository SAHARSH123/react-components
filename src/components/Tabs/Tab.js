const Tab = ({ currentTab, tabName, onChange }) => {
  let active = currentTab === tabName ? "active" : "";
  return (
    <div onClick={() => onChange(tabName)} className={`container ${active}`}>
      <div>{tabName}</div>
    </div>
  );
};

export default Tab;
