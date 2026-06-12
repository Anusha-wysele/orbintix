import api from './api';

/**
 * Blog Service for interacting with /api/v1/blogs/
 */
const blogService = {
  /**
   * Fetch all blog posts
   * GET /api/v1/blogs/
   */
  getAllBlogs: async (params = {}) => {
    const response = await api.get('/blogs/', { params });
    return response.data;
  },

  /**
   * Get a single blog by ID
   * GET /api/v1/blogs/{blog_id}/
   */
  getBlogById: async (blogId) => {
    try {
      const response = await api.get(`/blogs/${blogId}/`);
      return response.data;
    } catch (error) {
      if (error.status === 404 || error.message.includes('404') || error.message.includes('Failed to fetch')) {
        const response = await api.get(`/blogs/${blogId}`);
        return response.data;
      }
      throw error;
    }
  }
};

export default blogService;
