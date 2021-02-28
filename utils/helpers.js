export const numberOfCardsWithLabelText = (length) => {
  if (length === 0) return `No cards`
  else if (length === 1) return `1 card`
  else return `${length} cards`
}
