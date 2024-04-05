import React, { Component } from "react";
import { Button } from "antd";
import AddNewForm from "./addNewForm";
export default class FormList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTypes: [
        {
          name: "Text",
          feild_type: 1,
        },
        {
          name: "Number",
          feild_type: 2,
        },
        {
          name: "Decimal",
          feild_type: 3,
        },
        {
          name: "Selection",
          feild_type: 4,
        },
      ],
      tableData: [
        {
          name: "A2",
          formFeilds: [
            {
              feild_name: "Abc",
              feild_type: 1,
              feild_required: false,
              is_place_holder: false,
              placeholder_info: "",
              feild_extra: {},
            },
          ],
          formId: "123",
        },
      ],
      isModalOpen: false,
    };
  }
  handleOk = () => {
    console.log("FormSubmited");
  };
  handleCancel = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  render() {
    const { tableData = [], dataTypes = [], isModalOpen } = this.state;
    return (
      <div>
        <div style={{ margin: "20px", float: "right" }}>
          <Button
            onClick={() => {
              this.setState({ isModalOpen: !isModalOpen });
            }}
          >
            Add Form
          </Button>
        </div>
        <div>
          <table style={{ border: "solid 1px black" }}>
            <th>
              <td>Name</td>
              <td>Action</td>
              {/* <td>Type</td> */}
            </th>

            <tbody>
              {tableData?.map((ev) => {
                //   let findTypeName = dataTypes?.find(
                //     (eve) => eve.feild_type === ev.feild_type
                //   )?.name;

                return (
                  <tr>
                    <td>{ev.name}</td>
                    {/* <td>{findTypeName}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <AddNewForm
          {...this.props}
          isModalOpen={isModalOpen}
          dataTypes={dataTypes}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}
