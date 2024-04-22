import { Divider, List, Popover, Typography } from "antd"

function ProjectPopover() {
  let content = (
    <div className="project_creat">
      <Typography.Text type={"secondary"}>shou cang xiang mu</Typography.Text>
      <List>
        <List.Item className="project_listItem">
          <p>wu liu guan li xiang mu</p>
        </List.Item>

        <List.Item className="project_listItem">
          <p>wu liu guan li xiang mu</p>
        </List.Item>

        <List.Item className="project_listItem">
          <p>wu liu guan li xiang mu</p>
        </List.Item>
      </List>

      <Divider />
      <div className="project_creat_name">
        chuang jian xiang mu
      </div>
    </div>
  )

  return (
    <Popover placement="bottom" content={content}>
      <h2 style={{ cursor: 'pointer' }}>xiang mu</h2>
    </Popover>
  )
}



export default ProjectPopover