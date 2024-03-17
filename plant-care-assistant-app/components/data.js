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

//plant directory for plant quiz (and maybe also for plant discovery/main directory..?) need to add images, descriptions, watering scehduele, temp/light conditions
export const quizPlantData = [
  { name: 'Snake Plant', skill: ['Beginner'], location: ['Home', 'Office', 'Bedroom', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Tough and adaptable, perfect for beginners.', waterSchedule: 'Every 2-3 weeks, less often in winter.', tempLight: 'Indirect sunlight to partial shade. 15-26°C.', },
  { name: 'Anthurium', skill: ['Medium', 'Advanced'], location: ['Home', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['No'], description: 'Features glossy, heart-shaped leaves with bright flowers.', waterSchedule: 'Weekly, keep soil lightly moist.', tempLight: 'Bright, indirect light. 18-27°C.', },
  { name: 'Fiddle Leaf Fig', skill: ['Advanced', 'Medium'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'], description: 'Large, glossy leaves. Needs attention to thrive.', waterSchedule: 'When top inch of soil is dry, about every 1-2 weeks.', tempLight: 'Bright, indirect light. 15-24°C.', },
  { name: 'Peace Lily', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes', 'No'], time: ['A lot', 'Not much'], interest: ['Kind of', 'Very'], lowEffort: ['Yes'], description: 'Elegant white flowers, thrives in medium to low light.', waterSchedule: 'Keep soil moist; water weekly.', tempLight: 'Low to medium light. 18-26°C.', },
  { name: 'Pothos', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room', 'Bedroom'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Vining plant with heart-shaped leaves, very hardy.', waterSchedule: 'Let soil dry out between waterings, about every 1-2 weeks.', tempLight: 'Low to bright indirect light. 18-24°C.', },
  { name: 'Orchid', skill: ['Medium', 'Advanced'], location: ['Home', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'], description: 'Exotic flowers, prefers humid conditions.', waterSchedule: 'Every 1-2 weeks, less often in winter.', tempLight: 'Bright, indirect light. 15-25°C.', },
  { name: 'Monstera Deliciosa', skill: ['Medium', 'Beginner'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes', 'No'], time: ['A lot', 'Not much'], interest: ['Kind of', 'Very'], lowEffort: ['No', 'Yes'], description: 'Swiss cheese-like leaves, trendy and easy to care for.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry out between waterings.', tempLight: 'Bright to medium indirect light. 18-27°C.', },
  { name: 'Lavender', skill: ['Medium', 'Beginner'], location: ['Home', 'Outdoor', 'Office'], flowering: ['Yes'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No', 'Yes'], description: 'Fragrant purple flowers, prefers full sun.', waterSchedule: 'When soil is dry to the touch, about every 1-2 weeks.', tempLight: 'Full sun. 18-30°C.', },
  { name: 'Spider Plant', skill: ['Beginner'], location: ['Home', 'Office', 'Bathroom', 'Living Room'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], description: 'Easy to grow, with arching leaves and small white flowers.', waterSchedule: 'Weekly during growth, less often in winter.', tempLight: 'Bright, indirect light. 15-23°C.', },
  { name: 'ZZ Plant', skill: ['Beginner'], location: ['Home', 'Office', 'Bedroom'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], description: 'Low maintenance, with waxy, green leaves.', waterSchedule: 'Every 2-3 weeks, less often in winter.', tempLight: 'Low to bright indirect light. 18-24°C.', },
  { name: 'Rubber Plant', skill: ['Medium'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Kind of'], lowEffort: ['No'], description: 'Glossy dark green leaves, can grow into a tree indoors.', waterSchedule: 'Keep soil moist in growing season, less water in winter.', tempLight: 'Bright, indirect light. 16-27°C.', },
  { name: 'Boston Fern', skill: ['Medium'], location: ['Home', 'Bathroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of'], lowEffort: ['No'], description: 'Lush, feathery fronds. Loves humidity.', waterSchedule: 'Keep soil consistently moist, mist fronds regularly.', tempLight: 'Bright, indirect light. 18-24°C.', },
  { name: 'Cactus', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Outdoor'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Thrives on neglect, loves the sun.', waterSchedule: 'Water every 3-4 weeks in summer, rarely in winter.', tempLight: 'Full sun. 21-37°C.', },
  { name: 'Succulents', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], description: 'Easy care, comes in various shapes and colors.', waterSchedule: 'Water when soil is completely dry, about every 2-3 weeks.', tempLight: 'Bright, indirect light. 18-24°C.', },
  { name: 'Aloe Vera', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], description: 'Medicinal properties, stores water in leaves.', waterSchedule: 'Every 3 weeks, less in winter.', tempLight: 'Bright, indirect sunlight. 18-24°C.', },
  { name: 'Jade Plant', skill: ['Beginner'], location: ['Home', 'Office'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], description: 'Symbolizes good luck, has thick, shiny leaves.', waterSchedule: 'Every 2-3 weeks, less in winter.', tempLight: 'Full sun to partial shade. 18-24°C.', },
  { name: 'Calathea', skill: ['Beginner', 'Medium'], location: ['Home', 'Living Room', 'Bedroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'], description: 'Decorative leaves, enjoys humidity, does not like cold.', waterSchedule: 'Keep soil moist, not soggy.', tempLight: 'Bright, indirect light. 18-24°C.', },
  { name: 'Fern', skill: ['Medium'], location: ['Home', 'Bathroom', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of', 'Not really'], lowEffort: ['Yes', 'No'], description: 'Loves moisture and shade, great for bathrooms.', waterSchedule: 'Keep soil consistently moist.', tempLight: 'Partial shade to low light. 18-24°C.', },
  { name: 'Philodendron', skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Heart-shaped leaves, vining or upright types.', waterSchedule: 'When top inch of soil dries out, about every 1-2 weeks.', tempLight: 'Medium to bright indirect light. 18-27°C.', },
  { name: 'Yucca', skill: ['Medium', 'Advanced'], location: ['Home', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Medium'], interest: ['Very'], lowEffort: ['No'], description: 'Bold and striking, needs direct sunlight.', waterSchedule: 'Let soil dry out between waterings, about every 2-3 weeks.', tempLight: 'Full sun. 13-27°C.', },
  { name: 'Bamboo', skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Brings good fortune, grows in water or soil.', waterSchedule: 'Keep water-filled or soil consistently moist.', tempLight: 'Bright, indirect light. 18-24°C.', },
  { name: 'Bird of Paradise', skill: ['Advanced'], location: ['Home', 'Living Room'], flowering: ['Yes'], size: ['Tall'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'], description: 'Large, exotic flowers resemble a bird in flight.', waterSchedule: 'Weekly, allowing soil to dry slightly between waterings.', tempLight: 'Bright, indirect light. 20-30°C.' },
  { name: 'African Violet', skill: ['Medium'], location: ['Home', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Kind of', 'Very'], lowEffort: ['Yes'], description: 'Small, delicate flowers; prefers consistent conditions.', waterSchedule: 'Keep soil lightly moist, use room-temperature water.', tempLight: 'Bright, indirect light. 18-24°C.' },
  { name: 'Bromeliad', skill: ['Medium'], location: ['Home', 'Office', 'Bathroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of'], lowEffort: ['Yes'], description: 'Colorful, long-lasting flowers and attractive foliage.', waterSchedule: 'Fill the central cup, let dry between waterings.', tempLight: 'Bright, indirect light. 18-27°C.' },
  { name: 'Chinese Money Plant', skill: ['Beginner'], location: ['Home', 'Office'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Round, flat leaves. Said to bring financial luck.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry out between waterings.', tempLight: 'Bright, indirect light. 16-24°C.' },
  { name: 'Croton', skill: ['Advanced'], location: ['Home', 'Living Room', 'Outdoor'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'], description: 'Colorful foliage in red, orange, and yellow.', waterSchedule: 'Keep soil moist, more frequent watering in warmer months.', tempLight: 'Bright, indirect light. 16-27°C.' },
  { name: 'Dieffenbachia', skill: ['Medium'], location: ['Home', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Kind of'], lowEffort: ['Yes'], description: 'Large, variegated leaves, can grow tall.', waterSchedule: 'Every week, allow the topsoil to dry out between waterings.', tempLight: 'Low to bright, indirect light. 18-24°C.' },
  { name: 'Dracaena', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Long, strappy leaves, often with red or yellow edges.', waterSchedule: 'Every 2-3 weeks, allow soil to dry between waterings.', tempLight: 'Bright, indirect light. 16-24°C.' },
  { name: 'Ficus', skill: ['Medium', 'Advanced'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['No'], description: 'Includes the rubber plant and fiddle leaf fig, among others.', waterSchedule: 'When topsoil is dry, about every 1-2 weeks.', tempLight: 'Bright, indirect light. 15-24°C.' },
  { name: 'Hoya', skill: ['Medium'], location: ['Home', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['Yes'], description: 'Waxy leaves and fragrant flowers, climbs or trails.', waterSchedule: 'Every 2-3 weeks, less often in winter.', tempLight: 'Bright, indirect light. 16-29°C.' },
  { name: 'Kentia Palm', skill: ['Beginner', 'Medium'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Kind of'], lowEffort: ['Yes'], description: 'Elegant palm, tolerant of low-light conditions.', waterSchedule: 'Keep soil lightly moist, less water in winter.', tempLight: 'Low to bright, indirect light. 16-27°C.' },
  { name: 'Nerve Plant', skill: ['Medium'], location: ['Home', 'Office', 'Bathroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very'], lowEffort: ['Yes'], description: 'Striking leaves with contrasting veins, loves humidity.', waterSchedule: 'Keep soil consistently moist.', tempLight: 'Medium to bright, indirect light. 18-27°C.' },
  { name: 'Parlor Palm', skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], description: 'Dense, green foliage; ideal for low-light conditions.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry slightly between waterings.', tempLight: 'Low to bright, indirect light. 18-27°C.' },
  { name: 'Peperomia', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Kind of'], lowEffort: ['Yes'], description: 'Varied and interesting leaf shapes and textures.', waterSchedule: 'Let the soil dry out between waterings, about every 2 weeks.', tempLight: 'Medium to bright, indirect light. 18-24°C.' },
  { name: 'Schefflera', skill: ['Medium'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'], description: 'Umbrella-shaped leaf clusters, grows tall indoors.', waterSchedule: 'Keep soil moist, less watering in winter.', tempLight: 'Bright, indirect light. 15-24°C.' },
  { name: 'Swiss Cheese Plant', skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much','A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], description: 'Iconic split leaves, grows quickly with enough light.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry out between waterings.', tempLight: 'Bright to medium indirect light. 18-27°C.' }
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