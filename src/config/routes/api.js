const API_URL = process.env.VUE_APP_API_URL;
const API_VERSION = process.env.VUE_APP_API_VERSION;

// Estas rutas son de ejemplo de como organizo yo las rutas de las api
const API_ROUTES = {
  auth: {
    login: `${API_URL}/api/${API_VERSION}/login`,
    register: `${API_URL}/api/${API_VERSION}/register`,
  },
}

export { API_ROUTES }