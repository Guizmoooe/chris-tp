import MainLayout from "../Layout/MainLayout";
import { getCategories } from "../lib/api";
import { Form, Input, Button } from "antd";
import { sendContactForm } from "../lib/api";
import { useState } from "react";
const layout = {
  wrapperCol: {
    span: 15,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    phone: "${label} is not a valid phone!",
  },
};
/* eslint-enable no-template-curly-in-string */
const Contact = ({ categories = [] }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const test = await sendContactForm(values);
    if (test.message === "ok") {
      setLoading(false);
      setSuccess(true);
    } else {
      onFinishFailed();
      setLoading(false);
      setError(true);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <MainLayout categories={categories}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <div>
          <h3>Téléphone</h3>
          <p>06.72.72.72.72</p>
        </div>
        <div>
          <h3>Mail</h3>
          <mail>chris@gmail.com</mail>
        </div>
        <div>
          <h3>Horaires</h3>
          <p>8h30-17h30</p>
        </div>
      </div>
      {success ? (
        <div>Votre message a bien été envoyé</div> ? (
          error
        ) : (
          <div>Erreur veuillez réessayer plus tard</div>
        )
      ) : (
        ""
      )}
      <Form
        {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{
          
          border: `${success ? "1px solid green" ? error : "1px solid red" : ""}`,
          width: "50%",
          margin: "30px auto",
          
        }}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "phone"]}
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "city"]}
          label="City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Votre projet"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            // onClick={() => enterLoading(0)}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const { categories } = await getCategories();

  return {
    props: { categories },
  };
}

export default Contact;
