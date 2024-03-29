import * as S from "./style.ts";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { useCreatePost } from "./hooks/useCreatePost.ts";


interface FormData {
  title: string;
  image?: string;
  body: string;
  tags: string;
}

const CreatePost = () => {
const { handleSubmit, validationSchema, response } = useCreatePost() 

  return (
    <S.CreatePost>
      <h2>Criar Post</h2>
      <img src="{src/assets/images/react.png}" alt="" />
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <Formik
        initialValues={{
          title: "",
          image: "",
          body: "",
          tags: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions: FormikHelpers<FormData>) => {
          await handleSubmit(values, actions);
        }}
      >
        <Form>
          <S.Label>
            <span>Título:</span>
            <Field
              type="text"
              name="title"
              required
              placeholder="Pense em um bom título..."
            />
            <ErrorMessage name="title" className="error" />
          </S.Label>
          <S.Label>
            <span>URL da imagem:</span>
            <Field
              type="text"
              name="image"
              placeholder="Insira uma imagem que representa o seu post"
            />
            <ErrorMessage name="image" className="error" />
          </S.Label>
          <S.Label>
            <span>Conteúdo:</span>
            <Field
              type="textarea"
              name="body"
              required
              placeholder="Insira o conteúdo do post"
            />
            <ErrorMessage name="body" className="error" />
          </S.Label>
          <S.Label>
            <span>Tags:</span>
            <Field
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
            />
            <ErrorMessage name="tags" className="error" />
          </S.Label>
          {!response.loading && (
            <button className="btn" type="submit">
              Cadastrar
            </button>
          )}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {response.error && <p className="error">{response.error}</p>}
          <ErrorMessage name="formError" className="error" />
        </Form>
      </Formik>
    </S.CreatePost>
  );
};

export default CreatePost;
