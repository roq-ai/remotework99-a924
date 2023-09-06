const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  jobs: 'job',
  profiles: 'profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
