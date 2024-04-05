import React, { Component } from "react";
import { Modal } from "antd";
import ChildFeildRender from "./childFeildRender";
class AddNewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commonJson: {
        form_name: "",
        form_id: Math.random(),
        formFeilds: [
          {
            feild_name: "",
            feild_type: undefined,
            feild_id: Math.random(Date()),
            feild_required: false,
            is_place_holder: false,
            placeholder_info: "",
            feild_extra: {},
          },
        ],
      },
    };
  }
  chenageDetails = (key, value, aItem, type) => {
    let rObj = {
      ...this.state.commonJson,
    };
    if (key === "form_name") {
      rObj[key] = value;
    } else {
      if (aItem?.feild_id) {
        let findFeildIndex = rObj.formFeilds?.findIndex(
          (eve) => eve.feild_id === aItem?.feild_id
        );
        if (findFeildIndex > -1) {
          if (type === "extra") {
            rObj.formFeilds[findFeildIndex].feild_extra[key] = value;
          } else {
            rObj.formFeilds[findFeildIndex][key] = value;
          }
        }
      }
    }
    this.setState({ commonJson: rObj });
  };
  addNewFeild = () => {
    let rObj = {
      ...this.state.commonJson,
    };
    rObj.formFeilds.push({
      feild_name: "",
      feild_type: undefined,
      feild_id: Math.random(Date()),
      feild_required: false,
      is_place_holder: false,
      placeholder_info: "",
      feild_extra: {},
    });
    this.setState({ commonJson: rObj });
  };
  removeFeild = (aItem) => {
    let rObj = {
      ...this.state.commonJson,
    };
    if (aItem?.feild_id) {
      let findFeildIndex = rObj.formFeilds?.findIndex(
        (eve) => eve.feild_id === aItem?.feild_id
      );
      if (findFeildIndex > -1) {
        rObj.formFeilds.splice(findFeildIndex, 1);
      }
    }
    this.setState({ commonJson: rObj });
  };
  render() {
    const { isModalOpen, dataTypes } = this.props;
    const { commonJson } = this.state;
    return (
      <Modal
        title="Add New Form"
        open={isModalOpen}
        // onOk={handleOk}
        // onCancel={handleCancel}
        footer={<div>footer Button</div>}
      >
        <div>
          <ChildFeildRender
            {...this.props}
            commonJson={commonJson}
            dataTypes={dataTypes}
            chenageDetails={this.chenageDetails}
            addNewFeild={this.addNewFeild}
            removeFeild={this.removeFeild}
          />
        </div>
      </Modal>
    );
  }
}
export default AddNewForm;
