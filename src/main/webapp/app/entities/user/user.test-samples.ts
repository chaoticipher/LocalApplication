import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1702,
  login: 'nyCeXk@EH6',
};

export const sampleWithPartialData: IUser = {
  id: 19873,
  login: 'w',
};

export const sampleWithFullData: IUser = {
  id: 7331,
  login: '_w2',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
