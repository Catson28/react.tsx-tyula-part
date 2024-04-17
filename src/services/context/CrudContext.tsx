import React, { createContext, useContext, useReducer, ReactNode, useEffect, useState } from 'react';

// Defina os tipos de estado e ações
type Item = {
  id: string;
  name: string;
};

type State = {
  items: Item[];
};

type Action =
  | { type: 'CREATE_ITEM'; payload: Item }
  | { type: 'UPDATE_ITEM'; payload: { id: string; name: string } }
  | { type: 'DELETE_ITEM'; payload: string }
  | { type: 'LIST_ITEMS'; payload: Item[] };

// Defina o estado inicial
const initialState: State = {
  items: [],
};

// Implemente o reducer para gerenciar as ações
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, name: action.payload.name } : item
        ),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'LIST_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

// Crie o contexto
const CrudContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Crie o provedor de contexto
export const CrudProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Simulando a carga inicial de itens
    const items: Item[] = [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '3', name: 'Item 3' },
    ];
    dispatch({ type: 'LIST_ITEMS', payload: items });
  }, []);

  return <CrudContext.Provider value={{ state, dispatch }}>{children}</CrudContext.Provider>;
};

// Crie um hook personalizado para usar o contexto
export const useCrud = () => useContext(CrudContext);

export default CrudContext; // Adicione esta linha para exportar o contexto por padrão
