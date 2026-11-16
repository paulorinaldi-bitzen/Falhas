import { useState, useEffect, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import { User } from '../types/api';
import { getUserById } from '../services/api';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const [activeTab, setActiveTab] = useState<'customer' | 'subscription'>('customer');
  const [fullUser, setFullUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStoreLabel = (gatewayTransactionId: string) => {
    if (!gatewayTransactionId) return 'N/A';
    
    // Se for apenas numérico → Apple
    if (/^\d+$/.test(gatewayTransactionId)) {
      return 'Apple';
    }
    // Se começar com GPA → Play Store
    if (gatewayTransactionId.startsWith('GPA')) {
      return 'Play Store';
    }
    // Qualquer outro → Teste
    return 'Teste';
  };

  const getGatewayTransactionDisplay = (gatewayTransactionId: string) => {
    if (!gatewayTransactionId) return { icon: null, text: 'N/A', color: 'text-gray-600' };
    
    if (gatewayTransactionId.startsWith('GPA')) {
      return {
        icon: '▶️',
        text: gatewayTransactionId,
        color: 'text-green-600'
      };
    } else {
      return {
        icon: '',
        text: gatewayTransactionId,
        color: 'text-dark-text dark:text-dark-text text-light-text'
      };
    }
  };

  const fetchFullUser = useCallback(async () => {
    if (fullUser) return;
    
    setLoading(true);
    setError(null);
    try {
      const userDetails = await getUserById(user.id);
      setFullUser(userDetails);
    } catch (err) {
      setError('Erro ao buscar detalhes completos do usuário');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [fullUser, user.id]);

  useEffect(() => {
    if (activeTab === 'subscription') {
      fetchFullUser();
    }
  }, [activeTab, fetchFullUser]);

  const displayUser = fullUser || user;

  return (
    <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-4 md:p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg md:text-xl font-bold text-dark-text dark:text-dark-text text-light-text">
            {displayUser.profile?.name || 'Nome não disponível'}
          </h3>
          {displayUser.profile?.name && (
            <button
              onClick={() => displayUser.profile && copyToClipboard(displayUser.profile.name, 'name')}
              className="p-1 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input rounded transition-colors"
              title="Copiar nome"
            >
              {copiedField === 'name' ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-dark-muted dark:text-dark-muted text-light-muted" />
              )}
            </button>
          )}
        </div>
        <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full">
          Cliente ativo
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-dark-border dark:border-dark-border border-light-border mb-4">
        <button
          onClick={() => setActiveTab('customer')}
          className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-colors ${
            activeTab === 'customer'
              ? 'border-b-2 border-primary text-primary'
              : 'text-dark-muted dark:text-dark-muted text-light-muted hover:text-dark-text dark:hover:text-dark-text hover:text-light-text'
          }`}
        >
          Dados do Cliente
        </button>
        <button
          onClick={() => setActiveTab('subscription')}
          className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-colors ${
            activeTab === 'subscription'
              ? 'border-b-2 border-primary text-primary'
              : 'text-dark-muted dark:text-dark-muted text-light-muted hover:text-dark-text dark:hover:text-dark-text hover:text-light-text'
          }`}
        >
          Assinatura
        </button>
      </div>

      {/* Customer Data Tab */}
      {activeTab === 'customer' && (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium text-dark-muted dark:text-dark-muted text-light-muted">Email:</span>
            <div className="flex items-center gap-2">
              <span className="text-dark-text dark:text-dark-text text-light-text">{displayUser.email || 'N/A'}</span>
              {displayUser.email && (
                <button
                  onClick={() => copyToClipboard(displayUser.email, 'email')}
                  className="p-1 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input rounded transition-colors"
                  title="Copiar e-mail"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-dark-muted dark:text-dark-muted text-light-muted" />
                  )}
                </button>
              )}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-dark-muted dark:text-dark-muted text-light-muted">CPF:</span>
            <div className="flex items-center gap-2">
              <span className="text-dark-text dark:text-dark-text text-light-text">{displayUser.profile?.cpf || 'N/A'}</span>
              {displayUser.profile?.cpf && (
                <button
                  onClick={() => displayUser.profile && copyToClipboard(displayUser.profile.cpf, 'cpf')}
                  className="p-1 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input rounded transition-colors"
                  title="Copiar CPF"
                >
                  {copiedField === 'cpf' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-dark-muted dark:text-dark-muted text-light-muted" />
                  )}
                </button>
              )}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-dark-muted dark:text-dark-muted text-light-muted">Telefone:</span>
            <div className="flex items-center gap-2">
              <span className="text-dark-text dark:text-dark-text text-light-text">{displayUser.profile?.phone || 'N/A'}</span>
              {displayUser.profile?.phone && (
                <button
                  onClick={() => displayUser.profile && copyToClipboard(displayUser.profile.phone, 'phone')}
                  className="p-1 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input rounded transition-colors"
                  title="Copiar telefone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-dark-muted dark:text-dark-muted text-light-muted" />
                  )}
                </button>
              )}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-dark-muted dark:text-dark-muted text-light-muted">Profile ID:</span>
            <div className="flex items-center gap-2">
              <span className="text-dark-text dark:text-dark-text text-light-text text-xs">{displayUser.profileId || 'N/A'}</span>
              {displayUser.profileId && (
                <button
                  onClick={() => copyToClipboard(displayUser.profileId, 'profileId')}
                  className="p-1 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input rounded transition-colors"
                  title="Copiar Profile ID"
                >
                  {copiedField === 'profileId' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-dark-muted dark:text-dark-muted text-light-muted" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Subscription Tab */}
      {activeTab === 'subscription' && (
        <div>
          {loading && (
            <div className="text-center py-4 text-dark-muted dark:text-dark-muted text-light-muted">
              Carregando dados da assinatura...
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {!loading && !error && (
            <>
              {displayUser.subscription || (displayUser.subscriptionDetails && displayUser.subscriptionDetails.length > 0) ? (
                <div className="space-y-4">
                  {displayUser.subscription && (
                    <div className="bg-dark-input dark:bg-dark-input bg-light-input rounded-lg p-4">
                      <h4 className="font-semibold text-dark-text dark:text-dark-text text-light-text mb-3">Dados da API (ni-player-api)</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-dark-muted dark:text-dark-muted text-light-muted">ID da Assinatura:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-xs text-dark-text dark:text-dark-text text-light-text">{displayUser.subscription.subscriptionId || 'N/A'}</span>
                            {displayUser.subscription.subscriptionId && (() => {
                              const subId = displayUser.subscription?.subscriptionId;
                              return subId ? (
                                <button
                                  onClick={() => copyToClipboard(subId, 'subscriptionId')}
                                  className="p-1 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input rounded transition-colors"
                                  title="Copiar ID da Assinatura"
                                >
                                  {copiedField === 'subscriptionId' ? (
                                    <Check className="w-4 h-4 text-green-500" />
                                  ) : (
                                    <Copy className="w-4 h-4 text-dark-muted dark:text-dark-muted text-light-muted" />
                                  )}
                                </button>
                              ) : null;
                            })()}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-muted dark:text-dark-muted text-light-muted">Plano:</span>
                          <span className="font-medium text-dark-text dark:text-dark-text text-light-text">{displayUser.subscription.plan}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-muted dark:text-dark-muted text-light-muted">Início:</span>
                          <span className="text-dark-text dark:text-dark-text text-light-text">{formatDate(displayUser.subscription.startDate)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-muted dark:text-dark-muted text-light-muted">Renovação:</span>
                          <span className="text-dark-text dark:text-dark-text text-light-text">{formatDate(displayUser.subscription.renewDate)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {displayUser.subscriptionDetails && displayUser.subscriptionDetails.length > 0 && (
                    <div className="bg-dark-input dark:bg-dark-input bg-light-input rounded-lg p-4">
                      <h4 className="font-semibold text-dark-text dark:text-dark-text text-light-text mb-3">Dados do SubscriptionDetails</h4>
                      <div className="space-y-2">
                        {displayUser.subscriptionDetails.map((detail) => {
                          const gatewayDisplay = getGatewayTransactionDisplay(detail.gatewayTransactionId);
                          return (
                            <div key={detail.id} className="bg-dark-card dark:bg-dark-card bg-light-card rounded-lg p-3 text-sm border border-dark-border dark:border-dark-border border-light-border">
                              <div className="flex justify-between items-center">
                                <span className="text-dark-muted dark:text-dark-muted text-light-muted">ID da Transação:</span>
                                <div className="flex items-center gap-2">
                                  <span className={`font-medium text-xs ${gatewayDisplay.color}`}>
                                    {gatewayDisplay.icon} {gatewayDisplay.text}
                                  </span>
                                  {gatewayDisplay.text && gatewayDisplay.text !== 'N/A' && (
                                    <button
                                      onClick={() => copyToClipboard(gatewayDisplay.text, `transaction-${detail.id}`)}
                                      className="p-1 hover:bg-dark-input dark:hover:bg-dark-input hover:bg-light-input rounded transition-colors"
                                      title="Copiar ID da Transação"
                                    >
                                      {copiedField === `transaction-${detail.id}` ? (
                                        <Check className="w-4 h-4 text-green-500" />
                                      ) : (
                                        <Copy className="w-4 h-4 text-dark-muted dark:text-dark-muted text-light-muted" />
                                      )}
                                    </button>
                                  )}
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-dark-muted dark:text-dark-muted text-light-muted">Loja:</span>
                                <span className="text-dark-text dark:text-dark-text text-light-text">{getStoreLabel(detail.gatewayTransactionId)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-dark-muted dark:text-dark-muted text-light-muted">Início:</span>
                                <span className="text-dark-text dark:text-dark-text text-light-text">{formatDate(detail.startDate)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-dark-muted dark:text-dark-muted text-light-muted">Fim:</span>
                                <span className="text-dark-text dark:text-dark-text text-light-text">{formatDate(detail.endDate)}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-dark-muted dark:text-dark-muted text-light-muted">
                  <p className="text-lg font-medium">Nenhuma assinatura encontrada</p>
                  <p className="text-sm mt-1">Este usuário não possui assinatura cadastrada no sistema.</p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
