import { ApplicationInterface } from 'interfaces/application';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  key_skills: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    application?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  key_skills?: string;
  company_id?: string;
  user_id?: string;
}
