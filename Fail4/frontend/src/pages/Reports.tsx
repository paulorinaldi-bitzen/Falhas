import { useState, useEffect } from 'react';
import { BarChart3, Users, Calendar, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { getChangeLogs, ChangeLog } from '../services/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const [changeLogs, setChangeLogs] = useState<ChangeLog[]>([]);
  const [metrics, setMetrics] = useState<{
    totalChanges: number;
    uniqueUsersEdited: number;
    avgChangesPerDay: string;
    changesByDay: Record<string, number>;
  }>({
    totalChanges: 0,
    uniqueUsersEdited: 0,
    avgChangesPerDay: '0',
    changesByDay: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchChangeLogs();
  }, [selectedPeriod]);

  const fetchChangeLogs = async () => {
    setLoading(true);
    try {
      const response = await getChangeLogs(selectedPeriod);
      setChangeLogs(response.logs);
      setMetrics(response.metrics);
    } catch (error) {
      console.error('Erro ao buscar logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedLogId(expandedLogId === id ? null : id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex-1 bg-dark-bg dark:bg-dark-bg bg-light-bg p-4 md:p-8 overflow-y-auto">
      <div className="w-full">
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-dark-text dark:text-dark-text text-light-text mb-2">
            Relatórios
          </h1>
          <p className="text-dark-muted dark:text-dark-muted text-light-muted text-sm">
            Visualize métricas e estatísticas do sistema
          </p>
        </div>

        <div className="mb-6">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="w-full md:w-auto px-4 py-2 bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg text-dark-text dark:text-dark-text text-light-text"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-primary" />
              <span className="text-xs text-dark-muted dark:text-dark-muted text-light-muted">Total</span>
            </div>
            <p className="text-3xl font-bold text-dark-text dark:text-dark-text text-light-text mb-1">
              {loading ? '...' : metrics.totalChanges}
            </p>
            <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
              Total de alterações
            </p>
          </div>

          <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-green-500" />
              <span className="text-xs text-dark-muted dark:text-dark-muted text-light-muted">Média</span>
            </div>
            <p className="text-3xl font-bold text-dark-text dark:text-dark-text text-light-text mb-1">
              {loading ? '...' : metrics.avgChangesPerDay}
            </p>
            <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
              Alterações por dia
            </p>
          </div>

          <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-accent" />
              <span className="text-xs text-dark-muted dark:text-dark-muted text-light-muted">Únicos</span>
            </div>
            <p className="text-3xl font-bold text-dark-text dark:text-dark-text text-light-text mb-1">
              {loading ? '...' : metrics.uniqueUsersEdited}
            </p>
            <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
              Usuários editados
            </p>
          </div>

          <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-orange-500" />
              <span className="text-xs text-dark-muted dark:text-dark-muted text-light-muted">Dias</span>
            </div>
            <p className="text-3xl font-bold text-dark-text dark:text-dark-text text-light-text mb-1">
              {loading ? '...' : Object.keys(metrics.changesByDay).length}
            </p>
            <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
              Dias com alterações
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
          <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
              Alterações por Dia
            </h2>
            <div className="h-64">
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-dark-muted dark:text-dark-muted text-light-muted">Carregando...</p>
                </div>
              ) : Object.keys(metrics.changesByDay).length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={Object.entries(metrics.changesByDay).map(([date, count]) => ({ date, count }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#9CA3AF"
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        color: '#F9FAFB'
                      }}
                    />
                    <Bar dataKey="count" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-dark-muted dark:text-dark-muted text-light-muted">Sem dados</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
              Tendência de Alterações
            </h2>
            <div className="h-64">
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-dark-muted dark:text-dark-muted text-light-muted">Carregando...</p>
                </div>
              ) : Object.keys(metrics.changesByDay).length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={Object.entries(metrics.changesByDay).map(([date, count]) => ({ date, count }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#9CA3AF"
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        color: '#F9FAFB'
                      }}
                    />
                    <Line type="monotone" dataKey="count" stroke="#10B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-dark-muted dark:text-dark-muted text-light-muted">Sem dados</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
            Histórico de Alterações
          </h2>
          <div className="space-y-4">
            {changeLogs.map((log) => (
              <div
                key={log.id}
                className="border border-dark-border dark:border-dark-border border-light-border rounded-lg overflow-hidden"
              >
                <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-border transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text dark:text-dark-text text-light-text">
                        {log.userName}
                      </p>
                      <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted">
                        {log.userEmail}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-dark-muted dark:text-dark-muted text-light-muted">
                      <Clock className="w-4 h-4" />
                      {formatDate(log.changedAt)}
                    </div>
                    <button
                      onClick={() => log.id && toggleExpand(log.id)}
                      className="p-2 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-border rounded-lg transition-colors"
                    >
                      {expandedLogId === log.id ? (
                        <ChevronUp className="w-5 h-5 text-dark-text dark:text-dark-text text-light-text" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-dark-text dark:text-dark-text text-light-text" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedLogId === log.id && (
                  <div className="p-4 bg-dark-input dark:bg-dark-input bg-light-border border-t border-dark-border dark:border-dark-border border-light-border">
                    <h3 className="text-sm font-medium text-dark-text dark:text-dark-text text-light-text mb-3">
                      Alterações realizadas:
                    </h3>
                    <div className="space-y-2">
                      {log.changes.map((change, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-3 bg-dark-card dark:bg-dark-card bg-light-card rounded-lg"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-primary mb-1">
                              {change.field}
                            </p>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-dark-muted dark:text-dark-muted text-light-muted">
                                Antes:
                              </span>
                              <span className="text-red-400 line-through">
                                {change.before}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-dark-muted dark:text-dark-muted text-light-muted">
                                Depois:
                              </span>
                              <span className="text-green-400">
                                {change.after}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
