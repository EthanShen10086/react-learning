import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

FormList.propTypes = {
  type: PropTypes.number,
};

CreateForm.propTypes = {
  type: PropTypes.number,
};

const getFormList = (type) => {
  return ["1", "2", "3"];
};

export const FormList = ({ type }) => {
  const formList = useMemo(() => getFormList({ type }, [type]));
  const handleChange = useCallback(
    (id) => {
      console.log(id, "== callback");
    },
    [type]
  );
  return (
    <>
      {formList.map(({ value, id, ...rest }) => (
        <item.component
          value={value}
          handleChange={handleChange}
          key={id}
          {...rest}
        />
      ))}
    </>
  );
};

export const CreateForm = ({ type }) => {
  if (!type) return;
  return <FormList type={type} />;
};
