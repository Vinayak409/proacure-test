import { Box, styled, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`
margin-right: 50px;
  margin-left: 250px;
  margin-top: -400px;
  ${'' /* width: 70%; */}
  border: 1.5px solid black;
  ${'' /* padding-left: 100px; */}
  padding-top: 40px;
`;

const Text = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  border: 1.5px solid black;
  text-transform: none;
  color: #000;
  margin-right: 20px;
`;

const SearchBarItems = () => {

  const navigate = useNavigate();

  const openForm = () => {
    navigate("/newitem");
  };

  return (
    <StyledBox>
      <Box style={{ margin: 'auto', width: '100%'}}>
        <Text
          variant="outlined"
          placeholder="Good Morning Sanjay. Would you like to place a new request?"
          fullWidth
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        ></Text>
      </Box>

      <Box style={{ marginLeft: '30px'}}>
        <StyledButton>Software</StyledButton>
        <StyledButton>Laptop</StyledButton>
        <StyledButton>
          New <br />
          Supplier
        </StyledButton>
        <StyledButton  onClick={() => openForm()}>New Item</StyledButton>
      </Box>
    </StyledBox>
  );
};

export default SearchBarItems;
