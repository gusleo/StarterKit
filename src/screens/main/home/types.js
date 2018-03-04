// @flow
export type StudyType = {
    type: string,
    title: string,
    code: string,
    sks: string,
    name: string,
    value: string | number,
    total: number
};

export type PaymentType = {
    title: string,
    total: string,
    paymentDate?: string,
    isPaidOff: boolean
};
