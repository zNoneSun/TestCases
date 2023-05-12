const initState = {
  menuList: [
    {
      label: "菜单一",
      key: "1",
      children: [
        {
          label: "子菜单1-1",
          key: "1-1",
        },
        {
          label: "子菜单1-2",
          key: "1-2",
        },
      ],
    },
    {
      label: "菜单二",
      key: "2",
      children: [
        {
          label: "子菜单2-1",
          key: "2-1",
        },
        {
          label: "子菜单2-2",
          key: "2-2",
        },
      ],
    },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "changeName":
      if (action.value) {
        const list = state.menuList;
        for (let i = 0; i < list.length; i++) {
          for (let j = 0; j < list[i].children.length; j++) {
            if (list[i].children[j].key === action.key) {
              list[i].children[j].label = action.value;
            }
          }
        }
        return {
          ...state,
          menuList: JSON.parse(JSON.stringify(list)),
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default reducer;
