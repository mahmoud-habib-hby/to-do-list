import { useState } from "react";
import Text from "./api";

const TextProvider = ({ children }) => {
  const l = localStorage.getItem("task");
  const [val, setVal] = useState(l ? JSON.parse(l) : []);  // تأكد من أنك تقوم بتحميل البيانات كـ array

  const add = (x) => {
    const newVal = [...val, { id: Date.now(), text: x }];
    setVal(newVal);
    localStorage.setItem("task", JSON.stringify(newVal));  // خزن البيانات الجديدة
  };

  const remove = (id) => {
    const newVal = val.filter((todo) => todo.id !== id);
    setVal(newVal);
    localStorage.setItem("task", JSON.stringify(newVal));  // خزن البيانات الجديدة
  };

  return <Text.Provider value={{ val, add, remove }}>{children}</Text.Provider>;
};

export default TextProvider;
