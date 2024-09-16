import PropTypes from "prop-types";

MyList.propTypes = {
  dataList: PropTypes.array,
  setSelectItem: PropTypes.func,
  currentItemId: PropTypes.string,
};

// 箭头函数好像不会被提升 导致 MyList.propTypes 会找不到
// Uncaught ReferenceError: Cannot access 'MyList' before initialization
export function MyList  ({ dataList, setSelectItem, currentItemId }) {
  return (
    <ul>
      {dataList.map((item, index) => 
        <li
          key={index}
          onClick={() => setSelectItem(item)}
          style={
            {  background: item.id === currentItemId ? "red" : "" }
          }
        >
          {item.name}
        </li>
      )}
    </ul>
  );
}
