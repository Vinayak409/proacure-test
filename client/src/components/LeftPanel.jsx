import { Box, Button, styled } from "@mui/material";

const StyledBoxBordered = styled(Box)`
  width: 100px;
  border: 1.5px solid black;
  margin-left: 5px;
  margin-top: 10px;
  ${'' /* position: fixed; */}
`;

const StyledButton = styled(Button)`
  text-transform: none;
  font-size: 16px;
  color: #000;
  margin-bottom: 10px;
  margin: auto;
  margin-left: 0px;
`;

const ButtonDivTop = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const ButtonDivDown = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
  margin-bottom: 50px;
`;

const LeftPanel = () => {
  return (
    <Box>
      <StyledBoxBordered>
        <ButtonDivTop>
          <StyledButton>Home</StyledButton>
          <StyledButton>Settings</StyledButton>
        </ButtonDivTop>

        <ButtonDivDown>
          <StyledButton>Help</StyledButton>
          <StyledButton>Logout</StyledButton>
        </ButtonDivDown>
      </StyledBoxBordered>
    </Box>
  );
};

export default LeftPanel;
