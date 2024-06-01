import Classroom from './0-classroom';

export default function initializeRooms() {
  const nineteen = new Classroom(19);
  const twenty = new Classroom(20);
  const thirty = new Classroom(34);
  return [nineteen, twenty, thirty];
}
