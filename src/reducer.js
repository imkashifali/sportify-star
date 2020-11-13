export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //  token:
  //    " BQCc7-6X8CPSxbnuYODIcZPe-8_2UjqLvmaOMRa9CTiplA8wS5EjqjdpKpRmi65HcECVZ_4MU-4xnExZjNlJGzQfspUJK_QIYrR5GlpYraZKYFnZiPQID860LoUx7kXku776wbAU30-lvNDdYZi9TZCzf5AeuYL3dQCSIjpDAPqjyf6u",
};

const reducer = (state, action) => {
  console.log(action);
  //Action -> type [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly:action.discover_weekly
        }
    default:
      return state;
  }
};

export default reducer;
