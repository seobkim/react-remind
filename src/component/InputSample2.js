import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function InputSample2() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
  };

  return (
    <div>
      <input
        placeholder="이름"
        onChange={onChange}
        value={name}
        name={"name"}
      />
      <input
        placeholder="닉네임"
        onChange={onChange}
        value={nickName}
        name={"nickName"}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickName})
      </div>
    </div>
  );
}

export default InputSample2;
