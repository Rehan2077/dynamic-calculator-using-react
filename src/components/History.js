
const History = ({historyProp}) => {
  return (
    <div className="history">
      <h2>History: </h2>
      {historyProp.map((item, key) => {
        // return <History item={item} key={key} />
        return (
          <h3 key={key}>
            {key + 1}. {item}
          </h3>
        );
      })}
    </div>
  );
};

export default History;