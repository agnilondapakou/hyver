import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface RegistrationData {
  name: string;
  email: string;
  role: 'ux-designer' | 'frontend-dev' | 'data-manager' | 'graphic-designer';
}

export default function RegistrationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    role: 'frontend-dev'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert(t('registrationSuccess'));
        setFormData({
          name: '',
          email: '',
          role: 'frontend-dev'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('registrationError'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {t('name')}
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-violet-500"
          placeholder={t('enterName')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {t('email')}
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-violet-500"
          placeholder={t('enterEmail')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {t('role')}
        </label>
        <select
          value={formData.role}
          onChange={(e) => setFormData({...formData, role: e.target.value as RegistrationData['role']})}
          className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-violet-500"
        >
          <option value="ux-designer">{t('uxDesigner')}</option>
          <option value="frontend-dev">{t('frontendDev')}</option>
          <option value="data-manager">{t('dataManager')}</option>
          <option value="graphic-designer">{t('graphicDesigner')}</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition-all duration-300"
      >
        {t('submit')}
      </button>
    </form>
  );
} 