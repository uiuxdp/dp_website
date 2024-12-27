import { atom } from "recoil";


const localStorageEffect = (key) => ({ setSelf, onSet }) => {
  if (typeof window !== 'undefined') {
    // Get the initial value from localStorage
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));  // Initialize state from localStorage
    }

    // Update localStorage whenever the Recoil state changes
    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      console.log('Updated localStorage:', localStorage.getItem(key));  // Log after setting
    });
  }
};


export const getUniqueKey = () => {
  const time = new Date().getTime();
  return time;
};

export const headerState = atom({
  key: `header_${getUniqueKey()}`,
  default: false,
});
export const dialogState = atom({
  key: "dialogState", 
  default: false,     
});