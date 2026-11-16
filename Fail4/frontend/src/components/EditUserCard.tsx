import { useState, useEffect } from 'react';
import { User } from '../types/api';
import { updateUser } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

interface EditUserCardProps {
  user: User | null;
  onUserUpdated?: (user: User) => void;
}

export default function EditUserCard({ user, onUserUpdated }: EditUserCardProps) {
  const { user: adminUser } = useAuth();
  const [email, setEmail] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ email?: string; cpfCnpj?: string; phone?: string }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateCPF = (cpf: string) => {
    if (!cpf) return true;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;
    return cpfRegex.test(cpf);
  };

  const validateCNPJ = (cnpj: string) => {
    if (!cnpj) return true;
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$|^\d{14}$/;
    return cnpjRegex.test(cnpj);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true;
    const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$|^\d{10,11}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors: { email?: string; cpfCnpj?: string; phone?: string } = {};

    if (email && !validateEmail(email)) {
      newErrors.email = 'Email inválido';
    }

    if (cpfCnpj && !validateCPF(cpfCnpj) && !validateCNPJ(cpfCnpj)) {
      newErrors.cpfCnpj = 'CPF/CNPJ inválido';
    }

    if (phone && !validatePhone(phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (user) {
      setEmail(user.email || '');
      setCpfCnpj(user.profile?.cpf || '');
      setPhone(user.profile?.phone || '');
      
      // Get the most recent subscription detail for dates
      if (user.subscriptionDetails && user.subscriptionDetails.length > 0) {
        const mostRecent = user.subscriptionDetails[0];
        setStartDate(mostRecent.startDate ? formatDateForInput(mostRecent.startDate) : '');
        setEndDate(mostRecent.endDate ? formatDateForInput(mostRecent.endDate) : '');
      } else if (user.subscription) {
        setStartDate(user.subscription.startDate ? formatDateForInput(user.subscription.startDate) : '');
        setEndDate(user.subscription.renewDate ? formatDateForInput(user.subscription.renewDate) : '');
      }
    } else {
      setEmail('');
      setCpfCnpj('');
      setPhone('');
      setStartDate('');
      setEndDate('');
    }
  }, [user]);

  const formatDateForInput = (dateString: string) => {
    const date = new Date(dateString);
    // Use local date components to avoid timezone issues
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('Nenhum usuário selecionado para edição');
      return;
    }

    if (!validateForm()) {
      setError('Corrija os erros antes de salvar');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const updateData: any = {};
      if (email !== user.email) updateData.email = email;
      if (cpfCnpj !== user.profile?.cpf) updateData.cpfCnpj = cpfCnpj;
      if (phone !== user.profile?.phone) updateData.phone = phone;
      if (startDate) {
        const currentStartDate = user.subscriptionDetails?.[0]?.startDate 
          ? formatDateForInput(user.subscriptionDetails[0].startDate)
          : user.subscription?.startDate 
          ? formatDateForInput(user.subscription.startDate)
          : '';
        if (startDate !== currentStartDate) updateData.startDate = startDate;
      }
      if (endDate) {
        const currentEndDate = user.subscriptionDetails?.[0]?.endDate 
          ? formatDateForInput(user.subscriptionDetails[0].endDate)
          : user.subscription?.renewDate 
          ? formatDateForInput(user.subscription.renewDate)
          : '';
        if (endDate !== currentEndDate) updateData.endDate = endDate;
      }

      if (Object.keys(updateData).length === 0) {
        setError('Nenhuma alteração detectada');
        setLoading(false);
        return;
      }

      // Add admin info for logging
      if (adminUser) {
        updateData.adminId = adminUser.uid;
        updateData.adminEmail = adminUser.email || '';
      }

      const updatedUser = await updateUser(user.id, updateData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      
      if (onUserUpdated) {
        onUserUpdated(updatedUser);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar usuário');
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !user;

  return (
    <div className="bg-dark-card dark:bg-dark-card bg-light-card border border-dark-border dark:border-dark-border border-light-border rounded-lg p-4 md:p-6 h-full">
      <h2 className="text-base md:text-lg font-semibold text-dark-text dark:text-dark-text text-light-text mb-4">
        Editar Usuário
      </h2>

      {success && (
        <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg mb-4">
          Usuário atualizado com sucesso!
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {!user && (
        <div className="text-center py-8 text-dark-muted dark:text-dark-muted text-light-muted">
          <p className="text-sm">Selecione um usuário para editar</p>
        </div>
      )}

      <form onSubmit={handleSave}>
        <div className="space-y-3 md:space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              disabled={isDisabled}
              className={`w-full px-3 md:px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border rounded-lg text-sm md:text-base text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.email ? 'border-red-500' : 'border-dark-border dark:border-dark-border border-light-border'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="cpfCnpj" className="block text-xs md:text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
              CPF/CNPJ
            </label>
            <input
              type="text"
              id="cpfCnpj"
              value={cpfCnpj}
              onChange={(e) => {
                setCpfCnpj(e.target.value);
                if (errors.cpfCnpj) setErrors({ ...errors, cpfCnpj: undefined });
              }}
              disabled={isDisabled}
              placeholder="000.000.000-00 ou 00.000.000/0000-00"
              className={`w-full px-3 md:px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border rounded-lg text-sm md:text-base text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.cpfCnpj ? 'border-red-500' : 'border-dark-border dark:border-dark-border border-light-border'
              }`}
            />
            {errors.cpfCnpj && <p className="text-red-500 text-xs mt-1">{errors.cpfCnpj}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              disabled={isDisabled}
              placeholder="(00) 00000-0000"
              className={`w-full px-3 md:px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border rounded-lg text-sm md:text-base text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.phone ? 'border-red-500' : 'border-dark-border dark:border-dark-border border-light-border'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="startDate" className="block text-xs md:text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
              Data de Início
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={isDisabled}
              className="w-full px-3 md:px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-sm md:text-base text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed [color-scheme:dark]"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-xs md:text-sm font-medium text-dark-muted dark:text-dark-muted text-light-muted mb-2">
              Data de Fim
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled={isDisabled}
              className="w-full px-3 md:px-4 py-2 bg-dark-input dark:bg-dark-input bg-light-input border border-dark-border dark:border-dark-border border-light-border rounded-lg text-sm md:text-base text-dark-text dark:text-dark-text text-light-text focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed [color-scheme:dark]"
            />
          </div>

          <button
            type="submit"
            disabled={isDisabled || loading}
            className="w-full px-4 md:px-6 py-2 bg-primary hover:bg-primary-hover text-white text-sm md:text-base font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </div>
      </form>
    </div>
  );
}
