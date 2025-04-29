import { ContactFormData } from '../types';
import { projects } from '../data/projects';

// Update this with your actual Laravel API endpoint
const API_BASE_URL = 'https://api.web3forms.com/submit';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export const fetchProjects = async (): Promise<ApiResponse<any>> => {
  try {
    // Using mock data instead of actual API call until backend is ready
    return {
      success: true,
      message: 'Projects fetched successfully',
      data: projects
    };

    // Commented out actual API call for future use
    /*
    const response = await fetch(`${API_BASE_URL}/api/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    return await response.json();
    */
  } catch (error) {
    console.error('Error fetching projects:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch projects',
    };
  }
};

export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse<any>> => {
  try {
    const formDataWithAccessKey = {
      ...formData,
      access_key: '0281d040-4241-4a40-96fb-797a3533f222', 
    };

    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithAccessKey),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit form');
    }

    const responseData = await response.json();
    return {
      success: true,
      message: 'Form submitted successfully',
      data: responseData,
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
};