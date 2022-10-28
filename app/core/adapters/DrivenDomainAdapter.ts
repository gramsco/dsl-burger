export interface DrivenDomainAdapter<
  T extends { domain: unknown; driven: unknown }
> {
  toDomain: (drivenConcept: T['driven']) => T['domain'];
  toDriven: (domainConcept: T['domain']) => T['driven'];
}
