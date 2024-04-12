import { FormControl, FormErrorMessage, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function FormEmail() {
  const emailSchema = yup.object({
    email: yup
      .string()
      .email("Некорректный формат email")
      .required("Поле обязательно для заполнения"),
  });
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(emailSchema) });
  const onSubmit = ({ email }: { email: string }) => {
    console.log(email);
    reset();
  };

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
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors.email}>
        <Input
          placeholder="Введите почту"
          size={"lg"}
          {...register("email")}
          onBlur={() => trigger("email")}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" mt={4}>
        Отправить
      </Button>
    </form>
  );
}

export default FormEmail;
