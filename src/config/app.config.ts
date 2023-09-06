interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Employer', 'Freelancer', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'RemoteWork99',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Invite Employers and Freelancers to the application',
    'Manage the accounts of Employers and Freelancers',
    'Delete the accounts of Employers or Freelancers if necessary',
  ],
};
