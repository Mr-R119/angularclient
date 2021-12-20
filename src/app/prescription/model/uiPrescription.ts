import {Doctor} from "../../doctor/model/doctor";
import {Patient} from "../../patient/model/patient";

export class UiPrescription{
  id?: any;
  doctor: Doctor;
  patient: Patient;
  description?: string;
  createDate?: string;
  expirationDate?: string;
  priority?: string;

}
