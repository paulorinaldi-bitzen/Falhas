import { useState } from 'react';
import { useUserSearch } from '../hooks/useUserSearch';
import UserCard from '../components/UserCard';
import EditUserCard from '../components/EditUserCard';
import { User } from '../types/api';

export default function UserSearch() {
  const [field, setField] = useState<'email' | 'cpf' | 'phone' | 'profileId'>('email');
  const [value, setValue] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { loading, error, users, search } = useUserSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedUser(null);
    search(field, value);
  };

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
  };

  const handleUserUpdated = (updatedUser: User) => {
    setSelectedUser(updatedUser);
  };

  return (
    <div className="flex-1 bg-dark-bg dark:bg-dark-bg bg-light-bg p-4 md:p-8 overflow-hidden flex flex-col">
      <div className="w-full flex-1 flex flex-col">
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-dark-text dark:text-dark-text text-light-text mb-2">
            Busca de Usuários
          </h1>
          <p className="text-dark-muted dark:text-dark-muted text-light-muted text-sm">
            Busque usuários por email, CPF, telefone ou ID de perfil
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
          <div className="flex flex-col gap-6 min-h-0 order-2 lg:order-1">
            <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
              <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
                Buscar usuário
              </h2>
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="field" className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Campo de busca
                    </label>
                    <select
                      id="field"
                      value={field}
                      onChange={(e) => setField(e.target.value as any)}
                      className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="cpf">CPF</option>
                      <option value="phone">Telefone</option>
                      <option value="profileId">Profile ID</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="value" className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Valor
                    </label>
                    <input
                      type="text"
                      id="value"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Digite o valor para busca..."
                      className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-6 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Buscando usuário...' : 'Buscar usuário'}
                </button>
              </form>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {users && users.length > 0 && (
              <div className="flex-1 min-h-0 overflow-y-auto">
                <p className="text-dark-muted dark:text-dark-muted text-light-muted mb-4">
                  {users.length} usuário{users.length !== 1 ? 's' : ''} encontrado{users.length !== 1 ? 's' : ''}
                </p>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} onClick={() => handleUserSelect(user)} className="cursor-pointer">
                      <UserCard user={user} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="min-h-0 order-1 lg:order-2">
            <EditUserCard user={selectedUser} onUserUpdated={handleUserUpdated} />
          </div>
        </div>
      </div>
    </div>
  );
}
