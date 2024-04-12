import { FormControl, FormErrorMessage, Input, Button } from "@chakra-ui/react";

function EmailForm() {
  return (
    <form
      style={{
        maxWidth: 500,
        margin: 5,
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid dodgerblue",
      }}
    >
      <FormControl>
        <Input name="email" placeholder="Введите почту" size={"lg"} />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <Button type="submit" mt={4}>
        Отправить
      </Button>
    </form>
  );
}

export default EmailForm;
