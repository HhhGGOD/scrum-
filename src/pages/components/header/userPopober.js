import { Divider, List, Popover, Typography } from "antd"

function UserPopover() {
  let content = (
    <div className="project_creat">
      <Typography.Text type={"secondary"}>zu yuan</Typography.Text>
      <List>
        <List.Item className="user_listItem">
          <p>li</p>
        </List.Item>

        <List.Item className="user_listItem">
          <p>lin</p>
        </List.Item>

        <List.Item className="user_listItem">
          <p>hui</p>
        </List.Item>
      </List>

      <Divider />
    </div>
  )

  return (
    <Popover placement="bottom" content={content}>
      <h2 style={{ cursor: 'pointer' }}>zu yuan</h2>
    </Popover>
  )
}

export default UserPopover