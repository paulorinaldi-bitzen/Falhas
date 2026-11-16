export interface SearchUserRequest {
  field: 'email' | 'cpf' | 'phone' | 'profileId';
  value: string;
}

export interface UpdateUserRequest {
  email?: string;
  cpfCnpj?: string;
  phone?: string;
  startDate?: string;
  endDate?: string;
}

export interface SubscriptionDetail {
  id: number;
  subscriptionId: string;
  status: number;
  startDate: string;
  endDate: string | null;
  store: number;
  gatewayTransactionId: string;
}

export interface Subscription {
  subscriptionId: string | null;
  plan: string;
  status: string;
  startDate: string | null;
  renewDate: string | null;
}

export interface Profile {
  id: string;
  name: string;
  cpf: string;
  phone: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  profileId: string;
  profile: Profile | null;
  subscriptionDetails?: SubscriptionDetail[];
  subscription?: Subscription | null;
}

export interface SearchUsersResponse {
  users: User[];
}
