import { useState, useEffect } from 'react';
import { Search, Moon, Sun, AlertCircle } from 'lucide-react';


function App() {
  const [theme, setTheme] = useState('dark');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError('');
    setResult(null);

    let type = 'unknown';
    if (query.includes('@')) type = 'email';
    else if (/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(query)) type = 'cpf';
    else if (/^\d{10,11}$/.test(query)) type = 'telefone';
    else if (query.length > 20) type = 'id';

    try {
      const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(query)}&type=${type}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao conectar com o servidor.');
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-100 dark:bg-[#071220] transition-colors duration-300">

      <div className="absolute top-[-150px] left-[-100px] w-[450px] h-[450px] bg-bitzen opacity-35 rounded-full blur-[80px] animate-drift pointer-events-none"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[550px] h-[550px] bg-cyan-400 opacity-25 rounded-full blur-[90px] animate-drift pointer-events-none"></div>

      <div className="absolute top-[35%] left-[45%] w-[380px] h-[380px] bg-emerald-300 opacity-20 rounded-full blur-[80px] animate-drift pointer-events-none"></div>

      <div className="absolute top-[35%] left-[45%] w-[380px] h-[380px] bg-emerald-300 opacity-20 rounded-full blur-[80px] animate-float pointer-events-none"></div>

      <div className="relative z-10">
        <header className="border-b dark:border-gray-800 bg-white dark:bg-bitzen-card sticky top-0 z-10 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-bitzen text-white flex items-center justify-center font-bold text-xl pb-1">b</div>
              <h1 className="text-xl font-semibold dark:text-white">Bitzen Suporte</h1>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
          </div>
        </header>

        <main
          className={`
              max-w-5xl mx-auto px-4 transition-all duration-700
              ${result ? 'py-8' : 'min-h-[80vh] flex items-center justify-center'}
          `}
        >
          <div
            className={`
              bg-white dark:bg-bitzen-card rounded-xl shadow-lg border
              border-gray-100 dark:border-gray-800 overflow-hidden
              transition-all duration-700 transform hover:-translate-y-1
              ${result ? 'mb-8 w-full' : 'w-full max-w-2xl'}
            `}
          >
            <div className="bg-bitzen p-4 text-white font-medium text-lg">
              Consulta de assinaturas
            </div>
            <div className="p-6">
              <form onSubmit={handleSearch}>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email, CPF, Telefone ou ID
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-bitzen-bg dark:text-white focus:ring-2 focus:ring-bitzen focus:border-transparent transition-all outline-none"
                      placeholder="pauloricardoodev@gmail.com"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-bitzen hover:bg-bitzen-dark text-white rounded-lg font-medium transition-colors shadow-sm disabled:opacity-70 flex items-center justify-center min-w-[140px]"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : 'Pesquisar'}
                  </button>
                </div>
              </form>

              {error && (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3 text-red-700 dark:text-red-400 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              {result && result._mocked && (
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-yellow-800 dark:text-yellow-400 text-sm">
                  <strong className="font-semibold">Aviso:</strong> Usando dados de demonstração. O banco de dados PostgreSQL ainda precisa ser populado ou configurado com as tabelas reais.
                </div>
              )}
            </div>
          </div>

          {result && result.user && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* User Details */}
              <div className="bg-white dark:bg-bitzen-card rounded-xl shadow border border-gray-100 dark:border-gray-800 p-6 transition-all hover:shadow-md">
                <h2 className="text-lg font-semibold mb-4 border-b pb-2 dark:border-gray-800 dark:text-white">Usuário</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                  <div>
                    <span className="font-semibold dark:text-gray-300 mr-2">Nome:</span>
                    <span className="dark:text-gray-400">{result.user.nome}</span>
                  </div>
                  <div>
                    <span className="font-semibold dark:text-gray-300 mr-2">CPF:</span>
                    <span className="dark:text-gray-400">{result.user.cpf}</span>
                  </div>
                  <div>
                    <span className="font-semibold dark:text-gray-300 mr-2">Email:</span>
                    <span className="dark:text-gray-400">{result.user.email}</span>
                  </div>
                  <div>
                    <span className="font-semibold dark:text-gray-300 mr-2">Telefone:</span>
                    <span className="dark:text-gray-400">{result.user.telefone}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-semibold dark:text-gray-300 mr-2">User ID:</span>
                    <span className="dark:text-gray-400 font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{result.user.id}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-semibold dark:text-gray-300 mr-2">Cancelado? (UTC):</span>
                    <span className="dark:text-gray-400">{result.user.cancelado ? result.user.cancelado : '-'}</span>
                  </div>

                  <div className="md:col-span-2 mt-2 pt-4 border-t dark:border-gray-800">
                    <span className="font-semibold dark:text-gray-300 block mb-1">Endereço:</span>
                    <span className="dark:text-gray-400">{result.user.endereco}</span>
                  </div>
                </div>
              </div>

              {/* Subscriptions */}
              <div className="bg-white dark:bg-bitzen-card rounded-xl shadow border border-gray-100 dark:border-gray-800 p-6 transition-all hover:shadow-md">
                <h2 className="text-lg font-semibold mb-4 border-b pb-2 dark:border-gray-800 dark:text-white">Assinatura</h2>

                {result.subscriptions && result.subscriptions.length > 0 ? (
                  result.subscriptions.map((sub, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                      <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                        <div className="flex gap-8">
                          <div>
                            <span className="font-semibold text-sm dark:text-gray-300 mr-2">Plano:</span>
                            <span className="text-sm dark:text-gray-400">{sub.plano}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-sm dark:text-gray-300 mr-2">Cortesia:</span>
                            <span className="text-sm dark:text-gray-400">{sub.cortesia}</span>
                          </div>
                        </div>
                        {sub.gateway === 'Apple' && (
                          <div className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 shadow-sm">
                            <svg viewBox="0 0 384 512" className="w-3 h-3 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                            Apple
                          </div>
                        )}
                      </div>

                      <div className="overflow-x-auto rounded-lg border dark:border-gray-700">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">
                            <tr>
                              <th className="px-4 py-3 font-semibold w-2/3 border-r dark:border-gray-700">Período</th>
                              <th className="px-4 py-3 font-semibold">Transação</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-3 border-r dark:border-gray-700 dark:text-gray-400 bg-white dark:bg-transparent">{sub.periodo}</td>
                              <td className="px-4 py-3 dark:text-gray-400 bg-white dark:bg-transparent">{sub.transacao}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">Nenhuma assinatura encontrada.</p>
                )}
              </div>

              {/* Approximations */}
              {result.approximations && result.approximations.length > 0 && (
                <div className="bg-white dark:bg-bitzen-card rounded-xl shadow border border-gray-100 dark:border-gray-800 p-6 transition-all hover:shadow-md">
                  <h2 className="text-lg font-semibold mb-4 border-b pb-2 dark:border-gray-800 dark:text-white">Resultados Aproximados ({result.approximations.length})</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">A busca exata não retornou resultados, mas encontramos os seguintes e-mails similares:</p>
                  <ul className="space-y-2">
                    {result.approximations.map((approx, idx) => (
                      <li key={idx} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border dark:border-gray-700 text-sm flex justify-between items-center transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="font-medium dark:text-gray-300">{approx.email}</span>
                        <span className="text-gray-500 text-xs">{approx.nome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
