import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  styled,
  Button,
} from "@mui/material";

import { addNewItem } from "../service/api";

const StyledBox = styled(Box)`
  display: flex;
  margin-bottom: 15px;
`;

const Container = styled(Box)`
  margin-left: 300px;
  margin-top: -583px;
  width: 50%;
  border: 1.5px solid black;
  padding-left: 100px;
  padding-top: 40px;
`;

const StyledButton = styled(Button)`
  margin-left: 80%;
  margin-bottom: 5px;
`;

const defaultValue = {
  name_of_supplier: "",
  product_information: "",
  category: "",
  quantity: "",
  timeline: "",
  location: "",
  required_for: "",
};

const Form = () => {
  const [item, setItem] = useState(defaultValue);

  const onValueChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const SubmitNewItem = async () => {
    await addNewItem(item);
    alert("Data added successfully!");
  };

  return (
    <Container>
      <StyledBox>
        <Typography style={{ marginRight: "20px" }}>
          Name of supplier
        </Typography>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="name_of_supplier"
        ></TextField>
      </StyledBox>

      <StyledBox>
        <Typography style={{ marginRight: "20px" }}>
          Product Information
        </Typography>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="product_information"
        ></TextField>
      </StyledBox>

      <StyledBox>
        <Typography style={{ marginRight: "20px" }}>Category</Typography>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="category"
        ></TextField>
      </StyledBox>

      <StyledBox>
        <Typography style={{ marginRight: "20px" }}>Quantity</Typography>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="quantity"
        ></TextField>
      </StyledBox>

      <StyledBox>
        <Typography style={{ marginRight: "20px" }}>Timeline</Typography>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="timeline"
        ></TextField>
      </StyledBox>

      <StyledBox>
        <Typography style={{ marginRight: "20px" }}>Location</Typography>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="location"
        ></TextField>
      </StyledBox>

      <StyledBox>
        <Typography style={{ marginRight: "20px" }}>Required For</Typography>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="required_for"
        ></TextField>
      </StyledBox>

      <StyledButton variant="contained" onClick={() => SubmitNewItem()}>Submit</StyledButton>
    </Container>
  );
};

export default Form;
