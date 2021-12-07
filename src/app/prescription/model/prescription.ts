import {Doctor} from "../../doctor/model/doctor";
import {Patient} from "../../patient/model/patient";

export class Prescription {
  id?: any;
  doctor?: Doctor;
  patient?: Patient;
  description?: string;
  createDate?: Date;
  expirationDate?: Date;
  priority?: string;
}
