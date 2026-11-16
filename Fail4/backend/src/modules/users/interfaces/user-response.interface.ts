export interface ProfileResponse {
  id: string;
  name: string;
  cpf: string;
  phone: string;
}

export interface SubscriptionDetailResponse {
  id: number;
  subscriptionId: string;
  status: number;
  startDate: Date;
  endDate: Date | null;
  store: number;
  gatewayTransactionId: string;
}

export interface SubscriptionResponse {
  subscriptionId: string | null;
  plan: string;
  status: string;
  startDate: string | null;
  renewDate: string | null;
}

export interface UserResponse {
  id: string;
  email: string;
  username: string;
  profileId: string;
  profile: ProfileResponse | null;
  subscriptionDetails?: SubscriptionDetailResponse[];
  subscription?: SubscriptionResponse | null;
}

export interface SearchUsersResponse {
  users: UserResponse[];
}
