// services/dataService.js
export const fetchUserData = async () => {
    try {
      const response = await fetch(`https://miracle49-001-site1.itempurl.com`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  