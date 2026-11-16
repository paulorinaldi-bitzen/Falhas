import { SearchUserRequest, SearchUsersResponse, User, UpdateUserRequest } from '../types/api';

const API_URL = '/users/search';

export async function searchUsers(request: SearchUserRequest): Promise<SearchUsersResponse> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Erro na busca: ${response.statusText}`);
  }

  return response.json();
}

export async function getUserById(userId: string): Promise<User> {
  const response = await fetch(`/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar usuário: ${response.statusText}`);
  }

  return response.json();
}

export async function updateUser(userId: string, request: UpdateUserRequest): Promise<User> {
  const response = await fetch(`/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
  }

  return response.json();
}

export interface ChangeLog {
  id?: string;
  adminId: string;
  adminEmail: string;
  userId: string;
  userName: string;
  userEmail: string;
  changedAt: string;
  changes: Array<{
    field: string;
    before: string;
    after: string;
  }>;
}

export interface ChangeLogsResponse {
  logs: ChangeLog[];
  metrics: {
    totalChanges: number;
    uniqueUsersEdited: number;
    avgChangesPerDay: string;
    changesByDay: Record<string, number>;
  };
}

export async function getChangeLogs(period: string = '7d'): Promise<ChangeLogsResponse> {
  const response = await fetch(`/users/change-logs?period=${period}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar logs de alterações: ${response.statusText}`);
  }

  return response.json();
}

export type { SearchUserRequest, SearchUsersResponse } from '../types/api';

