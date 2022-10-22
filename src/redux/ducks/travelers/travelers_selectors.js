export const adultsSelector = (state) => state.travelers.Adults
export const childrenSelector = (state) => state.travelers.ChildrenAge
export const roomsSelector = (state) => state.travelers.Rooms
export const fullInfoSelector = (state) => {
  return {
    Adults: state.travelers.Adults,
    ChildrenAge: state.travelers.ChildrenAge,
    Rooms: state.travelers.Rooms,
  }
}
