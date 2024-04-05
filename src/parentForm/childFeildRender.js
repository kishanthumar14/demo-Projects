import React from "react";
import { Button, Form, Input, Select, Checkbox, Divider } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ChildFeildRender = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const {
    commonJson,
    dataTypes = [],
    chenageDetails,
    addNewFeild,
    removeFeild,
  } = props;
  return (
    <div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="form_name"
          label="Form Name"
          rules={[
            {
              required: true,
              message: "Please enter form name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              chenageDetails("form_name", e.target.value);
            }}
          />
        </Form.Item>
        {commonJson?.formFeilds?.length &&
          commonJson?.formFeilds.map((eve) => {
            return (
              <>
                <Form.Item
                  name={`feild_name${eve.feild_id}`}
                  label="Feild Name"
                  initialValue={eve?.feild_name}
                  rules={[
                    {
                      required: true,
                      message: "Please enter form name",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      chenageDetails("feild_name", e.target.value, eve);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={`feild_type${eve.feild_id}`}
                  label="Feild Type"
                  initialValue={eve?.feild_type || undefined}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select type"
                    onChange={(e) => {
                      chenageDetails("feild_type", e, eve);
                    }}
                    allowClear
                  >
                    {dataTypes?.length &&
                      dataTypes.map((ev) => (
                        <Option value={ev.feild_type}>{ev.name}</Option>
                      ))}
                  </Select>
                </Form.Item>
                <div style={{ display: "flex", marginLeft: "70px" }}>
                  <Form.Item
                    name={`feild_required${eve.feild_id}`}
                    initialValue={eve?.feild_required || undefined}
                  >
                    <Checkbox
                      onChange={(e) => {
                        chenageDetails("feild_required", e.target.checked, eve);
                      }}
                    >
                      Required
                    </Checkbox>
                  </Form.Item>{" "}
                  <Form.Item
                    name={`is_place_holder${eve.feild_id}`}
                    initialValue={eve?.is_place_holder || undefined}
                  >
                    <Checkbox
                      onChange={(e) => {
                        chenageDetails(
                          "is_place_holder",
                          e.target.checked,
                          eve
                        );
                      }}
                    >
                      placeholder
                    </Checkbox>
                  </Form.Item>
                </div>
                {eve.is_place_holder ? (
                  <>
                    <Form.Item
                      name={`placeholder_info${eve.feild_id}`}
                      label="Placeholder"
                      initialValue={eve?.placeholder_info || undefined}
                      rules={[
                        {
                          required: true,
                          message: "Please enter Placeholder",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => {
                          chenageDetails(
                            "placeholder_info",
                            e.target.value,
                            eve
                          );
                        }}
                      />
                    </Form.Item>
                  </>
                ) : (
                  ""
                )}
                {eve?.feild_type &&
                [2, "2", "3", 3].includes(eve.feild_type) ? (
                  <>
                    <Form.Item
                      name={`minimum_ip${eve.feild_id}`}
                      label="Minimum"
                      rules={[
                        {
                          required: true,
                          message: "Please enter minimum number",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => {
                          chenageDetails(
                            "minimum_ip",
                            e.target.value,
                            eve,
                            "extra"
                          );
                        }}
                      />
                    </Form.Item>{" "}
                    <Form.Item
                      name={`maximum_ip${eve.feild_id}`}
                      label="Maximum"
                      rules={[
                        {
                          required: true,
                          message: "Please enter maximum number",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => {
                          chenageDetails(
                            "maximum_ip",
                            e.target.value,
                            eve,
                            "extra"
                          );
                        }}
                      />
                    </Form.Item>{" "}
                  </>
                ) : (
                  ""
                )}
                <Button
                  onClick={() => removeFeild(eve)}
                  style={{ float: "right", marginBottom: "10px" }}
                >
                  Remove
                </Button>
                <Divider />
              </>
            );
          })}
        {commonJson?.formFeilds?.length ? (
          <>
            <Button onClick={() => addNewFeild()} style={{ float: "right" }}>
              + ADD
            </Button>
          </>
        ) : (
          ""
        )}
        {/* <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Space>
        </Form.Item> */}
      </Form>
    </div>
  );
};
export default ChildFeildRender;
