import {cencle_icon, checked_icon, doller_icon} from '../assets/icons';
import {images} from '../constant';

export const nearest_restaurant = [
  {
    id: 1,
    name: 'Vegan Resto',
    image: images.restaurant_image1,
    mins: '12 Mins',
  },
  {
    id: 2,
    name: 'Healthy Food',
    image: images.restaurant_image2,
    mins: '12 Mins',
  },
  {
    id: 3,
    name: 'Good Food',
    image: images.restaurant_image3,
    mins: '12 Mins',
  },
  {
    id: 4,
    name: 'Smart Resto',
    image: images.restaurant_image4,
    mins: '12 Mins',
  },
  {
    id: 5,
    name: 'Vegan Resto',
    image: images.restaurant_image5,
    mins: '12 Mins',
  },
  {
    id: 6,
    name: 'Healthy Food',
    image: images.restaurant_image6,
    mins: '12 Mins',
  },
];

export const popular_menu = [
  {
    id: 1,
    name: 'Herbal Pancake',
    image: images.popular_food1,
    restaurant_name: 'Warung Herbal',
    price: '$7',
  },
  {
    id: 2,
    name: 'Fruit Salad',
    image: images.popular_food2,
    restaurant_name: 'Wijie Resto',
    price: '$5',
  },
  {
    id: 3,
    name: 'Green Noddle',
    image: images.popular_food3,
    restaurant_name: 'Noodle Home',
    price: '$15',
  },
];

export const chat = [
  {
    id: 1,
    name: 'Anamwp',
    image: images.person_1,
    massage: 'Your Order Just Arrived!',
    time: '20:00',
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    image: images.person_2,
    massage: 'Your Order Just Arrived!',
    time: '20:00',
  },
  {
    id: 3,
    name: 'Leslie Alexander',
    image: images.person_3,
    massage: 'Your Order Just Arrived!',
    time: '20:00',
  },
];

export const notifications = [
  {
    id: 1,
    icon: checked_icon,
    massage: 'Your order has been taken by the driver',
    time: 'Recently',
  },
  {
    id: 2,
    icon: doller_icon,
    massage: 'Topup for $100 was successful',
    time: 'Recently',
  },
  {
    id: 3,
    icon: cencle_icon,
    massage: 'Your Order has been cenceled',
    time: 'Recently',
  },
];
