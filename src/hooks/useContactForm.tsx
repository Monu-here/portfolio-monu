import { useState } from 'react';
import { ContactFormData, FormState } from '../types';
import { submitContactForm } from '../utils/api';

const initialFormValues: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

const initialFormState: FormState = {
  values: initialFormValues,
  errors: {},
  isSubmitting: false,
  isSubmitted: false,
  error: null,
};

export const useContactForm = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const validateForm = (): boolean => {
    const errors: Partial<ContactFormData> = {};
    
    if (!formState.values.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formState.values.email.trim()) {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.values.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }
    
    if (!formState.values.message.trim()) {
      errors.message = 'Message is required';
    } else if (formState.values.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormState(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));
    
    try {
      const result = await submitContactForm(formState.values);
      
      if (result.success) {
        setFormState({
          values: initialFormValues,
          errors: {},
          isSubmitting: false,
          isSubmitted: true,
          error: null,
        });
      } else {
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          error: result.message,
        }));
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        error: 'An unexpected error occurred. Please try again.',
      }));
    }
  };

  const resetForm = () => {
    setFormState(initialFormState);
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    resetForm,
  };
};