import { Dropdown } from "@nextui-org/react";
import styles from "./ProfileMenu.module.css"


export default function ProfileMenu() {
  return (
    <Dropdown>
      <Dropdown.Button flat text1="Profile" >Profile</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="info">User Info</Dropdown.Item>;
        <Dropdown.Item key="login" withDivider color="error">
          Login
        </Dropdown.Item>
        <Dropdown.Item key="logout" color="error">
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}