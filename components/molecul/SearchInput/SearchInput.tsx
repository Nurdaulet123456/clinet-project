import styled from "@emotion/styled";
import React, { FC } from "react";

interface SearchInputProps {
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  // component props
  value,
  onChange,
}) => {
  return (
    <CustomInput
      value={value}
      onChange={onChange}
      placeholder="Search..."
    />
  );
};

const CustomInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 60px;
  margin: 0;
  padding-left: 90px;
  padding-top: 4px;

    
  background-image: url("/icons/seacrhIcon.png");
  background-position: left 50px center;
  background-repeat: no-repeat;
  
  border: 0.5px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 6px;
    
  font-size: 16px;
  font-weight: 400;
  color: #1B447A;
`;

export default SearchInput;