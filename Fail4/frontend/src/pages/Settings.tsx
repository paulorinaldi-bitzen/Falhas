import { useState } from 'react';
import { User, Bell, Shield, Database } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'database', label: 'Banco de Dados', icon: Database },
  ];

  return (
    <div className="flex-1 bg-dark-bg dark:bg-dark-bg bg-light-bg p-4 md:p-8 overflow-y-auto">
      <div className="w-full max-w-4xl">
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-dark-text dark:text-dark-text text-light-text mb-2">
            Configurações
          </h1>
          <p className="text-dark-muted dark:text-dark-muted text-light-muted text-sm">
            Gerencie as configurações do sistema
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-dark-muted dark:text-dark-muted text-light-muted hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input hover:text-dark-text dark:hover:text-dark-text hover:text-light-text'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
                  Configurações de Perfil
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Nome de exibição
                    </label>
                    <input
                      type="text"
                      defaultValue="Administrador"
                      className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="admin@bitzen.com"
                      className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text"
                    />
                  </div>
                  <button className="px-6 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors">
                    Salvar alterações
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
                  Configurações de Notificações
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-dark-text dark:text-dark-text text-light-text font-medium">
                        Notificações por email
                      </p>
                      <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
                        Receba alertas por email
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-dark-input dark:bg-dark-input bg-light-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-dark-text dark:text-dark-text text-light-text font-medium">
                        Notificações push
                      </p>
                      <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
                        Receba notificações no navegador
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-dark-input dark:bg-dark-input bg-light-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
                  Configurações de Segurança
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Senha atual
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Nova senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Confirmar nova senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text"
                    />
                  </div>
                  <button className="px-6 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors">
                    Atualizar senha
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'database' && (
              <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
                  Configurações de Banco de Dados
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-dark-input dark:bg-dark-input bg-light-border rounded-lg">
                    <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Status da conexão
                    </p>
                    <p className="text-green-500 font-medium">● Conectado</p>
                  </div>
                  <div className="p-4 bg-dark-input dark:bg-dark-input bg-light-border rounded-lg">
                    <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Banco de dados principal
                    </p>
                    <p className="text-dark-text dark:text-dark-text text-light-text font-medium">
                      ni-player-api
                    </p>
                  </div>
                  <div className="p-4 bg-dark-input dark:bg-dark-input bg-light-border rounded-lg">
                    <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted mb-2">
                      Banco de dados secundário
                    </p>
                    <p className="text-dark-text dark:text-dark-text text-light-text font-medium">
                      ni-poneiconta
                    </p>
                  </div>
                  <button className="px-6 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors">
                    Testar conexão
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
