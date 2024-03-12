// data.js
/**
 * Dummy plant data, plant directory and other data
 */


/**
 * Manage the plant directory
 */
export const plantDirectoryManager = () => {
  let plantDirectory = [];
  return plantDirectory;
}

// dummy plants:
export const dummyPlants = [
  {
    name: 'Spider Plant',
    dateAdded: '21-Jan',
    notes: 'A new plant with long spider-like leaves',
    image: '../public/dummy-plants/spider-plant.jpg',
    id: 1
  },
  {
    name: 'Apple Tree',
    dateAdded: '02-Feb',
    notes: 'An apple tree grown from seed, first time growing a real apple tree!',
    image: '../public/dummy-plants/apple-tree.jpg',
    id: 2
  },
  {
    name: 'Peace Lily',
    dateAdded: '12-Dec',
    notes: 'A peace lily with white flowers, best bloom in spring/summer',
    image: '../public/dummy-plants/peace-lily.jpg',
    id: 3
  }
];

// draft plant directory for plant quiz (and maybe also for plant discovery..?)
export const draftQuizPlantData = [
  { name: 'Snake Plant', skill: 'Beginner', location: ['Home', 'Office', 'Bedroom'], flowering: 'No', size: 'Tall', transferToOutdoors: 'Yes', leafPattern: 'Striped', time: 'Low', interest: 'Low', lowEffort: true },
  { name: 'Fiddle Leaf Fig', skill: 'Advanced', location: ['Home', 'Living Room'], flowering: 'No', size: 'Tall', transferToOutdoors: 'No', leafPattern: 'Large Green', time: 'High', interest: 'High', lowEffort: false },
  { name: 'Peace Lily', skill: 'Beginner', location: ['Home', 'Office', 'Bedroom'], flowering: 'Yes', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Green', time: 'Medium', interest: 'Medium', lowEffort: true },
  { name: 'Pothos', skill: 'Beginner', location: ['Home', 'Office', 'Living Room'], flowering: 'No', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Variegated', time: 'Low', interest: 'Low', lowEffort: true },
  { name: 'Orchid', skill: 'Medium', location: ['Home', 'Bedroom'], flowering: 'Yes', size: 'Short', transferToOutdoors: 'No', leafPattern: 'Smooth', time: 'Medium', interest: 'High', lowEffort: false },
  { name: 'Monstera Deliciosa', skill: 'Medium', location: ['Home', 'Living Room'], flowering: 'No', size: 'Tall', transferToOutdoors: 'Yes', leafPattern: 'Hole-y', time: 'Medium', interest: 'Medium', lowEffort: false },
  { name: 'Lavender', skill: 'Medium', location: ['Home', 'Outdoor'], flowering: 'Yes', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Green', time: 'Medium', interest: 'High', lowEffort: false },
  { name: 'Spider Plant', skill: 'Beginner', location: ['Home', 'Office'], flowering: 'No', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Striped', time: 'Low', interest: 'Low', lowEffort: true },
  { name: 'ZZ Plant', skill: 'Beginner', location: ['Home', 'Office', 'Bedroom'], flowering: 'No', size: 'Tall', transferToOutdoors: 'No', leafPattern: 'Green', time: 'Low', interest: 'Low', lowEffort: true },
  { name: 'Rubber Plant', skill: 'Medium', location: ['Home', 'Living Room'], flowering: 'No', size: 'Tall', transferToOutdoors: 'No', leafPattern: 'Large Green', time: 'Medium', interest: 'Medium', lowEffort: false },
  { name: 'Boston Fern', skill: 'Medium', location: ['Home', 'Bathroom'], flowering: 'No', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Fern', time: 'High', interest: 'Medium', lowEffort: false },
  { name: 'Cactus', skill: 'Beginner', location: ['Home', 'Office', 'Outdoor'], flowering: 'Yes', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Spiky', time: 'Low', interest: 'Low', lowEffort: true },
  { name: 'Succulents', skill: 'Beginner', location: ['Home', 'Office', 'Living Room'], flowering: 'Yes', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Varied', time: 'Low', interest: 'Low', lowEffort: true },
  { name: 'Aloe Vera', skill: 'Beginner', location: ['Home', 'Office', 'Bedroom'], flowering: 'Yes', size: 'Short', transferToOutdoors: 'Yes', leafPattern: 'Serrated', time: 'Low', interest: 'Low', lowEffort: true },
  { name: 'Jade Plant', skill: 'Beginner', location: ['Home', 'Office'], flowering: 'Yes', size: 'Short', transferToOutdoors: 'No', leafPattern: 'Smooth', time: 'Low', interest: 'Low', lowEffort: true }
];

export const questions = [
  { question: 'How would you describe your experience with plants?', answers: ['Beginner', 'Medium', 'Advanced'], category: 'skill' },
  { question: 'Where will the plant be located?', answers: ['Home', 'Office', 'Bedroom', 'Living Room'], category: 'location' },
  { question: 'How much time can you dedicate to plant care weekly?', answers: ['High', 'Low'], category: 'time' },
  { question: 'How interested are you in learning about plant care?', answers: ['High', 'Medium', 'Low'] },
  { question: 'Do you prefer plants that require minimal effort to keep alive?"', answers: [true, false] },
  { question: 'Do you prefer plants that flower?', answers: ['Yes', 'No'] },
  { question: 'What size would you prefer?', answers: ['Short', 'Tall'] },
  { question: 'What kind of leaf pattern do you prefer?', answers: ['Stripled', 'Large Green', 'Green', 'Variegated', 'Hole-y', 'Fern', 'Spiky', 'Serrated'] },
  { question: 'Do you want a plant that can be transferred to outdoors?', answers: ['Yes', 'No'] }
];