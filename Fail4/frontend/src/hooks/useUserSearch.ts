import { useState } from 'react';
import { searchUsers, SearchUserRequest } from '../services/api';

export function useUserSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<any[] | null>(null);

  const search = async (field: 'email' | 'cpf' | 'phone' | 'profileId', value: string) => {
    // Trim all fields to remove leading/trailing spaces
    let normalizedValue = value.trim();
    
    if (!normalizedValue) {
      setError('Por favor, preencha o valor para busca.');
      return;
    }

    // Remove punctuation from CPF and phone (keep only digits)
    if (field === 'cpf' || field === 'phone') {
      normalizedValue = normalizedValue.replace(/\D/g, '');
    }

    setLoading(true);
    setError(null);
    setUsers(null);

    try {
      const request: SearchUserRequest = { field, value: normalizedValue };
      const response = await searchUsers(request);
      setUsers(response.users);
      
      if (response.users.length === 0) {
        setError('Nenhum usuário encontrado.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar usuários.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, users, search };
}
