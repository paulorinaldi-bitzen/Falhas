import { useState } from 'react'

interface UserData {
  id?: string
  email?: string
  cpf?: string
  telefone?: string
  profileId?: string
  createdAt?: string
  updatedAt?: string
}

export default function UsersTab() {
  const [searchEmail, setSearchEmail] = useState('')
  const [userData, setUserData] = useState<UserData | null>(null)
  const [error, setError] = useState('')
  const [editUserId, setEditUserId] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [subscriptionData, setSubscriptionData] = useState<any>(null)

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/search?email=${searchEmail}`)
      const data = await response.json()
      
      if (response.ok) {
        setUserData(data)
        setError('')
        // Auto-buscar assinatura
        if (data?.id) {
          const subResponse = await fetch(`http://localhost:3001/users/${data.id}/subscription`)
          const subData = await subResponse.json()
          if (subResponse.ok) {
            setSubscriptionData(subData)
          }
        }
      } else {
        setError('Não foi possível consultar usuários.')
        setUserData(null)
        setSubscriptionData(null)
      }
    } catch (err) {
      setError('Erro ao consultar usuários.')
      setUserData(null)
      setSubscriptionData(null)
    }
  }

  const handleUpdateEmail = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${editUserId}/email`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newEmail }),
      })
      
      if (response.ok) {
        alert('Email atualizado com sucesso!')
        setEditUserId('')
        setNewEmail('')
      } else {
        alert('Erro ao atualizar email')
      }
    } catch (err) {
      alert('Erro ao atualizar email')
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Buscar usuários */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Buscar usuários</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Resultado da busca */}
      {userData && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Dados do usuário</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-medium">ID:</span>
              <span className="flex-1">{userData.id}</span>
              <button
                onClick={() => copyToClipboard(userData.id || '')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Copiar
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Email:</span>
              <span className="flex-1">{userData.email}</span>
              <button
                onClick={() => copyToClipboard(userData.email || '')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Copiar
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">CPF:</span>
              <span className="flex-1">{userData.cpf || 'N/A'}</span>
              <button
                onClick={() => copyToClipboard(userData.cpf || '')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Copiar
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Telefone:</span>
              <span className="flex-1">{userData.telefone || 'N/A'}</span>
              <button
                onClick={() => copyToClipboard(userData.telefone || '')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Copiar
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Profile ID:</span>
              <span className="flex-1">{userData.profileId || 'N/A'}</span>
              <button
                onClick={() => copyToClipboard(userData.profileId || '')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Copiar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dados da assinatura */}
      {subscriptionData && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Dados da assinatura</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-medium">Subscription ID:</span>
              <span className="flex-1">{subscriptionData.id}</span>
              <button
                onClick={() => copyToClipboard(subscriptionData.id)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Copiar
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Status:</span>
              <span className="flex-1">{subscriptionData.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Plano:</span>
              <span className="flex-1">{subscriptionData.plan || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Data início:</span>
              <span className="flex-1">{subscriptionData.startDate ? new Date(subscriptionData.startDate).toLocaleDateString('pt-BR') : 'N/A'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Data fim:</span>
              <span className="flex-1">{subscriptionData.endDate ? new Date(subscriptionData.endDate).toLocaleDateString('pt-BR') : 'N/A'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Editar email do usuário */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Editar email do usuário</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">User ID</label>
            <input
              type="text"
              value={editUserId}
              onChange={(e) => setEditUserId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Novo email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <button
            onClick={handleUpdateEmail}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Atualizar email
          </button>
        </div>
      </div>
    </div>
  )
}
