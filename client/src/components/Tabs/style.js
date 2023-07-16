import { Button, Checkbox, DatePicker, Input, Select, Table } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(12, 32, 40, 0.9);
  height: 97%;
  padding: 20px;
`;

export const CustomTable = styled(Table)``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AddButton = styled(Button)`
  background: #ffa500;
  font-family: NationalBold, Helvetica, Arial, Sans-serif;
  font-size: 20px;
  height: auto !important;
  padding: 12px;
`;


export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(12, 32, 40, 0.9);
  height: 97%;
  padding: 20px;
`;

export const CustomForm = styled.div`
  width: 100%;
  margin: 0px 100px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const InputFelid = styled(Input)`
  border: 1px solid #ffa500;
  border-radius: 5;
  background: #505c55;
  height: 45px;
  width: 100%;
`;


export const CreateButton = styled(Button)`
  background: #ffa500;
  border: none;
  // width: 100%;
  margin-top: 20px;
  margin-right: 15px;
  color: white;
  font-family: NationalBold, Helvetica, Arial, Sans-serif;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const Label = styled.p`
  color: #e4e4e4;
  font-size: 20px;
  font-family: NationalBold, Helvetica, Arial, Sans-serif;
`;

export const CustomSelect = styled(Select)`
  border: 1px solid #ffa500;
  border-radius: 5px;
  background: #505c55;
  height: 45px;
  width: 100%;
  .ant-select-selector {
    background: #505c55 !important;
    border: none !important;
  }
`;

export const IconWrapper = styled.div`
 display: flex;
 gap: 10px;
`;

export const CheckBoxes = styled(Checkbox.Group)`
  .ant-checkbox-wrapper {
    color: white;
    font-size: 20px;
    font-family: NationalBold, Helvetica, Arial, Sans-serif;
  }
  // margin-top: 5px;
`;

export const CustomDatePicker = styled(DatePicker)`
  border: 1px solid #ffa500;
  border-radius: 5;
  background: #505c55;
  height: 45px;
  width: 100%;
`;