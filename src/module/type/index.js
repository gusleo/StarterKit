// @flow

export type StudentType = {
    nama: string,
    nim: string,
    nilai: string,
    status: 0 | 1 | 2 // Hadir = 0, Ijin = 1, Alpa = 2
};

export type ScheduleType = {
    type: string,
    title: string,
    sks: string,
    value: string | number,
    petemuan: string
};

export type StudentAssessmentType = {
    nama: string,
    nim: string,
    uas: string,
    uts: string,
    tugas: string,
    partisipasi: string,
    akumulasi: string
};
