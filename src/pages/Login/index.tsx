import * as Styles from "./Login.styled";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
      <Styles.Login>
        <form onSubmit={handleSubmit}>
          <label>
            
            <h1>CodeBlog
            <img src="/src/assets/react.svg" alt="logo-react" />
            </h1>
            <span>E-mail: </span>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha: </span>
            <input
              type="password"
              name="password"
              required
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label></label>
          {!loading && <button className="btn">Entrar</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {error && <p className="error">{error}</p>}
          <li>
            <p>OU</p>
            Não tem uma conta?
            <a href="http://localhost:5173/register">CADASTRE-SE</a>
          </li>
        </form>
      </Styles.Login>
    </>
  );
};

export default Login;
