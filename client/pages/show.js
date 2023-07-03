import Layout from "../components/Layout";
import { Form, Button, Message } from "semantic-ui-react";
import { useRef, useState } from "react";
import getContactByAddress from "../utils/getContactByAddress";

const ShowContact = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [telegram, setTelegram] = useState();
  const [discord, setDiscord] = useState();
  const [desc, setDesc] = useState();
  const addressRef = useRef();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const address = addressRef.current.value;
    setErrorMessage("");
    setTelegram("");
    setDiscord("");
    setDesc("");
    setLoading(true);
    if (!address) {
      setErrorMessage("Адрес пользователя то нам нужен...");
      return;
    }

    try {
      const contact = await getContactByAddress(address);
      setTelegram(contact.telegram);
      setDiscord(contact.discord);
      setDesc(contact.desc);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Form error={!!errorMessage} onSubmit={handleSubmit}>
        <Form.Field>
          <label>Введите адрес здесь</label>
          <input ref={addressRef} placeholder="Вот прям тут" />
        </Form.Field>

        <Button loading={isLoading} primary type="submit">
          Посмотреть
        </Button>
        <Message error header="Ну что ж такое" content={errorMessage} />
      </Form>
      {telegram && <h3>Telegram: {telegram}</h3>}
      {discord && <h3>Discord: {discord}</h3>}
      {desc && <h3>Description: {desc}</h3>}
    </Layout>
  );
};

export default ShowContact;
