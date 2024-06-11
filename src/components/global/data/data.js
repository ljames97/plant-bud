// data.js
/**
 * Plant directory, dummy plants and plant quiz question data.
 */

import { africanViolet, aloeVera, anthurium, bamboo, birdOfParadise, bostonFern, bromeliad, cactus, calathea, chineseMoneyPlant, croton, dieffenbachia, dracaena, fern, ficus, fiddleLeafFig, hoya, jadePlant, kentiaPalm, lavender, monsteraDeliciosa, nervePlant, orchid, parlorPalm, peaceLily, peperomia, philodendron, pothos, rubberPlant, schefflera, snakePlant, spiderPlant, succulents, swissCheesePlant, yucca, zzPlant } from "../../../images";

// plant directory for all plant data including name, image src, location etc.
export const plantDirectory = [
  { name: 'Snake Plant', id: 1, image: snakePlant, skill: ['Beginner'], location: ['Home', 'Office', 'Bedroom', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Tough and adaptable, perfect for beginners.', waterSchedule: 'Every 2-3 weeks, less often in winter.', tempLight: 'Indirect sunlight to partial shade. 15-26°C.', description: 'The Snake Plant, or Sansevieria, is a highly durable and low-maintenance indoor plant known for its air-purifying qualities. Its stiff, upright leaves grow vertically, making it an ideal plant for small spaces.', requirements: [], tasks: [], tags: [] },
  { name: 'Anthurium', id: 2, image: anthurium, skill: ['Medium', 'Advanced'], location: ['Home', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['No'], shortDescription: 'Features glossy, heart-shaped leaves with bright flowers.', waterSchedule: 'Weekly, keep soil lightly moist.', tempLight: 'Bright, indirect light. 18-27°C.', description: 'Anthuriums are beloved for their glossy heart-shaped leaves and bright, waxy flowers, which can bloom throughout the year if cared for properly. These tropical plants prefer environments with high humidity and indirect light, making them a beautiful addition to well-lit bathrooms or kitchens. With their vibrant flowers, Anthuriums add a splash of color to any indoor space.', requirements: [], tasks: [], tags: [] },
  { name: 'Fiddle Leaf Fig', id: 3, image: fiddleLeafFig, skill: ['Advanced', 'Medium'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'], shortDescription: 'Large, glossy leaves. Needs attention to thrive.', waterSchedule: 'When top inch of soil is dry, about every 1-2 weeks.', tempLight: 'Bright, indirect light. 15-24°C.', description: 'The Fiddle Leaf Fig is famous for its large, leathery leaves that resemble a violin shape. Its a perfect choice for interior design enthusiasts looking to add a dramatic touch to their living spaces. Fiddle Leaf Figs prefer bright, filtered light and need to be watered only when the top inch of soil is dry. Regular dusting of the leaves helps to keep the plant healthy and absorb light efficiently.', requirements: [], tasks: [], tags: [] },
  { name: 'Peace Lily', id: 4, image: peaceLily, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes', 'No'], time: ['A lot', 'Not much'], interest: ['Kind of', 'Very'], lowEffort: ['Yes'], shortDescription: 'Elegant white flowers, thrives in medium to low light.', waterSchedule: 'Keep soil moist; water weekly.', tempLight: 'Low to medium light. 18-26°C.', description: 'Peace Lilies are charming plants with glossy green leaves and white flowers that can boost the aesthetic of any room. Beyond their beauty, they are known for their ability to purify the air. Peace Lilies prefer low to medium light and moist soil, making them suitable for areas away from direct sunlight. Theyre resilient and forgiving, signaling their need for water by drooping slightly.', requirements: [], tasks: [], tags: [] },
  { name: 'Pothos', id: 5, image: pothos, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room', 'Bedroom'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Vining plant with heart-shaped leaves, very hardy.', waterSchedule: 'Let soil dry out between waterings, about every 1-2 weeks.', tempLight: 'Low to bright indirect light. 18-24°C.', description: 'Pothos, also known as Devils Ivy, is a versatile and easy-to-care-for plant thats ideal for beginners. Its trailing vines can grow long, making it a great option for hanging baskets or shelves where the foliage can elegantly drape down. Pothos can thrive in a variety of light conditions, from low to bright indirect light, and prefers the soil to dry out between waterings.', requirements: [], tasks: [], tags: [] },
  { name: 'Orchid', id: 6, image: orchid, skill: ['Medium', 'Advanced'], location: ['Home', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'], shortDescription: 'Exotic flowers, prefers humid conditions.', waterSchedule: 'Every 1-2 weeks, less often in winter.', tempLight: 'Bright, indirect light. 15-25°C.', description: 'Orchids are exotic and elegant, known for their stunning blooms that can last for weeks. They prefer a stable environment with indirect light, high humidity, and good airflow. Orchids require a specific watering routine, allowing their bark-based potting mix to dry out completely before rewatering. With the right care, orchids can rebloom multiple times a year, making them a rewarding challenge for more advanced plant enthusiasts.', requirements: [], tasks: [], tags: [] },
  { name: 'Monstera Deliciosa', id: 7, image: monsteraDeliciosa, skill: ['Medium', 'Beginner'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes', 'No'], time: ['A lot', 'Not much'], interest: ['Kind of', 'Very'], lowEffort: ['No', 'Yes'], shortDescription: 'Swiss cheese-like leaves, trendy and easy to care for.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry out between waterings.', tempLight: 'Bright to medium indirect light. 18-27°C.', description: 'Monstera Deliciosa, often called the Swiss Cheese Plant, is beloved for its unique leaves with natural holes, giving it a distinct appearance. Monsteras are fast growers under the right conditions, preferring humid environments and indirect light. They make a bold statement in any room and can be trained to climb or allowed to spread outwards. Regular pruning encourages fuller growth and a healthier plant.', requirements: [], tasks: [], tags: [] },
  { name: 'Lavender', id: 8, image: lavender, skill: ['Medium', 'Beginner'], location: ['Home', 'Outdoor', 'Office'], flowering: ['Yes'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['A lot', 'A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No', 'Yes'], shortDescription: 'Fragrant purple flowers, prefers full sun.', waterSchedule: 'When soil is dry to the touch, about every 1-2 weeks.', tempLight: 'Full sun. 18-30°C.', description: 'Lavender is not just an outdoor plant; with enough light, it can also thrive indoors. Its renowned for its fragrant flowers and essential oils, known for their relaxing and therapeutic properties. Lavender requires lots of light, so a south-facing window is ideal. The plant prefers well-draining soil and infrequent watering, making it a great choice for those who prefer plants with lower water needs.', requirements: [], tasks: [], tags: [] },
  { name: 'Spider Plant', id: 9, image: spiderPlant, skill: ['Beginner'], location: ['Home', 'Office', 'Bathroom', 'Living Room'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], shortDescription: 'Easy to grow, with arching leaves and small white flowers.', waterSchedule: 'Weekly during growth, less often in winter.', tempLight: 'Bright, indirect light. 15-23°C.', description: 'Spider Plants are resilient and adaptable, making them perfect for new gardeners. They are recognized for their air-purifying qualities and their unique growth habit, producing baby spider plants or “pups” that hang from the mother plant like spiders on a web. Spider Plants thrive in a range of lighting conditions and prefer slightly moist soil, making them a low-fuss addition to any indoor space.', requirements: [], tasks: [], tags: [] },
  { name: 'ZZ Plant', id: 10, image: zzPlant, skill: ['Beginner'], location: ['Home', 'Office', 'Bedroom'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], shortDescription: 'Low maintenance, with waxy, green leaves.', waterSchedule: 'Every 2-3 weeks, less often in winter.', tempLight: 'Low to bright indirect light. 18-24°C.', description: 'ZZ Plants are distinguished by their glossy, green leaves and robust nature, making them nearly indestructible. Theyre perfect for offices or homes with low light. ZZ Plants store water in their roots, allowing them to withstand periods of drought. Care for these plants is minimal, requiring only occasional watering and making them ideal for those seeking low-maintenance indoor plants.', requirements: [], tasks: [], tags: [] },
  { name: 'Rubber Plant', id: 11, image: rubberPlant, skill: ['Medium'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Kind of'], lowEffort: ['No'], shortDescription: 'Glossy dark green leaves, can grow into a tree indoors.', waterSchedule: 'Keep soil moist in growing season, less water in winter.', tempLight: 'Bright, indirect light. 16-27°C.', description: 'The Rubber Plant is a striking addition to any space, known for its large, glossy leaves that can absorb airborne chemicals and purify indoor air. It thrives under bright, indirect light but can tolerate lower light levels, making it versatile for different lighting conditions. Its care routine involves keeping the soil consistently moist but not waterlogged. With proper care, it can grow into a large, tree-like presence indoors.', requirements: [], tasks: [], tags: [] },
  { name: 'Boston Fern', id: 12, image: bostonFern, skill: ['Medium'], location: ['Home', 'Bathroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of'], lowEffort: ['No'], shortDescription: 'Lush, feathery fronds. Loves humidity.', waterSchedule: 'Keep soil consistently moist, mist fronds regularly.', tempLight: 'Bright, indirect light. 18-24°C.', description: 'Boston Ferns are popular for their lush, green fronds that add a vibrant touch of nature to any room. They thrive in high humidity environments and prefer indirect light, making them perfect for bathrooms or kitchens. Regular misting and watering will keep the fern looking fresh. They are also excellent natural humidifiers and air purifiers, making them as functional as they are beautiful.', requirements: [], tasks: [], tags: [] },
  { name: 'Cactus', id: 13, image: cactus, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Outdoor'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Thrives on neglect, loves the sun.', waterSchedule: 'Water every 3-4 weeks in summer, rarely in winter.', tempLight: 'Full sun. 21-37°C.', description: 'Cacti are the ultimate low-maintenance plants, ideal for those who prefer a hands-off approach to plant care. Thriving in bright light, they require minimal watering, making them perfect for sunny spots. Cacti come in an array of shapes, sizes, and colors, offering endless variety for collectors. Their unique and striking appearance adds a touch of desert beauty to any indoor setting.', requirements: [], tasks: [], tags: [] },
  { name: 'Succulents', id: 14, image: succulents, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], shortDescription: 'Easy care, comes in various shapes and colors.', waterSchedule: 'Water when soil is completely dry, about every 2-3 weeks.', tempLight: 'Bright, indirect light. 18-24°C.', description: 'Succulents are beloved for their ease of care, drought tolerance, and varied textures and forms. They store water in their thick, fleshy leaves, allowing them to thrive in dry indoor environments. Succulents prefer bright, indirect light and infrequent watering, making them perfect for sunny windowsills. With hundreds of species, theres a succulent to match every aesthetic preference.', requirements: [], tasks: [], tags: [] },
  { name: 'Aloe Vera', id: 15, image: aloeVera, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], shortDescription: 'Medicinal properties, stores water in leaves.', waterSchedule: 'Every 3 weeks, less in winter.', tempLight: 'Bright, indirect sunlight. 18-24°C.', description: 'Aloe Vera is not only known for its medicinal properties, such as soothing burns and skin care, but also as an easy-to-grow indoor plant. It prefers bright, indirect sunlight and minimal watering, making it perfect for a sunny kitchen window. The gel inside the leaves is a handy natural remedy for cuts and burns, making Aloe Vera a practical plant to have around the home.', requirements: [], tasks: [], tags: [] },
  { name: 'Jade Plant', id: 16, image: jadePlant, skill: ['Beginner'], location: ['Home', 'Office'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], shortDescription: 'Symbolizes good luck, has thick, shiny leaves.', waterSchedule: 'Every 2-3 weeks, less in winter.', tempLight: 'Full sun to partial shade. 18-24°C.', description: 'The Jade Plant is a succulent with thick, woody stems and glossy green leaves that resemble jade stones, symbolizing prosperity and good luck. Its a slow-growing plant that prefers bright light and occasional watering, making it a perfect low-maintenance plant for busy individuals. With proper care, Jade Plants can live for many years, becoming a cherished part of your home.', requirements: [], tasks: [], tags: [] },
  { name: 'Calathea', id: 17, image: calathea, skill: ['Beginner', 'Medium'], location: ['Home', 'Living Room', 'Bedroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Very', 'Kind of'], lowEffort: ['No'], shortDescription: 'Decorative leaves, enjoys humidity, does not like cold.', waterSchedule: 'Keep soil moist, not soggy.', tempLight: 'Bright, indirect light. 18-24°C.', description: 'Calathea, also known as the prayer plant, is cherished for its beautifully patterned leaves that move up and down with the light cycle, mimicking the act of praying. These tropical plants prefer indirect light and high humidity, making them great for bathrooms. They require consistent moisture but are sensitive to overwatering. Calatheas are perfect for plant enthusiasts looking to add a vibrant and dynamic plant to their collection.', requirements: [], tasks: [], tags: [] },
  { name: 'Fern', id: 18, image: fern, skill: ['Medium'], location: ['Home', 'Bathroom', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of', 'Not really'], lowEffort: ['Yes', 'No'], shortDescription: 'Loves moisture and shade, great for bathrooms.', waterSchedule: 'Keep soil consistently moist.', tempLight: 'Partial shade to low light. 18-24°C.', description: 'Ferns are ancient plants that add a touch of lush, green elegance to any indoor space. With their feathery fronds, they prefer moist soil and high humidity, thriving in indirect light. Regular misting or a pebble tray can help maintain the humidity they love. Ferns are ideal for hanging baskets or as a lush green backdrop in a plant collection, providing a sense of tranquility and natural beauty.', requirements: [], tasks: [], tags: [] },
  { name: 'Philodendron', id: 19, image: philodendron, skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Heart-shaped leaves, vining or upright types.', waterSchedule: 'When top inch of soil dries out, about every 1-2 weeks.', tempLight: 'Medium to bright indirect light. 18-27°C.', description: 'Philodendrons are a diverse group of plants, offering a range of leaf shapes and growth habits, from trailing vines to large, leafy plants. They are easy to care for, thriving in moderate to bright, indirect light and preferring their soil to dry out slightly between waterings. Philodendrons are not only visually appealing but also effective at purifying the air, making them a popular choice for indoor gardeners.', requirements: [], tasks: [], tags: [] },
  { name: 'Yucca', id: 20, image: yucca, skill: ['Medium', 'Advanced'], location: ['Home', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Medium'], interest: ['Very'], lowEffort: ['No'], shortDescription: 'Bold and striking, needs direct sunlight.', waterSchedule: 'Let soil dry out between waterings, about every 2-3 weeks.', tempLight: 'Full sun. 13-27°C.', description: 'The Yucca plant brings a touch of the desert indoors, with its sword-like leaves and sturdy trunk. It’s a drought-tolerant plant that prefers bright, direct light, making it suitable for sunny spots in the home. Water sparingly, allowing the soil to dry out completely between waterings. Yuccas can add architectural interest to your space, with their bold silhouette and minimalist aesthetic.', requirements: [], tasks: [], tags: [] },
  { name: 'Bamboo', id: 21, image: bamboo, skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Brings good fortune, grows in water or soil.', waterSchedule: 'Keep water-filled or soil consistently moist.', tempLight: 'Bright, indirect light. 18-24°C.', description: 'Bamboo plants are known for their fast growth and versatility. They can thrive in a variety of conditions but prefer bright, indirect light and regular watering to keep the soil consistently moist. Bamboo is often associated with luck and prosperity, making it a popular choice for homes and offices. It’s an easy-care plant that can add a touch of elegance and a sense of peace to any space.', requirements: [], tasks: [], tags: [] },
  { name: 'Bird of Paradise', id: 22, image: birdOfParadise, skill: ['Advanced'], location: ['Home', 'Living Room'], flowering: ['Yes'], size: ['Tall'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'], shortDescription: 'Large, exotic flowers resemble a bird in flight.', waterSchedule: 'Weekly, allowing soil to dry slightly between waterings.', tempLight: 'Bright, indirect light. 20-30°C.', description: 'The Bird of Paradise plant is named for its spectacular flowers, which resemble the bright plumage of a bird in flight. While it’s grown for its foliage indoors since flowering is rare without ample sunlight, its large, broad leaves provide a tropical feel. It requires bright, indirect light and regular watering during the growing season. This plant can make a bold statement in any room with its height and striking leaves.', requirements: [], tasks: [], tags: [] },
  { name: 'African Violet', id: 23, image: africanViolet, skill: ['Medium'], location: ['Home', 'Bedroom', 'Living Room'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['A lot'], interest: ['Kind of', 'Very'], lowEffort: ['Yes'], shortDescription: 'Small, delicate flowers; prefers consistent conditions.', waterSchedule: 'Keep soil lightly moist, use room-temperature water.', tempLight: 'Bright, indirect light. 18-24°C.', description: 'African Violets are cherished for their vibrant flowers and fuzzy leaves, thriving in warm conditions and indirect light. They prefer consistently moist soil and high humidity, making them ideal for kitchen or bathroom settings. With proper care, African Violets can bloom several times a year, offering a splash of color. They’re small enough to fit on a windowsill, making them perfect for adding a pop of color to small spaces.', requirements: [], tasks: [], tags: [] },
  { name: 'Bromeliad', id: 24, image: bromeliad, skill: ['Medium'], location: ['Home', 'Office', 'Bathroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Kind of'], lowEffort: ['Yes'], shortDescription: 'Colorful, long-lasting flowers and attractive foliage.', waterSchedule: 'Fill the central cup, let dry between waterings.', tempLight: 'Bright, indirect light. 18-27°C.', description: 'Bromeliads are exotic plants with striking foliage and vibrant flowers that can last for months. They are surprisingly easy to care for, thriving in indirect light and requiring minimal water, as they prefer to be watered in their central cup. Bromeliads are excellent for adding a tropical flair to your home, with their bright colors and unique appearance making them a focal point in any room.', requirements: [], tasks: [], tags: [] },
  { name: 'Chinese Money Plant', id: 25, image: chineseMoneyPlant, skill: ['Beginner'], location: ['Home', 'Office'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Round, flat leaves. Said to bring financial luck.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry out between waterings.', tempLight: 'Bright, indirect light. 16-24°C.', description: 'The Chinese Money Plant, with its round, flat leaves, is said to bring good fortune and financial prosperity to its owner. It prefers a bright spot with indirect light and requires watering only when the soil dries out. This plant is ideal for those who love modern and minimalist aesthetics, as its unique appearance adds a stylish touch to any interior design.', requirements: [], tasks: [], tags: [] },
  { name: 'Croton', id: 26, image: croton, skill: ['Advanced'], location: ['Home', 'Living Room', 'Outdoor'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'], shortDescription: 'Colorful foliage in red, orange, and yellow.', waterSchedule: 'Keep soil moist, more frequent watering in warmer months.', tempLight: 'Bright, indirect light. 16-27°C.', description: 'Crotons are known for their vibrant, multicolored foliage that can brighten any indoor space. They require a bit more care, thriving in a warm environment with high humidity and bright, indirect light. Consistent moisture and regular feeding will keep the leaves colorful and vibrant. Crotons are perfect for adding a splash of color to your home, with their leaves featuring shades of red, yellow, and green.', requirements: [], tasks: [], tags: [] },
  { name: 'Dieffenbachia', id: 27, image: dieffenbachia, skill: ['Medium'], location: ['Home', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Kind of'], lowEffort: ['Yes'], shortDescription: 'Large, variegated leaves, can grow tall.', waterSchedule: 'Every week, allow the topsoil to dry out between waterings.', tempLight: 'Low to bright, indirect light. 18-24°C.', description: 'Dieffenbachia, also known as Dumb Cane, features large, attractive leaves that are beautifully marked with patterns of green, white, and yellow. It prefers moderate to bright, indirect sunlight and evenly moist soil. Care should be taken with its sap, which can be irritating to skin and toxic if ingested. Dieffenbachia is a great choice for adding a tropical vibe and a touch of greenery to any room.', requirements: [], tasks: [], tags: [] },
  { name: 'Dracaena', id: 28, image: dracaena, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Long, strappy leaves, often with red or yellow edges.', waterSchedule: 'Every 2-3 weeks, allow soil to dry between waterings.', tempLight: 'Bright, indirect light. 16-24°C.', description: 'Dracaena plants are popular for their variety of sizes and leaf colors, ranging from green to variegated with white, yellow, or red. They are easy to care for, tolerating a range of light conditions and requiring water only when the soil begins to dry. Dracaenas are effective at purifying the air, making them not only a decorative but also a healthy addition to indoor spaces.', requirements: [], tasks: [], tags: [] },
  { name: 'Ficus', id: 29, image: ficus, skill: ['Medium', 'Advanced'], location: ['Home', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['No'], shortDescription: 'Includes the rubber plant and fiddle leaf fig, among others.', waterSchedule: 'When topsoil is dry, about every 1-2 weeks.', tempLight: 'Bright, indirect light. 15-24°C.', description: 'Ficus plants, including the well-known Fiddle Leaf Fig and Rubber Tree, are beloved for their attractive foliage and growth habit. They prefer bright, indirect light and need to be watered when the soil dries out. Ficus plants can be a bit finicky about their care, but with the right conditions, they make stunning indoor trees that can bring a touch of the outdoors into your home.', requirements: [], tasks: [], tags: [] },
  { name: 'Hoya', id: 30, image: hoya, skill: ['Medium'], location: ['Home', 'Bedroom'], flowering: ['Yes'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Waxy leaves and fragrant flowers, climbs or trails.', waterSchedule: 'Every 2-3 weeks, less often in winter.', tempLight: 'Bright, indirect light. 16-29°C.', description: 'Hoya, known as the wax plant, is a stunning trailing plant with thick, waxy leaves and star-shaped flowers. Hoyas are easy to care for, preferring bright, indirect light and dry conditions between waterings. They are perfect for hanging baskets or as a climbing plant on trellises, adding a beautiful and exotic touch to any indoor space.', requirements: [], tasks: [], tags: [] },
  { name: 'Kentia Palm', id: 31, image: kentiaPalm, skill: ['Beginner', 'Medium'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much', 'A lot'], interest: ['Kind of'], lowEffort: ['Yes'], shortDescription: 'Elegant palm, tolerant of low-light conditions.', waterSchedule: 'Keep soil lightly moist, less water in winter.', tempLight: 'Low to bright, indirect light. 16-27°C.', description: 'Kentia Palm is an elegant palm that can bring a touch of the tropics to any indoor setting. It’s one of the best palms for low light conditions, making it ideal for rooms without direct sunlight. Regular watering and misting will keep it thriving. The Kentia Palm is known for its air-purifying qualities and its ability to add a sophisticated look to any décor.', requirements: [], tasks: [], tags: [] },
  { name: 'Nerve Plant', id: 32, image: nervePlant, skill: ['Medium'], location: ['Home', 'Office', 'Bathroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Medium'], interest: ['Very'], lowEffort: ['Yes'], shortDescription: 'Striking leaves with contrasting veins, loves humidity.', waterSchedule: 'Keep soil consistently moist.', tempLight: 'Medium to bright, indirect light. 18-27°C.', description: 'The Nerve Plant, or Fittonia, is admired for its striking leaf patterns with contrasting veins. It thrives in humid environments and prefers indirect light, making it an excellent choice for terrariums or as a bathroom plant. Regular watering to keep the soil moist and providing high humidity will mimic its native tropical habitat, ensuring this plant remains vibrant and healthy.', requirements: [], tasks: [], tags: [] },
  { name: 'Parlor Palm', id: 33, image: parlorPalm, skill: ['Beginner'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Short', 'Tall'], transferToOutdoors: ['Yes'], time: ['Not much'], interest: ['Not really'], lowEffort: ['Yes'], shortDescription: 'Dense, green foliage; ideal for low-light conditions.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry slightly between waterings.', tempLight: 'Low to bright, indirect light. 18-27°C.', description: 'The Parlor Palm is a classic houseplant, popular since Victorian times for its ability to adapt to the low-light conditions of indoor environments. It’s a slow grower that can eventually reach up to 4 feet tall indoors. This palm prefers its soil to be kept evenly moist and benefits from regular misting. It’s perfect for adding a touch of refined greenery to any space.', requirements: [], tasks: [], tags: [] },
  { name: 'Peperomia', id: 34, image: peperomia, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Bedroom'], flowering: ['No'], size: ['Short'], transferToOutdoors: ['No'], time: ['Not much'], interest: ['Kind of'], lowEffort: ['Yes'], shortDescription: 'Varied and interesting leaf shapes and textures.', waterSchedule: 'Let the soil dry out between waterings, about every 2 weeks.', tempLight: 'Medium to bright, indirect light. 18-24°C.', description: 'Peperomia plants are diverse in leaf shape, color, and texture, making them highly collectible. They are easy to care for, requiring moderate to bright indirect light and infrequent watering, allowing the soil to dry out slightly between waterings. Peperomias are compact and versatile, ideal for small spaces like offices or shelves, where their unique appearance can be fully appreciated.', requirements: [], tasks: [], tags: [] },
  { name: 'Schefflera', id: 35, image: schefflera, skill: ['Medium'], location: ['Home', 'Living Room', 'Office'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['A lot'], interest: ['Very'], lowEffort: ['No'], shortDescription: 'Umbrella-shaped leaf clusters, grows tall indoors.', waterSchedule: 'Keep soil moist, less watering in winter.', tempLight: 'Bright, indirect light. 15-24°C.', description: 'The Schefflera, or Umbrella Tree, is known for its glossy, palmate leaves that radiate from a central point, resembling an umbrella. It’s a fast grower and can reach impressive sizes indoors with the right care. Preferring bright, indirect light and occasional watering, it’s relatively easy to maintain. Scheffleras are great for adding height and a lush, tropical feel to any interior.', requirements: [], tasks: [], tags: [] },
  { name: 'Swiss Cheese Plant', id: 36, image: swissCheesePlant, skill: ['Beginner', 'Medium'], location: ['Home', 'Office', 'Living Room'], flowering: ['No'], size: ['Tall'], transferToOutdoors: ['Yes'], time: ['Not much','A lot'], interest: ['Not really', 'Kind of'], lowEffort: ['Yes'], shortDescription: 'Iconic split leaves, grows quickly with enough light.', waterSchedule: 'Every 1-2 weeks, allowing soil to dry out between waterings.', tempLight: 'Bright to medium indirect light. 18-27°C.', description: 'The Swiss Cheese Plant, or Monstera deliciosa, is beloved for its unique, perforated leaves that develop as the plant ages. It’s a vigorous grower that can bring a dramatic tropical flair to your living space. Monsteras do well in bright, indirect light and require watering when the top inch of soil feels dry. This plant is a statement piece, perfect for anyone looking to add a bold, green presence to their home.', requirements: [], tasks: [], tags: [] }
];

// Questions for the plant quiz.
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