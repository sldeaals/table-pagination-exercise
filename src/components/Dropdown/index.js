import React, { memo, useState, useMemo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const Dropdown = memo((props) => {
  const { setPageSize, pageSize, gotoPage } = props;
  const [selectedOption, setSelectedOption] = useState({
    value: 10,
    label: "Show 10"
  });

  const options = useMemo(
    () => [
      { value: 5, label: `Show 5` },
      { value: 6, label: `Show 6` },
      { value: 10, label: `Show 10` }
    ],
    []
  );

  const onChange = useCallback(
    (e) => {
      setSelectedOption(Number(e.value));
      setPageSize(Number(e.value));
      gotoPage(0);
    },
    [setSelectedOption, setPageSize, gotoPage]
  );

  useEffect(() => {
    setSelectedOption({ value: pageSize, label: `Show ${pageSize}` });
  }, [pageSize]);

  return (
    <Select
      defaultValue={selectedOption}
      onChange={(e) => onChange(e)}
      options={options}
    />
  );
});

Dropdown.propTypes = {
  setPageSize: PropTypes.func,
  pageSize: PropTypes.number,
  gotoPage: PropTypes.func
};

export default Dropdown;
