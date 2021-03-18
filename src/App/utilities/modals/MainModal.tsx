import React from "react";
import { Modal, ModalBody} from "reactstrap";
interface Iprops{
    body:any
    openModal:boolean
    setModal:(openModal:boolean)=> void 
}
const ModalForm : React.FC<Iprops> = ({body,openModal,setModal}) => {
  return (
    <Modal isOpen={openModal} toggle={()=>setModal(false)}>
        <ModalBody>
          {body}
        </ModalBody>
      </Modal>
  )
};

export default ModalForm;
