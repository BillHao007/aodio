import { useState } from 'react';
import { Button, Modal } from "antd";
import "./Hello.less";

export default function Hello() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className="hello-button" type="primary" onClick={() => setOpen(true)}>打开弹窗</Button>
      <Modal
        title="Title"
        open={open}
        onCancel={() => setOpen(false)}
      >
        ...content
      </Modal>
    </>
  )
}