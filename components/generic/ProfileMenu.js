import { Dropdown } from "@nextui-org/react";


export default function ProfileMenu() {
  return (
    <Dropdown>
      <Dropdown.Button flat>Trigger</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="info">User Info</Dropdown.Item>
        <Dropdown.Item key="link">link</Dropdown.Item>
        <Dropdown.Item key="file">file</Dropdown.Item>;
        <Dropdown.Item key="logout" withDivider color="error">
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}