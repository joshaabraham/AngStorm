
import {isNullOrUndefined} from 'util';
export class Personne {

    age?: number;
    prenom?: string;
    nom?: string;


    public constructor(init?: Partial<Personne>) {

        if (!isNullOrUndefined(init)) {
          Object.assign(this, init);
        }
      }




}
