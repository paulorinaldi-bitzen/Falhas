import { useState } from 'react'

interface SubscriptionData {
  id?: string
  profileId?: string
  poneiAccountId?: string
  status?: string
  startDate?: string
  endDate?: string
  plan?: string
  profile?: {
    id?: string
    email?: string
  }
}

export default function SubscriptionsTab() {
  const [subscriptionId, setSubscriptionId] = useState('')
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null)
  const [error, setError] = useState('')
  const [editEndDateId, setEditEndDateId] = useState('')
  const [newEndDate, setNewEndDate] = useState('')
  const [editStartDateId, setEditStartDateId] = useState('')
  const [newStartDate, setNewStartDate] = useState('')

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/subscriptions/${subscriptionId}`)
      const data = await response.json()
      
      if (response.ok) {
        setSubscriptionData(data)
        setError('')
      } else {
        setError('Não foi possível consultar assinatura.')
        setSubscriptionData(null)
      }
    } catch (err) {
      setError('Erro ao consultar assinatura.')
      setSubscriptionData(null)
    }
  }

  const copyAndSearch = () => {
    navigator.clipboard.writeText(subscriptionId)
    handleSearch()
  }

  const handleUpdateEndDate = async () => {
    try {
      const response = await fetch(`http://localhost:3001/subscriptions/${editEndDateId}/end-date`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endDate: newEndDate }),
      })
      
      if (response.ok) {
        alert('EndDate atualizado com sucesso!')
        setEditEndDateId('')
        setNewEndDate('')
      } else {
        alert('Erro ao atualizar EndDate')
      }
    } catch (err) {
      alert('Erro ao atualizar EndDate')
    }
  }

  const handleUpdateStartDate = async () => {
    try {
      const response = await fetch(`http://localhost:3001/subscriptions/${editStartDateId}/start-date`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate: newStartDate }),
      })
      
      if (response.ok) {
        alert('StartDate atualizado com sucesso!')
        setEditStartDateId('')
        setNewStartDate('')
      } else {
        alert('Erro ao atualizar StartDate')
      }
    } catch (err) {
      alert('Erro ao atualizar StartDate')
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

      {/* Buscar assinatura */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Buscar assinatura</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="SubscriptionId"
            value={subscriptionId}
            onChange={(e) => setSubscriptionId(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            onClick={copyAndSearch}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Copiar e buscar
          </button>
        </div>
      </div>

      {/* Detalhes da assinatura */}
      {subscriptionData && (
        <>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Detalhes da inscrição</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">ID:</span>
                <span className="flex-1">{subscriptionData.id}</span>
                <button
                  onClick={() => copyToClipboard(subscriptionData.id || '')}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Copiar
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Subscription ID:</span>
                <span className="flex-1">{subscriptionData.id}</span>
                <button
                  onClick={() => copyToClipboard(subscriptionData.id || '')}
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
                <span className="font-medium">Profile ID:</span>
                <span className="flex-1">{subscriptionData.profileId || 'N/A'}</span>
                <button
                  onClick={() => copyToClipboard(subscriptionData.profileId || '')}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Copiar
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Ponei Account ID:</span>
                <span className="flex-1">{subscriptionData.poneiAccountId || 'N/A'}</span>
                <button
                  onClick={() => copyToClipboard(subscriptionData.poneiAccountId || '')}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Copiar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Detalhes do período</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">StartDate:</span>
                <span className="flex-1">{subscriptionData.startDate ? new Date(subscriptionData.startDate).toLocaleDateString('pt-BR') : 'N/A'}</span>
                <button
                  onClick={() => copyToClipboard(subscriptionData.startDate || '')}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Copiar
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">EndDate:</span>
                <span className="flex-1">{subscriptionData.endDate ? new Date(subscriptionData.endDate).toLocaleDateString('pt-BR') : 'N/A'}</span>
                <button
                  onClick={() => copyToClipboard(subscriptionData.endDate || '')}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Copiar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Editar EndDate da assinatura</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">ID</label>
                <input
                  type="text"
                  value={editEndDateId}
                  onChange={(e) => setEditEndDateId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nova EndDate</label>
                <input
                  type="date"
                  value={newEndDate}
                  onChange={(e) => setNewEndDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <button
                onClick={handleUpdateEndDate}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Atualizar EndDate
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Editar StartDate da assinatura</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">ID</label>
                <input
                  type="text"
                  value={editStartDateId}
                  onChange={(e) => setEditStartDateId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nova StartDate</label>
                <input
                  type="date"
                  value={newStartDate}
                  onChange={(e) => setNewStartDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <button
                onClick={handleUpdateStartDate}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Atualizar StartDate
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
