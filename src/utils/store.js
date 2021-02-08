const cards = [
  {
    id: 'card-1',
    title: 'Re-designed the zero-g doggie bags. No more spills!',
  },
  {
    id: 'card-2',
    title: 'Travel & Relocation Support',
  },
  {
    id: 'card-3',
    title: 'Test nya Arifin semoga lolos, aamiin',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Q1 2021',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Q2 2021',
      cards: [],
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;
