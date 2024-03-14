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

//plant directory for plant quiz (and maybe also for plant discovery/main directory..?)
export const quizPlantData = [
  { name: 'Snake Plant', skill: ['Beginner'], location: ['Home', 'Office', 'Bedroom', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Anthurium', skill: ['Medium', 'Advanced'], location: ['Home', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['No'] },
  { name: 'Fiddle Leaf Fig', skill: ['Advanced', 'Medium'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'] },
  { name: 'Peace Lily', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes', 'No'], time: ['A lot', 'Not much'], interest: ['Kind of', 'Very'], lowEffort: ['Yes'] },
  { name: 'Pothos', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room', 'Bedroom'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Orchid', skill: ['Medium', 'Advanced'], location: ['Home', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'] },
  { name: 'Monstera Deliciosa', skill: ['Medium', 'Beginner'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes', 'No'], time: ['A lot', 'Not much'], interest: ['Kind of', 'Very'], lowEffort: ['No', 'Yes'] },
  { name: 'Lavender', skill: ['Medium', 'Beginner'], location: ['Home', 'Outdoor', 'Office'], flowering: ['Yes'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No', 'Yes'] },
  { name: 'Spider Plant', skill: ['Beginner'], location: ['Home', 'Office', 'Bathroom', 'Living Room'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'] },
  { name: 'ZZ Plant', skill: ['Beginner'], location: ['Home', 'Office', 'Bedroom'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'] },
  { name: 'Rubber Plant', skill: ['Medium'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Kind of'], lowEffort: ['No'] },
  { name: 'Boston Fern', skill: ['Medium'], location: ['Home', 'Bathroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of'], lowEffort: ['No'] },
  { name: 'Cactus', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Outdoor'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Succulents', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'] },
  { name: 'Aloe Vera', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'] },
  { name: 'Jade Plant', skill: ['Beginner'], location: ['Home', 'Office'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'] },
  { name: 'Calathea', skill: ['Beginner', 'Medium'], location: ['Home', 'Living Room', 'Bedroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'] },
  { name: 'Fern', skill: ['Medium'], location: ['Home', 'Bathroom', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of', 'Not really'], lowEffort: ['Yes', 'No'] },
  { name: 'Philodendron', skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Yucca', skill: ['Medium', 'Advanced'], location: ['Home', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Medium'], interest: ['Very'], lowEffort: ['No'] },
  { name: 'Bamboo', skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Bird of Paradise', skill: ['Advanced'], location: ['Home', 'Living Room'], flowering: ['Yes'], size: ['Tall'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'] },
  { name: 'African Violet', skill: ['Medium'], location: ['Home', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Kind of', 'Very'], lowEffort: ['Yes'] },
  { name: 'Bromeliad', skill: ['Medium'], location: ['Home', 'Office', 'Bathroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of'], lowEffort: ['Yes'] },
  { name: 'Chinese Money Plant', skill: ['Beginner'], location: ['Home', 'Office'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Croton', skill: ['Advanced'], location: ['Home', 'Living Room', 'Outdoor'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'] },
  { name: 'Dieffenbachia', skill: ['Medium'], location: ['Home', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Kind of'], lowEffort: ['Yes'] },
  { name: 'Dracaena', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Ficus', skill: ['Medium', 'Advanced'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['No'] },
  { name: 'Hoya', skill: ['Medium'], location: ['Home', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['Yes'] },
  { name: 'Kentia Palm', skill: ['Beginner', 'Medium'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Kind of'], lowEffort: ['Yes'] },
  { name: 'Nerve Plant', skill: ['Medium'], location: ['Home', 'Office', 'Bathroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very'], lowEffort: ['Yes'] },
  { name: 'Parlor Palm', skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'] },
  { name: 'Peperomia', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Kind of'], lowEffort: ['Yes'] },
  { name: 'Schefflera', skill: ['Medium'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'] },
  { name: 'Swiss Cheese Plant', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much','A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'] }
];

export const questions = [
  { question: 'How would you describe your ability with plants?', answers: ['Beginner', 'Medium', 'Advanced'], category: 'skill' },
  { question: 'Where will your plant be located?', answers: ['Home', 'Office', 'Bedroom', 'Living Room'], category: 'location' },
  { question: 'How much time can you dedicate to plant care weekly?', answers: ['A lot', 'Not much'], category: 'time' },
  { question: 'How interested are you in learning about plant care?', answers: ['Very', 'Kind of', 'Not really'], category: 'interest' },
  { question: 'Do you prefer plants that require minimal effort to keep alive?', answers: ['Yes', 'No'], category: 'lowEffort' },
  { question: 'Do you want a plant that flowers?', answers: ['Yes', 'No'], category: 'flowering' },
  { question: 'What size plant would you prefer?', answers: ['Short', 'Tall'], category: 'size'  },
  { question: 'Do you want a plant that can be transferred to outdoors?', answers: ['Yes', 'No'], category: 'transferToOutdoors' }
];