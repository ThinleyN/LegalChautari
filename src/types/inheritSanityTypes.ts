import {Internship} from './sanityTypes';

export interface ExtendedInternship extends Internship {
    employer: Internship["employer"] & {
      title: string;
    };
}  