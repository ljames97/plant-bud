

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
]