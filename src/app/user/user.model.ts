export interface UserModel {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    enabled: boolean;
    username: string;
    authorities: any[];
    accountNonLocked: boolean;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    token: string;
}
