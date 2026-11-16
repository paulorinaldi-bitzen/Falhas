import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg dark:bg-dark-bg bg-light-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-8">
          <div className="text-center mb-8">
            <img src="/favicon.jpg" alt="Bitzen" className="w-16 h-16 rounded-lg mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-dark-text dark:text-dark-text text-light-text mb-2">
              bitzen
            </h1>
            <p className="text-dark-muted dark:text-dark-muted text-light-muted text-sm">
              Entre na sua conta
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
              Não tem uma conta?{' '}
              <a href="#" className="text-primary hover:underline">
                Entre em contato
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
