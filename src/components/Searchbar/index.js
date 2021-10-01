import React, { useState } from "react";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input";

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <div style={{ width: 400 }}>
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <Input
            type="text"
            placeholder="Search images and photos"
            onChangeInput={handleChange}
            autoFocus={true}
          />
          <Button type="submit" label="Search" />
        </form>
      </div>
    </>
  );
};
