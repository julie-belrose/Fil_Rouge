//example

// export const storage = {
//     get: (key, defaultValue = null) => {
//       const item = localStorage.getItem(key);
//       try {
//         return item ? JSON.parse(item) : defaultValue;
//       } catch {
//         return item || defaultValue;
//       }
//     },
  
//     set: (key, value) => {
//       const valueToStore = typeof value === 'object' 
//         ? JSON.stringify(value) 
//         : value;
//       localStorage.setItem(key, valueToStore);
//     },
  
//     remove: (key) => {
//       localStorage.removeItem(key);
//     },
  
//     clear: () => {
//       localStorage.clear();
//     }
//   };