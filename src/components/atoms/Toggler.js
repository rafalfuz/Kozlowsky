import styled from "styled-components";
import Switch from "react-switch";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import GeneralTemplate from "../templates/GeneralTemplate";

const StyledToggler = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundPage};
  justify-content: flex-end;
  align-items: center;
`;

const Toggler = (props) => {
  const changeThemeMode = (props) => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  return (
    <GeneralTemplate theme={props}>
      <StyledToggler>
        <MdOutlineLightMode size={25} />
        <Switch
          onChange={() => changeThemeMode(props)}
          uncheckedIcon={false}
          checkedIcon={false}
          checked={props.theme === "dark"}
          height={5}
          width={40}
          handleDiameter={15}
          offHandleColor="#282828"
          onHandleColor="#B8B8B8"
          offColor="#B8B8B8"
          onColor="#B8B8B8"
          activeBoxShadow="'0 0 2px 3px #fff'"
        />
        <MdDarkMode size={25} />
      </StyledToggler>
    </GeneralTemplate>
  );
};

export default Toggler;
