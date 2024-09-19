import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Estados para nome, senha e mensagem de erro
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica de login (exemplo de uma chamada de API)
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setError(''); // Limpar o erro em caso de sucesso
          alert('Login bem-sucedido!');
        } else {
          setError('Credenciais inválidas');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Ocorreu um erro');
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Entrar</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Entrar</button>
          {error && <div id="login-error" className="error">{error}</div>}
        </form>
        <div className="help-text">
          <p>Novo por aqui? <a href="criar.jsx">Crie uma conta agora!</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default App;
