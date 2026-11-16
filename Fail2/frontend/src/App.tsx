import { useState } from 'react';
import type { FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import brandLogo from './assets/brand-logo.png';

type UserSearchField = 'email' | 'cpf' | 'phone' | 'profileId';
type Tab = 'users' | 'subscriptions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);
const auth = hasFirebaseConfig ? getAuth(initializeApp(firebaseConfig)) : null;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';
type Theme = 'dark' | 'light';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('users');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [userField, setUserField] = useState<UserSearchField>('email');
  const [userValue, setUserValue] = useState('');
  const [userResults, setUserResults] = useState<Record<string, unknown>[]>([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [subscriptionIdQuery, setSubscriptionIdQuery] = useState('');
  const [subscriptionResult, setSubscriptionResult] = useState<Record<string, unknown> | null>(null);
  const [subscriptionDetails, setSubscriptionDetails] = useState<Record<string, unknown>[]>([]);
  const [subscriptionIdToUpdate, setSubscriptionIdToUpdate] = useState('');
  const [newEndDate, setNewEndDate] = useState('');
  const [subscriptionIdFromPoney, setSubscriptionIdFromPoney] = useState<string | null>(null);
  const formatDate = (value: unknown) => {
    if (!value) return null;
    const date = new Date(String(value));
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString('pt-BR');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  const getFreshToken = async () => {
    if (!auth) return null;
    try {
      const user = auth.currentUser;
      if (!user) return null;
      const idToken = await user.getIdToken(true); // forceRefresh = true
      setToken(idToken);
      return idToken;
    } catch {
      return null;
    }
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!auth) {
      setError('Configure as variáveis do Firebase no arquivo frontend/.env.');
      return;
    }
    setBusy(true);
    try {
      const result = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const idToken = await result.user.getIdToken();
      setToken(idToken);
    } catch {
      setError('Falha no login. Verifique email/senha e permissões.');
    } finally {
      setBusy(false);
    }
  };

  const handleSearchUsers = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const freshToken = await getFreshToken();
      if (!freshToken) {
        setError('Sessão expirada. Faça login novamente.');
        setToken(null);
        return;
      }

      const response = await fetch(`${apiBaseUrl}/users/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${freshToken}`,
        },
        body: JSON.stringify({ field: userField, value: userValue }),
      });
      if (!response.ok) throw new Error();
      const data = (await response.json()) as Record<string, unknown>[];
      setUserResults(data);

      // Auto-fetch SubscriptionId and subscription details if user has id_do_poney_account
      if (data.length > 0 && data[0].id_do_poney_account) {
        const poneyAccountId = String(data[0].id_do_poney_account);
        try {
          const subResponse = await fetch(`${apiBaseUrl}/users/poney-subscription/${poneyAccountId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${freshToken}`,
            },
          });
          if (subResponse.ok) {
            const subData = (await subResponse.json()) as { subscriptionId: string };
            setSubscriptionIdFromPoney(subData.subscriptionId);
            setSubscriptionIdQuery(subData.subscriptionId);
            setSubscriptionIdToUpdate(subData.subscriptionId);

            // Auto-fetch subscription details
            const detailsResponse = await fetch(`${apiBaseUrl}/subscriptions/${subData.subscriptionId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${freshToken}`,
              },
            });
            if (detailsResponse.ok) {
              const detailsData = (await detailsResponse.json()) as {
                base: Record<string, unknown>;
                detailsBySubscriptionId: Record<string, unknown>[];
              };
              setSubscriptionResult(detailsData.base);
              setSubscriptionDetails(detailsData.detailsBySubscriptionId);
            }
          }
        } catch {
          // Silently fail if subscription fetch fails
        }
      }
    } catch {
      setError('Não foi possível consultar usuários.');
    } finally {
      setBusy(false);
    }
  };

  const handleUpdateUserEmail = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const freshToken = await getFreshToken();
      if (!freshToken) {
        setError('Sessão expirada. Faça login novamente.');
        setToken(null);
        return;
      }
      
      const response = await fetch(`${apiBaseUrl}/users/email`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${freshToken}`,
        },
        body: JSON.stringify({ userId: selectedUserId, newEmail }),
      });
      if (!response.ok) throw new Error();
      await handleSearchUsers(event);
    } catch {
      setError('Falha ao atualizar email do usuário.');
    } finally {
      setBusy(false);
    }
  };

  const handleGetSubscription = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const freshToken = await getFreshToken();
      if (!freshToken) {
        setError('Sessão expirada. Faça login novamente.');
        setToken(null);
        return;
      }

      const response = await fetch(`${apiBaseUrl}/subscriptions/${subscriptionIdQuery}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${freshToken}`,
        },
      });
      if (!response.ok) throw new Error();
      const data = (await response.json()) as {
        base: Record<string, unknown>;
        detailsBySubscriptionId: Record<string, unknown>[];
      };
      setSubscriptionResult(data.base);
      setSubscriptionDetails(data.detailsBySubscriptionId);
      const subscriptionId = String(data.base.subscription_id ?? '');
      setSubscriptionIdToUpdate(subscriptionId);
    } catch {
      setError('Não foi possível consultar assinatura.');
    } finally {
      setBusy(false);
    }
  };

  const handleUpdateEndDate = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const freshToken = await getFreshToken();
      if (!freshToken) {
        setError('Sessão expirada. Faça login novamente.');
        setToken(null);
        return;
      }

      const response = await fetch(`${apiBaseUrl}/subscriptions/end-date`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${freshToken}`,
        },
        body: JSON.stringify({ subscriptionId: subscriptionIdToUpdate, newEndDate }),
      });
      if (!response.ok) throw new Error();
      await handleGetSubscription(event);
    } catch {
      setError('Falha ao atualizar EndDate da assinatura.');
    } finally {
      setBusy(false);
    }
  };

  const isDark = theme === 'dark';
  const pageBg = isDark
    ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-slate-100 animate-gradient'
    : 'bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-100 text-slate-900 animate-gradient';
  const panel = isDark
    ? 'bg-slate-900/80 border border-cyan-400/20 text-slate-100'
    : 'bg-white border border-cyan-200 text-slate-900';
  const muted = isDark ? 'text-slate-300' : 'text-slate-600';
  const input = isDark
    ? 'bg-slate-900 border-cyan-300/30 text-slate-100 placeholder:text-slate-500'
    : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400';
  const accentBtn = isDark
    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
    : 'bg-cyan-600 hover:bg-cyan-500 text-white';
  const secondaryBtn = isDark
    ? 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-cyan-300/30'
    : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300';

  if (!token) {
    return (
      <main className={`min-h-screen p-4 sm:p-6 ${pageBg}`}>
        <div className="mx-auto flex w-full max-w-5xl items-center justify-end">
          <button
            className={`mb-4 rounded-lg px-3 py-2 text-xs sm:text-sm ${secondaryBtn}`}
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            type="button"
          >
            {isDark ? 'Modo claro' : 'Modo escuro'}
          </button>
        </div>
        <form
          onSubmit={handleLogin}
          className={`mx-auto w-full max-w-md rounded-2xl p-6 shadow-2xl sm:p-8 ${panel}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <img src={brandLogo} alt="Logo" className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <h1 className="text-xl font-bold sm:text-2xl">Painel Administrativo</h1>
              <p className={`text-xs sm:text-sm ${muted}`}>Suporte de usuários e assinaturas</p>
            </div>
          </div>
          {!hasFirebaseConfig && (
            <p className="mb-4 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-200">
              Firebase não configurado no `frontend/.env`. Preencha para habilitar o login.
            </p>
          )}
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            className={`mb-4 w-full rounded-lg border p-3 ${input}`}
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
          />
          <label className="mb-2 block text-sm font-medium">Senha</label>
          <input
            className={`mb-4 w-full rounded-lg border p-3 ${input}`}
            type="password"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          {error && <p className="mb-3 text-sm text-rose-400">{error}</p>}
          <button className={`w-full rounded-lg p-3 font-semibold ${accentBtn}`} disabled={busy}>
            {busy ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className={`min-h-screen p-4 sm:p-6 ${pageBg}`}>
      <section className={`mx-auto max-w-7xl rounded-2xl p-4 shadow-2xl sm:p-6 ${panel}`}>
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={brandLogo} alt="Logo" className="h-10 w-10 rounded-xl object-cover" />
            <h1 className="text-xl font-bold sm:text-2xl">Suporte Administrativo</h1>
          </div>
          <div className="flex gap-2">
            <button
              className={`rounded-lg px-3 py-2 text-sm ${secondaryBtn}`}
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            >
              {isDark ? 'Modo claro' : 'Modo escuro'}
            </button>
            <button
              className={`rounded-lg px-3 py-2 text-sm ${secondaryBtn}`}
              onClick={async () => {
                if (auth) {
                  await signOut(auth);
                }
                setToken(null);
              }}
            >
              Sair
            </button>
          </div>
        </header>

        <div className="mb-6 flex flex-col gap-2 sm:flex-row">
          <button
            className={`rounded-lg px-4 py-2 text-sm ${activeTab === 'users' ? accentBtn : secondaryBtn}`}
            onClick={() => setActiveTab('users')}
          >
            Consulta de Usuários
          </button>
          <button
            className={`rounded-lg px-4 py-2 text-sm ${activeTab === 'subscriptions' ? accentBtn : secondaryBtn}`}
            onClick={() => setActiveTab('subscriptions')}
          >
            Consulta de Assinaturas
          </button>
        </div>

        {error && <p className="mb-4 rounded-lg bg-rose-500/10 p-3 text-sm text-rose-300">{error}</p>}

        {activeTab === 'users' && (
          <section>
            <form
              onSubmit={handleSearchUsers}
              className={`mb-6 rounded-xl border p-4 transition-all ${panel} ${userResults.length ? '' : 'mx-auto mt-10'}`}
            >
              <h2 className="mb-3 text-lg font-semibold">Buscar usuários</h2>
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
                <select
                  className={`rounded-lg border p-3 ${input}`}
                  value={userField}
                  onChange={(event) => setUserField(event.target.value as UserSearchField)}
                >
                  <option value="email">Email</option>
                  <option value="cpf">CPF</option>
                  <option value="phone">Telefone</option>
                  <option value="profileId">Profile ID</option>
                </select>
                <input
                  className={`rounded-lg border p-3 md:col-span-2 ${input}`}
                  placeholder="Valor para pesquisa"
                  value={userValue}
                  onChange={(event) => setUserValue(event.target.value)}
                />
              </div>
              <button className={`mt-3 rounded-lg px-4 py-2 font-semibold ${accentBtn}`} disabled={busy}>
                Buscar
              </button>
            </form>

            <div className="space-y-4">
              {userResults.map((item) => (
                <article key={String(item.id)} className={`rounded-xl border p-4 ${panel}`}>
                  <h3 className="mb-2 text-lg font-semibold">
                    {String(item.name ?? 'Sem nome')} - ID {String(item.id ?? '-')}
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedUserId(String(item.id));
                      setNewEmail(String(item.email ?? ''));
                    }}
                    className={`mb-3 rounded-lg px-3 py-2 text-sm ${secondaryBtn}`}
                  >
                    Preencher formulário de edição
                  </button>
                  <div className={`grid gap-2 text-sm md:grid-cols-3 ${muted}`}>
                    <div className="flex items-center gap-2">
                      <p><strong>Email:</strong> {String(item.email ?? '-')}</p>
                      {item.email && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(item.email))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar email"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>CPF:</strong> {String(item.cpf ?? '-')}</p>
                      {item.cpf && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(item.cpf))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar CPF"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>Telefone:</strong> {String(item.phone ?? '-')}</p>
                      {item.phone && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(item.phone))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar telefone"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>Profile ID:</strong> {String(item.profile_id ?? '-')}</p>
                      {item.profile_id && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(item.profile_id))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar Profile ID"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>ID do poney account:</strong> {String(item.id_do_poney_account ?? '-')}</p>
                      {item.id_do_poney_account && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(item.id_do_poney_account))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar ID do poney account"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>CEP:</strong> {String(item.cep ?? '-')}</p>
                      {item.cep && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(item.cep))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar CEP"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>País:</strong> {String(item.country ?? '-')}</p>
                      {item.country && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(item.country))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar país"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                  </div>
                  {Boolean(item.subscription) && (
                    <div className={`mt-4 rounded-lg p-3 text-sm ${isDark ? 'bg-slate-800/60' : 'bg-cyan-50'} ${muted}`}>
                      <h4 className="mb-2 font-semibold text-cyan-400">Assinatura</h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="flex items-center gap-2">
                          <p><strong>Tipo:</strong> {String((item.subscription as Record<string, unknown>)?.type ?? '-')}</p>
                          {(item.subscription as Record<string, unknown>)?.type && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(String((item.subscription as Record<string, unknown>)?.type))}
                              className="text-cyan-400 hover:text-cyan-300"
                              title="Copiar tipo"
                            >
                              <CopyIcon />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p><strong>Plataforma:</strong> {String((item.subscription as Record<string, unknown>)?.platform ?? '-')}</p>
                          {(item.subscription as Record<string, unknown>)?.platform && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(String((item.subscription as Record<string, unknown>)?.platform))}
                              className="text-cyan-400 hover:text-cyan-300"
                              title="Copiar plataforma"
                            >
                              <CopyIcon />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p><strong>Cortesia:</strong> {(Boolean((item.subscription as Record<string, unknown>)?.is_courtesy) ? 'Sim' : 'Não')}</p>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(Boolean((item.subscription as Record<string, unknown>)?.is_courtesy) ? 'Sim' : 'Não')}
                            className="text-cyan-400 hover:text-cyan-300"
                            title="Copiar cortesia"
                          >
                            <CopyIcon />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <p><strong>Status:</strong> {String((item.subscription as Record<string, unknown>)?.status ?? '-')}</p>
                          {(item.subscription as Record<string, unknown>)?.status && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(String((item.subscription as Record<string, unknown>)?.status))}
                              className="text-cyan-400 hover:text-cyan-300"
                              title="Copiar status"
                            >
                              <CopyIcon />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p><strong>Transação:</strong> {String((item.subscription as Record<string, unknown>)?.transaction_id ?? '-')}</p>
                          {(item.subscription as Record<string, unknown>)?.transaction_id && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(String((item.subscription as Record<string, unknown>)?.transaction_id))}
                              className="text-cyan-400 hover:text-cyan-300"
                              title="Copiar transação"
                            >
                              <CopyIcon />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p><strong>StartDate:</strong> {formatDate((item.subscription as Record<string, unknown>)?.start_date) ?? '-'}</p>
                          {(item.subscription as Record<string, unknown>)?.start_date && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(String(formatDate((item.subscription as Record<string, unknown>)?.start_date)))}
                              className="text-cyan-400 hover:text-cyan-300"
                              title="Copiar start date"
                            >
                              <CopyIcon />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p><strong>EndDate:</strong> {formatDate((item.subscription as Record<string, unknown>)?.end_date) ?? '-'}</p>
                          {(item.subscription as Record<string, unknown>)?.end_date && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(String(formatDate((item.subscription as Record<string, unknown>)?.end_date)))}
                              className="text-cyan-400 hover:text-cyan-300"
                              title="Copiar end date"
                            >
                              <CopyIcon />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {Array.isArray(item.subscription_details) && item.subscription_details.length > 0 && (
                    <div className={`mt-4 rounded-lg p-3 text-sm ${isDark ? 'bg-slate-800/60' : 'bg-cyan-50'}`}>
                      <h4 className="mb-2 font-semibold text-cyan-400">Detalhes da Assinatura</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-cyan-200'}`}>
                              <th className="px-2 py-1 text-left">Plano</th>
                              <th className="px-2 py-1 text-left">Cortesia</th>
                              <th className="px-2 py-1 text-left">Período</th>
                              <th className="px-2 py-1 text-left">Transação</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(item.subscription_details as Record<string, unknown>[]).map((detail, index) => (
                              <tr key={index} className={`border-b ${isDark ? 'border-slate-700' : 'border-cyan-200'}`}>
                                <td className="px-2 py-1">
                                  <div className="flex items-center gap-1">
                                    {String(detail.PlanType ?? detail.plan_type ?? '-')}
                                    {detail.PlanType && (
                                      <button
                                        type="button"
                                        onClick={() => copyToClipboard(String(detail.PlanType))}
                                        className="text-cyan-400 hover:text-cyan-300 text-xs"
                                        title="Copiar plano"
                                      >
                                        <CopyIcon />
                                      </button>
                                    )}
                                  </div>
                                </td>
                                <td className="px-2 py-1">
                                  <div className="flex items-center gap-1">
                                    {Boolean(detail.Courtesy ?? detail.courtesy) ? 'Sim' : 'Não'}
                                    <button
                                      type="button"
                                      onClick={() => copyToClipboard(Boolean(detail.Courtesy ?? detail.courtesy) ? 'Sim' : 'Não')}
                                      className="text-cyan-400 hover:text-cyan-300 text-xs"
                                      title="Copiar cortesia"
                                    >
                                      <CopyIcon />
                                    </button>
                                  </div>
                                </td>
                                <td className="px-2 py-1">
                                  <div className="flex items-center gap-1">
                                    {`${formatDate(detail.StartDate ?? detail.start_date) ?? '-'} - ${formatDate(detail.EndDate ?? detail.end_date) ?? '-'}`}
                                    {(detail.StartDate || detail.start_date) && (
                                      <button
                                        type="button"
                                        onClick={() => copyToClipboard(`${formatDate(detail.StartDate ?? detail.start_date) ?? '-'} - ${formatDate(detail.EndDate ?? detail.end_date) ?? '-'}`)}
                                        className="text-cyan-400 hover:text-cyan-300 text-xs"
                                        title="Copiar período"
                                      >
                                        <CopyIcon />
                                      </button>
                                    )}
                                  </div>
                                </td>
                                <td className="px-2 py-1">
                                  <div className="flex items-center gap-1">
                                    {String(detail.GatewayTransactionId ?? detail.transaction_id ?? '-')}
                                    {detail.GatewayTransactionId && (
                                      <button
                                        type="button"
                                        onClick={() => copyToClipboard(String(detail.GatewayTransactionId))}
                                        className="text-cyan-400 hover:text-cyan-300 text-xs"
                                        title="Copiar transação"
                                      >
                                        <CopyIcon />
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {!Array.isArray(item.subscription_details) || item.subscription_details.length === 0 && (
                    <div className={`mt-4 rounded-lg p-3 text-sm ${isDark ? 'bg-slate-800/60' : 'bg-green-50'} ${muted}`}>
                      <h4 className="mb-2 font-semibold text-green-400">Assinatura</h4>
                      <p><strong>Status:</strong> Assinatura grátis (sem assinatura ativa)</p>
                    </div>
                  )}
                </article>
              ))}
            </div>

            <form onSubmit={handleUpdateUserEmail} className={`mt-6 rounded-xl border p-4 ${panel}`}>
              <h2 className="mb-3 text-lg font-semibold">Editar email do usuário</h2>
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  className={`rounded-lg border p-3 ${input}`}
                  placeholder="User ID"
                  value={selectedUserId}
                  onChange={(event) => setSelectedUserId(event.target.value)}
                />
                <input
                  className={`rounded-lg border p-3 ${input}`}
                  placeholder="Novo email"
                  value={newEmail}
                  onChange={(event) => setNewEmail(event.target.value)}
                />
              </div>
              <button className={`mt-3 rounded-lg px-4 py-2 font-semibold ${accentBtn}`} disabled={busy}>
                Atualizar email
              </button>
            </form>
          </section>
        )}

        {activeTab === 'subscriptions' && (
          <section>
            {subscriptionIdFromPoney ? (
              <div className={`mb-6 rounded-xl border p-4 ${panel}`}>
                <h3 className="mb-3 text-lg font-semibold">SubscriptionId</h3>
                <div className="flex items-center gap-3">
                  <p className={`flex-1 rounded-lg border p-3 font-mono text-sm ${input} ${muted}`}>
                    {subscriptionIdFromPoney}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(subscriptionIdFromPoney);
                      setSubscriptionIdToUpdate(subscriptionIdFromPoney);
                      setSubscriptionIdQuery(subscriptionIdFromPoney);
                      handleGetSubscription({ preventDefault: () => {} } as FormEvent);
                    }}
                    className={`rounded-lg px-4 py-3 font-semibold ${accentBtn}`}
                  >
                    Copiar e buscar
                  </button>
                </div>
              </div>
            ) : (
              <div className={`mb-6 rounded-xl border p-4 ${panel}`}>
                <p className={`text-sm ${muted}`}>
                  Pesquise um usuário na aba "Usuários" para obter o SubscriptionId automaticamente.
                </p>
              </div>
            )}

            {subscriptionResult && (
              <article className={`rounded-xl border p-4 ${panel}`}>
                <h3 className="mb-2 text-lg font-semibold">Detalhes da inscrição</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className={muted}><strong>ID:</strong> {String(subscriptionResult.Id ?? '-')}</p>
                    {subscriptionResult.Id && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(String(subscriptionResult.Id))}
                        className="text-cyan-400 hover:text-cyan-300"
                        title="Copiar ID"
                      >
                        <CopyIcon />
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <p><strong>Subscription ID:</strong> {String(subscriptionResult.Id ?? '-')}</p>
                    {subscriptionResult.Id && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(String(subscriptionResult.Id))}
                        className="text-cyan-400 hover:text-cyan-300"
                        title="Copiar Subscription ID"
                      >
                        <CopyIcon />
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <p><strong>Cortesia:</strong> {subscriptionResult.Courtesy ? 'Sim' : 'Não'}</p>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(subscriptionResult.Courtesy ? 'Sim' : 'Não')}
                      className="text-cyan-400 hover:text-cyan-300"
                      title="Copiar cortesia"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                  {subscriptionDetails.length > 0 && (
                    <div className="flex items-center gap-2">
                      <p><strong>EndDate:</strong> {formatDate(subscriptionDetails[0].EndDate) ?? '-'}</p>
                      {subscriptionDetails[0].EndDate && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(formatDate(subscriptionDetails[0].EndDate)))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar EndDate"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <p><strong>Registros vinculados ao Subscription ID:</strong> {subscriptionDetails.length}</p>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(String(subscriptionDetails.length))}
                      className="text-cyan-400 hover:text-cyan-300"
                      title="Copiar quantidade de registros"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                </div>
              </article>
            )}

            {subscriptionDetails.length > 0 && (
              <article className={`mt-4 rounded-xl border p-4 ${panel}`}>
                <h3 className="mb-2 text-lg font-semibold">Detalhes do período</h3>
                {subscriptionDetails.map((detail, index) => (
                  <div key={index} className="mb-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <p><strong>StartDate:</strong> {formatDate(detail.StartDate) ?? '-'}</p>
                      {detail.StartDate && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(formatDate(detail.StartDate)))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar StartDate"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>EndDate:</strong> {formatDate(detail.EndDate) ?? '-'}</p>
                      {detail.EndDate && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(formatDate(detail.EndDate)))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar EndDate"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>Transação:</strong> {String(detail.GatewayTransactionId ?? '-')}</p>
                      {detail.GatewayTransactionId && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(detail.GatewayTransactionId))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar transação"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p><strong>Produto:</strong> {String(detail.StoreProductId ?? '-')}</p>
                      {detail.StoreProductId && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(String(detail.StoreProductId))}
                          className="text-cyan-400 hover:text-cyan-300"
                          title="Copiar produto"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </article>
            )}

            <form onSubmit={handleUpdateEndDate} className={`mt-6 rounded-xl border p-4 ${panel}`}>
              <h2 className="mb-3 text-lg font-semibold">Editar EndDate da assinatura</h2>
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  className={`rounded-lg border p-3 ${input}`}
                  placeholder="Subscription ID"
                  value={subscriptionIdToUpdate}
                  onChange={(event) => setSubscriptionIdToUpdate(event.target.value)}
                />
                <input
                  className={`rounded-lg border p-3 ${input}`}
                  type="date"
                  value={newEndDate}
                  onChange={(event) => setNewEndDate(event.target.value)}
                />
              </div>
              <button className={`mt-3 rounded-lg px-4 py-2 font-semibold ${accentBtn}`} disabled={busy}>
                Atualizar EndDate
              </button>
            </form>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
