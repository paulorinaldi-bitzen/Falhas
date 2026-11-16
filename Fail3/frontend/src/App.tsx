import { useState } from 'react'
import UsersTab from './components/UsersTab'
import SubscriptionsTab from './components/SubscriptionsTab'
import PoneimoedasTab from './components/PoneimoedasTab'

function App() {
  const [activeTab, setActiveTab] = useState<'users' | 'subscriptions' | 'poneimoedas'>('users')
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">b</div>
              <h1 className="text-xl font-semibold">Suporte Administrativo</h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? 'Modo claro' : 'Modo escuro'}
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                Sair
              </button>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-6 mt-6">
          <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'users'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Consulta de Usuários
            </button>
            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'subscriptions'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Consulta de Assinaturas
            </button>
            <button
              onClick={() => setActiveTab('poneimoedas')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'poneimoedas'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Poneimoedas
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-6">
          {activeTab === 'users' && <UsersTab />}
          {activeTab === 'subscriptions' && <SubscriptionsTab />}
          {activeTab === 'poneimoedas' && <PoneimoedasTab />}
        </div>
      </div>
    </div>
  )
}

export default App
