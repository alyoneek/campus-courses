import { useState } from "react";

const usePopconfirm = () => {
  const [openPopconfirm, setOpenPopconfirm] = useState(false);

  const showPopconfirm = () => {
    setOpenPopconfirm(true);
  };

  const onCancelPopconfirm = () => {
    setOpenPopconfirm(false);
  };

  return { openPopconfirm, showPopconfirm, onCancelPopconfirm };
};

export default usePopconfirm;
