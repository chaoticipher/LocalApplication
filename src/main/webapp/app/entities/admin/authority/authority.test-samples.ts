import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '20bd8784-6b01-409c-a7ca-2a28b2ae50df',
};

export const sampleWithPartialData: IAuthority = {
  name: '13ad0d8c-dbb5-4639-a8c4-9d37f85239ad',
};

export const sampleWithFullData: IAuthority = {
  name: 'be3a920e-b6d5-45ef-98e9-e9ca6c0e5dbc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
