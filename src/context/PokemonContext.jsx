import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import pokemonList from "../data/MockData";
import "react-toastify/dist/ReactToastify.css";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  // 포켓몬 리스트를 로컬스토리지에 파싱
  const [myPokemon, setMyPokemon] = useState(
    JSON.parse(localStorage.getItem("myPokemon")) || []
  );

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
  }, [myPokemon]);

  // 포켓몬리스트 -> 대쉬보드 포켓몬 추가
  const addMyPokemon = (pokemonId) => {
    // 추가를 누르면 포켓몬 리스트에서 값 가져오기
    const newPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId);

    // 중복 포켓몬이 있는지 확인하기
    const alreadyExists = myPokemon.some((pokemon) => pokemon.id === pokemonId);

    // 예외처리 2종

    // 만약 같은 포켓몬을 중복선택 했을 경우 알림
    if (alreadyExists) {
      toast.warn("같은 포켓몬은 한마리만 데리고 갈 수 있습니다.");
      return;
    }

    // 만약 7마리 이상의 포켓몬을 선택하려는 경우 알림
    if (myPokemon.length === 6) {
      toast.warn("6마리 이상 데리고 갈 수 없습니다.");
      return;
    }

    // 위 상황에 해당하지 않을 경우 포켓몬 추가
    setMyPokemon((prev) => {
      return [...prev, newPokemon];
    });
    toast.success(`${newPokemon.korean_name} (이)가 신나게 따라나섭니다!`);
  };

  // 대쉬보드에서 포켓몬을 삭제하는 로직
  const removeMyPokemon = (pokemonId) => {
    setMyPokemon((prev) => {
      const resetPokemon = prev.filter((pokemon) => pokemon.id !== pokemonId);
      return resetPokemon;
    });
    toast.info("포켓몬을 야생에 놓아주었습니다.");
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonList, myPokemon, addMyPokemon, removeMyPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
