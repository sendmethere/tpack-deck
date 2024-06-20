import { create } from 'zustand';
import Cards from '../data/Cards';

const useStore = create(set => ({
  cards: Cards,
  updateCardItem: (id, newItem) => set(state => ({
    cards: state.cards.map(card =>
      card.id === id ? { ...card, item: newItem } : card
    )
  })),

  currentSelectedCard: {
    technology: 1,
    pedagogy: 101,
    content: 204
  },
  updateSelectedCard: (type, newId) => set(state => ({
    currentSelectedCard: { ...state.currentSelectedCard, [type]: newId }
  }))

}));

export default useStore;
