export interface DrivingDomainAdapter<
  T extends { domain: unknown; driving: unknown }
> {
  toDomain: (drivingConcept: T['driving']) => T['domain'];
  toDriving: (domainConcept: T['domain']) => T['driving'];
}