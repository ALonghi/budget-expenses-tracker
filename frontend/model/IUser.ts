export enum RegistrationSource {
    PASSWORD = "PASSWORD",
    FACEBOOK = "FACEBOOOK",
    GOOGLE = "GOOGLE"
}

export default interface IUser {
    id: string;
    customerNo?: number;
    fullName?: string;
    email: string;
    createdAt: Date;
    source: RegistrationSource
}

