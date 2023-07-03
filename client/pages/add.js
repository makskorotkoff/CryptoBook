import Layout from "../components/layout";
import { Form, Input, Button, Message } from "semantic-ui-react";
import { useState } from "react";
import { ethers } from "ethers";
import provider from "../provider";
import contactFactory from "../contactFactory";

const AddContact = () => {
  const [discord, setDiscord] = useState("");
  const [telegram, setTelegram] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if (!telegram) {
      setErrorMessage("Ну хоть телегу то введи");
      return;
    }
    const signer = await provider.getSigner();
    const contactFactoryWithSigner = contactFactory.connect(signer);
    try {
      let responce;
      if (discord) {
        responce = await contactFactoryWithSigner[
          "createContact(string,string)"
        ](telegram, discord);
        await responce.wait();
      } else {
        responce = await contactFactoryWithSigner["createContact(string)"](
          telegram
        );
        await responce.wait();
        console.log("createContact(string)");
      }
      console.log("responce: ", responce);
      setSuccessMessage("Хеш транзакции: ", responce.hash);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <Form
        error={!!errorMessage}
        success={!!successMessage}
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            placeholder="Введите здесь"
          />
          <Form.Field
            control={Input}
            label="Discord"
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
            placeholder="Введите здесь"
          />
        </Form.Group>
        <Button primary>Сохранить</Button>
        <Message
          style={{ wordBreak: "break-word" }}
          error
          header="Ну что ж такое"
          content={errorMessage}
        />
        <Message success header="Успех" content={successMessage} />
      </Form>
    </Layout>
  );
};

export default AddContact;
