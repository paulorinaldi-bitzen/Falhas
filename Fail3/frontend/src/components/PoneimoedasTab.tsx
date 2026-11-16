import { useState } from 'react'

interface EpisodioReproduzido {
  id: string
  episodioId: string
  titulo: string
  dataReproducao: string
}

interface PoneiMoedasData {
  id: string
  userId: string
  quantidade: number
  createdAt: string
  updatedAt: string
  episodiosReproduzidos: EpisodioReproduzido[]
}

export default function PoneimoedasTab() {
  const [userId, setUserId] = useState('')
  const [poneiMoedasData, setPoneiMoedasData] = useState<PoneiMoedasData | null>(null)
  const [error, setError] = useState('')
  const [episodioId, setEpisodioId] = useState('')
  const [episodioTitulo, setEpisodioTitulo] = useState('')
  const [quantidade, setQuantidade] = useState(1)

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/poneimoedas/user/${userId}`)
      const data = await response.json()
      
      if (response.ok) {
        setPoneiMoedasData(data)
        setError('')
      } else {
        setError('Não foi possível consultar poneimoedas.')
        setPoneiMoedasData(null)
      }
    } catch (err) {
      setError('Erro ao consultar poneimoedas.')
      setPoneiMoedasData(null)
    }
  }

  const handleAddEpisodio = async () => {
    try {
      const response = await fetch(`http://localhost:3001/poneimoedas/user/${userId}/episodios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          episodioId,
          titulo: episodioTitulo,
          quantidade,
        }),
      })
      
      if (response.ok) {
        alert('Episódio adicionado com sucesso!')
        setEpisodioId('')
        setEpisodioTitulo('')
        setQuantidade(1)
        // Recarregar dados
        handleSearch()
      } else {
        const data = await response.json()
        alert(data.message || 'Erro ao adicionar episódio')
      }
    } catch (err) {
      alert('Erro ao adicionar episódio')
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

      {/* Buscar usuário */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Buscar poneimoedas do usuário</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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

      {/* Dados das poneimoedas */}
      {poneiMoedasData && (
        <>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Saldo de Poneimoedas</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">User ID:</span>
                <span className="flex-1">{poneiMoedasData.userId}</span>
                <button
                  onClick={() => copyToClipboard(poneiMoedasData.userId)}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Copiar
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Quantidade:</span>
                <span className="flex-1 text-2xl font-bold text-blue-500">{poneiMoedasData.quantidade}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Última atualização:</span>
                <span className="flex-1">{new Date(poneiMoedasData.updatedAt).toLocaleString('pt-BR')}</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Episódios Reproduzidos</h2>
            {poneiMoedasData.episodiosReproduzidos.length > 0 ? (
              <div className="space-y-3">
                {poneiMoedasData.episodiosReproduzidos.map((episodio) => (
                  <div key={episodio.id} className="border border-gray-200 dark:border-gray-700 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Episódio ID:</span>
                      <span className="flex-1">{episodio.episodioId}</span>
                      <button
                        onClick={() => copyToClipboard(episodio.episodioId)}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        Copiar
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Título:</span>
                      <span className="flex-1">{episodio.titulo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Data reprodução:</span>
                      <span className="flex-1">{new Date(episodio.dataReproducao).toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Nenhum episódio reproduzido ainda.</p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Adicionar Episódio</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Episódio ID</label>
                <input
                  type="text"
                  value={episodioId}
                  onChange={(e) => setEpisodioId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Título do episódio</label>
                <input
                  type="text"
                  value={episodioTitulo}
                  onChange={(e) => setEpisodioTitulo(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quantidade de poneimoedas</label>
                <input
                  type="number"
                  min="1"
                  value={quantidade}
                  onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <button
                onClick={handleAddEpisodio}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Adicionar episódio
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
