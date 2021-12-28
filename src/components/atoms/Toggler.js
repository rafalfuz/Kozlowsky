import styled from "styled-components";
import Switch from "react-switch";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import GeneralTemplate from "../templates/GeneralTemplate";
import ContentPageTest from "../../views/ContentPageTest";

const Icon = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
`;

const Toggler = (props) => {
  const changeThemeMode = (props) => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  const icon =
    props.theme === "light" ? (
      <MdOutlineLightMode size={40} />
    ) : (
      <MdDarkMode size={40} />
    );

  return (
    <GeneralTemplate theme={props}>
      <MdOutlineLightMode size={25} />
      <Switch
        onChange={() => changeThemeMode(props)}
        uncheckedIcon={false}
        checkedIcon={false}
        checked={props.theme === "dark"}
        height={10}
        width={40}
        handleDiameter={15}
      />
      <MdDarkMode size={25} />
      <ContentPageTest />
    </GeneralTemplate>
  );
};

export default Toggler;
