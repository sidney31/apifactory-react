import Keycloak from 'keycloak-js'
 const keycloak = new Keycloak({
	url: "https://id.api-factory.ru:8443",
	realm: "API-FACTORY",
	clientId: "web",
 });

 export default keycloak;