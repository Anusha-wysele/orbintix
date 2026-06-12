const BASE_URL = import.meta.env.VITE_API_URL || 'https://wyselebackend.vercel.app';
const API_PREFIX = '/api/v1';

/**
 * Enhanced fetch wrapper with basic headers and error handling
 */
const apiFetch = async (endpoint, options = {}) => {
  const headers = {
    'Accept': 'application/json',
    ...options.headers,
  };

  if (!headers['Content-Type'] && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const config = {
    ...options,
    headers,
  };

  try {
    // Prevent double slashes
    const fullUrl = `${BASE_URL}${API_PREFIX}${endpoint}`.replace(/([^:]\/)\/+/g, "$1");
    const response = await fetch(fullUrl, config);
    
    let data = {};
    const text = await response.text();
    if (text) {
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { message: text };
      }
    }

    if (!response.ok) {
      const errorDetail = data.detail;
      const errorMessage = typeof errorDetail === 'object' 
        ? JSON.stringify(errorDetail) 
        : (errorDetail || data.message || `API Error: ${response.status}`);
      
      const error = new Error(errorMessage);
      error.status = response.status;
      throw error;
    }

    return { data, status: response.status };
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
};

const api = {
  get: (url, config) => {
    const params = config?.params;
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return apiFetch(`${url}${queryString}`, { method: 'GET', ...config });
  },
  post: (url, data, config) => {
    const body = (data instanceof FormData || data instanceof URLSearchParams) 
      ? data 
      : JSON.stringify(data);
    return apiFetch(url, { method: 'POST', body, ...config });
  },
  put: (url, data, config) => {
    const body = (data instanceof FormData || data instanceof URLSearchParams) 
      ? data 
      : JSON.stringify(data);
    return apiFetch(url, { method: 'PUT', body, ...config });
  },
  delete: (url, config) => {
    return apiFetch(url, { method: 'DELETE', ...config });
  }
};

export default api;
