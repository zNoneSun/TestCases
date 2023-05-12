import { Input, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const change = () => {
    dispatch({ type: "changeName", key: "1-1", value: value });
  };

  return (
    <div>
      <label>1-1页面</label>
      <Input type="text" value={value} onChange={handleChange} />
      <Button type="primary" onClick={change}>
        修改
      </Button>
    </div>
  );
};

export default Index;
