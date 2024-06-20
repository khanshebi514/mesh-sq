
import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";

export default function LoaderSpinner() {
  
  return (
    <Space>
        <Spin indicator={true} size="large">
        </Spin>
    </Space>
    
  )
}
