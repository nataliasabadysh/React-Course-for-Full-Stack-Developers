import React, { useState } from "react";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input";

export const Searchbar = ({ onSendQuery }) => {
  const [value, setValue] = useState();

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    onSendQuery(value);
  };

  return (
    <>
      <div style={{ width: 400 }}>
        <form onSubmit={handleSend} style={{ display: "flex" }}>
          <Input
            type="text"
            placeholder="Search images and photos"
            onChangeInput={onChangeInput}
          />
          <Button type="submit" label="Search" />
        </form>
      </div>
    </>
  );
};
