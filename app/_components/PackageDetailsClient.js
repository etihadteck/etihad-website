'use client';

export default function PackageDetailsClient({ packageId }) {
  if (packageId) {
    // Get existing package IDs from localStorage
    const existingPackageIds = localStorage.getItem('packageIds');
    let packageIdsArray = [];

    if (existingPackageIds) {
      try {
        packageIdsArray = JSON.parse(existingPackageIds);
      } catch (error) {
        console.error('Error parsing existing package IDs:', error);
        packageIdsArray = [];
      }
    }

    // Add new package ID if it's not already in the array
    if (!packageIdsArray.includes(packageId)) {
      packageIdsArray.push(packageId);

      // Save updated array back to localStorage
      localStorage.setItem('packageIds', JSON.stringify(packageIdsArray));

      console.log('Package ID added to array:', packageId);
      console.log('All package IDs:', packageIdsArray);
    } else {
      console.log('Package ID already exists:', packageId);
    }
  }

  return null;
}
