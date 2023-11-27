import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
  url: 'http://192.168.100.72/auth-server/',
  realm: 'license-manager',
  clientId: 'license-process-service',
});

export default keycloak;
