import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProfileDataSchema } from './types';
import defaultData from './data.json';

interface ProfileDataContextType {
  data: ProfileDataSchema;
  updateData: (newData: ProfileDataSchema) => void;
  resetData: () => void;
}

const ProfileDataContext = createContext<ProfileDataContextType | undefined>(undefined);

export const ProfileDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ProfileDataSchema>(() => {
    try {
      const saved = localStorage.getItem('academic_profile_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved profile data from localStorage', e);
    }
    return defaultData as ProfileDataSchema;
  });

  const updateData = (newData: ProfileDataSchema) => {
    setData(newData);
    try {
      localStorage.setItem('academic_profile_data', JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save profile data to localStorage', e);
    }
  };

  const resetData = () => {
    setData(defaultData as ProfileDataSchema);
    try {
      localStorage.removeItem('academic_profile_data');
    } catch (e) {
      console.error('Failed to remove profile data from localStorage', e);
    }
  };

  return (
    <ProfileDataContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </ProfileDataContext.Provider>
  );
};

export const useProfileData = (): ProfileDataContextType => {
  const context = useContext(ProfileDataContext);
  if (!context) {
    throw new Error('useProfileData must be used within a ProfileDataProvider');
  }
  return context;
};
